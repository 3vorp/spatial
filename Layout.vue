<template>
	<sticky-navbar />
	<router-view></router-view>
	<site-footer />
</template>

<script>
import StickyNavbar from "./components/sticky-navbar.vue";
import SiteFooter from "./components/site-footer.vue";

export default {
	components: {
		StickyNavbar,
		SiteFooter,
	},
};
</script>
