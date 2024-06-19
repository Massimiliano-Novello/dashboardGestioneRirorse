<script>
import Chart from "chart.js/auto";
import BarChart from "./BarChart.vue";
import userRisorse from "../../Risorse.json";
import userData from "../../Users.json"

export default {
  name: "Dashboard",
  components: {
    BarChart,
  },
  data() {
    return {
      risorse: userRisorse.risorse,
      users: userData.users
    };
  },
  mounted () {
    console.log(userData);
  },
  methods: {
    salvaSoglia() {
      // Verifica se le soglie superano i valori massimi definiti nel file JSON
      let sogliaSuperata = false;
      this.risorse.forEach(risorsa => {
        const maxValore = userRisorse.risorse.find(r => r.tipo === risorsa.tipo).max;
        if (risorsa.max > maxValore) {
          sogliaSuperata = true;
        }
      });

      // Se una soglia è superata, mostra un alert e non salvare
      if (sogliaSuperata) {
        alert("Una o più soglie superano i valori massimi definiti!");
      } else {
        // Salva le soglie nel localStorage
        localStorage.setItem("max", JSON.stringify(this.risorse));
        alert("Soglie salvate correttamente!");
      }
    },
  },
  created() {
    // Carica soglie salvate se esistono
    const salvaSoglia = JSON.parse(localStorage.getItem("max"));
    if (salvaSoglia) {
      this.risorse = salvaSoglia;
      console.log(salvaSoglia);
    }
    

  },
};
</script>

<template>
  <div class="wrapper">
    <header>
      <div class="header-top d-flex justify-content-between">
        <h2>Dashboard risorse energetiche</h2>
        <router-link :to="{name: 'Login'}" class="btn btn-danger">Logout</router-link>
      </div>
    </header>

    <main class="d-flex p-5">
      <div class="grafico">
        <div style="width: 50%">
          <h3>Andamento Giornaliero</h3>
          <BarChart />
        </div>
      </div>
      <div class="soglie-di-consumo">
        <h3>Configura soglie di consumo</h3>
        <div class="input-soglie">
          <div class="soglie-title m-3n d-flex">
            <form @submit="salvaSoglia">
              <div v-for="risorsa in risorse">
                <h5>{{ risorsa.tipo }}</h5>
                <input
                  id="soglia"
                  type="number"
                  v-model.number="risorsa.max"
                  min="0"
                />
                </div>
            <button type="submit" class="btn btn-primary mt-3">Salva</button>
                </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;

  header {
    padding: 20px 0;
    background-color: lightblue;

    .header-top {
      padding: 0 20px;
    }
  }
  main {
    height: calc(100% - 200px);
    display: flex;
    .sidebar {
      background-color: brown;
      width: 100px;
      height: 100%;
    }
    .grafico {
      width: calc(100% - 100px);
      height: 100%;
    }
  }
}
</style>
