<template>
  <div class="homePage">
    <!-- 头部区域 -->
    <div class="header">
      <!-- 搜索栏 -->
      <div class="searchWrap">
        <a href="##" class="logo"></a>
        <div class="search" @click="$router.replace('search')">
          <span>搜索的内容</span>
        </div>
        <div class="logobtn" @click="islogin">登录</div>
      </div>
      <!-- 导航栏 -->
      <div class="nav">
        <div class="navScroll" ref="navScroll">
          <ul class="scroll" v-if="navList">
            <li class="navitem">
              <span class="txt">推荐</span>
            </li>
            <li class="navitem" v-for="(item,index) in navList" :key="index">{{item.text}}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 内容区域 -->

    <div class="content">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/dog.jpg" alt />
            qqq
          </div>
          <div class="swiper-slide">
            <img src="./images/dog.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="./images/dog.jpg" alt />
            eee
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!-- 服务栏 -->
      <div class="fuwuWrap">
        <ul class="fuwu">
          <li class="fuwuitem">
            <span>网易自营品牌</span>
          </li>
          <li class="fuwuitem">
            <span>30天无忧退货</span>
          </li>
          <li class="fuwuitem">
            <span>48小时快速退款</span>
          </li>
        </ul>
      </div>
      <!-- 商品分类 -->
      <div class="goodsCategoryWrap">
        <ul class="goodsCategory">
          <li class="goodsCategoryItem" v-for="(item, index) in navList" :key="index">
            <a href="##">
              <img :src="item.picUrl" alt />
              <span>{{item.text}}</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 优惠专区 -->
      <div class="discountsWrap">
        <div class="discounts">
          <a class="discountsImg" href="##"></a>
        </div>
      </div>
      <!-- 新人专享礼 -->
      <v-newPeopleGift></v-newPeopleGift>
      <!-- 类目热销榜 -->
      <v-hotSell></v-hotSell>
      <!-- 限时购 -->
      <v-timeLimitBuy></v-timeLimitBuy>
      <!-- 新品首发 -->
      <v-newProduct></v-newProduct>
      <!-- 商品模块 -->
      <v-shoppingModule></v-shoppingModule>
    </div>
  </div>
</template>

<script>
import local from "../../util/local";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import BScroll from "better-scroll";
import newPeopleGift from "../../components/newPeopleGift/newPeopleGift";
import hotSell from "../../components/hotSell/hotSell";
import timeLimitBuy from "../../components/timeLimitBuy/timeLimitBuy";
import newProduct from "../../components/newProduct/newProduct";
import shoppingModule from "../../components/shoppingModule/shoppingModule";
export default {
  name: "Home",
  components: {
    "v-newPeopleGift": newPeopleGift,
    "v-hotSell": hotSell,
    "v-timeLimitBuy": timeLimitBuy,
    "v-newProduct": newProduct,
    "v-shoppingModule": shoppingModule
  },
  data() {
    return {
      navList: [],
      navIndex: 0,
      navPull: false
    };
  },
  methods: {
    islogin() {
      if (local.get("emailInfo")) {
        this.$router.replace("cart");
      } else {
        this.$router.replace("login");
      }
    }
  },
  async mounted() {
    this.$nextTick(() => {
      new BScroll(this.$refs.navScroll, {
        scrollX: true,
        click: true
      });
    });
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        loop: true, //循环模式
        pagination: {
          //分页器
          el: ".swiper-pagination"
        }
      });
    });
    // 导航
    let body = await this.$http.shop.getKingKongList("/getKingKongList");
    if (body.code === 200) {
      this.navList = body.data;
    }
  }
};
</script>

<style lang="less" scoped>
.homePage {
  width: 100%;
  background-color: #eee;
  padding-top: 148px;
  padding-bottom: 98px;
  .header {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    .searchWrap {
      //搜索栏
      width: 100%;
      height: 88px;
      background-color: #fff;
      padding: 16px 30px;
      box-sizing: border-box;
      display: flex;
      .logo {
        width: 138px;
        height: 40px;
        line-height: 40px;
        background-image: url("./images/logo.png");
        margin-right: 20px;
        background-size: cover;
      }
      .search {
        width: 442px;
        height: 56px;
        border-radius: 8px;
        background-color: #ededed;
        align-items: center;
        display: flex;
        justify-content: center;
        span {
          color: #666;
          font-size: 28px;
        }
      }
      .logobtn {
        width: 72px;
        height: 40px;
        border: 1px solid #dd1a21;
        text-align: center;
        line-height: 40px;
        color: #dd1a21;
        font-size: 24px;
        border-radius: 8px;
        margin-left: 16px;
      }
    }
    //导航栏
    .nav {
      width: 750px;
      height: 60px;
      line-height: 60px;
      .navScroll {
        position: relative;
        display: flex;
        height: 100%;
        background-color: #fff;
        .scroll {
          position: relative;
          display: flex;
          .navitem {
            padding: 0 16px;
            flex: none;
            font-size: 28px;
            white-space: nowrap;
          }
        }
      }
    }
  }
  .content {
    width: 100%;
    height: 100%;
    overflow: auto;
    // 轮播
    .swiper-container {
      width: 100%;
      height: 296px;
      overflow: hidden;
      .swiper-wrapper {
        width: 100%;
        height: 100%;
        .swiper-slide {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            display: inline-block;
          }
        }
      }
    }
    // 服务栏
    .fuwuWrap {
      width: 100%;
      height: 72px;
      background-color: #fff;
      .fuwu {
        width: 100%;
        height: 90px;
        padding: 0 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          display: inline-block;
          width: 32px;
          height: 32px;
          margin-right: 8px;
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
      }
    }
    //商品分类
    .goodsCategoryWrap {
      width: 100%;
      height: 372px;
      background-color: #fff;
      .goodsCategory {
        overflow: hidden;
        .goodsCategoryItem {
          width: 110px;
          height: 156px;
          margin: 10px 20px 9px 20px;
          float: left;
          a {
            width: 110px;
            height: 110px;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              width: 100%;
              height: 100%;
            }
            span {
              margin-top: 10px;
              font-size: 24px;
              color: rgb(51, 51, 51);
            }
          }
        }
      }
    }
    // 优惠专区
    .discountsWrap {
      width: 100%;
      height: 240px;
      background-color: #cbf;
      .discounts {
        width: 100%;
        height: 100%;
        .discountsImg {
          width: 100%;
          height: 100%;
          // background-image: url("./images/discounts.gif");
        }
      }
    }
  }
}
</style>
