<template>
  <div class="log">
    <div class="form-group container">
       <br /><br>
      <img src="@/assets/rob_logo.png" width="8%" />
      <h2>Welcome, Sign {{InOrUp()}} to PLMS Now</h2>
      <span class="col-md-4"></span>
      <span class="col-md-4 border alert active" style="background:RGB(240,240,240);margin:3px,3px,3px,3px">
        <div class="form-group text-left">
          <label for="user" style="color:#000">Username or email address</label>
          <input
            type="email"
            class="form-control"
            id="usersname"
            placeholder="Username or email address"
          />
        </div>
        <div class="form-group text-left">
           <label for="psd" style="color:#000">Password</label>
          <input
            type="password"
            class="form-control"
            id="psd"
            placeholder="Password"
          />
        </div>
        <div class="form-group text-left" v-if='!login()'>
          <label for="double_check" style="color:#000">Double check your password</label>
          <input
            type="password"
            class="form-control"
            id="double_check"
            placeholder="Password"
          />
        </div>
        <div v-else><br><br></div>
        <button type="button" class="btn btn-info" style="background:rgb(3,125,252)" @click='click_button(InOrUp())'>Log {{InOrUp()}}</button><br><br>
         <a class='text-right' @click.prevent>forget password?</a><br>
      </span>
      <br>
      <span class="col-md-4"></span>
    </div>
    <div class='form-group' v-if='login()'>New to PLMS? <a href='/logup'>Create an account.</a></div>
  </div>
</template>

<script>
export default {
  name: 'log',
  data(){
    return {
      login_:this.login(),
      InOrUp_:this.InOrUp()
    }
  },
  methods:{
      click_button: function(InOrUp){
        alert(InOrUp)
      },
      login : ()=>{return window.location.pathname == '/login'},
      InOrUp : ()=>{
          if(window.location.pathname == '/login'){
              return 'in'
          }
          return 'up'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(3,125,250);
}
table{
    margin-left:-20%;
    margin-left:-20%;
}
</style>
