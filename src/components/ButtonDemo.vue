<template>
  <div>
    <div>Button 示例</div>
    <h1>示例1</h1>
    <div>
      <Button >你好哦</Button>
      <Button theme="button">你好哦</Button>
      <Button theme="link">你好哦</Button>
      <Button theme="text">你好哦</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('你好');
    };
    return {onClick};
  }
};
</script>

<style lang="scss" scoped>

</style>