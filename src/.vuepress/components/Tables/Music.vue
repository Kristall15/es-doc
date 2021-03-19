<template>
  <div>
    <ListDownloadLink
      :data="music.map((item) => `music_list[&quot;${item}&quot;]`)"
      file="music_list.txt"
    />
    <table>
      <tr>
        <th>Код</th>
        <th>Предпросмотр</th>
      </tr>
      <tr v-for="(name, index) in music" :key="index">
        <td>
          <code>play music music_list["{{ name }}"]</code>
        </td>
        <td>
          <audio
            :src="`/resources/default/sounds/music/${name}.ogg`"
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
      music: [
        '410',
        'a_promise_from_distant_days',
        'a_promise_from_distant_days_v2',
        'afterword',
        'always_ready',
        'awakening_power',
        'blow_with_the_fires',
        'confession',
        'dance_of_fireflies',
        'dinner_horn_processed',
        'doomed_to_be_defeated',
        'door_to_nightmare',
        'drown',
        'eat_some_trouble',
        'eternal_longing',
        'everlasting_summer',
        'everlasting_summer_op_edition',
        'faceless',
        'farewell_to_the_past',
        'farewell_to_the_past_short',
        'feeling_good',
        'forest_maiden',
        'free_love',
        'gentle_predator',
        'get_to_know_me_better',
        'glimmering_coals',
        'goodbye_home_shores',
        'heather',
        'i_dont_blame_you',
        'i_want_to_play',
        'into_the_unknown',
        'just_another_summer_day',
        'just_think',
        'kostry',
        'lets_be_friends',
        'lightness',
        'lightness_radio',
        'meet_me_there',
        'memories',
        'memories_piano_outdoors',
        'miku_song_flute',
        'miku_song_learn1',
        'miku_song_voice',
        'my_daily_life',
        'mystery_girl',
        'no_tresspassing',
        'orchid',
        'pile',
        'raindrops',
        'reflection',
        'reflection_on_water',
        'reminiscences',
        'revenga',
        'scarytale',
        'she_is_kind',
        'silhouette_in_sunset',
        'smooth_machine',
        'so_good_to_be_careless',
        'sparkles',
        'sunny_day',
        'sweet_darkness',
        'take_me_beautifully',
        'that_s_our_madhouse',
        'timid_girl',
        'torture',
        'trapped_in_dreams',
        'tried_to_bring_it_back',
        'two_glasses_of_melancholy',
        'vzveites_kostrami',
        'waltz_of_doubts',
        'went_fishing_caught_a_girl',
        'what_do_you_think_of_me',
        'you_lost_me',
        'you_won_t_let_me_down',
        'your_bright_side',
      ],
    }
  },
}
</script>
