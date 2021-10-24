import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { YouTubePlaylist} from 'lib/types';
import VideoCardCompact from '../components/VideoCardCompact';

function RenderPlaylist({data, maxItems}): JSX.Element{
  return <>{
    data.slice(0, Number(maxItems)).map( youTubeVideo => (
      <VideoCardCompact
        key={youTubeVideo.position}
        title={youTubeVideo.title}
        href={'https://www.youtube.com/watch?v='+ youTubeVideo.videoId}
        channel={youTubeVideo.videoOwnerChannelTitle}
        index={youTubeVideo.position + 1} // Start from index 1
      />
    )
    )
  }</>
}

function RenderPlaylistIfReady({data, maxItems}){
  if (!data){
    return (
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Loading playlist...
      </p>
    )
  }

  return (
    <RenderPlaylist data={data} maxItems={maxItems}/>
  )
}

export default function YouTubePlaylistCompact({ maxItems }) {
  const { data } = useSWR<YouTubePlaylist>('/api/youtube', fetcher);

  return (
    <div>
      <RenderPlaylistIfReady data={data} maxItems={maxItems}/>
    </div>
  );
}
