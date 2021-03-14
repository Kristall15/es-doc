<template>
  <div>
    <ListDownloadLink :data="ambiences" file="ambiences_list.txt" />
    <table>
      <tr>
        <th>Код</th>
        <th>Предпросмотр</th>
      </tr>
      <tr v-for="({ name, description }, index) in ambiences" :key="index">
        <td>
          <code>play ambience {{ name }}</code>
          <div v-if="description" style="margin-top: 1rem">
            <small>{{ description }}</small>
          </div>
        </td>
        <td>
          <audio
            :src="`/resources/default/sounds/ambiences/${name}.ogg`"
            type="audio/ogg"
            controls
          ></audio>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import ListDownloadLink from './ListDownloadLink.vue'

export default {
  components: {
    ListDownloadLink,
  },
  data() {
    return {
      ambiences: [
        { name: 'boat_station_day', description: 'Лодочная станция - День' },
        { name: 'boat_station_night', description: 'Лодочная станция - Ночь' },
        { name: 'camp_center_day', description: 'Центр лагеря - День' },
        { name: 'camp_center_evening', description: 'Центр лагеря - Вечер' },
        { name: 'camp_center_night', description: 'Центр лагеря - Ночь' },
        { name: 'camp_entrance_day', description: 'Вход в лагерь - День' },
        {
          name: 'camp_entrance_day_people',
          description: 'Вход в лагерь - День (людно)',
        },
        { name: 'camp_entrance_night', description: 'Вход в лагерь - Ночь' },
        { name: 'catacombs', description: 'Катакомбы' },
        { name: 'catacombs_stones', description: 'Шахты' },
        { name: 'clubs_inside_day', description: 'Внутри клубов - День' },
        { name: 'cold_wind_loop', description: 'Холодный ветер (зацикленный)' },
        { name: 'day_countryside_ambience', description: 'Луг - День' },
        { name: 'dining_hall_empty', description: 'Пустая столовая' },
        { name: 'dining_hall_full', description: 'Полная столовая' },
        { name: 'ext_road_day', description: 'Дорога к лагерю - День' },
        { name: 'ext_road_evening', description: 'Дорога к лагерю - Вечер' },
        { name: 'ext_road_night', description: 'Дорога к лагерю - Ночь' },
        { name: 'forest_day', description: 'Лес - День' },
        { name: 'forest_evening', description: 'Лес - Вечер' },
        { name: 'forest_night', description: 'Лес - Ночь' },
        { name: 'grasshoper_clean', description: 'Кузнечики' },
        { name: 'int_cabin_day', description: 'В домике - День' },
        { name: 'int_cabin_evening', description: 'В домике - Вечер' },
        { name: 'int_cabin_night', description: 'В домике - Ночь' },
        { name: 'lake_shore_day', description: 'Пляж - День' },
        { name: 'lake_shore_evening', description: 'Пляж - Вечер' },
        { name: 'lake_shore_night', description: 'Пляж - Ночь' },
        { name: 'library_day', description: 'Библиотека - День' },
        { name: 'medium_crowd_indoors_1', description: 'Толпа в помещении' },
        { name: 'medium_crowd_outdoors', description: 'Толпа на улице' },
        { name: 'medstation_inside_day', description: 'В медпункте - День' },
        { name: 'medstation_inside_night', description: 'В медпункте - Ночь' },
        { name: 'music_club_day', description: 'В муз. клубе - День' },
        { name: 'music_club_night', description: 'В муз. клубе - Ночь' },
        { name: 'old_camp_outside', description: 'Старый лагерь - Ночь' },
        {
          name: 'soccer_play_background',
          description: 'Спортплощадка - Игра в футбол',
        },
      ],
    }
  },
}
</script>
