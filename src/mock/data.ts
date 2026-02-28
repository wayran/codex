import type { HomeApi, HotListApi, IncomeSummaryApi, ProfileSummaryApi } from '../api/contracts'

export const homeMock: HomeApi = {
  code: 0,
  message: 'ok',
  data: {
    banners: [{ id: 1, image: 'https://dummyimage.com/700x220/ff7f32/fff&text=%E4%BB%8A%E6%97%A5%E8%A1%A5%E8%B4%B4', title: '今日补贴' }],
    subsidyList: [
      {
        id: 1,
        title: '【过年送礼】贝润胶原抗衰礼盒',
        shopName: '贝润旗舰店',
        couponPrice: 258,
        commissionRate: 35,
        image: 'https://dummyimage.com/180x140/f3d7aa/333&text=%E5%95%86%E5%93%81',
        startAt: '2026-02-04 00:00:00',
        endAt: '2026-03-01 00:00:00'
      }
    ],
    teamPrize: []
  }
}

export const hotMock: HotListApi = {
  code: 0,
  message: 'ok',
  data: {
    total: 4,
    list: [
      { id: 1, title: '子初安睡裤', salePrice: 29.9, originalPrice: 49.9, coupon: 20, soldCount: '478', shareReward: 3.22, image: 'https://dummyimage.com/260x170/c8caf9/222&text=%E7%83%AD%E9%94%80' },
      { id: 2, title: '稳健一次性PVC手套', salePrice: 15.9, originalPrice: 20.9, coupon: 5, soldCount: '1682', shareReward: 1.71, image: 'https://dummyimage.com/260x170/ddd/222&text=%E7%83%AD%E9%94%80' },
      { id: 3, title: '陈阿炳风干鸭架', salePrice: 27.9, originalPrice: 28.9, coupon: 1, soldCount: '1.2万+', shareReward: 4.1, image: 'https://dummyimage.com/260x170/f5b45d/222&text=%E7%83%AD%E9%94%80' },
      { id: 4, title: '周十五蜂蜜露', salePrice: 18.9, originalPrice: 21.9, coupon: 3, soldCount: '797', shareReward: 2.04, image: 'https://dummyimage.com/260x170/d8c2ff/222&text=%E7%83%AD%E9%94%80' }
    ]
  }
}

export const incomeMock: IncomeSummaryApi = {
  code: 0,
  message: 'ok',
  data: {
    totalSales: 0,
    totalCommission: 0,
    totalOrders: 0,
    validSales: 0,
    validCommission: 0,
    validOrders: 0
  }
}

export const profileMock: ProfileSummaryApi = {
  code: 0,
  message: 'ok',
  data: {
    totalEstimate: 0,
    monthEstimate: 0,
    withdrawable: 0
  }
}
