let Koa = require('koa');
let KoaRouter = require('koa-router');

// 1. 生成应用实例
const app = new Koa();
// 2. 生成路由器
const router = new KoaRouter();

router.get('/', (ctx, next) => {

    // 返回数据
    ctx.body = '服务器返回的测试数据';
});
// 主页da没啥用==
let indexData = require('./datas/index.json');
router.get('/getIndexData', (ctx, next) => {
    ctx.body = {
        code: 200,
        data: indexData
    };
});


// 主页导航 、商品分类
let getKingKongList = require('./datas/index.json');
router.get('/getKingKongList', (ctx, next) => {
    ctx.body = {
        code: 200,
        data: getKingKongList.kingKongModule.kingKongList
    };
});
// 主页类目热销榜
let getCategoryList = require('./datas/index.json');
router.get('/getCategoryList', (ctx, next) => {
    ctx.body = {
        code: 200,
        data:getCategoryList.categoryHotSellModule.categoryList
    };
});

// 主页nav对应模块数据
let indexCateModule = require('./datas/indexCateModule.json');
router.get('/indexCateModule', (ctx, next) => {
    ctx.body = {
        code: 200,
        data: indexCateModule
    };
});
// 分类左侧导航数据
let cateNavDatas = require('./datas/cateNavDatas.json');
router.get('/cateNavDatas', (ctx, next) => {
    ctx.body = {
        code: 200,
        data: cateNavDatas
    };
});
// 分类右侧内容数据
let cateLists = require('./datas/cateLists.json');
router.get('/cateLists', (ctx, next) => {
    ctx.body = {
        code: 200,
        data: cateLists
    };
});

// zhide
let getWorthSwiper = require('./datas/zhide.json');
router.get('/getWorthSwiper', (ctx, next) => {
    ctx.body = {
        code: 200,
        data: getWorthSwiper.data.navList
    };
});

let getSearchList = require('./datas/host.json');
router.get('/getSearchList', (ctx, next) => {
    ctx.body = {
        code: 200,
        data: getSearchList
    };
});

app.use(router.routes()).use(router.allowedMethods()) // 允许使用路由// 允许使用路由方法

app.listen('3001', (err) => {
    if (err) {
        console.log('服务器启动失败');
        console.log(err);
    } else {
        console.log('服务器启动成功');
        console.log('服务器地址： http://localhost:3001')
    }
})
