<template>
  <header class="header">
    <router-link to="/" class="header__logo"><img src="../assets/logo.png" alt=""></router-link>
    <div class="header__lang-switch">
      <button class="header__lang-btn" @click="changeLanguage('en')" :class="{active: lang === 'en'}">EN</button>
      /
      <button class="header__lang-btn" @click="changeLanguage('ru')" :class="{active: lang === 'ru'}">RU</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderElement',
  props: ['changeLanguage', 'lang']
}
</script>

<style lang="scss" scoped>
.header{
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__logo{
    img{
      height: 50px;
    }
  }

  &__lang-btn{
    border: none;
    background: none;
    font-size: 14px;
    color: #55a;
    margin: 0 2px;
    cursor: pointer;
    padding: 2px;
    user-select: none;

    &.active{
      background: #55a;
      color: #fff;
    }
  }
}
</style>
