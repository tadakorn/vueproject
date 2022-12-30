import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/workshop-1",
      name: "workshop_1",
      component: () => import("../views/Workshop1View.vue"),
    },
    {
      path: "/workshop-2",
      name: "workshop_2",
      component: () => import("../views/Workshop2View.vue"),
    },
    {
      path: "/workshop-3",
      name: "workshop_3",
      component: () => import("../views/Workshop3View.vue"),
    },
    {
      path: "/workshop-4",
      name: "workshop_4",
      component: () => import("../views/Workshop4View.vue"),
    },
    {
      path: "/workshop-5",
      name: "workshop_5",
      component: () => import("../views/Workshop5View.vue"),
    },
    {
      path: "/workshop-6",
      name: "workshop_6",
      component: () => import("../views/Workshop6View.vue"),
    },
    {
      path: "/workshop-7",
      name: "workshop_7",
      component: () => import("../views/Workshop7View.vue"),
    },
    {
      path: "/workshop-8",
      name: "workshop_8",
      component: () => import("../views/Workshop8View.vue"),
    },
    {
      path: "/workshop-9",
      name: "workshop_9",
      component: () => import("../views/Workshop9View.vue"),
    },
    {
      path: "/workshop-10",
      name: "workshop_10",
      component: () => import("../views/Workshop10View.vue"),
    },
    {
      path: "/workshop-11",
      name: "workshop_11",
      component: () => import("../views/workshop11/IndexView.vue"),
    },
    {
      path: "/workshop-11/login",
      name: "workshop_11_login",
      component: () => import("../views/workshop11/LoginView.vue"),
    },
    {
      path: "/workshop-11/register",
      name: "workshop_11_register",
      component: () => import("../views/workshop11/RegisterView.vue"),
    },
    {
      path: "/workshop-12",
      name: "workshop_12",
      component: () => import("../views/Workshop12View.vue"),
    },
    {
      path: "/workshop-13",
      name: "workshop_13",
      component: () => import("../views/Workshop13View.vue"),
    },
    {
      path: "/workshop-14",
      name: "workshop_14",
      component: () => import("../views/Workshop14View.vue"),
    },
    {
      path: "/workshop-15",
      name: "workshop_15",
      component: () => import("../views/Workshop15View.vue"),
    },
    {
      path: "/workshop-16",
      name: "workshop_16",
      component: () => import("../views/Workshop16View.vue"),
    },
  ],
});

export default router;
