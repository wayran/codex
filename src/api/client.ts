import { homeMock, hotMock, incomeMock, profileMock } from '../mock/data'

const USE_MOCK = true

const wait = (ms = 180) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getHomeData() {
  if (USE_MOCK) {
    await wait()
    return homeMock
  }
  return fetch('/api/v1/home').then((r) => r.json())
}

export async function getHotList(page = 1, pageSize = 20) {
  if (USE_MOCK) {
    await wait()
    return hotMock
  }
  return fetch(`/api/v1/hot/list?page=${page}&pageSize=${pageSize}`).then((r) => r.json())
}

export async function getIncomeSummary(range = 'today') {
  if (USE_MOCK) {
    await wait()
    return incomeMock
  }
  return fetch(`/api/v1/income/summary?range=${range}`).then((r) => r.json())
}

export async function getProfileSummary() {
  if (USE_MOCK) {
    await wait()
    return profileMock
  }
  return fetch('/api/v1/profile/summary').then((r) => r.json())
}
