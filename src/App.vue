<script>
import Dashboard from './components/Dashboard.vue';
import Login from './components/Login.vue';
import BarChart from './components/BarChart.vue';
import Registrazione from './components/Registrazione.vue';
export default {
  components: {
    Login,
    Dashboard,
    BarChart,
    Registrazione
  }
}
</script>

<template>
  <div>
  <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
