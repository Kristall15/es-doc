<template>
  <div>
    <ListDownloadLink :data="bgs" file="community_bgs_list.txt" />
    <table>
      <tr>
        <th>Код</th>
        <th>Предпросмотр</th>
      </tr>
      <tr v-for="(name, index) in bgs" :key="index">
        <td>
          <code>scene {{ name }}</code>
        </td>
        <td>
          <img :src="`/resources/community/images/bgs/${name}.jpg`" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import ListDownloadLink from '../../ListDownloadLink.vue'

export default {
  components: {
    ListDownloadLink,
  },
  data() {
    return {
      bgs: [
        'ext_library_rain',
        'int_library_basement',
        'int_library_day_books_dropped',
        'ext_library_heavy_rain',
        'int_library_fog',
        'ext_library_night_lights',
        'ext_library_sunset',
        'int_library_sunset',
        'ext_library_fog',
        'int_library_day_books',
        'ext_library_after_rain',
        'int_library_night',
      ],
    }
  },
}
</script>
