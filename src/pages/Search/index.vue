<template>
  <div class="search">
    <div class="header">
      <div class="searchIptWrap">
        <i class="iconfont icon-fangdajing"></i>
        <input
          class="searchIpt"
          type="text"
          placeholder="夏凉好物推荐"
          v-model="searchContent"
          ref="input"
        />
        <button @click="getsearch" class="searchBtn">搜索</button>
      </div>

      <div class="cancel" @click="cancel">
        <span>取消</span>
      </div>
    </div>
<!--  1234567890啊哈哈哈哈哈-->
    <div class="lishi">
      <div class="s">
        <span>历史记录</span>
        <i class="iconfont icon-goumai" @click="shanchu"></i>
      </div>
      <div class="ss" v-for="(item,index) in aaa" :key="index">
        <span>{{item}}</span>
      </div>
    </div>

    <ul class="searchList" v-if="searchList">
      <li class="searchListItem" v-for="(item, index) in searchList" :key="index">
        <span>{{item}}</span>
        <i class="iconfont icon-gengduo1"></i>
      </li>
    </ul>
<!-- --------------------- -->
    <div class="hotSearch">
      <div class="title">
        <span>热门搜索</span>
      </div>
      <div class="hotSearchList">
        <a
          class="listItem"
          :class="{active:index===listItemIndex}"
          href="##"
          v-for="(item, index) in hotSearchList"
          :key="index"
        >{{item.keyword}}</a>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import bm_search_input from "bm_search_input";
import local from "../../util/local";
export default {
  name: "Search",
  data() {
    return {
      aaa: [], //历史搜索记录，存本地
      hotSearchList: {},
      listItemIndex: 0,
      searchContent: "", //搜索的内容
      searchList: ""
    };
  },
  async mounted() {
    let body = await this.$http.shop.getSearchList("/getSearchList");
    if (body.code === 200) {
      this.hotSearchList = body.data.data;
    }
    // 先读取 之前lo里的searchList放进aaa
    if (local.get("List")) {
      //一上来 如果lo有就放入aaa
      this.aaa = local.get("List");
    }
  },
  methods: {
    getsearch() {
      if (this.searchContent) {
        axios
          .get(
            `/163/xhr/search/searchAutoComplete.json?keywordPrefix=${this.searchContent}`
          )
          .then(res => {
            this.searchList = res.data.data;
          });
      }

      // //////////////////////一系列

      this.input = ""; // 清空input

      if (this.searchContent == "") {
        //不能空
        alert("gun!");
        return;
      } else {
        this.aaa.push(this.searchContent);
        local.set("List", this.aaa);
      }
    },
    shanchu(){

      local.remove("List")
      this.aaa=""
    },
    cancel() {
      if (this.searchContent) {
        this.searchContent = "";
        this.searchList = "";
      } else {
        this.$router.replace("/");
      }
    }
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.search {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #eee;

  .header {
    width: 690px;
    height: 87px;
    padding: 0 30px;
    border-bottom: 1px solid #d9d9d9;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .searchIptWrap {
      position: relative;
      width: 564px;
      height: 56px;
      padding: 0 20px;
      background-color: #daa;
      line-height: 56px;
      text-align: right;
      background-color: #f4f4f4;

      .searchBtn {
        white-space: nowrap;
        position: absolute;
        right: 0px;
        top: 0px;
        width: 70px;
        height: 50px;
        font-size: 24px;
      }

      .icon-fangdajing {
        position: absolute;
        left: 15px;
        top: 0;
        font-size: 34px;
        color: #999;
      }

      .searchIpt {
        outline: none;
        border: none;
        width: 518px;
        height: 39px;
        font-size: 28px;
        background-color: #f4f4f4;
      }
    }

    .cancel {
      font-size: 28px;
      color: #333;
      width: 56px;
      height: 42px;
    }
  }

  .searchList {
    position: absolute;
    top: 87px;
    left: 0;
    width: 720px;
    padding-left: 30px;
    background-color: #fff;

    .searchListItem {
      width: 100%;
      height: 89px;
      border-bottom: 1px solid #d9d9d9;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        color: #333;
        font-family: PingFangSC-Light, helvetica, 'Heiti SC';
        font-size: 28px;
      }

      .iconfont {
        font-size: 28px;
        margin-right: 30px;
        color: #333;
      }
    }
  }

  .lishi {
    width: 690px;
    padding: 0 30px 30px;
    margin-bottom: 20px;
    // height 357px
    background-color: #fff;

    .s {
      justify-content:space-between
      width: 100%;
      height: 90px;
      line-height: 90px;
      font-size: 28px;
      color: #999;
      .iconfont {
        float:right;
        font-size: 28px;
        margin-right: 30px;
        color:grayscale;
      }
    }

    .ss {
      display: inline-block;
      color: #333;
      border: 1px solid #f4f4f4;
      border-radius: 4px;
      padding: 10px 15px;
      margin: 0 32px 32px 0;
      font-size: 24px;
    }
  }

  .hotSearch {
    width: 690px;
    padding: 0 30px 30px;
    margin-bottom: 20px;
    // height 357px
    background-color: #fff;

    .title {
      width: 100%;
      height: 90px;
      line-height: 90px;
      font-size: 28px;
      color: #999;
    }

    .hotSearchList {
      width: 100%;

      // height 237px
      .listItem {
        display: inline-block;
        color: #333;
        border: 1px solid #999;
        border-radius: 4px;
        padding: 10px 15px;
        margin: 0 32px 32px 0;
        font-size: 24px;
        font-family: PingFangSC-Light, helvetica, 'Heiti SC';

        &.active {
          border-color: #DD1A21;
          color: #DD1A21;
        }
      }
    }
  }
}
</style>
