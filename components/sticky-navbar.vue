<template>
	<header>
		<nav>
			<div class="navbar-item-container">
				<router-link to="/spatial/">
					<img src="/static/images/navbar.png" height="28" />
				</router-link>
				<router-link v-for="{ to, title } in links" :key="to" class="navbar-item" :to>
					{{ title }}
				</router-link>
			</div>
			<router-link to="/spatial/login" class="btn btn-primary">
				<mdicon name="login" class="mr-2" size="18" />
				Log In
			</router-link>
		</nav>
	</header>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					to: "/spatial/product",
					title: "Product",
				},
				{
					to: "/spatial/about",
					title: "About",
				},
			],
		};
	},
};
</script>

<style scoped lang="scss">
@use "../assets/css/variables.scss" as *;

// entire header must be sticky (otherwise the text moves without the background)
header {
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 999;
	background: rgba($dark, 0.7);
	backdrop-filter: blur(12px);
	filter: drop-shadow($drop-shadow);
}
nav {
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	height: 64px;
	padding: 0 64px;
}
.navbar-item-container {
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	gap: 32px;
}
</style>
