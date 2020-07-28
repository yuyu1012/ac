<template>
  <!-- 新人专享礼 -->
  <div class="newPeopleGift">
    <!-- 标题 -->
    <div class="title">
      <span class="txt">新人专享礼</span>
    </div>
    <div class="content">
      <div class="left">
        <div class="title">
          <span>新人专享礼包</span>
        </div>
        <div class="detail">
          <img src="./newPeopleGift_1.png" alt="">
          <div class="more"></div>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="title">
            <span class="title_1">福利社</span>
            <span class="title_2">今日特价</span>
          </div>
          <div class="picWrap">
            <div class="pic"></div>
            <div class="discount">
              <span class="line1">¥7.9</span>
              <span class="line2">¥9.9</span>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="title">
            <span class="title_1">新人拼团</span>
            <span class="title_2">1元起包邮</span>
          </div>
          <div class="picWrap">
            <div class="pic"></div>
            <div class="discount">
              <span class="line1">¥9.9</span>
              <span class="line2">¥16.9</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:"NewPeopleGift"
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .newPeopleGift
    width 100%
    height 528px
    background-color #fff
    margin 20px 0
    padding 0 30px 30px
    box-sizing border-box
    .title
      width 690px
      height 90px
      line-height 90px
      text-align center
      .txt
        position relative
        display inline-block
        font-size 32px
        color rgb(51, 51, 51)
        font-family:PingFangSC-Regular;
        &:before
          content ''
          position absolute
          left -40px
          top 45px
          width 24px
          height 3px
          background-color #333
        &:after
          content ''
          position absolute
          right  -40px
          top 45px
          width 24px
          height 3px
          background-color #333
    .content
      width 690px
      height 438px
      display flex
      .left
        width 343px
        height 100%
        margin-right 4px
        background: #F9E9CF
        border-radius 5px
        .title
          width 313px
          height 48px
          margin 30px 0 0 30px
          line-height 48px
          text-align left 
          span 
            font-size 32px
            color rgb(51, 51, 51)
            font-family: PingFangSC-Medium
        .detail
          position relative
          width 258px
          height 257px
          margin 37px auto
          img
            width 100%
            height 100%
          .more
            position absolute
            top 219px
            left 163px
            width 30px
            height 20px
            background-image url('./more.png')
            background-size 100%
      .right
        width 343px
        height 100%
        .top
          position relative
          width 100%
          height 217px
          margin-bottom 4px
          background-color #FBE2D3
          padding 20px 0 0 30px
          box-sizing border-box
        .title
          width 313px
          height 84px
          display flex
          flex-direction column
          .title_1
            text-align left
            height 48px
            width  100%
            line-height 48px
            font-size 32px
            color #333
            font-family: PingFangSC-Medium
          .title_2
            text-align left
            font-size 24px
            color #7F7F7F
            height 36px
            width  100%
            line-height 36px
        .picWrap
            position absolute
            top 15px
            right 0px
            width 200px
            height 200px
            .pic
              width 200px
              height 200px
              background-image url('./newPeopleGift_2.png')
              background-size 100%
            .discount
              position absolute
              top 0
              left 90px
              width 80px
              height 80px
              border-radius 50%
              background-color #F59524
              display flex
              flex-direction column
              align-items center
              justify-content center
              font-family: PingFangSC-Light,helvetica,'Heiti SC'
              .line1
                font-size 24px
                color #fff
                word-spacing 0px
              .line2
                font-size 20px
                color #fff
                text-decoration-line line-through
        .bottom
          position relative
          width 100%
          height 217px
          background-color #FFECC2
          padding 20px 0 0 30px
          box-sizing border-box
          .pic
            background-image url('./newPeopleGift_3.png')
          .title_2
            background: #CBB693
            width 120px
            height 32px
            line-height 32px
            text-align center
            font-size 22px
            color #fff
            border-radius 5px
</style>