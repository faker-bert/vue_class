<template>
  <div id="app">
    <!-- <Nav></Nav> -->
    <div id="nav">
      <nav class="navbar navbar-default navbar-fixed-top">
        <!--  -->
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
                  <li><router-link to="/owner_log">日志</router-link></li>
                  <li><router-link to="/life">生活</router-link></li>
                  <li><router-link to="/account">记账</router-link></li>
                  <li><router-link to="/table">课表</router-link></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">其他</li>
                  <li  onclick='alert("哥哥别看了,这玩意还没做呢")'><router-link to="/Log_sharing">tag管理</router-link></li>
                  <li><router-link to="/person_message">个人信息</router-link></li>
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

    <transition name='fade' mode="out-in">
    <router-view />
    </transition>

   
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  height: 100%;
}

/* #nav {
  padding: 30px;
} */
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  position: absulote;
  bottom: 0;
  width: 80%;
  height: 100px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

