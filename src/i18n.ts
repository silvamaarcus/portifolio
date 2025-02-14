import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Carrega os arquivos JSON
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Integra com React
  .init({
    fallbackLng: 'en', // Idioma padrão caso não detecte outro
    supportedLngs: ['en', 'pt-BR'],
    debug: true, // Ajuda no desenvolvimento, mostrando logs
    interpolation: {
      escapeValue: false, // React já protege contra XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Caminho dos arquivos JSON
    },
    detection: {
      order: ['localStorage', 'navigator'], // Ordem de detecção do idioma
      caches: ['localStorage'], // Salva a escolha no localStorage
    }
  });

export default i18n;
