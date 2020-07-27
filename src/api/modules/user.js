import fetch from '../fetch'
import {JavaUrl} from '@config'

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