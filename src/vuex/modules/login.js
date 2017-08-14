import * as types from './../mutations-types'
import router from 'router'
import api from 'assets/js/api'
import qs from 'qs'

export default {
  state: {
    form: {
      username: '',
      password: ''
    },
    msg: ''
  },
  getters: {
    form: state => state.form,
    msg: state => state.msg
  },
  mutations: {
    [types.LOGIN] (state, res) {
      localStorage.setItem('token', res.info.token)
      router.push('/index')
      state.form.username = ''
      state.form.password = ''
    }
  },
  actions: {
    logIn: ({
      commit, state
    }, key) => {
      api.post('https://www.easy-mock.com/mock/5962eeb29adc231f357c6bd5/sys/login', qs.stringify(key))
      .then(function (res) {
        if (res.data.code === 200) {
          commit('LOGIN', res.data)
          state.msg = ''
        } else {
          state.msg = res.data.message
        }
      })
    }
  }
}