<template>
  <div class="emailLogin">
    <!-- 头部 -->
    <div class="header">
      <div class="homepage" @click="$router.replace('/')">
        <i class="iconfont icon-shangchengicon21"></i>
      </div>
      <span class="txt">网易严选</span>
      <div>
        <i class="iconfont icon-fangdajing"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <div class="logoWrap">
      <img class="logo" src="./logo.png" alt="">
    </div>
    <div class="content">
      <div class="eamil">
        <input @focus="clearEmailErr" @blur="checkEmail" class="eamilInput" type="text" placeholder="邮箱账号" v-model="emailInfo"/>
        <div class="iconfont icon-guanbi" @click="clearEmailInfo"></div>
        <div v-if="emailErr"  class="emailerr">邮箱格式输入错误，请重新输入</div>
      </div>
      <div class="password">
        <input @focus="clearPwdErr" @blur="checkPwd" class="passwordInput" type="password" placeholder="密码" v-model="pwdInfo"/>
        <div class="iconfont icon-guanbi" @click="clearPwdInfo"></div>
        <div v-if="pwdErr"  class="pwderr">只能由6-18位的数字和字母组成</div>
      </div>
      <div class="register">
        <span>注册账号</span>
        <span>忘记密码？</span>
      </div>
      <div class="loginBtn" @click="login" :class="{on:loginTxt}">登录</div>
      <div class="otherLogin">
        <span>其他登录方式</span>
        <i class="iconfont icon-gengduo1"></i>
      </div>
    </div>
  </div>
</template>
<script>
  import local from '../../util/local'
  export default{
    name:"EmailLogin",
    data(){
      return {
        emailInfo:'', //收集用户输入的邮箱信息
        pwdInfo:'',  //收集用户输入的密码信息
        emailErr:false, //邮箱错误信息
        pwdErr:false, //密码错误信息
      } 
    },
    methods:{
      clearEmailInfo(){
        this.emailInfo = ''
      },
      clearPwdInfo(){
        this.pwdInfo = ''
      },
      //点击登录时
      login(){
        if(this.emailErr || this.pwdErr) return
        local.set("emailInfo",this.emailInfo)
        this.$router.replace('personal')
      },
      //失去焦点时校验邮箱信息
      checkEmail(){
        var re = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
        if(re.test(this.emailInfo)){
          this.emailErr = false
        }else{
          this.emailErr = true
        }
      },
      //获得焦点时清除邮箱的校验错误信息
      clearEmailErr(){
        this.emailErr = false
      },
      //失去焦点时校验密码信息
      checkPwd(){
        var re = /^[a-z0-9]+$/i
        if(re.test(this.pwdInfo)){
          this.pwdErr = false
        }else{
          this.pwdErr = true
        }
      },
      //获得焦点时清除密码的校验错误信息
      clearPwdErr(){
        this.pwdErr = false
      }
    },
    computed:{
      //改变登录按钮的文本颜色
      loginTxt(){
        if(this.emailInfo && this.pwdInfo) return true
        else return false
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.emailLogin
  position relative
  z-index 10
  width 100%
  height 100%
  padding-top 88px
  box-sizing border-box
  background-color #fff
  overflow hidden
  .header
    width 100%
    height 88px
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
  .logoWrap
      width 100%
      height 90px
      padding 160px 0 70px 0
      .logo
        display block
        margin auto
        width 268px
        height 90px
  .content
    width 670px
    height 578px
    padding 114px 40px 0
    // background-color pink
    .eamil
      position relative
      width 100%
      height 90px
      border-bottom 1px solid #c5cddb
      .eamilInput
        width 100%
        height 43px
        margin-top 26px
        border 0 
        outline 0
        font-size 28px
      .emailerr
        position absolute
        bottom -33px
        left 0
        color #DD1A21
    .password
      position relative
      width 100%
      height 90px
      margin-top 20px
      border-bottom 1px solid #c5cddb
      .passwordInput
        width 100%
        height 43px
        margin-top 26px
        border 0 
        outline 0
        font-size 28px
      .pwderr
        position absolute
        bottom -33px
        left 0
        color #DD1A21
    .iconfont
      position absolute
      right 15px
      top 35px
      font-size 26px
      color #CCCCCC
    .register
      width 100%
      height 40px
      margin-top 50px
      display flex
      align-items center
      justify-content space-between
      span 
        color #666
    .loginBtn
      width 100%
      height 90px
      background-color #DD1A21
      margin-top 40px
      color #EE8D90
      text-align center
      line-height 90px
      font-size 28px
      &.on
        color #fff
    .otherLogin
      position relative
      width 100%
      height 38px
      margin-top 80px
      line-height 38px
      text-align center
      span 
        font-size 26px
      .icon-gengduo1
        top 2px
        right 230px
        font-size 30px
        color #666
</style>