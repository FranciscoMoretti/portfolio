import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { YouTubePlaylist} from 'lib/types';
import VideoCardFull from 'components/VideoCardFull';

function RenderPlaylist({data, postOfVideoId}): JSX.Element{
  return <>{
    data.map( youTubeVideo => {
    const videoLink = 'https://www.youtube.com/watch?v=' + youTubeVideo.videoId
    const notesAreAvailable = youTubeVideo.videoId in postOfVideoId
    let href = notesAreAvailable ?
      'talk/'+ youTubeVideo.videoId :
      videoLink

    return (
      <VideoCardFull
        key={youTubeVideo.position}
        title={youTubeVideo.title}
        href={href}
        channel={youTubeVideo.videoOwnerChannelTitle}
        index={youTubeVideo.position}
        thumbnail={youTubeVideo.thumbnail}
        notesAreAvailable={notesAreAvailable}
      />
      )
    })
  }</>
}

function RenderPlaylistIfReady({data, postOfVideoId}){
  if (!data){
    return (
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Loading playlist...
      </p>
    )
  }

  return (
    <RenderPlaylist data={data} postOfVideoId={postOfVideoId}/>
  )
}

export default function YouTubePlaylistFull({ posts }) {
  const { data } = useSWR<YouTubePlaylist>('/api/youtube', fetcher);

  // The post slug, which is also the document stem, is the YouTube videoId.
  let postOfVideoId = posts.reduce((a,x) => ({...a, [x.slug]: x}), {})

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
      <RenderPlaylistIfReady data={data} postOfVideoId={postOfVideoId}/>
    </div>
  );
}
