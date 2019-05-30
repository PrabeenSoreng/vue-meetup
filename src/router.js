import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Meetups from "@/components/Meetup/Meetups";
import CreateMeetup from "@/components/Meetup/CreateMeetup";
import Profile from "@/components/User/Profile";
import Register from "@/components/User/Register";
import Signin from "@/components/User/Signin";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/meetups",
      name: "meetups",
      component: Meetups
    },
    {
      path: "/meetup/new",
      name: "create-meetup",
      component: CreateMeetup
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});
