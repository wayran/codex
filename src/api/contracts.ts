/**
 * 蛋堡联盟接口定义（演示版）
 * baseURL: /api/v1
 */

export interface ApiResponse<T> {
  code: number
  message: string
  data: T
}

export interface HomeBanner { id: number; image: string; title: string }
export interface SubsidyItem {
  id: number
  title: string
  shopName: string
  couponPrice: number
  commissionRate: number
  image: string
  startAt: string
  endAt: string
}

export interface HotItem {
  id: number
  title: string
  salePrice: number
  originalPrice: number
  coupon: number
  soldCount: string
  shareReward: number
  image: string
}

export interface IncomeSummary {
  totalSales: number
  totalCommission: number
  totalOrders: number
  validSales: number
  validCommission: number
  validOrders: number
}

export interface ProfileSummary {
  totalEstimate: number
  monthEstimate: number
  withdrawable: number
}

/**
 * GET /api/v1/home
 * 入参: 无
 * 返回: banner、补贴专区、组团大奖
 */
export type HomeApi = ApiResponse<{ banners: HomeBanner[]; subsidyList: SubsidyItem[]; teamPrize: string[] }>

/**
 * GET /api/v1/hot/list
 * 入参: { page: number; pageSize: number }
 * 返回: 热销商品列表
 */
export type HotListApi = ApiResponse<{ list: HotItem[]; total: number }>

/**
 * GET /api/v1/income/summary
 * 入参: { range: 'today'|'yesterday'|'month'|'lastMonth'|'custom' }
 */
export type IncomeSummaryApi = ApiResponse<IncomeSummary>

/**
 * GET /api/v1/profile/summary
 * 入参: 无
 */
export type ProfileSummaryApi = ApiResponse<ProfileSummary>
