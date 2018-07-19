<template>
  <div class="indexContent">
    <div class="indexTop">
      <span >欢迎使用图书管理系统</span>
      <span class="welInfo"><i class="inputUserIcon"></i>欢迎您<i class="triangleClass"></i></span>
    </div>
    <div class="indexContent">
      <div class="listInfo">
        <li @click="goBookSearch">图书查询<i class="triRight1"></i></li>
        <li>借阅信息<i class="triRight2"></i></li>
        <li>借阅历史<i class="triRight3"></i></li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goBookSearch: function () {
      window.location.href = '/module/search.html'
    }
  }
}
</script>
<style>
  .indexTop{background-color: #2A2A2A;color: #979998;font-size: 27px;line-height: 27px;padding: 25px 0 35px 165px;font-family: "Microsoft YaHei UI"}
  .indexTop .welInfo{display: inline-block;float:right;margin-right:50px;position: relative;font-size: 18px;line-height: 18px;padding-top:5px}
  .inputUserIcon{position: absolute;top:-1px;left: -30px;z-index:115; background-image: url(./images/userIcon.png); /*引入图片图片*/  background-repeat: no-repeat; /*设置图片不重复*/   width: 35px; /*设置图片显示的宽*/  height:35px; /*图片显示的高*/}
  .triRight1{position: absolute;top:210px;left: 430px;z-index:115; background-image: url(./images/triRight.png); /*引入图片图片*/  background-repeat: no-repeat; /*设置图片不重复*/   width: 35px; /*设置图片显示的宽*/  height:35px; /*图片显示的高*/}
  .triRight2{position: absolute;top:260px;left: 430px;z-index:115; background-image: url(./images/triRight.png); /*引入图片图片*/  background-repeat: no-repeat; /*设置图片不重复*/   width: 35px; /*设置图片显示的宽*/  height:35px; /*图片显示的高*/}
  .triRight3{position: absolute;top:310px;left: 430px;z-index:115; background-image: url(./images/triRight.png); /*引入图片图片*/  background-repeat: no-repeat; /*设置图片不重复*/   width: 35px; /*设置图片显示的宽*/  height:35px; /*图片显示的高*/}
  .triangleClass{position: absolute;top:8px;left: 60px;z-index:115; background-image: url(./images/triangle.png); /*引入图片图片*/  background-repeat: no-repeat; /*设置图片不重复*/   width: 35px; /*设置图片显示的宽*/  height:35px; /*图片显示的高*/}
  .listInfo{width:248px;margin:100px 200px;border: solid 0.5px;border-color: darkgrey;border-radius: 5px;}
  .listInfo li{list-style-type: none;border: solid 0.5px;border-color: darkgrey;padding:15px 22px;font-size:22px;line-height: 22px;color:#8BACBD;margin: -1px;}
</style>
