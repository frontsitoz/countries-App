<template>
  <div class="flex justify-between items-center py-8 px-6 bg-blue-100">
    <h1 class="text-3xl font-bold tracking-widest text-gray-500 pl-5">Pais</h1>
    <div class="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Escribe el país que deseas ver"
        class="border border-gray-300 rounded-lg p-2 w-72"
      />

      <button
        class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
      >
        <svg
          class="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        Buscar
      </button>
    </div>
  </div>
</template>

<style scoped>
.bg-blue-100 {
  background-color: #e6f7ff;
}
</style>
