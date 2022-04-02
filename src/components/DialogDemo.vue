<template>
  <div>
    <h1>Dialog 示例</h1>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog
        v-model:visible="x"
        :closeOnClickOverlay="false"
        :ok="f1"
        :cancel="f2"
    >
      <div>你好</div>
      <div>hi</div>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Dialog, Button},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
    };
    const f2 = () => {

    };
    return {x, toggle, f1, f2};
  }
};
</script>

<style lang="scss" scoped>

</style>