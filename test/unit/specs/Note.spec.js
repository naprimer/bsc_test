import Vue from 'vue'
import Note from '@/components/Note'

var str = 'a'.repeat(200)

describe('Note.vue', () => {
  it('must get property "lang"', () => {
    const Constructor = Vue.extend(Note)
    const vm = new Constructor({
      propsData: {
        lang: 'en'
      }
    }).$mount()
    expect(vm.lang)
      .to.equal('en')
  })
  it('-> computed property "trimmedTitle" must be no longer than 100 chars', () => {
    const Constructor = Vue.extend(Note)
    const vm = new Constructor({
      propsData: {
        noteDetails: {id: 1, title: str}
      }
    }).$mount()
    expect(vm.trimmedTitle.length)
      .to.equal(100)
  })
})
