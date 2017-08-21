<template>
  <div class="note">
    <div class="note__id">{{ this.noteDetails.id}}</div>
    <div class="note__title">{{ this.trimmedTitle}}</div>
    <router-link :to="String(noteDetails.id)" class="note__btn">{{ $global.dictionaries[lang].editNoteButton }}</router-link>
    <button class="note__btn" @click="deleteNote(noteDetails.id)">{{ $global.dictionaries[lang].deleteNoteButton }}</button>
  </div>
</template>

<script>
export default {
  name: 'Note',
  props: ['noteDetails', 'deleteNote', 'lang'],
  computed: {
    trimmedTitle () {
      return this.noteDetails.title.length > 100 ? this.noteDetails.title.slice(0, 100) : this.noteDetails.title
    }
  }
}
</script>

<style lang="scss" scoped>
  .note{
    height: 40px;
    padding: 0 10px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #eef;
    border-radius: 5px;
    font-size: 14px;
    text-align: left;

    &__id{
      flex: 0 0 20px;
      padding-right: 10px;
    }

    &__title{
      max-width: 100%;
      flex: 1 0 0px;
      white-space: nowrap;
      overflow: hidden;
    }

    &__btn{
      display: inline-block;
      margin-left: 10px;
      height: 20px;
      padding: 0 10px;
      background: #559;
      border: none;
      border-radius: 10px;
      font-size: 12px;
      line-height: 20px;
      text-decoration: none;
      color: #fff;
      cursor: pointer;

      &:hover{
        background: #77b;
      }
    }
  }
</style>
