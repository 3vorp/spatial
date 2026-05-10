import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import mdiVue from "mdi-vue/v3";
import * as icons from "@mdi/js";

import Layout from "./Layout.vue";
import IndexPage from "./routes/index.vue";
import ProductPage from "./routes/product.vue";
import LoginPage from "./routes/login.vue";
import AboutPage from "./routes/about.vue";
import RegisterPage from "./routes/register.vue";

const router = createRouter({
	routes: [
		{ path: "/", component: IndexPage },
		{ path: "/product", component: ProductPage },
		{ path: "/login", component: LoginPage },
		{ path: "/register", component: RegisterPage },
		{ path: "/about", component: AboutPage },
	],
	history: createWebHashHistory("/spatial/"),
});

const app = createApp(Layout);
app.use(router);
app.use(mdiVue, { icons });
app.mount("#app");
