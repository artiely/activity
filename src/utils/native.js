export const isAndroid = () => {
  // 判断是否android
  var os = new Array('Android')
  var info = navigator.userAgent
  var len = os.length
  for (var i = 0; i < len; i++) {
    if (info.indexOf(os[i]) > 0) {
      return true
    }
  }
  return false
}

export const isWeixin = () => {
  // 判断是否微信
  var os = new Array('MicroMessenger')
  var info = navigator.userAgent
  var len = os.length
  for (var i = 0; i < len; i++) {
    if (info.indexOf(os[i]) > 0) {
      return true
    }
  }
  return false
}

export const isIOS = () => {
  // 判断是否IOS
  var os = new Array('iPhone', 'iPad', 'iPod')
  var info = navigator.userAgent
  var len = os.length
  for (var i = 0; i < len; i++) {
    if (info.indexOf(os[i]) > 0) {
      return true
    }
  }
  return false
}

export const isIphoneX = () => {
  var os = new Array('isIphoneX')
  var info = navigator.userAgent
  var len = os.length
  for (var i = 0; i < len; i++) {
    if (info.indexOf(os[i]) > 0) {
      try {
        window.webkit.messageHandlers.showBack.postMessage(null)
      } catch (error) {
        console.log('isIphoneX -> error', error)
      }
      return true
    }
  }
  return false
}

export const isInTiming = () => {
  // 判断是否在应用内
  var os = new Array('inTiming')
  var info = navigator.userAgent
  var len = os.length
  for (var i = 0; i < len; i++) {
    if (info.indexOf(os[i]) > 0) {
      return true
    }
  }
  return false
}

export const setDownloadUrl = () => {
  var url
  if (isIOS()) {
    url = 'https://itunes.apple.com/cn/app/id1139698614'
    if (isWeixin()) {
      url = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.huiian.timing'
    }
  } else {
    url = 'http://www.timing360.com/site/download'
    if (isWeixin()) {
      url = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.huiian.timing'
    }
  }
  return url
}

export const reLoad = () => {
  location.reload(true)
}

export const toastFail = (content) => {
  if (isAndroid()) {
    try {
      window.android.JsApiToastFail(content)
    } catch (error) {
      console.log('toastFail -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.JsApiToastFail.postMessage({
        content: content,
      })
    } catch (error) {
      console.log('toastFail -> error', error)
    }
  }
}

export const JsApiToastSuccess = ($message) => {
  if (isAndroid()) {
    try {
      window.android.JsApiToastSuccess($message)
    } catch (error) {
      console.log('JsApiToastSuccess -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.JsApiToastSuccess.postMessage({
        content: $message,
      })
    } catch (error) {
      console.log('JsApiToastSuccess -> error', error)
    }
  }
}

