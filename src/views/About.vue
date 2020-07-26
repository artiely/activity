<template>
  <div class="activity-content">
    <md-button
      type="primary"
      class="btn"
      @click="openTest('backToApp')"
    >backToApp</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('startTiming')"
    >startGameTiming</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('endTiming')"
    >endGameTiming</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('clearCache')"
    >clearCache</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('isReset')"
    >isReset</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('getAppVersionCode')"
    >getAppVersionCode</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('getStartTime')"
    >getStartTime</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('isAndroid')"
    >检测是否为android</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('isWeixin')"
    >检测是否为微信</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('isIOS')"
    >检测是否为IOS</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('isIphoneX')"
    >检测是否为IphoneX</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('QQ')"
    >分享QQ</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('WeChat')"
    >分享微信</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('Circle')"
    >多渠道分享</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('goEnterUser')"
    >进入用户</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('goEnterTopicDetail')"
    >进入话题</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('goShowTitleRightButton1')"
    >显示右上角圆角按钮-通知</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('goShowTitleRightButton2')"
    >显示右上角圆角按钮-退出 </md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('goShowTitleRightButton3')"
    >显示右上角圆角按钮-分享</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('goGetUserID')"
    >获取用户userID</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('goEnterTiming')"
    >跳转计时</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('goSleep')"
    >去睡觉</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('goWakeUp')"
    >起床</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('startLearning')"
    >开始计时</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('startTimingVideo')"
    >跳转视频打卡</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('enterPlanReminder')"
    >跳转计划提醒</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('enterLearningData')"
    >跳转我的学习数据页面</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('enterMyFriendRank')"
    >跳转我的道友榜</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openTest('enterPostDairy')"
    >跳转发布日记</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="vEnterTreeHole"
    >进入树洞</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="vEnterFreeLive"
    >进入免费Live</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="vEnterSpLiveDetail"
    >进入Live详情</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="vEnterAlbumImageText"
    >进入图文专辑</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="vEnterAlbumVideo"
    >进入视频专辑</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="vEnterAlbumAudio"
    >进入音频专辑</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="vEnterLibrary"
    >进入图书馆</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="vEnterFindFriends"
    >进入小书童 匹配道友</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="vEnterAnswerRoom"
    >进入答疑室</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openActivity('StudyTimeChargeActivity')"
    >跳转付费自习室充值</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="startTimingTomato"
    >打开番茄计时</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="startTimingFarm"
    >打开学习农场</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="enterPayStudyRoom"
    >进入付费自习室</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="enterFreeStudyRoom"
    >进入免费自习室</md-button>
    <md-button
      type="primary" class="btn">显示来源：{{ showFrom }}</md-button>
    <md-button
      type="primary" class="btn">显示UserID：{{ userID }}</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="openDiaryWithIOS"
    >IOS打开测试日记</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="enterPayDuartion"
    >付费自习室充值</md-button>
    <md-button
      type="primary"
      class="btn"
      @click="enterPayTCoin"
    >T币充值</md-button>
    <md-button
      type="primary"
      id="downloadButtonShare"
      v-if="inTiming"
      class="btn"
    >openinstall 分享</md-button>
    <md-button
      type="primary"
      id="downloadButton"
      v-else
      class="btn"
    >openinstall 打开App</md-button>
    
      <md-button
        type="primary"
        class="share"
        @click="openIOS"
      >打开App IOS</md-button>
      <md-button
        type="primary"
        class="share"
        @click="openAndroid"
      >打开App Android</md-button>
    
      <md-button
        type="primary"
        class="share"
        @click="showButton(1)"
      >消息</md-button>
      <md-button
        type="primary"
        class="share"
        @click="showButton(2)"
      >结束</md-button>
      <md-button
        type="primary"
        class="share"
        @click="showButton(3)"
      >分享</md-button>
    
  </div>
</template>

<script>
/* global OpenInstall */
window.appShare = function () {
  shareWeb({
    title: '在吗？一起连个麦',
    desc: '和我一起加入Timing线上自习室',
    imageUrl: 'http://activity.timing360.com/onlineImage/timing.png',
    imgUrl: 'http://activity.timing360.com/onlineImage/timing.png',
    webUrl: `http://activity.timing360.com/TEST/goTimingTest/index.html?timing=test&nihao=hello`,
  })
}

