<template>
  <div class="new-note">
    <textarea v-model="newNote" :placeholder="$global.dictionaries[lang].textareaPlaceholder" class="new-note__textarea" :class="{error: isEmpty}"></textarea>
    <button class="new-note__btn" @click="createNoteMethod">{{ $global.dictionaries[lang].newNoteButton }}</button>
  </div>
</template>

<script>
export default {
  name: 'NewNote',
  props: ['lang', 'createNote'],
  data () {
    return {
      newNote: '',
      isEmpty: false
    }
  },
  methods: {
    createNoteMethod () {
      if (this.newNote.match(/\S/) === null) {
        this.isEmpty = true
        return
      }
      this.isEmpty = false
      this.createNote(this.newNote)
      this.newNote = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .new-note{
    text-align: right;
    margin-bottom: 10px;

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
      margin-top: 5px;
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
