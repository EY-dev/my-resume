import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    links: [
      {id: 0, key: 'info',     title: 'About Me', icon:'face',           to:'/',         isShow: true, isActive: false, isHoverActive:false},
      {id: 1, key: 'contacts', title: 'Contacts', icon:'perm_phone_msg', to:'/contacts', isShow: true, isActive: false, isHoverActive:false},
      {id: 2, key: 'projects', title: 'Projects', icon:'work_outline',   to:'/projects', isShow: true, isActive: false, isHoverActive:false},
    ]
  },
  mutations: {
    SET_LINK_IS_ACTIVE: (state, value) => {
      state.links.find(link => link.to === value.address).isActive = value.value;
    },
    SET_HOVER_IS_ACTIVE: (state, value) => {
      state.links.find(link => link.to === value.address).isHoverActive = value.value;
    },
  },
  actions: {
    setLinkIsActive: (state, value) => {
      state.commit('SET_LINK_IS_ACTIVE', value);
    },
    setHoverIsActive: (state, value) => {
      state.commit('SET_HOVER_IS_ACTIVE', value);
    },
  },
  modules: {
  },
  getters: {
    getAvailableLinks: state => {
      return state.links.filter(link => link.isShow)
    },
    getLinkByAddress: (state) => (to) => {
      return state.links.find(link => link[to] === to)
    }
  },
  computed: {

  }
})
