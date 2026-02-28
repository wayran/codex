<template>
  <section class="page">
    <header class="top-header pink">
      <h1>蛋堡联盟</h1>
      <p>全网补贴领导者</p>
      <div class="search-row"><input placeholder="点击输入搜索内容" /><button>搜索</button></div>
    </header>

    <img class="hero" :src="home?.banners[0]?.image" alt="banner" />

    <div class="tabs"><span class="active">补贴专区</span><span>预告专区</span><span>全网排行</span></div>

    <article v-for="item in home?.subsidyList" :key="item.id" class="card">
      <div class="time">开始 {{ item.startAt }} 结束 {{ item.endAt }}</div>
      <div class="product-row">
        <img :src="item.image" alt="商品" />
        <div class="meta">
          <h3>{{ item.title }}</h3>
          <p>店铺: {{ item.shopName }}</p>
          <p class="price">券后价 {{ item.couponPrice }} <strong>佣金比 {{ item.commissionRate }}%</strong></p>
        </div>
      </div>
      <div class="actions"><button class="ghost">查看榜单</button><button>申请推广</button></div>
      <button class="big">一键申请</button>
    </article>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getHomeData } from '../api/client'
import type { HomeApi } from '../api/contracts'

const home = ref<HomeApi['data']>()
onMounted(async () => {
  home.value = (await getHomeData()).data
})
</script>
