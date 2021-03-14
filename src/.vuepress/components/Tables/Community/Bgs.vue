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
        'int_library_fog',
        'ext_library_night_lights',
        'ext_library_sunset',
        'int_library_sunset',
        'ext_library_fog',
        'int_library_day_books',
        'ext_library_after_rain',
        'int_library_night',
        'ext_camp_entrance_after_rain',
        'ext_camp_entrance_autumn',
        'ext_camp_entrance_day_close',
        'ext_camp_entrance_deserted',
        'ext_camp_entrance_fog',
        'ext_camp_entrance_rain',
        'ext_camp_entrance_sunset',
        'ext_dining_hall_away_after_rain',
        'ext_dining_hall_away_rain',
        'ext_dining_hall_away_sunset_rain',
        'ext_dining_hall_near_after_rain',
        'ext_dining_hall_near_rain',
        'ext_dining_hall_near_sunset_rain',
        'ext_musclub_day_autumn',
        'ext_musclub_night',
        'ext_musclub_rain',
        'ext_musclub_snowy_day',
        'ext_musclub_sunset',
        'ext_musclub_verandah_day',
        'ext_musclub_verandah_night',
        'ext_musclub_verandah_sunset',
        'int_dining_hall_people_sunset',
        'int_dining_hall_rain',
        'int_dining_hall_rain_night',
        'int_dining_hall_rain_people',
        'int_dining_hall_sunset_rain',
        'int_musclub_night_light',
        'int_musclub_night_nolight',
        'int_musclub_rain',
        'int_musclub_sunset',
      ],
    }
  },
}
</script>
