
<template>
    <div>
        <img width="100" :src="image" :alt="title" />
        <h2>{{ title }}</h2>
    </div>
</template>


<script>
export default {
  name:'movie-card',
  props: {
      image: string,
      title: string
  }
}
</script>

<style scoped>
    h2{
        font-size: 18pt;
    }
</style>
