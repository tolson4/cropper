<template>
  <div
    class="circle-stencil"
    :style="style">
    <DraggableElement
      class="circle-stencil__handler"
      @drag="onResize"
      @drag-end="onResizeEnd">
      <q-icon
        size="20px"
        color="white"
        name="fas fa-expand-alt" />
    </DraggableElement>
    <DraggableArea
      @move="onMove"
      @move-end="onMoveEnd">
      <stencil-preview
        class="circle-stencil__preview"
        :image="image"
        :coordinates="coordinates"
        :transitions="transitions"
        :width="stencilCoordinates.width"
        :height="stencilCoordinates.height" />
    </DraggableArea>
  </div>
</template>

<script>
export default {name: 'CustomStencil'};
</script>

<script setup>
import {computed, defineEmits, defineProps} from 'vue';
import {
  DraggableArea,
  DraggableElement,
  ResizeEvent,
  StencilPreview
} from 'vue-advanced-cropper';

// Props
const props = defineProps({
  image: {
    type: Object,
    default: () => {}
  },
  coordinates: {
    type: Object,
    default: () => {}
  },
  transitions: {
    type: Object,
    default: () => {}
  },
  stencilCoordinates: {
    type: Object,
    default: () => {}
  }
});

// Emits
const emit = defineEmits([
  'move', 'move-end', 'resize', 'resize-end'
]);

// Computed
const style = computed(() => {
  const {height, width, left, top} = props.stencilCoordinates;
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    transform: `translate(${left}px, ${top}px)`
  };

  if(props.transitions && props.transitions.enabled) {
    const {time, timingFunction} = props.transitions;
    style.transition = `${time}ms ${timingFunction}`;
  }
  return style;
});

// Helper functions
function onMove(moveEvent) {
  emit('move', moveEvent);
}

function onMoveEnd() {
  emit('move-end');
}

function onResize(dragEvent) {
  const shift = dragEvent.shift();
  const widthResize = shift.left;
  const heightResize = -shift.top;
  emit(
    'resize',
    new ResizeEvent(
      {
        left: widthResize,
        right: widthResize,
        top: heightResize,
        bottom: heightResize
      },
      {compensate: true}
    )
  );
}

function onResizeEnd() {
  emit('resize-end');
}
</script>

<style lang="scss">
.circle-stencil {
  cursor: move;
  position: absolute;
  border-radius: 50%;
  box-sizing: border-box;
  border: dashed 2px white;
  &__handler {
    position: absolute;
    top: 14%;
    right: 15%;
    z-index: 1;
    width: 30px;
    height: 30px;
    display: flex;
    cursor: ne-resize;
    align-items: center;
    justify-content: center;
    transform: translate(50%, -50%);
  }
  &__preview {
    overflow: hidden;
    border-radius: 50%;
  }
}
</style>
