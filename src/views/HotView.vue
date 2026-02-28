<template>
  <section class="page list-page">
    <article v-for="item in list" :key="item.id" class="hot-item">
      <img :src="item.image" alt="hot" />
      <div class="info">
        <h3>{{ item.title }}</h3>
        <p class="price">¥{{ item.salePrice }} <s>¥{{ item.originalPrice }}</s></p>
        <p class="sold">已售{{ item.soldCount }}</p>
      </div>
      <aside>
        <span class="coupon">券 {{ item.coupon }}元</span>
        <button>¥{{ item.shareReward }} 分享赚</button>
      </aside>
    </article>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getHotList } from '../api/client'
import type { HotItem } from '../api/contracts'

const list = ref<HotItem[]>([])
onMounted(async () => {
  list.value = (await getHotList()).data.list
})
</script>
