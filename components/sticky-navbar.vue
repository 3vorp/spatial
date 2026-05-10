<template>
	<header>
		<nav>
			<div class="navbar-mobile-container">
				<router-link to="/" title="Spatial" @click="hideNavbar">
					<img src="/static/images/navbar.png" height="28" alt="Spatial Wordmark" />
				</router-link>

				<button
					class="navbar-toggler"
					:title="isOpen ? 'Close Menu' : 'Open Menu'"
					@click="toggleNavbar"
				>
					<mdicon name="menu" />
				</button>
			</div>

			<div class="navbar-container" :class="{ 'navbar-hidden': !isOpen }">
				<div class="navbar-item-container">
					<router-link to="/" title="Spatial" class="navbar-desktop-wordmark">
						<img src="/static/images/navbar.png" height="28" alt="Spatial Wordmark" />
					</router-link>
					<router-link
						v-for="{ to, title } in links"
						:key="to"
						class="nav-item"
						:to
						@click="hideNavbar"
					>
						{{ title }}
					</router-link>
				</div>

				<router-link to="/login" class="btn btn-primary" @click="hideNavbar">
					<mdicon name="login" class="mr-2" size="18" />
					Log In
				</router-link>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	data() {
		return {
			isOpen: false,
			links: [
				{
					to: "/product",
					title: "Product",
				},
				{
					to: "/about",
					title: "About",
				},
			],
		};
	},
	methods: {
		toggleNavbar() {
			this.isOpen = !this.isOpen;
		},
		hideNavbar() {
			this.isOpen = false;
		},
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
	backdrop-filter: blur(8px);
	filter: drop-shadow($drop-shadow);
}
nav {
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	min-height: 64px;
	padding: 0 64px;
}
.navbar-container {
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	gap: 32px;
}
.navbar-item-container {
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	gap: 32px;
}

// wraps just the wordmark and toggler
.navbar-mobile-container {
	display: none;
}

.navbar-toggler {
	color: $light;
	width: 48px;
	height: 48px;
	line-height: 1;
	background: transparent;
	border: none;
}

@media screen and (max-width: $breakpoint-tablet) {
	nav {
		padding: 0 16px;
	}
	.navbar-desktop-wordmark {
		display: none;
	}
	.navbar-container {
		flex-direction: column;
		align-items: stretch;
		padding: 16px 0;
		gap: 8px;
	}
	// set items container to left-aligned columns
	.navbar-item-container {
		flex-direction: column;
		justify-content: flex-start;
		gap: 8px;
	}
	// only toggle the display on mobile, on desktop the navbar is always visible
	.navbar-hidden {
		display: none;
	}
	// show wordmark/toggler button on each side
	.navbar-mobile-container {
		padding: 8px 0;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 32px;
	}
	.nav-item {
		justify-content: start;
		width: 100%;
	}
}
</style>
