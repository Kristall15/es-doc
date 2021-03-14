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
          <div v-if="description" style="margin-top: 1rem">
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
import ListDownloadLink from '../ListDownloadLink.vue'

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
          description: 'Алиса вскрывает дверь в столовую отмычкой',
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
          description: 'Всполох ткани/одеяла',
        },
        {
          name: 'blanket_off_stand',
          description: 'Сильный всполох ткани/одеяла',
        },
        {
          name: 'blow_out_candle',
          description: 'Задувание свечи',
        },
        {
          name: 'boat_impact',
          description: 'Удар лодки о сушу',
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
          description: 'Сломали шкаф',
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
          description: 'Гудок автобуса',
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
          description: 'Падение тела в кусты',
        },
        {
          name: 'bush_leaves',
          description: 'Кто-то выбежал из кустов',
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
          description: 'Стискивание',
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
          description: 'Закрытие дверцы шкафчика',
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
          description: 'Звук закрытия двери, ведущей в подсобку',
        },
        {
          name: 'close_water_sink',
          description: 'Закрытие ручки крана',
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
          description: 'Звук остывания мотора автобуса',
        },
        {
          name: 'cooling_engine_loop',
          description: 'Зацикленный звук остывания мотора',
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
          description: 'Скрип двери',
        },
        {
          name: 'draw_water',
          description: 'Звук захода в воду',
        },
        {
          name: 'drawer_rattle',
          description: 'Звук дергания замка',
        },
        {
          name: 'drop_alisa_bag',
          description: 'Падение сумки Алисы',
        },
        {
          name: 'drop_pipe',
          description: 'Звук падения трубы',
        },
        {
          name: 'dropped_chair',
          description: 'Уронили стул',
        },
        {
          name: 'eat_apple',
          description: 'Звук откусывания яблока',
        },
        {
          name: 'energy_door_bus',
          description: 'Удар силового поля и падение тела',
        },
        {
          name: 'face_slap',
          description: 'Пощёчина',
        },
        {
          name: 'fall_grass',
          description: 'Падение на траву',
        },
        {
          name: 'fall_metal_door',
          description: 'Падение железной двери в катакомбах',
        },
        {
          name: 'fall_wood_floor',
          description: 'Падение на деревянный пол',
        },
        {
          name: 'far_steps',
          description: 'Шаги вдалеке',
        },
        {
          name: 'forest_fireplace',
          description: 'Костёр',
        },
        {
          name: 'ghost_children_laugh',
          description: 'Смех детей-призраков',
        },
        {
          name: 'grate_hand_fall',
          description: 'Звук выламывания решётки',
        },
        {
          name: 'grate_open_hand',
          description: 'Звук выламывания решётки2',
        },
        {
          name: 'gusty_wind',
          description: 'Ветер',
        },
        {
          name: 'hatch_drop',
          description: 'Открытие люка',
        },
        {
          name: 'head_explode',
          description: 'Удар по голове',
        },
        {
          name: 'head_heartbeat',
          description: 'Сердцебиение',
        },
        {
          name: 'hell_alarm_clock',
          description: 'Адский будильник',
        },
        {
          name: 'hell_crickets_1',
          description: 'Сверчки',
        },
        {
          name: 'hell_crickets_2',
          description: 'Сверчки2',
        },
        {
          name: 'hell_crickets_3',
          description: 'Сверчки3',
        },
        {
          name: 'hell_crickets_4',
          description: 'Сверчки4',
        },
        {
          name: 'hiding_in_bush',
          description: 'Спрятались в кусты',
        },
        {
          name: 'home_phone_break',
          description: 'Ломаем домашний телефон',
        },
        {
          name: 'home_phone_ring',
          description: 'Звонок на домашний телефон',
        },
        {
          name: 'home_phone_take',
          description: 'Взяли трубку домашнего телефона',
        },
        {
          name: 'ignite_torch',
          description: 'Зажгли факел',
        },
        {
          name: 'ikarus_arrive',
          description: 'Автобус подъехал',
        },
        {
          name: 'ikarus_open_doors',
          description: 'Открытие дверей автобуса',
        },
        {
          name: 'inhale',
          description: 'Вдох/выдох',
        },
        {
          name: 'insert_crowbar_door',
          description: 'Вставили монтировку в щель железной двери',
        },
        {
          name: 'intro_bus_door_open',
          description: 'Звук открытия дверей и отъезда автобуса',
        },
        {
          name: 'intro_bus_engine_loop',
          description: 'Зацикленный звук мотора автобуса, снаружи',
        },
        {
          name: 'intro_bus_engine_start',
          description: 'Автобус подъехал, звук мотора',
        },
        {
          name: 'intro_bus_stop_sigh',
          description: 'Вдох на остановке',
        },
        {
          name: 'intro_bus_stop_steps',
          description: 'Шаги по снегу, уличный траффик',
        },
        {
          name: 'intro_bus_transition',
          description: 'Воспоминания2',
        },
        {
          name: 'jump_into_hole',
          description: 'Прыгнули в яму',
        },
        {
          name: 'jump_into_hole_2',
          description: 'Прыгнули в яму2',
        },
        {
          name: 'jump_into_hole_3',
          description: 'Прыгнули в яму3',
        },
        {
          name: 'jump_over_hole',
          description: 'Перепрыгнули через яму',
        },
        {
          name: 'key_drawer',
          description: 'Открыли ключом шкафчик, закрыли.',
        },
        {
          name: 'keyboard_mouse',
          description: 'Звуки работы за компьютером',
        },
        {
          name: 'keyboard_mouse_computer_noise',
          description: 'Звуки работы за компьютером2',
        },
        {
          name: 'keys_rattle',
          description: 'Звук связки ключей',
        },
        {
          name: 'knock_door2',
          description: 'Стук в дверь',
        },
        {
          name: 'knock_door3_dull',
          description: 'Гулкий стук в дверь',
        },
        {
          name: 'knock_door6_closed',
          description: 'Попытка открытия закрытой двери',
        },
        {
          name: 'knock_door7_polite',
          description: 'Стук в дверь2',
        },
        {
          name: 'knock_door_closed_hard1',
          description: 'Попытка открытия закрытой двери2',
        },
        {
          name: 'knock_door_closed_hard2',
          description: 'Попытка открытия закрытой двери3',
        },
        {
          name: 'knock_glass',
          description: 'Стук в окно',
        },
        {
          name: 'knocking_door_2',
          description: 'Стук в дверь3',
        },
        {
          name: 'knocking_door_outside',
          description: 'Стук в дверь, находимся внутри.',
        },
        {
          name: 'lena_hits_alisa',
          description: 'Лена ударила Алису',
        },
        {
          name: 'lena_plays_tennis_fail',
          description: 'Лена играет в теннис',
        },
        {
          name: 'light_candle',
          description: 'Зажигалкой зажгли свечку',
        },
        {
          name: 'lock_click',
          description: 'Щелчок замка1',
        },
        {
          name: 'lock_close',
          description: 'Щелчок замка2',
        },
        {
          name: 'lock_open',
          description: 'Щелчок замка3',
        },
        {
          name: 'lock_open_close_1',
          description: 'Щелчок замка4',
        },
        {
          name: 'match_candle',
          description: 'Спичкой зажгли свечку',
        },
        {
          name: 'medpunkt_door_open',
          description: 'Открытие двери в медпункт',
        },
        {
          name: 'menu_gate',
          description: 'Звук калитки',
        },
        {
          name: 'metal_door_handle_rattle',
          description: 'Попытка открытия железной двери',
        },
        {
          name: 'metal_door_heavy_close',
          description: 'Попытка открытия железной двери в катакомбах, эхо',
        },
        {
          name: 'metal_door_large_close_basement',
          description: 'Удар по подвальной двери',
        },
        {
          name: 'miku_song_learn1',
          description: 'Мику играет на гитаре',
        },
        {
          name: 'miku_song_learn2',
          description: 'Семён играет на гитаре',
        },
        {
          name: 'muffled_explosion',
          description: 'Взрыв',
        },
        {
          name: 'mystery_movement',
          description: 'Движение',
        },
        {
          name: 'nightmare_explosion',
          description: 'Взрыв, осыпалась земля, гранит',
        },
        {
          name: 'nightmare_underground_rumble',
          description: 'Взрыв снаружи, звук грома, осыпалась земля, гранит',
        },
        {
          name: 'open_cabinet_1',
          description: 'Открыли шкафчик',
        },
        {
          name: 'open_cabinet_2',
          description: 'Открыли шкафчик2',
        },
        {
          name: 'open_cupboard',
          description: 'Открыли шкафчик3',
        },
        {
          name: 'open_dooor_campus_1',
          description: 'Открыли дверь',
        },
        {
          name: 'open_dooor_campus_2',
          description: 'Открыли дверь2',
        },
        {
          name: 'open_door_1',
          description: 'Открыли дверь3',
        },
        {
          name: 'open_door_2',
          description: 'Открыли дверь4',
        },
        {
          name: 'open_door_clubs',
          description: 'Открыли дверь, клубы',
        },
        {
          name: 'open_door_clubs_2',
          description: 'Открыли дверь, клубы2',
        },
        {
          name: 'open_door_clubs_nextroom',
          description: 'Открытие двери в клубы, находимся в другой комнате',
        },
        {
          name: 'open_door_kick',
          description: 'Удар по двери',
        },
        {
          name: 'open_door_mines',
          description: 'Открытие деревянной двери в шахтах',
        },
        {
          name: 'open_door_mines_metal',
          description: 'Открытие железной двери в шахтах',
        },
        {
          name: 'open_door_squeak_2',
          description: 'Скрип двери',
        },
        {
          name: 'open_door_strong',
          description: 'Резко открыли дверь',
        },
        {
          name: 'open_drapes',
          description: 'Открыли ставни',
        },
        {
          name: 'open_journal',
          description: 'Открыли журнал, листают',
        },
        {
          name: 'open_metal_door',
          description: 'Открыли железную дверь, медпункт',
        },
        {
          name: 'open_metal_hatch',
          description: 'Открытие люка',
        },
        {
          name: 'open_table',
          description: 'Открытие дверцы шкафчика',
        },
        {
          name: 'open_water_sink',
          description: 'Открытие вентиля, умывальники',
        },
        {
          name: 'open_window',
          description: 'Открыли окно',
        },
        {
          name: 'owl_far',
          description: 'Сова вдалеке',
        },
        {
          name: 'paper_bag',
          description: 'Перелистнули журнал/Взяли в руку фотографию',
        },
        {
          name: 'pat_shoulder_hard',
          description: 'Положили руку на плечо',
        },
        {
          name: 'piano_head_bump',
          description: 'Удар головой о пианино',
        },
        {
          name: 'punch_medium',
          description: 'Ударили',
        },
        {
          name: 'punch_washstand',
          description: 'Ударили2',
        },
        {
          name: 'put_sugar_cart',
          description: 'Поклали мешок с сахаром',
        },
        {
          name: 'radio_squelch_1',
          description: 'Шум рации',
        },
        {
          name: 'radio_squelch_2',
          description: 'Шум рации2',
        },
        {
          name: 'radio_tune',
          description: 'Звук поиска радиостанции',
        },
        {
          name: 'rowboat_loop',
          description: 'Плывём на лодке',
        },
        {
          name: 'run_forest',
          description: 'Бежим по лесу',
        },
        {
          name: 'salt_impact',
          description: 'Ударили по столу в столовой',
        },
        {
          name: 'scary_sting',
          description: 'Звук скримера',
        },
        {
          name: 'scoop_water_cup',
          description: 'Набрали в стакан воды',
        },
        {
          name: 'shoulder_dive_water',
          description: 'Ныряем под воду',
        },
        {
          name: 'shurik_mines_far',
          description: 'Шагаем по шахатам',
        },
        {
          name: 'shurik_opens_door',
          description: 'Открытие двери в катакомбах',
        },
        {
          name: 'shurik_snore',
          description: 'Храп',
        },
        {
          name: 'signal_pistol',
          description: 'Сигнальный пистолет, выстрел',
        },
        {
          name: 'simon_applause',
          description: 'Апплодисменты',
        },
        {
          name: 'simon_fall_1',
          description: 'Семён провалился в яму',
        },
        {
          name: 'simon_fall_2',
          description: 'Семён провалился в яму2',
        },
        {
          name: 'slam_door_campus',
          description: 'Удар по двери',
        },
        {
          name: 'slavya_gets_out',
          description: 'Открытие дверцы, прыжок на землю',
        },
        {
          name: 'slavya_run',
          description: 'Прибежали издалека',
        },
        {
          name: 'soccer_ball_catch',
          description: 'Поймали мяч',
        },
        {
          name: 'soccer_ball_gate',
          description: 'Ударили по мячу, попали в ворота',
        },
        {
          name: 'soccer_ball_kick',
          description: 'Ударили по мячу',
        },
        {
          name: 'steps_clubs_nextroom',
          description: 'Шаги',
        },
        {
          name: 'stomach_growl',
          description: 'Желудок',
        },
        {
          name: 'street_traffic_outside',
          description: 'Уличный траффик снаружи',
        },
        {
          name: 'suspence_bang',
          description: 'Звук скримера2',
        },
        {
          name: 'swimming',
          description: 'Плаваем',
        },
        {
          name: 'table_hit',
          description: 'Ударили по столу',
        },
        {
          name: 'tennis_serve_1',
          description: 'Ударили ракеткой по воланчику',
        },
        {
          name: 'tennis_serve_2',
          description: 'Ударили ракеткой по воланчику2',
        },
        {
          name: 'terminator',
          description: 'Главная тема Терминатора',
        },
        {
          name: 'terminator_parody',
          description: 'Главная тема Терминатора (пародия)',
        },
        {
          name: 'throw_compote',
          description: 'Вылили компот',
        },
        {
          name: 'thunder_crack',
          description: 'Удар грома',
        },
        {
          name: 'thunder_rumble',
          description: 'Звук грозы, зациклен',
        },
        {
          name: 'thunder_wood',
          description: 'Удар грома2',
        },
        {
          name: 'torch',
          description: 'Звук факела',
        },
        {
          name: 'tree_branches',
          description: 'Шумят кроны деревьев',
        },
        {
          name: 'uliana_jumps_down',
          description: 'Ульяна спрыгнула',
        },
        {
          name: 'underwater_dive',
          description: 'Плаваем под водой',
        },
        {
          name: 'unlock_door_campus',
          description: 'Открыли дверь ключом',
        },
        {
          name: 'unlock_medpunkt_door',
          description: 'Открыли дверь ключом, медпункт',
        },
        {
          name: 'unzip_sleepbag',
          description: 'Расстегнули спальный мешок',
        },
        {
          name: 'water_emerge',
          description: 'Всплеск воды',
        },
        {
          name: 'water_sink_stream',
          description: 'Зацикленный звук воды из умывальника',
        },
        {
          name: 'water_splash',
          description: 'Всплеск воды, умывальники',
        },
        {
          name: 'wind_gust',
          description: 'Звук ветра',
        },
        {
          name: 'wood_floor_squeak',
          description: 'Скрипнула половица',
        },
        {
          name: 'wood_friction',
          description: 'Активно зарисовываем карандашём',
        },
      ],
    }
  },
}
</script>
