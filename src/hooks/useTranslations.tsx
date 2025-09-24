// hooks/useTranslations.ts
import { useGetTranslationsQuery } from "../store/services/translationsApi";
import { useParams } from "react-router-dom";

export const useTranslations = () => {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";

  // Query avtomatik çalışacaq, refetch lazım deyil
  const { data, isLoading, error } = useGetTranslationsQuery(currentLang);

  return {
    t: (key: string) => data?.[key] || key,
    isLoading,
    error,
  };
};
