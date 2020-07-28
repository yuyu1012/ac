<template>
<!--  人气推荐 -->
  <div class="recommend">
    <!-- 标题 -->
    <div class="title">
      <span class="txt">人气推荐</span>
      <div class="more">
        <span>更多></span>
        <i class="iconfont icon-gengduo"></i>
      </div>
    </div>
    <div class="top">
      <div class="imgWrap">
        <img src="./recommend_1.png" alt="">
      </div>
      <div class="content">
        <div class="tag">
          <span>母亲节特惠</span>
        </div>
        <div class="text">
          <span class="name">15分钟快速救脸，射频多功能美容仪</span>
          <span class="desc">掌心里的“美容院”</span>
          <span class="price">¥759</span>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
  export default{
    name:"Recommend"
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .recommend
    width 100%
    height 798px
    background-color #fff
    margin-bottom 20px
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
      .more
        width 77px
        height 99px
        float right
        font-size 28px
        color rgb(51, 51, 51)
  
        .icon-gengduo
          font-size 28px
    .top
      width 100%
      height 280px
      background-color #FEF0DF
      margin-bottom 20px
      display flex
      .imgWrap
        width 280px
        height 280px
        img 
          width 100%
          height 100%
      .content
        width 350px
        height 162px
        margin auto
        background-color #ffd4
        .tag
          width 108px
          height 30px
          border 1px solid #DD1A21
          background-color rgba(255,255,255,.9)
          color: #DD1A21
          border-radius 10px
          line-height 30px
          text-align center
          font-size 18px
          margin-bottom 9px
        .text
          width 100%
          height 120px
          display flex
          flex-direction column
          align-items right 
          .name
            height 42px
            line-height 42px
            font-family: PingFangSC-Regular
            font-size 28px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
          .desc
            height 36px
            line-height 36px
            font-size 24px
            color: #7F7F7F
          .price
            height 42px
            line-height 42px
            color: #DD1A21
            font-size 28px


    .bottom
      width 100%
      height 361px
      background-color #aac
</style>