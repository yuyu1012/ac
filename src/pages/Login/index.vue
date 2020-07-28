<template>
  <div class="login">
    <!-- 头部 -->
    <div class="header">
      <div class="homepage" @click="$router.replace('/')">
        <i class="iconfont icon-shangchengicon21"></i>
      </div>
      <span class="txt" @click="$router.replace('buy')">值得买</span>
      <div>
        <i @click="$router.replace('search')" class="iconfont icon-fangdajing"></i>
        <i @click="$router.replace('cart')" class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <div class="logoWrap">
      <img class="logo" src="./logo.png" alt />
    </div>
    <div class="btnWrap">
      <div class="phoneLogin">
        <i class="iconfont icon-shouji"></i>
        <span>手机号快捷登录</span>
      </div>
      <div class="emailLogin" @click="$router.replace('emailLogin')">
        <i class="iconfont icon-youxiang"></i>
        <span>邮箱账号登录</span>
      </div>
    </div>
    <div class="thirdWrap">
      <div class="itemWrap">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </div>
      <div class="itemWrap">
        <i class="iconfont icon-qq"></i>
        <span>QQ</span>
      </div>
      <div class="itemWrap">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Personage"
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.login {
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100%;
  padding-top: 88px;
  box-sizing: border-box;

  .header {
    width: 100%;
    height: 88px;
    background-color: #fff;
    padding: 0 26px 0 24px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    border-bottom: 1px solid rgb(217, 217, 217);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .homepage {
      width: 46px;
      height: 100px;
      line-height: 100px;

      .icon-shangchengicon21 {
        font-size: 50px;
      }
    }

    .txt {
      font-size: 36px;
      width: 150px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      margin-left: 90px;
    }

    .icon-fangdajing {
      width: 46px;
      height: 100px;
      line-height: 100px;
      font-size: 50px;
      margin-right: 30px;
    }

    .icon-gouwuche {
      width: 46px;
      height: 100px;
      line-height: 100px;
      font-size: 60px;
    }
  }

  .logoWrap {
    width: 100%;
    height: 90px;
    padding: 160px 0 232px 0;

    .logo {
      display: block;
      margin: auto;
      width: 268px;
      height: 90px;
    }
  }

  .btnWrap {
    width: 670px;
    height: 220px;
    padding: 0 40px;
    margin-bottom: 205px;

    .phoneLogin {
      width: 100%;
      height: 94px;
      margin-bottom: 32px;
      background-color: #DD1A21;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon-shouji {
        font-size: 46px;
        color: #fff;
        margin-right: 16px;
      }

      span {
        color: #ffffff;
        font-size: 28px;
      }
    }

    .emailLogin {
      width: 100%;
      height: 94px;
      border: 1px solid #DD1A21;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon-youxiang {
        font-size: 40px;
        color: #DD1A21;
        margin-right: 16px;
      }

      span {
        color: #DD1A21;
        font-size: 28px;
      }
    }
  }

  .thirdWrap {
    width: 100%;
    height: 40px;
    margin-top: 420px;
    display: flex;
    justify-content: center;

    .itemWrap {
      width: 101px;
      height: 40px;
      line-height: 40px;
      padding: 0 40px;
      border-right: 1px solid #7F7F7F;

      &:nth-of-type(3) {
        border: none;
      }

      i {
        font-size: 40px;
        color: #7F7F7F;
      }

      span {
        color: #7F7F7F;
        font-size: 28px;
      }
    }
  }
}
</style>