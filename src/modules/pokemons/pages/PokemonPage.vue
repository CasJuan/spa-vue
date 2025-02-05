<template>
  <section class="flex flex-col">
    <h1 class="text-3xl font-bold">
      Pokemon <small class="text-blue-500">#{{ id }}</small>
    </h1>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt="Pokemon"
      class="w-[200px] h-[200px] mt-5"
    />

    <router-link
      class="bg-blue-500 text-white p-2 rounded-md mt-5 text-center hover:bg-blue-800"
      :to="{ name: 'pokemon', params: { id: id + 1 } }"
      >Siguiente</router-link
    >
  </section>
</template>

<script lang="ts" setup>
interface Props {
  id: string
}
const props = defineProps<Props>()

console.log(props)
</script>
