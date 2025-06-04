<script setup lang="ts">
import { useToast } from '../../composables/useToast';
import Toast from './AToast.vue';

const { toasts, remove } = useToast();
</script>

<template>
  <div
    class="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:right-0 sm:top-auto sm:bottom-0 sm:flex-col md:max-w-[420px]"
  >
    <TransitionGroup name="toast">
      <Toast
        v-for="toast in toasts"
        :key="toast.id"
        :toast="toast"
        @close="remove(toast.id)"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.2s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
