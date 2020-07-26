import fetch from '../fetch'
export const JavaUrl = process.env.NODE_ENV === 'production'
? 'http://47.111.114.205:12800'  //测试服
// ? 'http://47.111.19.97:12800/' //灰度服
// ? 'ms.timing360.com/' //正式服
: 'http://47.111.114.205:12800'
// 示例
export const userWallet = data => {
  return fetch({
    url: '/user/user-wallet',
    method: 'post',
    data
  })
}

//活动首页数据
export const addTimes = (userID, activityId) => {
  return fetch({
    url: `${JavaUrl}/api-usr/publishBanner/accessBannerCount`,
    method: 'post',
    useSelfUrl: true,
    data:{
      userID,
      activityId
    }
  })
}