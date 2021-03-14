<template>
  <div>
    <ListDownloadLink
      :data="
        sfx.map((item) => ({
          name: `sfx_${item.name}`,
          description: item.description,
        }))
      "
      file="sfx_list.txt"
    />
    <table>
      <tr>
        <th>Код</th>
        <th>Предпросмотр</th>
      </tr>
      <tr v-for="({ name, description }, index) in sfx" :key="index">
        <td>
          <code>play sound sfx_{{ name }}</code>
          <div style="margin-top: 1rem">
            <small>{{ description }}</small>
          </div>
        </td>
        <td>
          <audio
            :src="`/resources/default/sounds/sfx/${name}.ogg`"
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
      sfx: [
        {
          name: 'achievement',
          description: 'Звук получения достижения',
        },
        {
          name: 'alisa_falls',
          description: 'Шум, Алиса падает с вскриком',
        },
        {
          name: 'alisa_falls_novoice',
          description: 'Алиса падает без вскрика',
        },
        {
          name: 'alisa_lighter',
          description: 'Алиса чиркает зажигалкой',
        },
        {
          name: 'alisa_masha_enter',
          description: 'Алиса и кто-то ещё, входят в комнату',
        },
        {
          name: 'alisa_picklock',
          description: 'Алиса ковыряет ключами',
        },
        {
          name: 'angry_ulyana',
          description: 'Злая Ульяна, звук как закипающий чайник',
        },
        {
          name: 'armature_swish',
          description: 'Взмах арматурой',
        },
        {
          name: 'bed_squeak1',
          description: 'Скрип кровати, 1',
        },
        {
          name: 'bed_squeak2',
          description: 'Скрип кровати, 2',
        },
        {
          name: 'blanket_off',
          description: 'Прыжок на кровать 1',
        },
        {
          name: 'blanket_off_stand',
          description: 'Падение на кровать 2, больше шума',
        },
        {
          name: 'blow_out_candle',
          description: 'Задувание свечи',
        },
        {
          name: 'boat_impact',
          description: 'Столкновение лодок',
        },
        {
          name: 'body_bump',
          description: 'Падение тела на пол',
        },
        {
          name: 'bodyfall_1',
          description: 'Глухое падение',
        },
        {
          name: 'bones_breaking',
          description: 'Звук ломающихся костей',
        },
        {
          name: 'borshtch',
          description: 'Обливание супом',
        },
        {
          name: 'brass_drop',
          description: 'Падает что-то железное',
        },
        {
          name: 'break_cupboard',
          description: 'Сломали что-то',
        },
        {
          name: 'break_flashlight',
          description: 'Разбили фонарь',
        },
        {
          name: 'break_flashlight_alisa',
          description: 'Разбили фонарь, Алиса вскрикнула',
        },
        {
          name: 'break_grid',
          description: 'Ломание решётки',
        },
        {
          name: 'break_monitor',
          description: 'Сломали монитор',
        },
        {
          name: 'broken_dish',
          description: 'Разбили стакан',
        },
        {
          name: 'broom_sweep',
          description: 'Подметают',
        },
        {
          name: 'bus_honk',
          description: 'Гудок машины',
        },
        {
          name: 'bus_idle',
          description: 'Работающий мотор',
        },
        {
          name: 'bus_interior_moving',
          description: 'Семён едет в автобусе',
        },
        {
          name: 'bus_loop',
          description: 'Звук мотора и скрип в салоне',
        },
        {
          name: 'bus_out',
          description: 'Автобус уехал',
        },
        {
          name: 'bus_stop',
          description: 'Автобус остановился',
        },
        {
          name: 'bus_window_hit',
          description: 'Удар по стеклу',
        },
        {
          name: 'bush_body_fall',
          description: 'Падение тела',
        },
        {
          name: 'bush_leaves',
          description: 'Шум сухих листьев',
        },
        {
          name: 'campus_door_rattle',
          description: 'Попытка открыть закрытую дверь',
        },
        {
          name: 'carousel_squeak',
          description: 'Скрип заржавевшей решётки или двери',
        },
        {
          name: 'catgirl_hiss',
          description: 'Шипение девочки кошки',
        },
        {
          name: 'cellar_open',
          description: 'Открытие шкафа',
        },
        {
          name: 'cellular_phone_error',
          description: 'Смартфон, нет сигнала',
        },
        {
          name: 'chair_fall',
          description: 'Стул упал',
        },
        {
          name: 'cigarette_pack_crumple',
          description: 'Скомкал сигареты',
        },
        {
          name: 'clench2',
          description: 'Похоже на звук какой-то кнопки',
        },
        {
          name: 'click_1',
          description: 'Клик тихий',
        },
        {
          name: 'click_2',
          description: 'Клик погромче',
        },
        {
          name: 'click_3',
          description: 'Клик ещё громче',
        },
        {
          name: 'close_cabinet',
          description: 'Аккуратное закрытие двери',
        },
        {
          name: 'close_door_1',
          description: 'Хлопок двери',
        },
        {
          name: 'close_door_campus_1',
          description: 'Закрытие двери более резкое',
        },
        {
          name: 'close_door_clubs_nextroom',
          description: 'Звук закрытия двери например в подсобку',
        },
        {
          name: 'close_water_sink',
          description: 'Завернул ручку крана',
        },
        {
          name: 'computer_noise',
          description: 'Шум системного блока',
        },
        {
          name: 'computer_screen_static',
          description: 'Звук монитора с помехами',
        },
        {
          name: 'concert_applause',
          description: 'Аплодисменты',
        },
        {
          name: 'cooking_eggs_1',
          description: 'Разбивают и мешают яйца',
        },
        {
          name: 'cooking_eggs_2',
          description: 'Жарят яйца',
        },
        {
          name: 'cooling_bus_motor',
          description: 'Работающий кондиционер и капли дождя по металлу',
        },
        {
          name: 'cooling_engine_loop',
          description: 'Капли дождя по дереву гулко',
        },
        {
          name: 'dinner_horn_processed',
          description: 'Горн к еде',
        },
        {
          name: 'dinner_jingle_normal',
          description: 'Горн к еде музыкальный',
        },
        {
          name: 'dinner_jingle_speaker',
          description: 'Горн к еде музыкальный чуть приглушённый',
        },
        {
          name: 'dinner_jingle_speaker_tape',
          description: 'Стук по микрофону и музыкальный горн к еде',
        },
        {
          name: 'door_bell',
          description: 'Звонок в дверь',
        },
        {
          name: 'door_squeak_light',
          description: '',
        },
        {
          name: 'draw_water',
          description: '',
        },
        {
          name: 'drawer_rattle',
          description: '',
        },
        {
          name: 'drop_alisa_bag',
          description: '',
        },
        {
          name: 'drop_pipe',
          description: '',
        },
        {
          name: 'dropped_chair',
          description: '',
        },
        {
          name: 'eat_apple',
          description: '',
        },
        {
          name: 'energy_door_bus',
          description: '',
        },
        {
          name: 'face_slap',
          description: '',
        },
        {
          name: 'fall_grass',
          description: '',
        },
        {
          name: 'fall_metal_door',
          description: '',
        },
        {
          name: 'fall_wood_floor',
          description: '',
        },
        {
          name: 'far_steps',
          description: '',
        },
        {
          name: 'forest_fireplace',
          description: '',
        },
        {
          name: 'ghost_children_laugh',
          description: '',
        },
        {
          name: 'grate_hand_fall',
          description: '',
        },
        {
          name: 'grate_open_hand',
          description: '',
        },
        {
          name: 'gusty_wind',
          description: '',
        },
        {
          name: 'hatch_drop',
          description: '',
        },
        {
          name: 'head_explode',
          description: '',
        },
        {
          name: 'head_heartbeat',
          description: '',
        },
        {
          name: 'hell_alarm_clock',
          description: '',
        },
        {
          name: 'hell_crickets_1',
          description: '',
        },
        {
          name: 'hell_crickets_2',
          description: '',
        },
        {
          name: 'hell_crickets_3',
          description: '',
        },
        {
          name: 'hell_crickets_4',
          description: '',
        },
        {
          name: 'hiding_in_bush',
          description: '',
        },
        {
          name: 'home_phone_break',
          description: '',
        },
        {
          name: 'home_phone_ring',
          description: '',
        },
        {
          name: 'home_phone_take',
          description: '',
        },
        {
          name: 'ignite_torch',
          description: '',
        },
        {
          name: 'ikarus_arrive',
          description: '',
        },
        {
          name: 'ikarus_open_doors',
          description: '',
        },
        {
          name: 'inhale',
          description: '',
        },
        {
          name: 'insert_crowbar_door',
          description: '',
        },
        {
          name: 'intro_bus_door_open',
          description: '',
        },
        {
          name: 'intro_bus_engine_loop',
          description: '',
        },
        {
          name: 'intro_bus_engine_start',
          description: '',
        },
        {
          name: 'intro_bus_stop_sigh',
          description: '',
        },
        {
          name: 'intro_bus_stop_steps',
          description: '',
        },
        {
          name: 'intro_bus_transition',
          description: '',
        },
        {
          name: 'jump_into_hole',
          description: '',
        },
        {
          name: 'jump_into_hole_2',
          description: '',
        },
        {
          name: 'jump_into_hole_3',
          description: '',
        },
        {
          name: 'jump_over_hole',
          description: '',
        },
        {
          name: 'key_drawer',
          description: '',
        },
        {
          name: 'keyboard_mouse',
          description: '',
        },
        {
          name: 'keyboard_mouse_computer_noise',
          description: '',
        },
        {
          name: 'keys_rattle',
          description: '',
        },
        {
          name: 'knock_door2',
          description: '',
        },
        {
          name: 'knock_door3_dull',
          description: '',
        },
        {
          name: 'knock_door6_closed',
          description: '',
        },
        {
          name: 'knock_door7_polite',
          description: '',
        },
        {
          name: 'knock_door_closed_hard1',
          description: '',
        },
        {
          name: 'knock_door_closed_hard2',
          description: '',
        },
        {
          name: 'knock_glass',
          description: '',
        },
        {
          name: 'knocking_door_2',
          description: '',
        },
        {
          name: 'knocking_door_outside',
          description: '',
        },
        {
          name: 'lena_hits_alisa',
          description: '',
        },
        {
          name: 'lena_plays_tennis_fail',
          description: '',
        },
        {
          name: 'light_candle',
          description: '',
        },
        {
          name: 'lock_click',
          description: '',
        },
        {
          name: 'lock_close',
          description: '',
        },
        {
          name: 'lock_open',
          description: '',
        },
        {
          name: 'lock_open_close_1',
          description: '',
        },
        {
          name: 'match_candle',
          description: '',
        },
        {
          name: 'medpunkt_door_open',
          description: '',
        },
        {
          name: 'menu_gate',
          description: '',
        },
        {
          name: 'metal_door_handle_rattle',
          description: '',
        },
        {
          name: 'metal_door_heavy_close',
          description: '',
        },
        {
          name: 'metal_door_large_close_basement',
          description: '',
        },
        {
          name: 'miku_song_learn1',
          description: '',
        },
        {
          name: 'miku_song_learn2',
          description: '',
        },
        {
          name: 'muffled_explosion',
          description: '',
        },
        {
          name: 'mystery_movement',
          description: '',
        },
        {
          name: 'nightmare_explosion',
          description: '',
        },
        {
          name: 'nightmare_underground_rumble',
          description: '',
        },
        {
          name: 'open_cabinet_1',
          description: '',
        },
        {
          name: 'open_cabinet_2',
          description: '',
        },
        {
          name: 'open_cupboard',
          description: '',
        },
        {
          name: 'open_dooor_campus_1',
          description: '',
        },
        {
          name: 'open_dooor_campus_2',
          description: '',
        },
        {
          name: 'open_door_1',
          description: '',
        },
        {
          name: 'open_door_2',
          description: '',
        },
        {
          name: 'open_door_clubs',
          description: '',
        },
        {
          name: 'open_door_clubs_2',
          description: '',
        },
        {
          name: 'open_door_clubs_nextroom',
          description: '',
        },
        {
          name: 'open_door_kick',
          description: '',
        },
        {
          name: 'open_door_mines',
          description: '',
        },
        {
          name: 'open_door_mines_metal',
          description: '',
        },
        {
          name: 'open_door_squeak_2',
          description: '',
        },
        {
          name: 'open_door_strong',
          description: '',
        },
        {
          name: 'open_drapes',
          description: '',
        },
        {
          name: 'open_journal',
          description: '',
        },
        {
          name: 'open_metal_door',
          description: '',
        },
        {
          name: 'open_metal_hatch',
          description: '',
        },
        {
          name: 'open_table',
          description: '',
        },
        {
          name: 'open_water_sink',
          description: '',
        },
        {
          name: 'open_window',
          description: '',
        },
        {
          name: 'owl_far',
          description: '',
        },
        {
          name: 'paper_bag',
          description: '',
        },
        {
          name: 'pat_shoulder_hard',
          description: '',
        },
        {
          name: 'piano_head_bump',
          description: '',
        },
        {
          name: 'punch_medium',
          description: '',
        },
        {
          name: 'punch_washstand',
          description: '',
        },
        {
          name: 'put_sugar_cart',
          description: '',
        },
        {
          name: 'radio_squelch_1',
          description: '',
        },
        {
          name: 'radio_squelch_2',
          description: '',
        },
        {
          name: 'radio_tune',
          description: '',
        },
        {
          name: 'rowboat_loop',
          description: '',
        },
        {
          name: 'run_forest',
          description: '',
        },
        {
          name: 'salt_impact',
          description: '',
        },
        {
          name: 'scary_sting',
          description: '',
        },
        {
          name: 'scoop_water_cup',
          description: '',
        },
        {
          name: 'shoulder_dive_water',
          description: '',
        },
        {
          name: 'shurik_mines_far',
          description: '',
        },
        {
          name: 'shurik_opens_door',
          description: '',
        },
        {
          name: 'shurik_snore',
          description: '',
        },
        {
          name: 'signal_pistol',
          description: '',
        },
        {
          name: 'simon_applause',
          description: '',
        },
        {
          name: 'simon_fall_1',
          description: '',
        },
        {
          name: 'simon_fall_2',
          description: '',
        },
        {
          name: 'slam_door_campus',
          description: '',
        },
        {
          name: 'slavya_gets_out',
          description: '',
        },
        {
          name: 'slavya_run',
          description: '',
        },
        {
          name: 'soccer_ball_catch',
          description: '',
        },
        {
          name: 'soccer_ball_gate',
          description: '',
        },
        {
          name: 'soccer_ball_kick',
          description: '',
        },
        {
          name: 'steps_clubs_nextroom',
          description: '',
        },
        {
          name: 'stomach_growl',
          description: '',
        },
        {
          name: 'street_traffic_outside',
          description: '',
        },
        {
          name: 'suspence_bang',
          description: '',
        },
        {
          name: 'swimming',
          description: '',
        },
        {
          name: 'table_hit',
          description: '',
        },
        {
          name: 'tennis_serve_1',
          description: '',
        },
        {
          name: 'tennis_serve_2',
          description: '',
        },
        {
          name: 'terminator',
          description: '',
        },
        {
          name: 'terminator_parody',
          description: '',
        },
        {
          name: 'throw_compote',
          description: '',
        },
        {
          name: 'thunder_crack',
          description: '',
        },
        {
          name: 'thunder_rumble',
          description: '',
        },
        {
          name: 'thunder_wood',
          description: '',
        },
        {
          name: 'torch',
          description: '',
        },
        {
          name: 'tree_branches',
          description: '',
        },
        {
          name: 'uliana_jumps_down',
          description: '',
        },
        {
          name: 'underwater_dive',
          description: '',
        },
        {
          name: 'unlock_door_campus',
          description: '',
        },
        {
          name: 'unlock_medpunkt_door',
          description: '',
        },
        {
          name: 'unzip_sleepbag',
          description: '',
        },
        {
          name: 'water_emerge',
          description: '',
        },
        {
          name: 'water_sink_stream',
          description: '',
        },
        {
          name: 'water_splash',
          description: '',
        },
        {
          name: 'wind_gust',
          description: '',
        },
        {
          name: 'wood_floor_squeak',
          description: '',
        },
        {
          name: 'wood_friction',
          description: '',
        },
      ],
    }
  },
}
</script>
