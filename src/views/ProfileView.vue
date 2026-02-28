<template>
  <section class="page">
    <header class="profile-head">
      <div class="user">请登录</div>
      <div class="money-card">
        <div><p>累计预估</p><strong>{{ summary?.totalEstimate.toFixed(2) }}</strong></div>
        <div><p>本月预估</p><strong>{{ summary?.monthEstimate.toFixed(2) }}</strong></div>
        <div><p>可提现</p><strong>{{ summary?.withdrawable.toFixed(2) }}</strong></div>
      </div>
    </header>

    <div class="tools"><span>我的商品</span><span>我的组团</span><span>补贴明细</span><span>余额提现</span><span>账户设置</span></div>

    <div class="panel">
      <div class="auth-tabs"><span class="active">TB</span><span>京东账号</span></div>
      <p class="warn">(*删联盟加客服jingzai0408） 点击复制</p>
      <button class="big" @click="showAuth = true">+新增TB</button>
    </div>

    <div v-if="showAuth" class="modal-mask" @click.self="showAuth = false">
      <div class="modal">
        <h3>联盟账号授权</h3>
        <img src="https://dummyimage.com/420x250/c9c0f8/fff&text=%E6%8E%88%E6%9D%83%E6%8C%87%E5%BC%95" alt="授权" />
        <div class="auth-tabs"><span class="active">TB</span></div>
        <button>复制授权链接</button>
        <p @click="showAuth = false">我已完成授权</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getProfileSummary } from '../api/client'
import type { ProfileSummary } from '../api/contracts'

const showAuth = ref(false)
const summary = ref<ProfileSummary>({ totalEstimate: 0, monthEstimate: 0, withdrawable: 0 })

onMounted(async () => {
  summary.value = (await getProfileSummary()).data
})
</script>
