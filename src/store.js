import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl:
          "https://images.pexels.com/photos/1293430/pexels-photo-1293430.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940",
        id: "1",
        title: "Meetup in NewYork",
        date: "2019-7-17",
        location: "New York, USA",
        description: "New York welcomes you, please join for Kotlin meetup..."
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940",
        id: "2",
        title: "Meetup in Paris",
        date: "2019-7-21",
        location: "Paris, France",
        description: "Paris welcomes you, join us for Node.js meetup..."
      },
      {
        imageUrl:
          "http://files.hostgator.co.in/hostgator217845/image/gateway-of-india-mumbai-1.jpg",
        id: "3",
        title: "Meetup in Mumbai",
        date: "2019-7-27",
        location: "Mumbai, India",
        description: "Mumbai welcomes you, join us for Startup meetup..."
      }
    ],
    user: {
      id: "qwerty",
      registeredMeetups: ["1"]
    }
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: "xyz"
      };
      // Reach out to firebase and store it.
      commit("createMeetup", meetup);
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort(
        (meetupA, meetupB) => meetupA.date > meetupB.date
      );
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup(state) {
      return meetupId => {
        return state.loadedMeetups.find(meetup => meetup.id === meetupId);
      };
    }
  }
});
