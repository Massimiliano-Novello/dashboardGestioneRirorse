<script>
import usersData from "../../Users.json"
export default {
  name: "Registrazione",
  data() {
    return {
      users: [usersData],  
      newItem: {
        email: "",
        password: "",
        username: "",
      }
    };
  },
  mounted() {
    console.log(this.users);
  },
  methods: {
    addNewUsers() {
        const nuovoOggetto = {
            email: this.newItem.email,
            password: this.newItem.password,
            username: this.newItem.username
        }
        this.users.push(nuovoOggetto)
        console.log(this.users);

        this.$router.push({name: "Dashboard"})

        this.newItem.email = '',
        this.newItem.password = '',
        this.newItem.username = ''
    }
  }
};
</script>

<template>
  <div class="registrazione-container">
    <div class="registrazione-input">
      <h1 class="mb-2 text-center">Registrati</h1>
      <form @submit.prevent="addNewUsers">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="newItem.email"
            required
          />
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="form-label">Password</label>
          <div class="col-sm-10">
            <input
              type="password"
              v-model="newItem.password"
              class="form-control w-100"
              id="inputPassword"
              required
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            v-model="newItem.username"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Salva</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.registrazione-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .registrazione-input {
    width: 40%;
  }
}
</style>
