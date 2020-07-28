<template>
	<div class="tarBar">
		<div href="javascript:;" class="tarBarItem" @click="goto('/')" :class="{active:$route.path=='/'}">
			<i class="icon icon-homePage" ></i>
			<span>首页</span>
		</div>
		<div href="javascript:;" class="tarBarItem" @click="goto('list')" :class="{active:$route.path=='/list'}">
			<i class="icon icon-category"></i>
			<span>分类</span>
		</div>
		<div href="javascript:;" class="tarBarItem" @click="goto('buy')" :class="{active:$route.path=='/buy'}">
			<i class="icon icon-worth"></i>
			<span>值得买</span>
		</div>
		<div href="javascript:;" class="tarBarItem" @click="goto('cart')" :class="{active:$route.path=='/cart'}">
			<i class="icon icon-shoppingCart"></i>
			<span>购物车</span>
		</div>
		
		<div  href="javascript:;" class="tarBarItem" @click="gotoByIsLogin" :class="{active:$route.path=='/personal'}">
			<i class="icon icon-personal"></i>
			<span>个人</span>
		</div>
	</div>
</template>

<script>
	import local from '../../util/local'
	export default {
		name:"TarBar",
		methods:{
			goto(path){
				this.$router.replace(path)
			},
			gotoByIsLogin(){
				if(local.get("emailInfo")){
					this.$router.replace('personal')
				}else{
					this.$router.replace('login')
				}
			}
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	.tarBar
		z-index 99
		display flex
		position fixed
		bottom 0
		left 0
		width 100%
		height 97px
		background-color #fff
		border-top 1px solid rgb(217, 217, 217)
		.tarBarItem
			display flex
			flex 1
			flex-direction column
			align-items center
			justify-content center
			.icon
				width	40px
				height	40px
				background-image:url('./tabBar.png')
				background-repeat no-repeat
				background-size 100% 
				&.icon-homePage
					background-position 0px -250px
				&.icon-category
					background-position 0px -150px
				&.icon-worth
					background-position 0px -350px
				&.icon-shoppingCart
					background-position 0px -50px
				&.icon-personal
					background-position 0px -450px
			span 
				margin-top 7px
			&.active
				span 
					color #DD1A21
				.icon-homePage
					background-position 0px -200px
				.icon-category
					background-position 0px -100px
				.icon-worth
					background-position 0px -300px
				.icon-shoppingCart
					background-position 0px 0px
				.icon-personal
					background-position 0px -400px
</style>
