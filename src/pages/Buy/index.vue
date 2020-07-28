<template>
  <div class="worth">
    <div class="header">
      <div class="homepage">
        <i class="iconfont icon-shangchengicon21" @click="$router.replace('/')"></i>
      </div>
      <span class="txt">值得买</span>
      <div>
        <i class="iconfont icon-fangdajing" @click="$router.replace('search')"></i>
        <i class="iconfont icon-gouwuche" @click="$router.replace('cart')"></i>
      </div>
    </div>
    <div class="swiperWrap">
      <div class="swiperTitle">
        <img class="worthBg" src="./worthBg.png" alt="">
        <img class="logo" src="./worthLogo.png" alt="">
        <div class="text">严选好物&nbsp;用心生活</div>
      </div>
      <div class="swiperContent">
        <div class="swiper-container">
          <div class="swiper-wrapper">

               <div class="swiper-slide" v-for="(item,index) in worthSwiper.slice(0,Math.ceil(worthSwiper.length/2))" :key="index">
              <div class="top">
                <img class="Img" :src="item.picUrl" alt="">
                <span class="tit">{{item.mainTitle}}</span>
                <span class="txt">{{item.viceTitle}}</span>
              </div>
                 <div class="bottom" v-if="worthSwiper[index+Math.ceil(worthSwiper.length/2)]">
                <img class="Img" :src="worthSwiper[index+Math.ceil(worthSwiper.length/2)].picUrl" alt="">
                <span class="tit">{{worthSwiper[index+Math.ceil(worthSwiper.length/2)].mainTitle}}</span>
                <span class="txt">{{worthSwiper[index+Math.ceil(worthSwiper.length/2)].viceTitle}}</span>
              </div>
            </div>

          </div>
          <div class="swiper-pagination">
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------------------------------------------------ -->
    <div class="waterFull">
      <div class="left">
        <div class="Item"  v-for="(item, index) in waterfullList" :key="index" v-if="index%2===0">
          <img class="Img" :src="item.topics[0].newAppBanner ? item.topics[0].newAppBanner : item.topics[0].picUrl" alt="">
          <div class="describe">{{item.topics[0].title}}</div>
          <div class="userWrap">
            <div class="user">
              <img class="userImg" :src="item.topics[0].avatar" alt="">
              <span class="username">{{item.topics[0].nickname}}</span>
            </div>
            <div class="readCountWrap">
              <i class="iconfont icon-yanjing"></i>
              <span class="readCount">{{parseInt(item.topics[0].readCount/1000)}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="Item"  v-for="(item, index) in waterfullList" :key="index" v-if="index%2">
          <img class="Img" :src="item.topics[0].newAppBanner ? item.topics[0].newAppBanner : item.topics[0].picUrl" alt="">
          <div class="describe">{{item.topics[0].title}}</div>
          <div class="userWrap">
            <div class="user">
              <img class="userImg" :src="item.topics[0].avatar" alt="">
              <span class="username">{{item.topics[0].nickname}}</span>
            </div>
            <div class="readCountWrap">
              <i class="iconfont icon-yanjing"></i>
              <span class="readCount">{{parseInt(item.topics[0].readCount/1000)}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Swiper from 'swiper'
import "../../../node_modules/swiper/dist/css/swiper.min.css"
  export default{
    name:"Worth",
    data(){
      return {
        worthSwiper:[],
        waterfullList:[],
        page:1,
        size:5
      }
    },
    async mounted(){
      let body = await this.$http.shop.getWorthSwiper("/getWorthSwiper")
      if(body.code === 200){
        
        this.worthSwiper = body.data
        console.log(this.worthSwiper)
      }
      this.$nextTick(()=>{
        new Swiper('.swiper-container',{
          slidesPerView : 4,
          pagination: { //分页器
            el: '.swiper-pagination',
          }
        })
      })
      axios.get("/163/topic/v1/find/recManual.json").then((res)=>{

        this.waterfullList = res.data.data
      })

      axios.get(`/163/topic/v1/find/recAuto.json?page=${this.page}&size=${this.size}`).then((res)=>{
        this.page++
        console.log(res,'qqqqqq');
        this.waterfullList.push(...res.data.data.result)
      })
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .worth
    width 100%
    height 100%
    overflow auto
    padding 100px 0 97px 0
    background-color #eeeeee
    .header
      width 100%
      height 100px
      background-color #fff
      padding 0 26px 0 24px
      box-sizing border-box
      position fixed
      top 0
      left 0
      z-index 10
      border-bottom 1px solid rgb(217, 217, 217);
      display flex
      align-items center
      justify-content space-between
      .homepage
        width 46px
        height 100px
        line-height 100px
        .icon-shangchengicon21
          font-size 50px
      .txt
        font-size 36px
        width 150px
        height 40px
        line-height 40px
        text-align center
        margin-left 90px
      .icon-fangdajing
        width 46px
        height 100px
        line-height 100px
        font-size 50px
        margin-right 30px
      .icon-gouwuche
        width 46px
        height 100px
        line-height 100px
        font-size 60px
    .swiperWrap
      position relative
      width 100%
      height 685px
      .swiperTitle
        position relative
        width 100%
        height 524px
        .worthBg
          width 100%
          height 100%
        .logo
          position absolute
          left 12px
          top 30px
          width 130px
          height 69px
        .text
          position absolute
          left 146px
          top 48px
          width 249px
          height 44px
          font-size 30px
          color #fff
      .swiperContent
        position absolute
        left 20px
        bottom 0
        width 710px
        height 540px
        border-radius 12px
        overflow hidden
        background-color #fff
        .swiper-container
          width 100%
          height 540px
          .swiper-wrapper 
            width 100%
            height 540px
            .swiper-slide
              float left
              width 177px 
              height 540px
              padding 36px 3px 3px
              box-sizing border-box
              .top
                width 168px
                height 201px
                display flex
                flex-direction column
                align-items center
              .bottom
                margin-top 28px
                width 168px
                height 201px
                display flex
                flex-direction column
                align-items center
              .Img
                width 120px
                height 120px
              .tit 
                width 168px
                height 40px
                margin-top 8px
                line-height 40px
                text-align center
                color #333
                font-family 'PingFang-SC-Bold'
                font-weight bold
                font-size 28px
              .txt
                font-family 'PingFangSC-Regular'
                width 168px
                height 30px
                line-height 30px
                text-align center
                color #999
          .swiper-pagination
            /deep/.swiper-pagination-bullet
              width 40px
              height 4px
              background-color #D9D9D9
              opacity 1
            /deep/.swiper-pagination-bullet-active
              width 40px
              height 4px
              background-color #DD1A21
              opacity 1
              

            
    .waterFull
      width 710px
      padding 0 20px
      margin-top 20px
      display flex
      justify-content space-between
      .left
        width 345px
      .right
        width 345px
      .Item
        width 100%
        margin-bottom 20px
        background-color #fff
        border-radius 20px
        .Img
          width 100%
          border-radius 20px
        .describe
          color #333
          font-size 28px
          width 311px
          padding 18px 8px 0
        .userWrap
          width 311px
          height 48px
          margin-top 20px
          padding 16px 17px 24px 
          display flex
          justify-content space-between
          .user
            width 104px
            height 48px
            display flex
            align-items center
            justify-content space-between
            .userImg
              width 44px
              height 44px
              border-radius 50%
            .username
              color #7f7f7f
              font-size 24px
          .readCountWrap
            width 100px
            height 48px
            display flex
            justify-content color #000
            align-items center
            .icon-yanjing
              font-size 24px
              color #7f7f7f
              margin-right 10px
            .readCount
              font-size 24px
              color #7f7f7f

</style>