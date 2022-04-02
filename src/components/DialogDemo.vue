<template>
  <div>
    <h1>Dialog 示例</h1>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog
        v-model:visible="x"
        :closeOnClickOverlay="false"
        :ok="f1"
        :cancel="f2">
      <template v-slot:content>
        <div>听我说谢谢你
          因为有你温暖了四季
          谢谢你感谢有你世界更美丽
          🌏🌏🌏我要谢谢你
          因为有你爱常在心底
          谢谢你 感谢有你‍♂‍♂‍♂把幸福传递~~
        </div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
    <h1>Dialog 示例</h1>
    <Button @click="showDialog">showDialog</Button>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {openDialog} from '../lib/openDialog';
import {ref} from 'vue';

export default {
  components: {Dialog, Button},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {};
    const f2 = () => {};
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '你好',
        ok() {
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        },
        closeOnClickOverlay: false
      });
    };
    return {x, toggle, f1, f2, showDialog};
  }
};
</script>

<style lang="scss" scoped>

</style>