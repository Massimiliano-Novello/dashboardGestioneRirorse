<script>
import usersData from "../../Users.json"
export default {
  name: "Login",
  data () {
    return {
      users: usersData.users,
      email: '',
      password: ''
    }
  },
  computed: {
    isValidUser() {
      return this.users.some(user => user.email === this.email && user.password === this.password);
    }
  },
  methods: {
    login() {
      if(this.isValidUser) {
        this.$router.push({name: "Dashboard"})
      } 
    }
  }
};
</script>

<template>
  <section class="d-flex align-items-center justify-content-center">
    <div class="login-section">
      <div class="login-img mb-4">
        <img
          src="https://media.licdn.com/dms/image/D4D3DAQHI4nxKpBwZqg/image-scale_191_1128/0/1679301357696/capoweb_it_cover?e=2147483647&v=beta&t=LhziAYGb0Un-48fL29KLkvD7_TfXpir_Fllz-xUyeTk"
          alt=""
        />
      </div>
      <form @submit.prevent="login">
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="email"
          required
        />
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="form-label">Password</label>
        <div class="col-sm-10">
          <input  type="password" v-model="password" required class="form-control w-100" id="inputPassword" />
        </div>
      </div>

      <div class="button ">
        <button type="submit" class="btn btn-primary m-2">Accedi</button>
      </div>
    </form>
    <router-link class="btn btn-danger" type="submit" :to="{ name: 'Registrazione'}" >Registrati</router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 100vh;

  .login-section {
    width: 50%;
  }
}
</style>
