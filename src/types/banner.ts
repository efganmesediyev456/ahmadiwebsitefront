export interface BannerDataContent {
  title: string;
  subtitle: string;
}

export interface BannerData {
  data?: BannerDataContent;
}

export interface BannerState {
  data: BannerData | null;
  loading: boolean;
  error: string | null;
}