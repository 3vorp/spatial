import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "./Layout.vue";
import IndexPage from "./routes/index.vue";

const router = createRouter({
	routes: [{ path: "/spatial/", component: IndexPage }],
	history: createWebHistory(),
});

const app = createApp(Layout);
app.use(router);
app.mount("#app");
