<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>咕噜 UI</h1>
        <h2>一个还不错的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com">Github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-light"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
    </div>

  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav}
};

</script>

<style lang="scss" scoped>
$border-radius: 24px;

.topnavAndBanner {
  background: rgb(241, 228, 224);
  background: linear-gradient(180deg, rgba(241, 228, 224, 1) 0%, rgba(241, 228, 224, 1) 100%);
  clip-path: ellipse(90% 60% at 50% 40%);
}

.topnav {
  //border: 1px solid red;
  //background: pink;
  display: flex;
  padding: 16px;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
}

.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //background: lightgreen;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fff;
      color: #000;
      display: inline-block;
      border-radius: $border-radius;
      padding: 8px 24px;

      &:hover {
        text-decoration: none;
      }
    }
  }

}

</style>
