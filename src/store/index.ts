import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
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

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(portfolioApi.middleware)
      .concat(companyAboutApi.middleware)
      .concat(workFlowApi.middleware)
      .concat(partnerApi.middleware)
      .concat(settingsApi.middleware)
      .concat(translationsApi.middleware)
      .concat(companyAboutPageApi.middleware)
      .concat(companyTeamAboutApi.middleware)
      .concat(teamsApi.middleware)
      .concat(managementsApi.middleware)
      .concat(ourStudioGalleryApi.middleware)
      .concat(companyAndDesignApi.middleware)
      .concat(mobilProgramApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
