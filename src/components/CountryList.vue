<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
    <div v-for="country in countries" :key="country.code" class="p-3">
      <CountryItem :country="country" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Country } from "../models/country.model";
import CountryItem from "./CountryItem.vue";

interface Props {
  countries: Country[];
}

defineProps<Props>();
</script>
