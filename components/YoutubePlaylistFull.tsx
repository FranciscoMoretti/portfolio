import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { YouTubePlaylist} from 'lib/types';
import VideoCardFull from 'components/VideoCardFull';

export default function YouTubePlaylistFull({ posts }) {
  const { data } = useSWR<YouTubePlaylist>('/api/youtube', fetcher);

  let post_of_slug = posts.reduce((a,x) => ({...a, [x.slug]: x}), {})

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
      {!data && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Loading playlist...
        </p>
      )}
      {data && data.map( youTubeVideo => {
        const videoLink = 'https://www.youtube.com/watch?v=' + youTubeVideo.videoId 
        let href = youTubeVideo.videoId in post_of_slug ?
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
          videoLink={videoLink}
        />
        )
    }
      )}
    </div>
  );
}
