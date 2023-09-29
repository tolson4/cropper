<template>
  <div
    class="fullscreen text-white
    text-center q-pa-md flex flex-center">
    <q-card>
      <q-card-section>
        <q-avatar
          class="shadow-5"
          size="300px">
          <q-img
            v-if="croppedImage"
            contain
            :src="croppedImage" />
          <q-icon
            name="fas fa-user"
            color="grey"
            class="q-mr-sm" />
        </q-avatar>
        <q-separator
          class="q-my-md"
          inset />
        <q-card-actions align="around">
          <q-btn
            color="indigo"
            @click="open">
            Select Image
          </q-btn>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
  <q-dialog
    v-model="show"
    persistent
    position="standard">
    <q-card>
      <q-card-section>
        <VueCropper
          :image="selectedImage"
          @change="setImage" />
      </q-card-section>
      <q-card-actions align="around">
        <q-btn
          v-close-popup
          flat
          label="Cancel"
          color="negative" />
        <q-btn
          v-close-popup
          label="Crop"
          color="indigo" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import {useFileDialog, useToggle} from '@vueuse/core';
import {ref} from 'vue';
import VueCropper from '@/components/VueCropper.vue';

const [show, toggle] = useToggle();
const {open, onChange} = useFileDialog();

const croppedImage = ref('');
const selectedImage = ref('');

onChange(files => {
  const file = files[0];
  const urlCreator = window.URL || window.webkitURL;
  const imageUrl = urlCreator.createObjectURL(file);
  selectedImage.value = imageUrl;
  toggle();
});

function setImage({canvas}) {
  const newImageUrl = canvas.toDataURL('image/jpeg');
  croppedImage.value = newImageUrl;
}

</script>

