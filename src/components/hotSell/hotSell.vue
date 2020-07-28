<template>
<!-- 类目热销榜 -->
  <div class="hotSell">
    <!-- 标题 -->
    <div class="title">
      <span class="txt">类目热销榜</span>
    </div>
    <div class="contentWrap">
      <ul class="content">
        <li class="contentItem" v-for="(item, index) in categoryList" :key="index">
          <div class="name">{{item.categoryName}}</div>
          <div class="imgWrap">
            <img :src="item.picUrl" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name:"HotSell",
    data(){
      return {
        categoryList:[]
      }
    },
    async mounted(){
      let aa =await this.$http.shop.getCategoryList("/getCategoryList")
      this.categoryList = aa.data

    }
    
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .hotSell
    width 100%
    height 710px
    margin-bottom 20px
    background-color #fff
    padding 0 30px 30px
    box-sizing border-box
    .title
      width 690px
      height 90px
      line-height 90px
      text-align left 
      .txt
        position relative
        display inline-block
        font-size 32px
        color rgb(51, 51, 51)
        font-family:PingFangSC-Regular;
    .contentWrap
      width 100%
      height 590px
      .content
        width 100%
        height 100%
        background-color #fff
        .contentItem
          width 165px
          height 180px
          margin 0 10px 10px 0
          float left
          background-color rgb(245, 245, 245)
          &:nth-child(1)
            width 340px
            height 200px
            background-color rgb(249, 243, 228)
            display flex
            .name
              position relative
              width 147px
              font-size 28px
              color rgb(51, 51, 51)
              margin-top 66px
              &:after
                content ''
                position absolute
                top 54px
                left 35px
                width 48px
                height 4px
                background-color #333
            .imgWrap
              width 200px
              height 200px
              margin 0
              img 
                width 100%
                height 100%
          &:nth-child(2)
            display flex
            width 340px
            height 200px
            margin-right 0
            background-color rgb(235, 239, 246)
            .name
              position relative
              width 147px
              font-size 28px
              color rgb(51, 51, 51)
              margin-top 66px
              &:after
                content ''
                position absolute
                top 54px
                left 35px
                width 48px
                height 4px
                background-color #333
            .imgWrap
              width 200px
              height 200px
              margin 0
              float right
              img 
                width 100%
                height 100%
          &:nth-child(6)
             margin-right 0
          &:nth-child(10)
             margin-right 0
          .name
            width 165px
            height 36px
            font-size 24px
            color rgb(51, 51, 51)
            margin-top 10px
            text-align center
          .imgWrap
            width 120px
            height 120px
            margin 0 auto
            img 
              width 100%
              height 100%

</style>