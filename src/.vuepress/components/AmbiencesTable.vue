<template>
  <table>
    <tr>
      <th>Код</th>
      <th>Предпросмотр</th>
    </tr>
    <tr v-for="(name, index) in ambiences" :key="index">
      <td>
        <code>play ambience {{ name }}</code>
      </td>
      <td>
        <audio :src="`/ambiences/${name}.ogg`" controls></audio>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      ambiences: [
        'boat_station_day',
        'boat_station_night',
        'camp_center_day',
        'camp_center_evening',
        'camp_center_night',
        'camp_entrance_day',
        'camp_entrance_day_people',
        'camp_entrance_night',
        'catacombs',
        'catacombs_stones',
        'clubs_inside_day',
        'cold_wind_loop',
        'day_countryside_ambience',
        'dining_hall_empty',
        'dining_hall_full',
        'ext_road_day',
        'ext_road_evening',
        'ext_road_night',
        'forest_day',
        'forest_evening',
        'forest_night',
        'grasshoper_clean',
        'int_cabin_day',
        'int_cabin_evening',
        'int_cabin_night',
        'lake_shore_day',
        'lake_shore_evening',
        'lake_shore_night',
        'library_day',
        'medium_crowd_indoors_1',
        'medium_crowd_outdoors',
        'medstation_inside_day',
        'medstation_inside_night',
        'music_club_day',
        'music_club_night',
        'old_camp_outside',
        'soccer_play_background',
      ],
    }
  },
}
</script>
