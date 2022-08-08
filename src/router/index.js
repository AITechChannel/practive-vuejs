import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import Practice1View from "../views/Practice1View.vue";
import Practice2View from "../views/Practice2View.vue";
import Practice3View from "../views/Practice3View.vue";
import Practice4View from "../views/Practice4View.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/practice1",
      name: "pracrice1",
      component: Practice1View,
    },
    {
      path: "/practice2",
      name: "pracrice2",
      component: Practice2View,
      // children: [
      //   {
      //     path: "practice3",
      //     name: "pracrice3",
      //     component: Practice3View,
      //   },
      // ],
    },
    {
      path: "/practice3",
      name: "pracrice3",
      component: Practice3View,
    },
    {
      path: "/practice4",
      name: "pracrice4",
      component: Practice4View,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
