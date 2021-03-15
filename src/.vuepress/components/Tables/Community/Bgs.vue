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
        'ext_aidpost_sunset',
        'ext_bathhouse_day',
        'ext_bathhouse_sunset',
        'ext_beach_rain',
        'ext_boathouse_after_rain',
        'ext_boathouse_after_rain_night',
        'ext_boathouse_fog',
        'ext_boathouse_fog_day',
        'ext_boathouse_night',
        'ext_boathouse_rain',
        'ext_boathouse_sunset',
        'ext_boathouse2_sunset',
        'ext_camp_entrance_after_rain',
        'ext_camp_entrance_autumn_day',
        'ext_camp_entrance_close_day',
        'ext_camp_entrance_deserted_day',
        'ext_camp_entrance_fog',
        'ext_camp_entrance_rain_night',
        'ext_camp_entrance_sunset',
        'ext_camp_entrance_winter_day',
        'ext_clubs_sunset',
        'ext_dining_hall_away_after_rain',
        'ext_dining_hall_away_rain',
        'ext_dining_hall_away_rain_sunset',
        'ext_dining_hall_near_after_rain',
        'ext_dining_hall_near_rain',
        'ext_dining_hall_near_rain_sunset',
        'ext_house_of_sl_sunset',
        'ext_library_after_rain',
        'ext_library_fog',
        'ext_library_night_lights',
        'ext_library_rain',
        'ext_library_sunset',
        'ext_musclub_autumn_day',
        'ext_musclub_night',
        'ext_musclub_rain',
        'ext_musclub_snowy_day',
        'ext_musclub_sunset',
        'ext_musclub_verandah_day',
        'ext_musclub_verandah_night',
        'ext_musclub_verandah_sunset',
        'ext_playground_rain',
        'ext_playground_sunset',
        'ext_storage2_day',
        'ext_storage_day',
        'ext_storage_night',
        'ext_storage_sunset',
        'ext_warehouse_day',
        'ext_warehouse_day2',
        'ext_warehouse_night',
        'ext_warehouse_rain_day',
        'ext_warehouse_sunset',
        'ext_washstand2_fog',
        'ext_washstand2_night',
        'ext_washstand2_sunset',
        'ext_washstand_fog',
        'ext_washstand_night',
        'ext_washstand_sunset',
        'int_bathhouse',
        'int_bathhouse2',
        'int_bathhouse_steam',
        'int_dining_hall_people_sunset',
        'int_dining_hall_rain',
        'int_dining_hall_rain_night',
        'int_dining_hall_rain_people',
        'int_dining_hall_rain_sunset',
        'int_library_basement',
        'int_library_books_day',
        'int_library_books_dropped_day',
        'int_library_fog',
        'int_library_night',
        'int_library_sunset',
        'int_musclub_night_light',
        'int_musclub_night_nolight',
        'int_musclub_rain',
        'int_musclub_sunset',
      ],
    }
  },
}
</script>
