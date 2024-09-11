<template>
  <div class="flex">
    <!--Sidebar-->

    <aside class="w-64 bg-gray-800 text-white min-h-screen">
      <div class="p-4">
        <div class="bg-gray-700 p-2 rounded text-center text-white mb-4">
          Logo
        </div>

        <ul>
          <li class="p-2 hover:bg-gray-700 cursor-pointer">Home</li>
          <li class="p-2 hover:bg-gray-700 cursor-pointer">Vista 1</li>
          <li class="p-2 hover:bg-gray-700 cursor-pointer">Vista 2</li>
        </ul>
      </div>
    </aside>

    <!--Main content-->

    <div class="flex-1">
      <PageHeader />
      <div class="container max-w-screen-lg mx-auto px-6 py-8">
        <CountryList :countries="countries" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import PageHeader from "./components/PageHeader.vue";
import CountryList from "./components/CountryList.vue";
import axiosClient from "./utils/axios";
import { useQuery } from "@vue/apollo-composable";
import { Country } from "./models/country.model";
import { GET_COUNTRIES } from "./graphql/queries";

const countries = ref<Country[]>([]);

//Utilizamos Apollo client para obtener los datos de los países

const { result, loading, error } = useQuery(GET_COUNTRIES);

onMounted(() => {
  if (result.value) {
    countries.value = result.value.countries;
  }
});

//Función para obtener imágenes de los países

const getCountryFlag = async (countryCode: string) => {
  try {
    const { data } = await axiosClient.get(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    return data[0]?.flags?.png;
  } catch (e) {
    console.log("Error fetching country flag:", e);
    return "";
  }
};
</script>

<style scoped>
body {
  background-color: #e6f7ff;
}
</style>
