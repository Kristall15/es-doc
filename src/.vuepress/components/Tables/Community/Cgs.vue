<template>
  <div>
    <ListDownloadLink :data="cgs" file="community_cgs_list.txt" />
    <table>
      <tr>
        <th>Код</th>
        <th>Предпросмотр</th>
      </tr>
      <tr v-for="(name, index) in cgs" :key="index">
        <td>
          <code>scene {{ name }}</code>
        </td>
        <td>
          <img :src="`/resources/community/images/cgs/${name}.jpg`" />
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
      cgs: ['mi_dance_afar', 'mi_hugs', 'mt_dance', 'sl_piano', 'un_dance'],
    }
  },
}
</script>
