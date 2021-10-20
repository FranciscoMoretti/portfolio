import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { YouTubePlaylist} from 'lib/types';
import VideoCardCompact from '../components/VideoCardCompact';

export default function YouTubePlaylistCompact({ maxItems }) {
  const { data } = useSWR<YouTubePlaylist>('/api/youtube', fetcher);

  return (
    <div>
      {!data && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          No videos found.
        </p>
      )}
      {data && data.slice(0, Number(maxItems)).map( youTubeVideo => (
        <VideoCardCompact
          key={youTubeVideo.position}
          title={youTubeVideo.title}
          href={'https://www.youtube.com/watch?v='+ youTubeVideo.videoId}
          channel={youTubeVideo.videoOwnerChannelTitle}
          index={youTubeVideo.position}
        />
      )
      )}
    </div>
  );
}
