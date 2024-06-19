<script lang="ts" setup>
import {ref, storeToRefs, useCloneDeep, useUserStore} from '#imports'

const { user: userFromStore } = storeToRefs(useUserStore());
const user = ref(useCloneDeep(userFromStore.value));
</script>

<template>
  <div>
    <ul>
      <li>
        <p>
          userFromStore
        </p>

        <pre>
          {{ userFromStore }}
        </pre>
      </li>

      <li>
        <p>
          user
        </p>

        <pre>
          {{ user }}
        </pre>
      </li>
    </ul>
  </div>
</template>
