<template>
	<footer>
		<a href="https://3vorp.github.io" class="nav-item" target="_blank" rel="noopener noreferrer">
			© 2026 Evorp
		</a>
		<a
			href="https://github.com/3vorp/spatial"
			class="nav-item"
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
	justify-content: space-between;
	align-items: center;
	color: $light;
}

@media screen and (max-width: $breakpoint-tablet) {
	footer {
		flex-flow: column nowrap;
		justify-content: center;
		gap: 4px;
		padding: 16px 64px;
		text-align: center;
		height: auto;
	}
}
</style>
