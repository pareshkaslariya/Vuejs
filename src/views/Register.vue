<template>
  <div class="centered-container" id="register" style="background-color:#d3d3d336">
    <md-content class="md-elevation-3" style="padding:40px">

      <div class="title">
        <div class="md-title text-center" style="text-align:center">Register</div>
        <!-- <div class="md-body-1">Build beautiful apps with Material Design and Vue.js</div> -->
      </div>


      <div class="form" style="width: 250px;">
    
        <md-field>
          <label>Name</label>
          <md-input v-model="register.name" autofocus></md-input>
        </md-field>

        <md-field>
          <label>E-mail</label>
          <md-input v-model="register.email"></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Password</label>
          <md-input v-model="register.password" type="password"></md-input>
        </md-field>
 
        <md-field md-has-password>
          <label>Conform Password</label>
          <md-input v-model="register.c_password" type="password"></md-input>
        </md-field>
      </div>

      <div class="actions md-alignment-center-space-between" style="text-align: center;">
        <!-- <a href="/resetpassword">Reset password</a> -->
        <md-button class="md-raised md-primary" @click="auth(register)">Register</md-button>
      </div>

      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
      </div>
<div style="text-align: center;padding-top:10px;font-size:12px">
 <router-link :to="{ name: 'login' }">Login?</router-link>
      </div>
    </md-content>
    <div class="background" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading: false,
      register: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    auth(register) {
      this.$http.post('http://127.0.0.1:8000/api/timetracker/register', register,{
                "headers": {
                    "content-type": "application/json"
                }
            } ).then(({ data }) => {
      this.flash('Success', 'success');
    });
  // },
      // your code to login user
      // this is only for example of loading
      // this.loading = true;
      // setTimeout(() => {
      //   this.loading = false;
      // }, 5000);
    }
  }
};
</script>

<style>
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
