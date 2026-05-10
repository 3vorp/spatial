<template>
	<div class="site-container">
		<sticky-navbar />
		<main>
			<router-view></router-view>
		</main>
		<site-footer />
	</div>
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

<style scoped lang="scss">
.site-container {
	display: flex;
	min-height: 100vh;
	flex-flow: column nowrap;
	justify-content: space-between;
}

.site-container > main {
	flex-grow: 1;
	flex-shrink: 0;
	height: 100%;
}
</style>
