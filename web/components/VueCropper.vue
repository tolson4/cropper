<template>
  <div style="width: 100%; min-height:200px">
    <Cropper
      v-bind="{...$attrs}"
      :src="image"
      :style="cropperStyle"
      :stencil-component="Stencil"
      :stencil-props="{aspectRatio}"
      :canvas="{maxWidth: 400, maxHeight: 400}"
      @change="setImage" />
  </div>
</template>

<script>
export default {name: 'VueCropper'};
</script>

<script setup>
import {computed, defineProps, ref} from 'vue';
import {Cropper} from 'vue-advanced-cropper';
import Stencil from './Stencil';
import 'vue-advanced-cropper/dist/style.css';

// Props
const props = defineProps({
  image: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '375px'
  }
});

// Refs
const aspectRatio = ref(1);

// Computed
const cropperStyle = computed(() => {
  return `width: ${props.width}`;
});
</script>
