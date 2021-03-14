<template>
  <p>
    <a @click="downloadData()" :href="textData" :download="file">
      Скачать список
    </a>
  </p>
</template>

<script>
export default {
  props: ['data', 'file'],
  data() {
    return {
      textData: '',
    }
  },
  methods: {
    downloadData() {
      const maxItemLength = Math.max(
        ...this.data.map((el) =>
          el.name && el.description ? el.name.length : 0
        )
      )
      const text = this.data
        .map((item) => {
          if (item.name) {
            return `${item.name}${
              item.description
                ? `${Array(maxItemLength - item.name.length + 1)
                    .fill(' ')
                    .join('')}# ${item.description}`
                : ''
            }`
          }
          return item
        })
        .join('\n')

      this.textData =
        'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
    },
  },
}
</script>
