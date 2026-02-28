<template>
  <section class="page">
    <header class="center-title">收益看板</header>
    <div class="date-tabs"><span class="active">今天</span><span>昨天</span><span>本月</span><span>上月</span><span>自定义时间</span></div>
    <div class="income-box">
      <div><p>全部销售额</p><strong>¥{{ summary?.totalSales }}</strong></div>
      <div><p>全部佣金</p><strong>¥{{ summary?.totalCommission }}</strong></div>
      <div><p>全部订单</p><strong>{{ summary?.totalOrders }}</strong></div>
      <div><p>有效销售额</p><strong>¥{{ summary?.validSales }}</strong></div>
      <div><p>有效佣金</p><strong>¥{{ summary?.validCommission }}</strong></div>
      <div><p>有效订单</p><strong>{{ summary?.validOrders }}</strong></div>
    </div>
    <div class="empty">暂无数据</div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getIncomeSummary } from '../api/client'
import type { IncomeSummary } from '../api/contracts'

const summary = ref<IncomeSummary>()
onMounted(async () => {
  summary.value = (await getIncomeSummary()).data
})
</script>
