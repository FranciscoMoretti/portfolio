import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { YouTubePlaylist} from 'lib/types';
import VideoCardFull from 'components/VideoCardFull';

export default function YouTubePlaylistFull() {
  const { data } = useSWR<YouTubePlaylist>('/api/youtube', fetcher);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
      {!data && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Loading playlist...
        </p>
      )}
      {data && data.map( youTubeVideo => (
        <VideoCardFull
          key={youTubeVideo.position}
          title={youTubeVideo.title}
          href={'https://www.youtube.com/watch?v='+ youTubeVideo.videoId}
          channel={youTubeVideo.videoOwnerChannelTitle}
          index={youTubeVideo.position}
          thumbnail={youTubeVideo.thumbnail}
        />
      )
      )}
    </div>
  );
}
