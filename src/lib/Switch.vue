<template>
  <div>
    <button>
      <span></span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h*2;
  border-radius: $h/2;
  border: none;
  background: deepskyblue;
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
}

button:hover > span {
  //left: 24px;
  left: calc(100% - #{$h2} - 2px);
}

</style>