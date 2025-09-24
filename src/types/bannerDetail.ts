export interface BannerDetailDataContent {
  id:number;
  title: string;
  subtitle: string;
}

export interface BannerDetailData {
  data?: BannerDetailDataContent;
}

export interface BannerDetailState {
  data: BannerDetailData | null;
  loading: boolean;
  error: string | null;
}
