<template>
  <nav class="bottom-nav">
    <RouterLink v-for="item in items" :key="item.path" :to="item.path" class="nav-item" :class="{ active: route.path === item.path }">
      <span class="icon">{{ item.icon }}</span>
      <span>{{ item.label }}</span>
      <span v-if="item.hot" class="hot-tag">HOT</span>
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const items = [
  { path: '/home', label: '首页', icon: '⌂' },
  { path: '/hot', label: '热销', icon: 'HOT', hot: true },
  { path: '/income', label: '收益看板', icon: '◍' },
  { path: '/team', label: '组团', icon: '◉' },
  { path: '/profile', label: '我的', icon: '◌' }
]
</script>
