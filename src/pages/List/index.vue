<template>
  <div class="category">
    <!-- 头部 -->
    <div class="header">
      <div class="search" @click="$router.replace('search')">
        <i class="iconfont icon-fangdajing"></i>
        <span>想搜啥就搜啥</span>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="content">
      <!-- 导航 左边 -->
      <div class="navWrap">
        <div class="nav" ref="nav">
          <ul class="cate">
            <li
              @click="changeIndex(item.id)"
              class="cateItem"
              :class="{active:item.id===cateIndex}"
              v-if="categoryL1List"
              v-for="(item,index) in categoryL1List"
              :key="item.id"
            >
              <a href="##" class="txt">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 导航 右边 -->
      <div class="cateListWrap" ref="cateListWrap">
        <div class="cateList" v-if="cateObj">
          <div class="banner" v-if="cateObj.categoryList">
            <img :src="cateObj.categoryList[0].bannerUrl" alt />
          </div>
          <div class="banner" v-if="cateObj.subCateList">
            <img :src="cateObj.subCateList[0].wapBannerUrl" alt />
          </div>
          <ul class="list" v-if="cateObj.categoryList">
            <li class="listItem" v-for="(item, index) in cateObj.categoryList" :key="index">
              <img :src="item.wapBannerUrl" alt />
              <span>{{item.name}}</span>
            </li>
          </ul>
          <ul class="list" v-if="cateObj.subCateList">
            <li class="listItem" v-for="(item, index) in cateObj.subCateList" :key="index">
              <img :src="item.wapBannerUrl" alt />
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "List",
  data() {
    return {
      cateIndex: 11,
      categoryL1List: [],
      cateLists: []
    };
  },
  async mounted() {
    // zuo
    let aa = await this.$http.shop.cateNavDatas("/cateNavDatas");
    if (aa) {
      this.categoryL1List = aa.data.categoryL1List;
      this.$nextTick(() => {
        new BScroll(this.$refs.nav, { scrollY: true, click: true });
      });
    }

    // // you
    let bb = await this.$http.shop.cateLists("/cateLists");
    this.cateLists = bb.data;
    this.$nextTick(() => {
      this.rightBScroll = new BScroll(this.$refs.cateListWrap, {
        scrollY: true,
        click: true
      });
    });
  },
  methods: {
    changeIndex(index) {
      this.cateIndex = index;
    }
  },
  computed: {
    cateObj() {
      return this.cateLists.find(item => item.id === this.cateIndex);
    }
  },
  watch: {
    cateIndex(value) {
      console.log(value);
      if (this.rightBScroll) {
        console.log("ssss");
        // refresh
        this.rightBScroll.scrollTo(0, 0);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.right-list {
  height: 120%;
}
.category {
  width: 100%;
  height: 100%;
  padding-top: 87px;
  overflow: hidden;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 87px;
    padding: 15px 30px;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(217, 217, 217);

    .search {
      width: 100%;
      height: 57px;
      background-color: rgb(237, 237, 237);
      border-radius: 10px;
      text-align: center;
      line-height: 57px;

      .icon-fangdajing {
        font-size: 30px;
        color: gray;
        font-weight: 700;
        margin-right: 10px;
      }

      span {
        color: #666;
        font-size: 28px;
      }
    }
  }

  .content {
    width: 100%;
    height: 1148px;
    display: flex;

    .navWrap {
      width: 161px;
      height: 100%;
      padding: 54px 0;
      box-sizing: border-box;
      border-right: 1px solid rgb(217, 217, 217);
      background-color: #fff;
      .nav {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .cate {
          display: inline-flex;
          flex-direction: column;
          min-height: 1041px;
          width: 100%;

          .cateItem {
            position: relative;
            width: 100%;
            height: 50px;
            text-align: center;
            line-height: 50px;
            margin-top: 40px;

            &.active {
              &:after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                background-color: #ab2b2b;
                width: 6px;
                height: 100%;
              }

              .txt {
                color: rgb(171, 43, 43);
              }
            }

            &:nth-of-type(1) {
              margin-top: 0;
            }

            .txt {
              font-size: 28px;
              color: #333;
            }
          }
        }
      }
    }
    .cateListWrap {
      overflow: hidden;
      height: 100%;
      width: 588px;
      padding: 0 30px 21px 30px;
      box-sizing: border-box;
      .cateList {
        padding-top: 30px;
        width: 100%;
        min-height: 105%;
        .banner {
          width: 100%;
          height: 192px;
          margin-bottom: 32px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .list {
          width: 100%;
          overflow: hidden;
          .listItem {
            float: left;
            width: 144px;
            height: 216px;
            margin-right: 34px;
            display: flex;
            flex-direction: column;
            align-items: center;
            &:nth-of-type(3n){
              margin-right: 0;
            }
            img{
              width: 144px;
              height: 144px;
            }
          }
        }
      }
    }
  }
}
</style>
