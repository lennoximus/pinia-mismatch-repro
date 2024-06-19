import { defineNuxtPlugin } from '#app';
import {useAuthStore, usePinia} from '#imports'

export default defineNuxtPlugin({
  name: 'InitServerPlugin',
  async setup() {
    const { onServerInit } = useAuthStore(usePinia());

    await onServerInit();
  },
});
