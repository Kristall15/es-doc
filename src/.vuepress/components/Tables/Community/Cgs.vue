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
      cgs: [
        'boat_alone',
        'mi_dance_afar',
        'mi_fireworks',
        'mi_hugs',
        'mi_kiss_musclub',
        'mi_lineup',
        'mi_me_polaroid',
        'mt_dance',
        'mt_fireworks',
        'sl_piano',
        'square_rain_us_lead',
        'un_dance',
        'us_blanket',
      ],
    }
  },
}
</script>
