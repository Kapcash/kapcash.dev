// Authentication

export interface SpotifyResponse {
  access_token: string,
  token_type: 'bearer',
  expires_id: number
}

// Playlist

export interface Videothumbnail {
  url?: any;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Externalurls {
  spotify: string;
}

export interface Externalids {
  isrc: string;
}

export interface Artist {
  external_urls: Externalurls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Addedby {
  external_urls: Externalurls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

export interface Album {
  album_type: string;
  artists: Artist[];
  external_urls: Externalurls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Track {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  episode: boolean;
  explicit: boolean;
  external_ids: Externalids;
  external_urls: Externalurls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track: boolean;
  track_number: number;
  type: string;
  uri: string;
}

export interface Item {
  added_at: string;
  added_by: Addedby;
  is_local: boolean;
  primary_color?: any;
  track: Track;
  video_thumbnail: Videothumbnail;
}

export interface SpotifyPlaylist {
  href: string;
  items: Item[];
  limit: number;
  next?: any;
  offset: number;
  previous?: any;
  total: number;
}
