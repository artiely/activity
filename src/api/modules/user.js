import fetch from '../fetch'

// 示例
export const userWallet = data => {
  return fetch({
    url: '/user/user-wallet',
    method: 'post',
    data
  })
}