<template>
  <div :class="mergedClasses">
    <p>This component demonstrates the useClasses composable</p>
    <button :class="buttonClasses">Test Button</button>
  </div>
</template>

<script setup lang="ts">
import { useClasses } from '../../composables/useClasses';

const { merge } = useClasses();

const mergedClasses = merge('p-4 border rounded', {
  'bg-blue-100': true,
  'bg-red-100': false,
  'text-blue-900': true,
});

const buttonClasses = merge('px-4 py-2 rounded', [
  'bg-blue-500',
  'text-white',
  'hover:bg-blue-600',
]);
</script>