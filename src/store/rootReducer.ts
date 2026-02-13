import { combineReducers } from '@reduxjs/toolkit';
import bannerReducer from '../features/banner/bannerSlice';
import bannerDetailReducer from '../features/banner/bannerDetailSlice';
import { portfolioApi } from "./services/portfolioApi";
import { mobilProgramApi } from "./services/mobilProgramApi";
import { companyAboutApi } from "./services/companyAboutApi";
import { workFlowApi } from "./services/workFlowApi";
import { partnerApi } from "./services/partnerApi";
import { settingsApi } from "./services/settingsApi";
import { translationsApi } from "./services/translationsApi";
import { companyAboutPageApi } from "./services/companyAboutPageApi";
import { companyTeamAboutApi } from "./services/companyTeamAboutApi";
import { teamsApi } from "./services/teamsApi";
import { managementsApi } from "./services/managementsApi";
import { ourStudioGalleryApi } from "./services/ourStudioGalleryApi";
import { companyAndDesignApi } from "./services/companyAndDesignApi";
import {uslugiItemApi} from "./services/uslugiItemApi.ts";
import {sourceOptionApi} from "./services/sourceOptionApi.ts";

const rootReducer = combineReducers({
  banner: bannerReducer,
  bannerDetail: bannerDetailReducer,
  [portfolioApi.reducerPath]: portfolioApi.reducer,
  [mobilProgramApi.reducerPath]: mobilProgramApi.reducer,
  [companyAboutApi.reducerPath]: companyAboutApi.reducer,
  [ourStudioGalleryApi.reducerPath]: ourStudioGalleryApi.reducer,
  [workFlowApi.reducerPath]: workFlowApi.reducer,
  [partnerApi.reducerPath]: partnerApi.reducer,
  [settingsApi.reducerPath]: settingsApi.reducer,
  [companyAboutPageApi.reducerPath]: companyAboutPageApi.reducer,
  [translationsApi.reducerPath]: translationsApi.reducer,
  [teamsApi.reducerPath]: teamsApi.reducer,
  [managementsApi.reducerPath]: managementsApi.reducer,
  [companyAndDesignApi.reducerPath]: companyAndDesignApi.reducer,
  [companyTeamAboutApi.reducerPath]: companyTeamAboutApi.reducer,
  [uslugiItemApi.reducerPath]: uslugiItemApi.reducer,
  [sourceOptionApi.reducerPath]: sourceOptionApi.reducer,
});

export default rootReducer;
