<template>
  <div class="shoppingCart">
    <!-- 当用户已登录时显示的页面 -->
    <div class="alreadyLog" v-if="isLogin">
      <div class="header">
        <div class="left">
          <span>购物车</span>
        </div>
        <div class="right">
          <span>领券</span>
        </div>
      </div>
      <div class="service">
        <div class="serviceItem">30天无忧退货</div>
        <div class="serviceItem">48小时快速退款</div>
        <div class="serviceItem">满99元免邮费</div>
      </div>
      <div class="content">
        <img src="./cart.png" alt />
        <div class="txt">去添加点什么吧</div>
      </div>
    </div>
    <!-- 当用户未登录时显示的页面 -->
    <div class="notLog" v-else>
      <div class="header">
        <div class="left">
          <span>购物车</span>
        </div>
        <div class="right">
          <span>领券</span>
        </div>
      </div>
      <div class="service">
        <div class="serviceItem">30天无忧退货</div>
        <div class="serviceItem">48小时快速退款</div>
        <div class="serviceItem">满99元免邮费</div>
      </div>
      <div class="content">
        <img src="./cart.png" alt />
        <div class="loginBtn" @click="$router.replace('login')">登录</div>
      </div>
    </div>
  </div>
</template>
<script>
import local from "../../util/local";
export default {
  name: "ShoppingCart",
  computed: {
    isLogin() {
      if (local.get("emailInfo")) {
        return true;
      } else {
        false;
      }
    }
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.shoppingCart {
  width: 100%;
  height: 100%;
  padding-top: 88px;
  background-color: #F4F4F4;
  box-sizing: border-box;

  .alreadyLog {
    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 88px;
      padding: 0 30px;
      box-sizing: border-box;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        width: 108px;
        height: 88px;
        line-height: 87px;
        text-align: center;

        span {
          color: #333;
          font-size: 36px;
        }
      }

      .right {
        position: relative;
        width: 40px;
        height: 30px;
        padding: 4px 12px;
        line-height: 30px;
        text-align: center;
        margin-right: 10px;
        background-image: linear-gradient(-45deg, #FC865F 0, #FC625F 100%);

        &:after {
          content: '';
          position: absolute;
          top: 50%;
          margin-top: -8px;
          left: -11px;
          width: 16px;
          height: 16px;
          background-color: #ffffff;
          border-radius: 50%;
        }

        &:before {
          content: '';
          position: absolute;
          top: 50%;
          margin-top: -8px;
          right: -11px;
          width: 16px;
          height: 16px;
          background-color: #ffffff;
          border-radius: 50%;
        }

        span {
          color: #fff;
          font-size: 20px;
          font-family: PingFangSC-Light, helvetica, 'Heiti SC';
        }
      }
    }

    .service {
      width: 690px;
      height: 70px;
      padding: 0 30px;
      background-color: #EEEEEE;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .serviceItem {
        font-size: 24px;
        color: #666;
      }
    }

    .content {
      width: 100%;
      height: 750px;
      margin-top: 340px;

      img {
        width: 248px;
        height: 248px;
        margin: auto;
      }

      .txt {
        text-align: center;
        font-size: 28px;
        color: #7f7f7f;
      }
    }
  }

  .notLog {
    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 88px;
      padding: 0 30px;
      box-sizing: border-box;
      background-color: #fff;
      display: flex;
      justify-content: space-between;

      .left {
        width: 108px;
        height: 88px;
        line-height: 87px;
        text-align: center;

        span {
          color: #333;
          font-size: 36px;
        }
      }

      .right {
        width: 88px;
        height: 88px;
        line-height: 88px;
        text-align: center;
        margin-right: 10px;

        span {
          color: #DD1A21;
          font-size: 30px;
        }
      }
    }

    .service {
      width: 690px;
      height: 70px;
      padding: 0 30px;
      background-color: #EEEEEE;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .serviceItem {
        font-size: 24px;
        color: #666;
      }
    }

    .content {
      width: 100%;
      height: 750px;
      margin-top: 340px;

      img {
        width: 248px;
        height: 248px;
        margin: auto;
      }

      .loginBtn {
        width: 480px;
        height: 92px;
        background-color: #DD1A21;
        color: #ffffff;
        font-size: 30px;
        line-height: 92px;
        text-align: center;
        margin: auto;
        margin-top: 38px;
      }
    }
  }
}
</style>