window.openMask = function () {
  alert('打开遮罩回调')
}

window.closeMask = function () {
  alert('关闭遮罩回调')
}

window.timingStarted = function (data) {
  alert('开始计时app传参:' + data)
}

window.timingEnded = function (data, minStudyTime, duration, recordID) {
  alert(data, minStudyTime, duration, recordID)
}
import {
  getUrlKey,
  shareWeb,
  getUserID,
  isAndroid,
  isInTiming,
  JsApiToastSuccess,
  toastFail,
  enterUser,
  showTitleRightButton,
  enterTopicDetail,
  enterTiming,
  enterTreeHole,
  enterFreeLive,
  enterSpLiveDetail,
  enterAlbumImageText,
  enterAlbumVideo,
  enterAlbumAudio,
  enterLibrary,
  enterFindFriends,
  enterAnswerRoom,
  goSleep,
  goWakeUp,
  startLearning,
  startTimingVideo,
  enterPlanReminder,
  enterLearningData,
  enterMyFriendRank,
  enterPostDairy,
  openActivity,
  shareQQ,
  shareWechat,
  backToApp,
  startTiming,
  endTiming,
  clearCache,
  isReset,
  getAppVersionCode,
  getStartTime,
  startTimingTomato,
  startTimingFarm,
  enterFreeStudyRoom,
  enterPayStudyRoom,
  enterPayDuartion,
  enterPayTCoin
} from '@/utils/native'

