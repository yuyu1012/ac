
export default {
  // name:"Shop",
  api: {
    // 主页
    indexCateModule: {
      url: "/3001/indexCateModule",
      method: "get",
      // toast:true
    },

    //分类页面---左边导航
    cateNavDatas: {
      url: "/3001/cateNavDatas",
      method: "get"
    },
    //分类页面---右边内容
    cateLists: {
      url: "/3001/cateLists",
      method: "get"
    },

    //搜索页面的热门搜索列表
    getSearchList: {
      url: "/3001/getSearchList",
      method: "get"
    },
    // ////////////////////////////////////////
    // 主页导航 、商品分类
    getKingKongList: {
      url: "/3001/getKingKongList",
      method: "get",
      // toast:true
    },
    // 主页类目热销榜
    getCategoryList: {
      url: "/3001/getCategoryList",
      method: "get"
    },
    getWorthSwiper: {
      url: "/3001/getWorthSwiper",
      method: "get"

    },


  }
}
