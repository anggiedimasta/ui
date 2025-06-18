<script setup lang="ts">
import { buttonCva } from './button'
import type { ButtonProps } from './button'

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  class: '',
  variant: 'default',
  size: 'default',
})

const classes = buttonCva({
  variant: props.variant,
  size: props.size,
  class: props.class
})
</script>

<template>
  <component
    :is="as"
    :class="classes"
  >
    <slot />
  </component>
</template>