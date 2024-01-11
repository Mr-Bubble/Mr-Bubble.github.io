<script setup>
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";

const onClickRight = () => {
  useToggleDarkMode();
};

const onClickLeft = () => history.back();
</script>

<template>
  <van-nav-bar
    :title="$route.meta.title"
    :left-arrow="!$route.meta.not_back"
    fixed
    placeholder
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #right>
      <svg-icon class="text-[18px]" :name="useDarkMode() ? 'light' : 'dark'" />
    </template>
  </van-nav-bar>
</template>

<style scoped></style>
