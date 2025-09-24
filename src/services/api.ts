import axios from 'axios';
import { BannerData } from '../types/banner';
import { BannerDetailData as BannerDetailData } from '../types/bannerDetail';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

export const bannerService = {
  async getBannerData(lang: string): Promise<BannerData> {
    try {
      const response = await axios.get<BannerData>(`${BASE_URL}/banner`,{
        headers: {
          'Accept-Language': lang
        }
      }
    );
      return response.data;
    } catch (error) {
      console.error('Banner fetch error:', error);
      throw error;
    }
  }
};


export const bannerDetailService = {
  async getBannerDetailData(lang: string): Promise<BannerDetailData> {
    try {
      const response = await axios.get<BannerDetailData>(`${BASE_URL}/banner-details`,{
        headers: {
          'Accept-Language': lang
        }
      }
    );
      return response.data;
    } catch (error) {
      console.error('Banner fetch error:', error);
      throw error;
    }
  }
};
