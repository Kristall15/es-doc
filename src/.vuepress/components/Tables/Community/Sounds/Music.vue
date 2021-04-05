<template>
  <div>
    <ListDownloadLink :data="music" file="community_music_list.txt" />
    <table>
      <tr>
        <th>Код</th>
        <th>Предпросмотр</th>
      </tr>
      <tr v-for="({ name, description }, index) in music" :key="index">
        <td>
          <code>play music {{ name }}</code>
          <div v-if="description" style="margin-top: 1rem">
            <small>{{ description }}</small>
          </div>
        </td>
        <td>
          <audio
            :src="`/resources/community/sounds/music/${name}.ogg`"
            type="audio/ogg"
            controls
          ></audio>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      music: [
        { name: 'escape', description: 'Kaivaan ft. Hikaru Station — Escape' },
        { name: 'just_be_friend', description: '410 — Just Be Friend' },
        {
          name: 'my_silent_angel',
          description: 'April Rain — My Silent Angel',
        },
        { name: 'near_light', description: 'Ólafur Arnalds — Near Light' },
        {
          name: 'night_of_rain',
          description: 'Micheal Ortega — Night Of Rain',
        },
        { name: 'our_world', description: 'Tom Day — Our World' },
        { name: 'promise', description: 'Akira — Promise' },
        { name: 'rengoku_kozo', description: 'ZetuHomura — Rengoku kozō' },
        { name: 'silent', description: 'DeepCosmo — Silent' },
        {
          name: 'still_loving_you',
          description: 'Scorpions — Still Loving You (Cover by Ozielzinho)',
        },
        {
          name: 'violent_passion_surrogate',
          description: 'April Rain — Violent Passion Surrogate',
        },
        {
          name: 'we_meet_in_dreams',
          description: 'Gothic Storm — We Meet In Dreams',
        },
      ],
    }
  },
}
</script>