var url = 'http://116.62.57.157/activity/31/index.html'
export default {
  data () {
    return {
      userID: '',
      from: '',
      typeArr: [],
      inTiming: isInTiming()
    }
  },
  mounted () {
    // openinstall
    console.log(isInTiming())
    if (isInTiming()) {
      var button = document.getElementById("downloadButtonShare");
      button.onclick = function () {
        shareWeb({
          title: '在吗？一起连个麦',
          desc: '和我一起加入Timing线上自习室',
          imageUrl: 'http://activity.timing360.com/onlineImage/timing.png',
          imgUrl: 'http://activity.timing360.com/onlineImage/timing.png',
          webUrl: `http://activity.timing360.com/TEST/goTimingTest/index.html?timing=test&nihao=hello`,
        })
        return false;
      }
    } else {
      var data = OpenInstall.parseUrlParams();
      new OpenInstall({
        appKey: "xt1ul6",
        onready: function () {
          var m = this, button = document.getElementById("downloadButton");
          button.style.visibility = "visible";
          m.schemeWakeup();
          button.onclick = function () {
            m.wakeupOrInstall();
            return false;
          }
        }
      }, data);
    }
  },
  methods: {
    startTimingTomato,
    startTimingFarm,
    enterPayStudyRoom,
    enterFreeStudyRoom,
    enterPayDuartion,
    enterPayTCoin,
    openDiaryWithIOS () {
      window.location.href = `https://www.timing360.com?parameter=feed,28743`
    },
    openIOS () {
      window.location.href = `https://www.timing360.com?parameter=activity,${url}`
    },
    openAndroid () {
      window.location.href = `timing://www.timing360.com/startapp?parameter=activity,${url}`
    },
    openActivity,
    vEnterTreeHole () {
      enterTreeHole('11.11')
    },
    vEnterFreeLive () {
      enterFreeLive('451')
    },
    vEnterSpLiveDetail () {
      enterSpLiveDetail('194')
    },
    vEnterAlbumImageText () {
      enterAlbumImageText('214')
    },
    vEnterAlbumVideo () {
      enterAlbumVideo('216')
    },
    vEnterAlbumAudio () {
      enterAlbumAudio('215')
    },
    vEnterLibrary () {
      enterLibrary()
    },
    vEnterFindFriends () {
      enterFindFriends()
    },
    vEnterAnswerRoom () {
      enterAnswerRoom('365')
    },
    evalFromFn (sunccessTip, failedTip) {
      if (isAndroid())
        JsApiToastSuccess(sunccessTip)
      else
        toastFail(failedTip)
    },
    openTest (data) {
      switch (data) {
        case 'isAndroid':
          this.evalFromFn('是安卓系统', '不是安卓系统')
          break;
        case 'isWeixin':
          this.evalFromFn('是微信', '不是微信')
          break;
        case 'isIOS':
          this.evalFromFn('是IOS系统', '不是IOS系统')
          break;
        case 'isIphoneX':
          this.evalFromFn('是IphoneX', '不是IphoneX')
          break;
        case 'QQ':
          this.goShareQQ()
          break;
        case 'WeChat':
          this.goShareWechat()
          break;
        case 'Circle':
          this.goShareCircle()
          break;
        case 'goEnterUser':
          enterUser({ userID: 59436 })
          break;
        case 'goShowTitleRightButton1':
          showTitleRightButton(1)
          break;
        case 'goShowTitleRightButton2':
          showTitleRightButton(2)
          break;
        case 'goShowTitleRightButton3':
          showTitleRightButton(3)
          break;
        case 'goEnterTopicDetail':
          enterTopicDetail({ topicID: 6155, topicName: '测试' })
          break;
        case 'goGetUserID':
          JsApiToastSuccess(getUserID())
          console.log(getUserID())
          break;
        case 'goEnterTiming':
          enterTiming()
          break;
        case 'goSleep':
          goSleep()
          break;
        case 'goWakeUp':
          goWakeUp()
          break;
        case 'startLearning':
          startLearning()
          break;
        case 'startTimingVideo':
          startTimingVideo()
          break;
        case 'enterPlanReminder':
          enterPlanReminder()
          break;
        case 'enterLearningData':
          enterLearningData()
          break;
        case 'enterMyFriendRank':
          enterMyFriendRank()
          break;
        case 'enterPostDairy':
          enterPostDairy()
          break;
        case 'backToApp':
          backToApp()
          break;
        case 'startTiming':
          startTiming('123')
          break;
        case 'endTiming':
          endTiming('123')
          break;
        case 'clearCache':
          clearCache()
          break;
        case 'isReset':
          isReset()
          break;
        case 'getAppVersionCode':
          alert(getAppVersionCode())
          break;
        case 'getStartTime':
          getStartTime()
          break;
        default:
          break;
      }
    },
    goShareCircle () {
      shareWechat({
        title: '在吗？一起连个麦',
        desc: '和我一起加入Timing线上自习室',
        imageUrl: 'http://activity.timing360.com/onlineImage/timing.png',
        webUrl: `http://www.timing360.com`,
      })
    },
    goShareWechat () {
      shareWechat({
        title: '在吗？一起连个麦',
        desc: '和我一起加入Timing线上自习室',
        imageUrl: 'http://activity.timing360.com/onlineImage/timing.png',
        webUrl: `http://www.timing360.com`,
      })
    },
    goShareQQ () {
      shareQQ({
        title: '在吗？一起连个麦',
        desc: '和我一起加入Timing线上自习室',
        imageUrl: 'http://activity.timing360.com/onlineImage/timing.png',
        webUrl: `http://www.timing360.com`,
      })
    },
    showButton (type) {
      let str = ''
      if (this.typeArr.findIndex((value) => {
        return value == type
      }) >= 0) {
        this.typeArr.splice(this.typeArr.findIndex((value) => {
          return value == type
        }), 1)
      } else {
        this.typeArr.push(type)
      }
      this.typeArr.forEach((value, index) => {
        if (index == 0) {
          str += value
        } else {
          str += `,${value}`
        }
      })
      console.log(str)
      showTitleRightButton(str)
    }
  },
  computed: {
    showFrom: function () {
      switch (this.from) {
        case '0':
          return '更多页面bannner模块'
        case '1':
          return '小书童Banner模块'
        case '2':
          return '学习结束推荐模块'
        case '3':
          return '消息channel模块'
        default:
          return ''
      }
    }
  },
  created () {
    this.userID = parseInt(getUrlKey('userID'))
    this.from = getUrlKey('fm')
    this.$api.addTimes(this.userID, 339).then(res => {
      if (!res.resp_code) {
        console.log(res.resp_msg)
      }
    })
    // if(!this.userID){
    //   this.userID = parseInt(getUserID())
    // }
    console.log(navigator)
    console.log(window)
  }
}
</script>

<style lang="stylus">
.activity-content {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .btn,.share {
    margin:10px 0;
  }

  .active-test {
    width: 100%;
    display: flex;
    justify-content: space-around;

    .share {
      width: 30%;
      border: 1px #000 solid;
      text-align: center;
      padding: 20px 0;
      margin: 10px 0 20px 0;
    }
  }
}
</style>
