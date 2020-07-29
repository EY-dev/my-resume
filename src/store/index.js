import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    links: [
      {id: 0, key: 'info',     title: 'About Me', icon:'face',           to:'/',         isShow: true, isActive: false, isHoverActive:false, isShortNavigation: true},
      {id: 1, key: 'contacts', title: 'Contacts', icon:'perm_phone_msg', to:'/contacts', isShow: true, isActive: false, isHoverActive:false, isShortNavigation: true},
      {id: 2, key: 'projects', title: 'Projects', icon:'work_outline',   to:'/projects', isShow: true, isActive: false, isHoverActive:false, isShortNavigation: true},
      {id: 3, key: 'skills',   title: 'Skills',   icon:'school',         to:'/skills',   isShow: true, isActive: false, isHoverActive:false, isShortNavigation: true},
      {id: 4, key: 'education', title: 'My Education', icon:'science',         to:'/education', isShow: true, isActive: false, isHoverActive:false, isShortNavigation: false},
      {id: 5, key: 'experience',title: 'My Experience',icon:'business_center', to:'/experience',isShow: true, isActive: false, isHoverActive:false, isShortNavigation: false},
      {id: 6, key: 'email-me',  title: 'Email Me',     icon:'mail',            to:'/email-me',  isShow: true, isActive: false, isHoverActive:false, isShortNavigation: false},
      {id: 7, key: 'contact-me',title: 'Contact Me',   icon:'phone',           to:'/contact-me',isShow: true, isActive: false, isHoverActive:false, isShortNavigation: false},
    ],
    isMobile: (/Mobi|Android/i.test(navigator.userAgent)),
    newVersionReady: true
  },
  mutations: {
    SET_LINK_IS_ACTIVE: (state, value) => {
      state.links.find(link => link.to === value.address).isActive = value.value;
    },
    SET_HOVER_IS_ACTIVE: (state, value) => {
      state.links.find(link => link.to === value.address).isHoverActive = value.value;
    },
    SET_NEW_VERSION_READY: (state, value) => {
      state.newVersionReady = value;
    }
  },
  actions: {
    setLinkIsActive: (state, value) => {
      state.commit('SET_LINK_IS_ACTIVE', value);
    },
    setHoverIsActive: (state, value) => {
      state.commit('SET_HOVER_IS_ACTIVE', value);
    },
    setNewVersionReady: (state, value) => {
      state.commit('SET_NEW_VERSION_READY', value);
    },
  },
  modules: {
  },
  getters: {
    getAvailableLinks: state => {
      return state.links.filter(link => link.isShow)
    },
    getShortAvailableLinks: state => {
      return state.links.filter(link => (link.isShow && link.isShortNavigation))
    },
    getAdditionalAvailableLinks: state => {
      return state.links.filter(link => (link.isShow && !link.isShortNavigation))
    },
    getLinkByAddress: (state) => (to) => {
      return state.links.find(link => link[to] === to)
    },
    isMobile: state => {
      return state.isMobile;
    },
    isNewVersion: state => {
      return state.newVersionReady;
    }
  },
  computed: {

  }
})
