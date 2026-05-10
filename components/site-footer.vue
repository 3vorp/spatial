<template>
	<footer>
		<a href="https://3vorp.github.io" class="navbar-item" target="_blank" rel="noopener noreferrer">
			© 2026 Evorp
		</a>
		<a
			href="https://github.com/3vorp/spatial"
			class="navbar-item"
			target="_blank"
			rel="noopener noreferrer"
		>
			This website was made with the Vue website framework. View the source here!
		</a>
	</footer>
</template>

<script>
export default {
	name: "site-footer",
};
</script>

<style scoped lang="scss">
@use "../assets/css/variables.scss" as *;

footer {
	width: 100%;
	background: $dark;
	height: 64px;
	padding: 0 64px;
	gap: 32px;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	color: $light;
}
</style>
