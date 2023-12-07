<template>
  <main class="main" data-barba="container">
    <div class="main-content">

      <ToolBar />
      
      <div>
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<script setup>
  import ToolBar from '@/components/ToolBar.vue';
</script>

<style lang="scss" scoped>
  .main {
    position: relative;

    &-content {
      z-index: 100;
    }
  }
</style>