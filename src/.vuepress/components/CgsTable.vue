<template>
  <table>
    <tr>
      <th>Код</th>
      <th>Предпросмотр</th>
    </tr>
    <tr v-for="({ name, mature }, index) in cgs" :key="index">
      <td>
        <code>scene cg {{ name }}</code>
      </td>
      <td>
        <img
          :src="`/resources/default/images/cgs/${name}.jpg`"
          :class="{ 'mature-img': mature }"
        />
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      cgs: [
        {
          name: 'd1_food_normal',
        },
        {
          name: 'd1_food_skolop',
        },
        {
          name: 'd1_grasshopper',
        },
        {
          name: 'd1_rena_sunset',
        },
        {
          name: 'd1_sl_dinner',
        },
        {
          name: 'd1_sl_dinner_0',
        },
        {
          name: 'd1_uv',
        },
        {
          name: 'd1_uv_2',
        },
        {
          name: 'd2_2ch_beach',
        },
        {
          name: 'd2_lineup',
        },
        {
          name: 'd2_micu_lib',
        },
        {
          name: 'd2_miku_piano',
        },
        {
          name: 'd2_miku_piano2',
        },
        {
          name: 'd2_mirror',
        },
        {
          name: 'd2_mt_undressed',
        },
        {
          name: 'd2_mt_undressed_2',
        },
        {
          name: 'd2_sl_swim',
          mature: true,
        },
        {
          name: 'd2_slavya_forest',
        },
        {
          name: 'd2_sovenok',
        },
        {
          name: 'd2_ussr_falling',
        },
        {
          name: 'd2_water_dan',
        },
        {
          name: 'd3_disco',
        },
        {
          name: 'd3_dv_guitar',
        },
        {
          name: 'd3_dv_scene_1',
        },
        {
          name: 'd3_dv_scene_2',
        },
        {
          name: 'd3_sl_bathhouse',
          mature: true,
        },
        {
          name: 'd3_sl_dance',
        },
        {
          name: 'd3_sl_evening',
        },
        {
          name: 'd3_sl_library',
        },
        {
          name: 'd3_soccer',
        },
        {
          name: 'd3_un_dance',
        },
        {
          name: 'd3_un_forest',
        },
        {
          name: 'd3_us_dinner',
        },
        {
          name: 'd3_us_library_1',
        },
        {
          name: 'd3_us_library_2',
        },
        {
          name: 'd3_us_library_3',
        },
        {
          name: 'd3_us_library_4',
        },
        {
          name: 'd3_ussr_catched',
        },
        {
          name: 'd4_catac',
        },
        {
          name: 'd4_catac_dv',
        },
        {
          name: 'd4_catac_sl',
        },
        {
          name: 'd4_catac_un',
        },
        {
          name: 'd4_catac_us',
        },
        {
          name: 'd4_catac_us_2',
        },
        {
          name: 'd4_dv_mt',
        },
        {
          name: 'd4_el_wash',
        },
        {
          name: 'd4_mi_guitar',
        },
        {
          name: 'd4_mi_sing',
        },
        {
          name: 'd4_sh_sit',
        },
        {
          name: 'd4_sh_stay',
        },
        {
          name: 'd4_us_cancer',
        },
        {
          name: 'd4_us_morning',
        },
        {
          name: 'd4_uv',
        },
        {
          name: 'd4_uv_1',
        },
        {
          name: 'd5_boat',
        },
        {
          name: 'd5_boat_2',
        },
        {
          name: 'd5_cake',
        },
        {
          name: 'd5_clubs_robot',
        },
        {
          name: 'd5_cs',
        },
        {
          name: 'd5_dv_argue',
        },
        {
          name: 'd5_dv_argue_2',
        },
        {
          name: 'd5_dv_argue_3',
        },
        {
          name: 'd5_dv_island',
        },
        {
          name: 'd5_dv_us_wash',
        },
        {
          name: 'd5_dv_us_wash_2',
        },
        {
          name: 'd5_dv_us_wash_3',
          mature: true,
        },
        {
          name: 'd5_dv_us_wash_4',
        },
        {
          name: 'd5_mi',
        },
        {
          name: 'd5_sh_us',
        },
        {
          name: 'd5_sl_sleep',
        },
        {
          name: 'd5_sl_sleep_2',
        },
        {
          name: 'd5_strawberry_race',
        },
        {
          name: 'd5_un_island',
        },
        {
          name: 'd5_un_sleep',
        },
        {
          name: 'd5_us_ghost',
        },
        {
          name: 'd5_us_ghost_2',
        },
        {
          name: 'd5_us_kiss',
        },
        {
          name: 'd5_us_sit',
        },
        {
          name: 'd5_uv',
        },
        {
          name: 'd5_uv_2',
        },
        {
          name: 'd6_dv_fight',
        },
        {
          name: 'd6_dv_fight_2',
        },
        {
          name: 'd6_dv_fight_3',
        },
        {
          name: 'd6_dv_hentai',
          mature: true,
        },
        {
          name: 'd6_dv_hentai_2',
          mature: true,
        },
        {
          name: 'd6_pioneer',
        },
        {
          name: 'd6_sl_forest',
        },
        {
          name: 'd6_sl_forest_2',
        },
        {
          name: 'd6_sl_hentai_1',
          mature: true,
        },
        {
          name: 'd6_sl_hentai_2',
          mature: true,
        },
        {
          name: 'd6_sl_swim',
          mature: true,
        },
        {
          name: 'd6_un_evening_1',
        },
        {
          name: 'd6_un_evening_2',
        },
        {
          name: 'd6_un_punch',
        },
        {
          name: 'd6_us_film',
        },
        {
          name: 'd6_us_night_2',
        },
        {
          name: 'd6_uv',
        },
        {
          name: 'd6_uv_2',
        },
        {
          name: 'd7_dv',
        },
        {
          name: 'd7_dv_2',
        },
        {
          name: 'd7_pioneers_leaving',
        },
        {
          name: 'd7_pioneers_leaving_without_us',
        },
        {
          name: 'd7_sl_morning',
          mature: true,
        },
        {
          name: 'd7_sl_morning_2',
          mature: true,
        },
        {
          name: 'd7_un_hentai',
          mature: true,
        },
        {
          name: 'd7_un_hentai_3',
          mature: true,
        },
        {
          name: 'd7_un_suicide',
        },
        {
          name: 'd7_uv',
        },
        {
          name: 'day4_us_morning',
        },
        {
          name: 'epilogue_dv_2',
        },
        {
          name: 'epilogue_dv_3',
        },
        {
          name: 'epilogue_mi_1',
        },
        {
          name: 'epilogue_mi_2',
          mature: true,
        },
        {
          name: 'epilogue_mi_3',
          mature: true,
        },
        {
          name: 'epilogue_mi_4',
          mature: true,
        },
        {
          name: 'epilogue_mi_5',
          mature: true,
        },
        {
          name: 'epilogue_mi_6',
          mature: true,
        },
        {
          name: 'epilogue_mi_7',
          mature: true,
        },
        {
          name: 'epilogue_mi_8',
          mature: true,
        },
        {
          name: 'epilogue_mi_9',
        },
        {
          name: 'epilogue_sl',
        },
        {
          name: 'epilogue_sl_2',
        },
        {
          name: 'epilogue_un',
        },
        {
          name: 'epilogue_un_bad',
          mature: true,
        },
        {
          name: 'epilogue_un_good',
        },
        {
          name: 'epilogue_us',
        },
        {
          name: 'epilogue_us_3_a',
        },
        {
          name: 'epilogue_us_alone',
        },
        {
          name: 'epilogue_uv',
        },
        {
          name: 'epilogue_uv_2',
        },
        {
          name: 'epilogue_uv_dv',
        },
        {
          name: 'epilogue_uv_mi',
        },
        {
          name: 'epilogue_uv_sl',
        },
        {
          name: 'epilogue_uv_un',
        },
        {
          name: 'epilogue_uv_us',
        },
        {
          name: 'epilogue_uv_uv',
        },
        {
          name: 'final_all_2',
        },
        {
          name: 'miku_h_1_cenz',
          mature: true,
        },
        {
          name: 'miku_h_2_cenz',
          mature: true,
        },
        {
          name: 'uvao_h_cenz',
          mature: true,
        },
      ],
    }
  },
}
</script>
