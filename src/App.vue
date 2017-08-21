<template>
  <div id="app">
    <Loading :loading="loading"></Loading>
    <Header-Element :changeLanguage="changeLanguage" :lang="lang"></Header-Element>
    <router-view :lang="lang" :notes="notes" :deleteNote="deleteNote" :editNote="editNote" :createNote="createNote"></router-view>
  </div>
</template>

<script>
import HeaderElement from '@/components/Header'
import Loading from '@/components/Loading'

export default {
  name: 'app',
  components: {HeaderElement, Loading},
  data () {
    return {
      lang: 'en',
      loading: false,
      notes: []
    }
  },
  methods: {
    changeLanguage (lang) {
      this.lang = lang
    },
    createNote (title) {
      this.loading = true
      this.$http.post(this.$global.apiURL + 'notes', {title: title}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        this.notes.push(res.body)
        this.loading = false
      })
      .catch(e => {
        console.log(e)
        this.loading = false
      })
    },
    deleteNote (id) {
      this.loading = true
      this.$http.delete(this.$global.apiURL + 'notes/' + id)
      .then(() => {
        for (let i = 0; i < this.notes.length; i++) {
          if (+this.notes[i].id === +id) {
            this.notes.splice(i, 1)
            break
          }
        }
        this.loading = false
        if (this.$route.path !== '/') this.$router.replace('/')
      })
      .catch(e => {
        console.log(e)
        this.loading = false
      })
    },
    editNote (id, title) {
      this.loading = true
      this.$http.put(this.$global.apiURL + 'notes/' + id, {title: title}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        for (let i = 0; i < this.notes.length; i++) {
          if (+this.notes[i].id === +id) {
            this.notes[i].title = title
            break
          }
        }
        this.loading = false
        this.$router.push('/')
      })
      .catch(e => {
        console.log(e)
        this.loading = false
      })
    }
  },
  created () {
    this.loading = true
    this.$http.get(this.$global.apiURL + 'notes', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      this.notes = res.body
      this.loading = false
    })
    .catch(e => {
      console.log(e)
      this.loading = false
    })
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  outline: none
}

body{
  background: #ccd;
}

#app {
  position: relative;
  background: #fff;
  color: #2c3e50;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 15px;
  font-family: Tahoma, sans-serif;
}
</style>
