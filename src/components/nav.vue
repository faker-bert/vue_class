<template>
  <div v-show='check_url()'>
    <div id="nav">
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <img src="@/assets/rob_logo.png" height="45px" />
            <router-link class="navbar-brand" to="#">PLMS</router-link>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/Log_sharing">Log sharing</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Manage <span class="caret"></span
                ></a>
                <ul class="dropdown-menu">
                  <li><router-link to="#">日志</router-link></li>
                  <li><router-link to="#">生活</router-link></li>
                  <li><router-link to="#">记账</router-link></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">其他</li>
                  <li><router-link to="#">tag管理</router-link></li>
                  <li><router-link to="#">个人信息</router-link></li>
                </ul>
              </li>
              <li><router-link to="/login">Sign in</router-link></li>
              <li><router-link to="/logup">Sign up</router-link></li>
              <!-- <li><router-link to='/about'>峰读</router-link></li> -->
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <br /><br />
  </div>
</template>
<script>
export default {
    name : 'nav',
    methods:{
        check_url : ()=>{
            return !(window.location.pathname=='/login'||window.location.pathname=='/logup')
        }
    }
}
</script>