<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default defineComponent({
  setup() {
    const { result, loading, error } = useQuery(gql`
      query {
        continents {
          countries {
            name
            capital
            currency
          }
        }
      }
    `);

    return {
      result,
      loading,
      error,
    };
  },
});
</script>

<style scoped></style>
