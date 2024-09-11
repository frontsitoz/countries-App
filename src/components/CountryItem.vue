<template>
  <div class="border border-gray-300 rounded-lg p-4 shadow-lg bg-white">
    <img
      :src="`https://www.countryflags.io/${country.code}/flat/64.png`"
      alt="Country Flag"
      class="rounded w-full h-32 object-cover"
    />
  </div>

  <h4 class="text-xl font-bold text-gray-500 mt-4">
    {{ country.name.common }}
  </h4>
  <p class="text-gray-500">{{ country.region }}</p>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Country } from "../models/country.model";

interface Props {
  country: Country;
}

defineProps<Props>();
</script>
