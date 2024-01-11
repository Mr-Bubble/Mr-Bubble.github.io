<script setup name="home">
import { reactive } from "vue";

const contentList = reactive([
  {
    title: "工具",
    name: "",
    sub: [
      {
        icon: "chart-trending-o",
        path: "xmSports",
        title: "运动小助手",
        color: "blue light",
        display: true
      },
      {
        icon: "scan",
        path: "qrcode",
        title: "二维码生成",
        color: "mauve light",
        display: true
      },
      {
        icon: "tv-o",
        path: "video",
        title: "视频去水印",
        color: "pink light",
        display: true
      },
      {
        icon: "other-pay",
        path: "images",
        title: "图集去水印",
        color: "brown light",
        display: true
      }
    ]
  },
  {
    title: "光遇",
    name: "sky",
    sub: [
      {
        icon: "fire-o",
        path: "height",
        title: "查身高",
        color: "cyan light",
        display: true
      },
      {
        icon: "guide-o",
        path: "sc-location",
        title: "每日位置",
        color: "olive light",
        display: true
      },
      {
        icon: "shop-o",
        path: "lz-location",
        title: "大蜡季蜡位置",
        color: "orange light",
        display: true
      },
      {
        icon: "tosend",
        path: "daily-magic",
        title: "每日魔法",
        color: "purple light",
        display: true
      }
    ]
  }
]);
</script>

<template>
  <div class="zh-body">
    <template v-for="(item, index) in contentList" :key="index">
      <van-grid clickable :column-num="2">
        <template v-for="(items, sub_index) in item.sub" :key="sub_index">
          <van-grid-item
            v-if="items.display"
            :icon="items.icon"
            :text="items.title"
            :to="item.name ? item.name + '/' + items.path : items.path"
          />
        </template>
      </van-grid>
    </template>
  </div>
</template>
