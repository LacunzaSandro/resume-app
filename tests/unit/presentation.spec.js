import { mount } from '@vue/test-utils'
import Presentation from '@/components/Presentation.vue'

describe('Presentation.vue', () => {
  it('renders props.msg when passed', () => {
    const title = 'Java y Testing'
    const wrapper = mount(Presentation, {
      propsData: {
        estudios: {
          title: title
        }
       }
    })
    expect(wrapper.html()).toContain(title)
  })
})
