<template>
  <p>
    <a :href="downloadData" :download="file">Скачать список</a>
  </p>
</template>

<script>
export default {
  props: {
    data: Array,
    file: String,
  },
  computed: {
    downloadData() {
      return `data:text/plain;charset=utf-8,${this.data.join('\n')}`
    },
  },
}
</script>
