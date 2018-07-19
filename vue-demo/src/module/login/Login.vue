<template>
  <div class="loginBack">
    <div class="title">
      <span>图书管理系统欢迎你</span>
    </div>
    <div class="loginContent">
      <p class="loginTitle">用户登录</p>
      <form class="loginForm">
        <div class="loginInfo"><i class="inputUserIcon"></i><input class="username" type="text" placeholder="请输入用户名"/></div>
        <div class="loginInfo"><i class="inputPasswordIcon"></i><input class="username" type="password" placeholder="请输入密码"/></div>
        <button class="loginButton">确认登录</button>
      </form>
    </div>
  </div>
</template>
<script>
import './login.js'
export default{
  name: 'Login'
}
</script>
<style >
  .loginBack{background-image: url(images/backgr.jpg);background-repeat: no-repeat; background-size:cover;height:1000px;width:100%;background-attachment:fixed;position: relative}
  .loginContent{left: 50%;top: 50%;  margin: -225px 0 0 -225px;height:350px;width:450px;background-color: white;position: absolute}
  .loginForm{width:350px;height:300px; position: relative;}
  .loginInfo{margin-left:60px;height:63px;}
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #FFFFFF inset !important;/*关于解决输入框背景颜色*/
  -webkit-text-fill-color:#000 !important;/*关于接输入框文字颜色*/
  }
  .loginTitle{text-align: center;font-size: 25px;line-height: 25px;color:#5FB2E4;margin-bottom: 50px;}
  .username{padding-left:30px;height:35px;  width: 300px;}
  .inputUserIcon{position: absolute;top:6px;left: 63px;z-index:115; background-image: url(../index/images/userIcon.jpg); /*引入图片图片*/  background-repeat: no-repeat; /*设置图片不重复*/   width: 35px; /*设置图片显示的宽*/  height:35px; /*图片显示的高*/}
  .inputPasswordIcon{position: absolute;top:72px;left: 63px;z-index:115; background-image: url(images/password.jpg); /*引入图片图片*/  background-repeat: no-repeat; /*设置图片不重复*/   width: 35px; /*设置图片显示的宽*/  height:35px; /*图片显示的高*/}
  .loginButton{margin:35px 0 0 60px;padding:10px;background-color: #3C9BED;border-radius:2px;width: 95%;border:0;color:#FFF;font-size:15px;line-height: 15px;}
  .title{margin:0 auto;padding-top:100px;font-size:40px;color:#3C9BED; text-align: center;  }
</style>
