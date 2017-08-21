import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  it('-> method "changeLanguage" should change the "lang" property according to the argument', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.changeLanguage('ru')
    expect(vm.lang)
      .to.equal('ru')
  })
  it('should contain "deleteNote" method', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(typeof vm.deleteNote)
      .to.equal('function')
  })
})