export const placeOrder = (groupBuyData) => {
  if (isAndroid()) {
    try {
      window.android.appPay(
        groupBuyData.type,
        groupBuyData.payDesc,
        groupBuyData.payAmount
      )
    } catch (error) {
      console.log('placeOrder -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.appPay.postMessage(groupBuyData)
    } catch (error) {
      console.log('placeOrder -> error', error)
    }
  }
}

export const shareCircle = (shareData) => {
  if (isAndroid()) {
    try {
      window.android.appShareCircle(
        shareData.webUrl,
        shareData.imageUrl,
        shareData.title,
        shareData.desc
      )
    } catch (error) {
      console.log('shareCircle -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.appShareCircle.postMessage(shareData)
    } catch (error) {
      console.log('shareCircle -> error', error)
    }
  }
}

export const shareWechat = (shareData) => {
  if (isAndroid()) {
    try {
      window.android.appShareWechat(
        shareData.webUrl,
        shareData.imageUrl,
        shareData.title,
        shareData.desc
      )
    } catch (error) {
      console.log('shareWechat -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.appShareWechat.postMessage(shareData)
    } catch (error) {
      console.log('shareWechat -> error', error)
    }
  }
}

export const shareQQ = (shareData) => {
  if (isAndroid()) {
    try {
      window.android.appShareQQ(
        shareData.webUrl,
        shareData.imageUrl,
        shareData.title,
        shareData.desc
      )
    } catch (error) {
      console.log('shareQQ -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.appShareQQ.postMessage(shareData)
    } catch (error) {
      console.log('shareQQ -> error', error)
    }
  }
}

export const enterUser = (data) => {
  if (isAndroid()) {
    try {
      window.android.enterUser(parseInt(data.userID))
    } catch (error) {
      console.log('enterUser -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterUser.postMessage(data)
    } catch (error) {
      console.log('enterUser -> error', error)
    }
  }
}

export const showTitleRightButton = (buttonId) => {
  if (isAndroid()) {
    try {
      window.android.showTitleRightButton(buttonId)
    } catch (error) {
      console.log('showTitleRightButton -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.showTitleRightButton.postMessage({
        buttonId,
      })
    } catch (error) {
      console.log('showTitleRightButton -> error', error)
    }
  }
}

export const showLoading = (data) => {
  if (isAndroid()) {
    try {
      window.android.showLoading()
    } catch (error) {
      console.log('showLoading -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.showLoading.postMessage(data)
    } catch (error) {
      console.log('showLoading -> error', error)
    }
  }
}

export const shareWeb = (data) => {
  if (isAndroid()) {
    try {
      var newData = JSON.stringify(data)
      window.android.commonShare(newData)
    } catch (error) {
      console.log('shareWeb -> error', error)
      window.android.commonShare(
        data.title,
        data.desc,
        data.imgUrl,
        data.webUrl,
        data.activityName,
        data.activityID
      )
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.commonShare.postMessage(data)
    } catch (error) {
      console.log('shareWeb -> error', error)
    }
  }
}

export const enterFeed = (data) => {
  if (isAndroid()) {
    try {
      window.android.enterFeed(data.feedID)
    } catch (error) {
      console.log('enterFeed -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterFeed.postMessage(data)
    } catch (error) {
      console.log('enterFeed -> error', error)
    }
  }
}

export const enterTopicDetail = (data) => {
  if (isAndroid()) {
    try {
      window.android.enterTopicDetail(data.topicID, data.topicName)
    } catch (error) {
      console.log('enterTopicDetail -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterTopicDetail.postMessage(data)
    } catch (error) {
      console.log('enterTopicDetail -> error', error)
    }
  }
}

export const enterTeam = (data) => {
  if (isAndroid()) {
    try {
      window.android.enterTeam(data.teamID, data.groupID, data.type)
    } catch (error) {
      console.log('enterTeam -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterTeam.postMessage(data)
    } catch (error) {
      console.log('enterTeam -> error', error)
    }
  }
}

//注销账号
export const isAcountCanCancel = (url) => {
  if (isAndroid()) {
    try {
      window.android.isAcountCanCancel(url)
    } catch (error) {
      console.log('isAcountCanCancel -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.isAcountCanCancel.postMessage({ data: url })
    } catch (error) {
      console.log('isAcountCanCancel -> error', error)
    }
  }
}

export const cancelAcount = () => {
  if (isAndroid()) {
    try {
      window.android.cancelAcount()
    } catch (error) {
      console.log('cancelAcount -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.cancelAcount.postMessage({ data: null })
    } catch (error) {
      console.log('cancelAcount -> error', error)
    }
  }
}

export const toNextPage = (data) => {
  if (isAndroid()) {
    try {
      window.android.toNextPage(data)
    } catch (error) {
      console.log('toNextPage -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.toNextPage.postMessage({ url: data })
    } catch (error) {
      console.log('toNextPage -> error', error)
    }
  }
}

export const getUserID = () => {
  if (isAndroid()) {
    try {
      return window.android.getUserID()
    } catch (error) {
      console.log('getUserID -> error', error)
    }
  }
  if (isIOS()) {
    try {
      return window.webkit.messageHandlers.getUserID.postMessage(null)
    } catch (error) {
      console.log('getUserID -> error', error)
    }
  }
}

export const getUserKey = () => {
  if (isAndroid()) {
    try {
      return window.android.getUserKey()
    } catch (error) {
      console.log('getUserKey -> error', error)
    }
  }
  if (isIOS()) {
    try {
      return window.webkit.messageHandlers.getUserKey.postMessage(null)
    } catch (error) {
      console.log('getUserKey -> error', error)
    }
  }
}

//跳转计时
export const enterTiming = () => {
  if (isAndroid()) {
    try {
      return window.android.jump2Timing()
    } catch (error) {
      console.log('enterTiming -> error', error)
    }
  }
  if (isIOS()) {
    try {
      return window.webkit.messageHandlers.jump2Timing.postMessage(null)
    } catch (error) {
      console.log('enterTiming -> error', error)
    }
  }
}

//进入树洞，树洞编号00,00
export const enterTreeHole = (channelNo) => {
  if (isAndroid()) {
    try {
      window.android.enterTreeHole(channelNo)
    } catch (error) {
      console.log('enterTreeHole -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterTreeHole.postMessage(channelNo)
    } catch (error) {
      console.log('enterTreeHole -> error', error)
    }
  }
}

//进入免费Live payLiveCourseID String
export const enterFreeLive = (payLiveCourseID) => {
  if (isAndroid()) {
    try {
      window.android.enterFreeLive(payLiveCourseID)
    } catch (error) {
      console.log('enterFreeLive -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterFreeLive.postMessage(payLiveCourseID)
    } catch (error) {
      console.log('enterFreeLive -> error', error)
    }
  }
}

//进入Live详情 payLiveID String
export const enterSpLiveDetail = (payLiveID) => {
  if (isAndroid()) {
    try {
      window.android.enterSpLiveDetail(payLiveID)
    } catch (error) {
      console.log('enterSpLiveDetail -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterSpLiveDetail.postMessage(payLiveID)
    } catch (error) {
      console.log('enterSpLiveDetail -> error', error)
    }
  }
}

//进入图文专辑 albumId String
export const enterAlbumImageText = (albumId) => {
  if (isAndroid()) {
    try {
      window.android.enterAlbumImageText(albumId)
    } catch (error) {
      console.log('enterAlbumImageText -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterAlbumImageText.postMessage(albumId)
    } catch (error) {
      console.log('enterAlbumImageText -> error', error)
    }
  }
}

//进入视频专辑 albumId String
export const enterAlbumVideo = (albumId) => {
  if (isAndroid()) {
    try {
      window.android.enterAlbumVideo(albumId)
    } catch (error) {
      console.log('enterAlbumVideo -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterAlbumVideo.postMessage(albumId)
    } catch (error) {
      console.log('enterAlbumVideo -> error', error)
    }
  }
}

//进入音乐专辑 albumId String
export const enterAlbumAudio = (albumId) => {
  if (isAndroid()) {
    try {
      window.android.enterAlbumAudio(albumId)
    } catch (error) {
      console.log('enterAlbumAudio -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterAlbumAudio.postMessage(albumId)
    } catch (error) {
      console.log('enterAlbumAudio -> error', error)
    }
  }
}

//进入图书馆
export const enterLibrary = () => {
  if (isAndroid()) {
    try {
      window.android.enterLibrary()
    } catch (error) {
      console.log('enterLibrary -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterLibrary.postMessage(null)
    } catch (error) {
      console.log('enterLibrary -> error', error)
    }
  }
}

//进入小书童 匹配道友
export const enterFindFriends = () => {
  if (isAndroid()) {
    try {
      window.android.enterFindFriends()
    } catch (error) {
      console.log('enterFindFriends -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterFindFriends.postMessage(null)
    } catch (error) {
      console.log('enterFindFriends -> error', error)
    }
  }
}

//进入答疑室
export const enterAnswerRoom = (roomID) => {
  if (isAndroid()) {
    try {
      window.android.enterAnswerRoom(parseInt(roomID))
    } catch (error) {
      console.log('enterAnswerRoom -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterAnswerRoom.postMessage(roomID)
    } catch (error) {
      console.log('enterAnswerRoom -> error', error)
    }
  }
}

//去睡觉
export const goSleep = () => {
  if (isAndroid()) {
    try {
      window.android.goSleep()
    } catch (error) {
      console.log('goSleep -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.goSleep.postMessage(null)
    } catch (error) {
      console.log('goSleep -> error', error)
    }
  }
}

//起床
export const goWakeUp = () => {
  if (isAndroid()) {
    try {
      window.android.goWakeUp()
    } catch (error) {
      console.log('goWakeUp -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.goWakeUp.postMessage(null)
    } catch (error) {
      console.log('goWakeUp -> error', error)
    }
  }
}

//开始计时
export const startLearning = () => {
  if (isAndroid()) {
    try {
      window.android.startLearning()
    } catch (error) {
      console.log('startLearning -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.startLearning.postMessage(null)
    } catch (error) {
      console.log('startLearning -> error', error)
    }
  }
}

//跳转视频打卡
export const startTimingVideo = () => {
  if (isAndroid()) {
    try {
      window.android.startTimingVideo()
    } catch (error) {
      console.log('startTimingVideo -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.startTimingVideo.postMessage(null)
    } catch (error) {
      console.log('startTimingVideo -> error', error)
    }
  }
}

//跳转计划提醒
export const enterPlanReminder = () => {
  if (isAndroid()) {
    try {
      window.android.enterPlanReminder()
    } catch (error) {
      console.log('enterPlanReminder -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterPlanReminder.postMessage(null)
    } catch (error) {
      console.log('enterPlanReminder -> error', error)
    }
  }
}

//跳转计划提醒
export const enterSvlog = (feedID) => {
  if (isAndroid()) {
    try {
      window.android.enterSvlog(parseInt(feedID))
    } catch (error) {
      console.log('enterSvlog -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterSvlog.postMessage(parseInt(feedID))
    } catch (error) {
      console.log('enterSvlog -> error', error)
    }
  }
}

//跳转学习自拍
export const openStory = (feedID) => {
  if (isAndroid()) {
    try {
      window.android.openStory(parseInt(feedID))
    } catch (error) {
      console.log('openStory -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.openStory.postMessage(parseInt(feedID))
    } catch (error) {
      console.log('openStory -> error', error)
    }
  }
}

//跳转学习自拍
export const enterFeedReply = (feed, replyID) => {
  if (isAndroid()) {
    try {
      window.android.enterFeedReply(feed, parseInt(replyID))
    } catch (error) {
      console.log('enterFeedReply -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterFeedReply.postMessage(
        feed,
        parseInt(replyID)
      )
    } catch (error) {
      console.log('enterFeedReply -> error', error)
    }
  }
}

//跳转我的学习数据页面
export const enterLearningData = () => {
  if (isAndroid()) {
    try {
      window.android.enterLearningData()
    } catch (error) {
      console.log('enterLearningData -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterLearningData.postMessage(null)
    } catch (error) {
      console.log('enterLearningData -> error', error)
    }
  }
}

//跳转我的道友榜
export const enterMyFriendRank = () => {
  if (isAndroid()) {
    try {
      window.android.enterMyFriendRank()
    } catch (error) {
      console.log('enterMyFriendRank -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterMyFriendRank.postMessage(null)
    } catch (error) {
      console.log('enterMyFriendRank -> error', error)
    }
  }
}

//跳转发布日记
export const enterPostDairy = () => {
  if (isAndroid()) {
    try {
      window.android.enterPostDairy()
    } catch (error) {
      console.log('enterPostDairy -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterPostDairy.postMessage(null)
    } catch (error) {
      console.log('enterPostDairy -> error', error)
    }
  }
}

//跳转到聊天,需要判断是否是好友
export const enterChat = (userID) => {
  if (isAndroid()) {
    try {
      window.android.enterChat(parseInt(userID))
    } catch (error) {
      console.log('enterChat -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.enterChat.postMessage(parseInt(userID))
    } catch (error) {
      console.log('enterChat -> error', error)
    }
  }
}

//跳转到聊天,需要判断是否是好友
export const openActivity = (url) => {
  if (isAndroid()) {
    try {
      window.android.openActivity(url)
    } catch (error) {
      console.log('openActivity -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.openActivity.postMessage(url)
    } catch (error) {
      console.log('openActivity -> error', error)
    }
  }
}

//回到app, 后退
export const backToApp = () => {
  if (isAndroid()) {
    try {
      window.android.backToApp()
    } catch (error) {
      console.log('backToApp -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.backToApp.postMessage(null)
    } catch (error) {
      console.log('backToApp -> error', error)
    }
  }
}

//活动内开始计时
export const startTiming = (str) => {
  if (isAndroid()) {
    try {
      window.android.startTiming(str)
    } catch (error) {
      console.log('startTiming -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.startTiming.postMessage(str)
    } catch (error) {
      console.log('startTiming -> error', error)
    }
  }
}

//活动内结束计时
export const endTiming = (str) => {
  if (isAndroid()) {
    try {
      window.android.endTiming(str)
    } catch (error) {
      console.log('endTiming -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.endTiming.postMessage(str)
    } catch (error) {
      console.log('endTiming -> error', error)
    }
  }
}

//清除缓存
export const clearCache = () => {
  if (isAndroid()) {
    try {
      window.android.clearCache()
    } catch (error) {
      console.log('clearCache -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.clearCache.postMessage(null)
    } catch (error) {
      console.log('clearCache -> error', error)
    }
  }
}

//重置计时
export const isReset = () => {
  if (isAndroid()) {
    try {
      window.android.isReset()
    } catch (error) {
      console.log('isReset -> error', error)
    }
  }
  if (isIOS()) {
    try {
      window.webkit.messageHandlers.isReset.postMessage(null)
    } catch (error) {
      console.log('isReset -> error', error)
    }
  }
}

//AppVersion
export const getAppVersionCode = () => {
  if (isAndroid()) {
    try {
      return window.android.getAppVersionCode()
    } catch (error) {
      console.log('getAppVersionCode -> error', error)
    }
  }
  if (isIOS()) {
    try {
      return window.webkit.messageHandlers.getAppVersionCode.postMessage(null)
    } catch (error) {
      console.log('getAppVersionCode -> error', error)
    }
  }
}

//计时开始时间
export const getStartTime = () => {
  if (isAndroid()) {
    try {
      return window.android.getStartTime()
    } catch (error) {
      console.log('getStartTime -> error', error)
    }
  }
  if (isIOS()) {
    try {
      return window.webkit.messageHandlers.getStartTime.postMessage(null)
    } catch (error) {
      console.log('getStartTime -> error', error)
    }
  }
}

//打开番茄计时
export const startTimingTomato = () => {
  if (isAndroid()) {
    try {
      return window.android.startTimingTomato()
    } catch (error) {
      console.log('startTimingTomato -> error', error)
    }
  }
  if (isIOS()) {
    try {
      return window.webkit.messageHandlers.startTimingTomato.postMessage(null)
    } catch (error) {
      console.log('startTimingTomato -> error', error)
    }
  }
}

//打开农场
export const startTimingFarm = () => {
  if (isAndroid()) {
    try {
      return window.android.startTimingFarm()
    } catch (error) {
      console.log('startTimingFarm -> error', error)
    }
  }
  if (isIOS()) {
    try {
      return window.webkit.messageHandlers.startTimingFarm.postMessage(null)
    } catch (error) {
      console.log('startTimingFarm -> error', error)
    }
  }
}

//打开付费自习室
export const enterPayStudyRoom = () => {
  if (isAndroid()) {
    try {
      return window.android.enterPayStudyRoom()
    } catch (error) {
      console.log('enterPayStudyRoom -> error', error)
    }
  }
  if (isIOS()) {
    try {
      return window.webkit.messageHandlers.enterPayStudyRoom.postMessage(null)
    } catch (error) {
      console.log('enterPayStudyRoom -> error', error)
    }
  }
}

//跳转免费自习室
export const enterFreeStudyRoom = () => {
  if (isAndroid()) {
    try {
      return window.android.enterFreeStudyRoom()
    } catch (error) {
      console.log('enterFreeStudyRoom -> error', error)
    }
  }
  if (isIOS()) {
    try {
      return window.webkit.messageHandlers.enterFreeStudyRoom.postMessage(null)
    } catch (error) {
      console.log('enterFreeStudyRoom -> error', error)
    }
  }
}

//跳转付费自习室充值
export const enterPayDuartion = () => {
  if (isAndroid()) {
    try {
      return window.android.enterPayDuartion()
    } catch (error) {
      console.log('enterPayDuartion -> error', error)
    }
  }
  if (isIOS()) {
    try {
      return window.webkit.messageHandlers.enterPayDuartion.postMessage(null)
    } catch (error) {
      console.log('enterPayDuartion -> error', error)
    }
  }
}

//跳转T币充值
export const enterPayTCoin = () => {
  if (isAndroid()) {
    try {
      return window.android.enterPayTCoin()
    } catch (error) {
      console.log('enterPayTCoin -> error', error)
    }
  }
  if (isIOS()) {
    try {
      return window.webkit.messageHandlers.enterPayTCoin.postMessage(null)
    } catch (error) {
      console.log('enterPayTCoin -> error', error)
    }
  }
}

//获取URL参数
export const getUrlKey = (name) => {
  return (
    decodeURIComponent(
      (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')
    ) || null
  )
}
