import {createStore} from 'vuex'

export default createStore({
  state: {
    sponsors: [{image: {url: "/image/loading1.png"}}, {image: {url: "/assets/loading1.png"}},{image: {url: "/assets/loading1.png"}}],
  },
  getters: {},
  mutations: {
    setSponsors(state, newSponsors) {
      console.log(state.sponsors)
      state.sponsors = newSponsors;
    },
  },
  actions: {},
  modules: {}
})
