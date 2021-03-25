<template>
  <table>
    <tr>
      <th>Переменная</th>
      <th>Персонаж</th>
    </tr>
    <tr v-for="({ id, name, color }, index) in characters" :key="index">
      <td>
        <code>{{ id }}</code>
      </td>
      <td :style="{ color }">{{ name }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      characters: [
        { id: 'th', name: 'Мысли' },
        { id: 'mep', name: 'Парень', color: '' },
        { id: 'me', name: 'Семён', color: '#e1dd7d' },
        { id: 'my', name: 'Я', color: '#e1dd7d' },
        { id: 'usg', name: 'Девушка (Лена)' },
        { id: 'unp', name: 'Пионерка (Лена)', color: '#b956ff' },
        { id: 'un', name: 'Лена', color: '#b956ff' },
        { id: 'dvg', name: 'Девушка (Алиса)', color: '#ffaa00' },
        { id: 'dvp', name: 'Пионерка (Алиса)', color: '#ffaa00' },
        { id: 'dv', name: 'Алиса', color: '#ffaa00' },
        { id: 'usg', name: 'Девушка (Ульяна)', color: '#ff3200' },
        { id: 'usp', name: 'Пионерка (Ульяна)', color: '#ff3200' },
        { id: 'us', name: 'Ульяна', color: '#ff3200' },
        { id: 'slg', name: 'Девушка (Славя)', color: '#ffd200' },
        { id: 'slp', name: 'Пионерка (Славя)', color: '#ffd200' },
        { id: 'sl', name: 'Славя', color: '#ffd200' },
        { id: 'mip', name: 'Пионерка (Мику)', color: '#00deff' },
        { id: 'mi', name: 'Мику', color: '#00deff' },
        { id: 'ma', name: 'Маша', color: '#00deff' },
        { id: 'uvp', name: 'Странная девочка (Юля)', color: '#4eff00' },
        { id: 'uv', name: 'Юля', color: '#4eff00' },
        { id: 'elp', name: 'Пионер (Электроник)', color: '#ffff00' },
        { id: 'el', name: 'Электроник', color: '#ffff00' },
        { id: 'ro', name: 'Роутер', color: '#ffff00' },
        { id: 'shp', name: 'Пионер (Шурик)', color: '#fff226' },
        { id: 'sh', name: 'Шурик', color: '#fff226' },
        { id: 'sa', name: 'Саша', color: '#ffd200' },
        { id: 'mzp', name: 'Пионерка (Женя)', color: '#4a86ff' },
        { id: 'mz', name: 'Женя (Мицгёрл)', color: '#4a86ff' },
        { id: 'mtp', name: 'Вожатая (Ольга Дмитриевна)', color: '#00ea32' },
        { id: 'mt', name: 'Ольга Дмитриевна', color: '#00ea32' },
        { id: 'mt_voice', name: 'Голос (Ольга Дмитриевна)', color: '#00ea32' },
        { id: 'csp', name: 'Медсестра (Виола)', color: '#a5a5ff' },
        { id: 'cs', name: 'Виола', color: '#a5a5ff' },
        { id: 'pi', name: 'Пионер', color: '#e60101' },
        { id: 'all', name: 'Пионеры', color: '#ed4444' },
        { id: 'voice', name: 'Голос', color: '#e1dd7d' },
        { id: 'bush', name: 'Голос', color: '#c0c0c0' },
        { id: 'voices', name: 'Голоса' },
        { id: 'dreamgirl', name: '...', color: '#c0c0c0' },
        { id: 'kids', name: 'Малышня' },
        // { id: 'lk', name: 'Люркмор-кун' },
        // { id: 'dy', name: 'Голос из динамика' },
        { id: 'message', name: 'Сообщение', color: '#c0c0c0' },
        { id: 'odn', name: 'Одногруппник', color: '#c0c0c0' },
      ],
    }
  },
}
</script>

<style>
th,
td {
  text-align: center;
}
</style>
