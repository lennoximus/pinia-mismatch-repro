import {acceptHMRUpdate, computed, defineStore, ref, useUserStore} from '#imports'

const useAuthStore = defineStore('auth', () => {
  const { setUser } = useUserStore();
  const token = ref('');
  const isLoggedIn = computed(() => Boolean(token.value));

  function setToken(value: string) {
    token.value = value;
  }

  async function fetchUser() {
    setUser({
      name: 'Fetched user'
    });
  }

  async function loginWithToken(token: string) {
    setToken(token);
    await fetchUser();
  }

  async function onServerInit() {
    await loginWithToken('Some token of mine.');
  }

  return {
    isLoggedIn,
    onServerInit,
    loginWithToken,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}

export default useAuthStore;
