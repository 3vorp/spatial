import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import mdiVue from "mdi-vue/v3";
import * as icons from "@mdi/js";

import Layout from "./Layout.vue";
import IndexPage from "./routes/index.vue";
import ProductPage from "./routes/product.vue";
import LoginPage from "./routes/login.vue";

const router = createRouter({
	routes: [
		{ path: "/spatial/", component: IndexPage },
		{ path: "/spatial/product", component: ProductPage },
		{ path: "/spatial/login", component: LoginPage },
	],
	history: createWebHistory(),
});

const app = createApp(Layout);
app.use(router);
app.use(mdiVue, { icons });
app.mount("#app");
