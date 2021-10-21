import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import { YouTubePlaylist, YouTubeVideo, YouTubeVideoThumbnail } from 'lib/types';

import googleAuth from 'lib/google';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const auth = await googleAuth.getClient();
  const youtube = google.youtube({
    auth,
    version: 'v3'
  });

  const response = await youtube.playlistItems.list({
    playlistId: 'PLeEX4sJL6yWxWPuKUS9gEl5RAqkX6e-kS',
    part: 'contentDetails, snippet'
  })

  const items = response.data.items;

  let youTubePlaylist: YouTubePlaylist = [];

  for (var i = 0; i < items.length; ++i) {
    const videoId: string = items[i].contentDetails.videoId;
    const title: string = items[i].snippet.title;
    const videoOwnerChannelTitle: string = items[i].snippet.videoOwnerChannelTitle;
    const thumbnail: YouTubeVideoThumbnail = {
      url:items[i].snippet.thumbnails.medium.url,
      width:items[i].snippet.thumbnails.medium.width,
      height:items[i].snippet.thumbnails.medium.height,
    };
    const position: number = items[i].snippet.position;
    const youtubeVideo: YouTubeVideo = {videoId, title, videoOwnerChannelTitle, thumbnail, position}
    youTubePlaylist.push(youtubeVideo)
  };

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json(
    youTubePlaylist
  );
}
