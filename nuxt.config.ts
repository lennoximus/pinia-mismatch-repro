// https://nuxt.com/docs/api/configuration/nuxt-config
// import { pluginOas } from '@kubb/plugin-oas';
// import { pluginTs } from '@kubb/swagger-ts';

export default defineNuxtConfig({
  imports: {
    autoImport: false,
  },
  components: {
    dirs: [],
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-lodash',
  ],
  pinia: {
    storesDirs: ['./store/**'],
  },
});
