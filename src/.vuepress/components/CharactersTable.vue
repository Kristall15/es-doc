<template>
  <table>
    <tr>
      <th>Переменная</th>
      <th>Персонаж</th>
    </tr>
    <tr v-for="({ id, name }, index) in characters" :key="index">
      <td>{{ id }}</td>
      <td>{{ name }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      characters: [
        { id: 'th', name: 'Мысли' },
        { id: 'mep', name: 'Парень' },
        { id: 'me', name: 'Семен' },
        { id: 'my', name: 'Я' },
        { id: 'unp', name: 'Пионерка (Лена)' },
        { id: 'un', name: 'Лена' },
        { id: 'dvp', name: 'Пионерка (Алиса)' },
        { id: 'dv', name: 'Алиса' },
        { id: 'usp', name: 'Пионерка (Ульяна)' },
        { id: 'us', name: 'Ульяна' },
        { id: 'slp', name: 'Пионерка (Славя)' },
        { id: 'sl', name: 'Славя' },
        { id: 'mip', name: 'Пионерка (Мику)' },
        { id: 'mi', name: 'Мику' },
        { id: 'ma', name: 'Маша' },
        { id: 'uvp', name: 'Странная девочка (Юля)' },
        { id: 'uv', name: 'Юля' },
        { id: 'elp', name: 'Пионер (Электроник)' },
        { id: 'el', name: 'Электроник' },
        { id: 'ro', name: 'Роутер' },
        { id: 'shp', name: 'Пионер (Шурик)' },
        { id: 'sh', name: 'Шурик' },
        { id: 'sa', name: 'Саша' },
        { id: 'mzp', name: 'Пионерка (Женя)' },
        { id: 'mz', name: 'Женя (Мицгёрл)' },
        { id: 'mtp', name: 'Вожатая (Ольга Дмитриевна)' },
        { id: 'mt', name: 'Ольга Дмитриевна' },
        { id: 'mt_voice', name: 'Голос (Ольга Дмитриевна)' },
        { id: 'csp', name: 'Медсестра (Виола)' },
        { id: 'cs', name: 'Виола' },
        { id: 'pi', name: 'Пионер' },
        { id: 'all', name: 'Пионеры' },
        { id: 'voice', name: 'Голос' },
        { id: 'bush', name: 'Голос (нейтральный)' },
        { id: 'voices', name: 'Голоса' },
        { id: 'dreamgirl', name: '...' },
        { id: 'kids', name: 'Малышня' },
        { id: 'lk', name: 'Луркмор-кун' },
        { id: 'dy', name: 'Голос из динамика' },
        { id: 'message', name: 'Сообщение' },
        { id: 'odn', name: 'Одногруппник' },
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
