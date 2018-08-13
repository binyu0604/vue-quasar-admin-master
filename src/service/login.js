import request from '@/libs/request'
import qs from 'qs'

export function loginByUsername(mobile, passWord) {
  const data = {
    mobile,
    passWord
  }
  return request({
    url: '/api/login',
    method: 'post',
    data: JSON.stringify(data)
  })
}

export function logout() {
  return request({
    url: '/auth/logout',
    method: 'post',
    loading:"hourglass"
  })
}

export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get',
    loading:"gears"
  })
}
