# 蛋堡联盟（Vue H5 演示版）

基于 Vue3 + Vite 的 H5 项目，默认使用本地 Mock 数据，可直接演示业务流程；后续将 `src/api/client.ts` 中 `USE_MOCK` 改为 `false` 即可切换真实接口。

## 页面能力
- 首页：搜索、banner、补贴专区卡片、推广入口。
- 热销：商品列表、券信息、分享赚展示。
- 收益看板：时间筛选、六宫格数据看板。
- 组团：活动入口与空状态。
- 我的：收益摘要、工具区、TB 授权弹窗。

## 接口说明
详见 `src/api/contracts.ts`：
- `GET /api/v1/home`
- `GET /api/v1/hot/list?page={page}&pageSize={pageSize}`
- `GET /api/v1/income/summary?range=today`
- `GET /api/v1/profile/summary`

## 运行
```bash
npm install
npm run dev
```
