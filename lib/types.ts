export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export type FormState = {
  state: Form;
  message?: string;
};

export type Subscribers = {
  count: number;
};

export type Views = {
  total: number;
};

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export type TopTracks = {
  tracks: Song[];
};


export type YouTubeVideo = {
  videoId: string;
  title: string;
  videoOwnerChannelTitle: string;
  thumbnailUrl: string;
  position: number;
};

export type YouTubePlaylist = YouTubeVideo[];

export type GitHub = {
  stars: number;
};

export type Gumroad = {
  sales: number;
};

export type Unsplash = {
  downloads: number;
  views: number;
};
