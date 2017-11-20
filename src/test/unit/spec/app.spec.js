import { mount, createLocalVue } from 'vue-test-utils';

import Vuex from 'vuex';

import App from '@/App.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
let wrapper;

beforeEach(() => {
  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment(state) {
        state.count++;
      }
    },
    modules: {
      foo: {
        state: () => ({ bar: 1 })
      }
    }
  });
  wrapper = mount(App, { localVue, store });
});

describe('App.vue', () => {
  test('挂载后应触发changeMsg', () => {
    const changeMsg = jest.fn();
    wrapper.setMethods({ changeMsg });
    expect(changeMsg).toHaveBeenCalled();
  });
  test('应该有一个button按钮', () => {
    const $button = wrapper.find('button');
    expect($button).toBeTruthy();
  });
  test('h1标签的值应为"message"', () => {
    const $h1 = wrapper.find('h1');
    expect($h1.text()).toBe('message');
  });
  test('content初始值应为0 1，click => 1 1', () => {
    const $content = wrapper.find('.content');
    const $button = wrapper.find('button');
    expect($content.text()).toBe('0 1');
    $button.trigger('click');
    expect($content.text()).toBe('1 1');
  });
});
