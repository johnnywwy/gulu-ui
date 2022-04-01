<template>
  <div>
    <button @click="toggle" :class="{checked:value}">
      <span></span>
    </button>
    <div>{{ value }}</div>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
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
  background: #bfbfbf;
  position: relative;

  > span {
    position: absolute;
    background: white;
    width: $h2;
    height: $h2;
    top: 2px;
    left: 2px;
    border-radius: $h2/2;
    transition: all 250ms;
  }

  &.checked {
    background: #1890ff;

    > span {
      //left: 24px;
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &n:active {
    > span {
      width: $h2 + 2px;
    }
  }

  &.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}


</style>