<template>
  <div>
    <button @click="toggle" :class="{checked}">
      <span></span>
    </button>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return {checked, toggle};
  }
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h*2;
  border-radius: $h/2;
  border: none;
  background: grey;
  position: relative;
}

span {
  position: absolute;
  background: white;
  width: $h2;
  height: $h2;
  top: 2px;
  left: 2px;
  border-radius: $h2/2;
  transition: left 250ms;
}

button.checked {
  background: deepskyblue;
}

button.checked > span {
  //left: 24px;
  left: calc(100% - #{$h2} - 2px);
}

</style>