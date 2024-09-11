<template>
  <div class="rounded-2xl overflow-hidden shadow-lg bg-white">
    <!--Imagen de fondo del paisaje-->

    <div class="relative" style="height: 80%">
      <img
        src="https://via.placeholder.com/300x200"
        alt="Country Landscape"
        class="w-full h-full object-cover"
      />
    </div>

    <!--Información del país-->
    <div class="p-4 flex items-center" style="height: 30%">
      <div class="flex-shrink-0">
        <img
          :src="`https://flagsapi.com/${country.cca2}/flat/64.png`"
          alt="Country Flag"
          class="w-16 h-12 object-cover rounded-xl border-2 border-gray-200 mb-2"
        />
      </div>

      <div class="ml-4 flex flex-col">
        <h4 class="text-xl font-bold text-gray-500">
          {{ country.name.common }}
        </h4>
        <p class="text-gray-500">{{ country.region }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Country } from "../models/country.model";

interface Props {
  country: Country;
}

defineProps<Props>();
</script>
