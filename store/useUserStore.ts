import {
  ref,
  readonly,
  acceptHMRUpdate,
  defineStore,
} from '#imports';

type User = {
  name: string;
}

const useUserStore = defineStore('user', () => {
  const user = ref<User | null>({
    name: 'Initial user'
  });

  function setUser(value: User) {
    user.value = value;
  }

  return {
    setUser,
    user: readonly(user),
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

export default useUserStore;
