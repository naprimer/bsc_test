<template>
  <div class="note-details">
    <textarea v-model="title" :placeholder="$global.dictionaries[lang].textareaPlaceholder" class="note-details__textarea" :class="{error: isEmpty}"></textarea>
    <button class="note-details__btn" @click="editNoteMethod(id, title)">{{ $global.dictionaries[lang].editNoteButton }}</button>
    <button class="note-details__btn" @click="deleteNote(id)">{{ $global.dictionaries[lang].deleteNoteButton }}</button>
    <router-link to="/" class="note-details__btn">{{ $global.dictionaries[lang].cancelButton }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'NoteDetails',
  props: ['lang', 'notes', 'deleteNote', 'editNote'],
  data () {
    return {
      title: '',
      id: +this.$route.params.id,
      isEmpty: false
    }
  },
  methods: {
    editNoteMethod (id, title) {
      if (this.title.match(/\S/) === null) {
        this.isEmpty = true
        return
      }
      this.isEmpty = false
      this.editNote(id, title)
    }
  },
  created () {
    for (let i = 0; i < this.notes.length; i++) {
      if (+this.notes[i].id === +this.id) {
        this.title = this.notes[i].title
        break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .note-details{
    text-align: right;

    &__textarea{
      resize: none;
      width: 100%;
      height: 100px;
      padding: 5px;
      font-size: 14px;
      text-align: left;

      &.error{
        border: 1px solid #f00;
      }
    }

    &__btn{
      display: inline-block;
      margin-left: 10px;
      margin-top: 10px;
      height: 30px;
      padding: 0 10px;
      background: #559;
      border: none;
      border-radius: 10px;
      font-size: 15px;
      line-height: 30px;
      text-decoration: none;
      color: #fff;
      cursor: pointer;

      &:hover{
        background: #77b;
      }
    }
  }
</style>
