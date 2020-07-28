<template>
  <div class="personal">
    <div class="header">
      <div class="left">
        <img class="userImg" src="./userImg.png" alt />
        <div class="info">
          <span class="username">{{getUserInfo}}</span>
          <span class="usertype">钻石用户</span>
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="content">
      <div class="tit">我的资产</div>
      <p class="line"></p>
      <div class="myAssetList">
        <div class="assetItem">
          <span>￥0</span>
          <span>回馈金</span>
        </div>
        <div class="assetItem">
          <span>￥0</span>
          <span>红包</span>
        </div>
        <div class="assetItem">
          <span>￥0</span>
          <span>优惠券</span>
        </div>
        <div class="assetItem">
          <span>￥0</span>
          <span>津贴</span>
        </div>
        <div class="assetItem">
          <span>￥0</span>
          <span>礼品卡</span>
        </div>
      </div>
      <!-- 列表选项 -->
      <div class="personalList">
        <div class="navItem" v-for="(item, index) in personalList" :key="index">
          <i class="iconfont" :class="item.icon"></i>
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
    <div class="loginOut">
      <span @click="loginOut">退出登录</span>
    </div>
  </div>
</template>
<script>
import local from "../../util/local";
export default {
  name: "Personal",
  data() {
    return {
      personalList: [
        {
          name: "我的订单",
          icon: "icon-icon-dingdang"
        },
        {
          name: "周六一起拼",
          icon: "icon-pintuandingdan"
        },
        {
          name: "售后服务",
          icon: "icon-tubiaolunkuo--"
        },
        {
          name: "邀请返利",
          icon: "icon-hongbao"
        },
        {
          name: "优先购",
          icon: "icon-goumai"
        },
        {
          name: "积分中心",
          icon: "icon-jifen"
        },
        {
          name: "会员俱乐部",
          icon: "icon-huiyuan"
        },
        {
          name: "地址管理",
          icon: "icon-tubiao1"
        },
        {
          name: "账号安全",
          icon: "icon-zhanghaoanquan"
        },
        {
          name: "帮助与客服",
          icon: "icon-kefudianhua"
        },
        {
          name: "意见反馈",
          icon: "icon-biji"
        }
      ]
    };
  },
  methods: {
    
    loginOut() {
      if (confirm("确定退出吗？")) {
        this.$router.replace("login");
        local.remove("emailInfo");
      }
    }
  },
  computed: {
    getUserInfo() {
      let userInfo = local.get("emailInfo");
      return userInfo;
    }
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.personal {
  width: 100%;
  height: 100%;
  padding-bottom: 97px;
  box-sizing: border-box;
  background-color: #eee;
  overflow: auto;

  .header {
    width: 100%;
    height: 270px;
    display: flex;
    background-color: #F7D189;
    padding-left: 30px;
    box-sizing: border-box;

    .left {
      width: 510px;
      height: 142px;
      padding: 64px 0;
      display: flex;
      align-items: center;

      .userImg {
        width: 142px;
        height: 142px;
        border-radius: 50%;
      }

      .info {
        width: 338px;
        height: 90px;
        margin-left: 30px;
        display: flex;
        flex-direction: column;

        .username {
          width: 338px;
          height: 43px;
          font-size: 36px;
          color: #fff;
          margin-bottom: 10px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .usertype {
          font-size: 28px;
          color: #fff;
        }
      }
    }
  }

  .content {
    .tit {
      font-size: 28px;
      line-height: 100px;
      padding-left: 5%;
      background-color: #fff;
      color: #333;
      font-family: PingFangSC-Light, helvetica, 'Heiti SC';
    }

    .line {
      width: 90%;
      height: 2px;
      background: #eee;
      margin: 0 auto;
    }

    .myAssetList {
      width: 100%;
      height: 78px;
      padding: 41px 0;
      display: flex;
      background-color: #fff;

      .assetItem {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 24px;
        color: #333333;
        line-height: 40px;
        font-family: PingFangSC-Light, helvetica, 'Heiti SC';

        &:nth-of-type(1) {
          span {
            &:nth-of-type(1) {
              position: relative;

              &:after {
                content: '';
                position: absolute;
                right: -9px;
                top: 0;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background-color: #DD1A21;
              }
            }
          }
        }
      }
    }

    .personalList {
      margin-top: 25px;
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;
      border-top: 1px solid rgba(0, 0, 0, 0.15);

      .navItem {
        width: 33.3333%;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        border-right: 1px solid rgba(0, 0, 0, 0.15);
        box-sizing: border-box;
        padding: 37px 0;

        &:nth-child(3n) {
          border-right: none;
        }

        .iconfont {
          font-size: 60px;
          color: #666;
        }

        p {
          color: #666;
          font-size: 24px;
          line-height: 40px;
        }
      }
    }
  }

  .loginOut {
    width: 100%;
    height: 96px;
    background-color: #ffffff;
    margin: 40px 0 30px 0;
    line-height: 96px;
    text-align: center;

    span {
      color: #333;
      font-size: 28px;
      font-family: PingFangSC-Light, helvetica, 'Heiti SC';
    }
  }
}
</style>