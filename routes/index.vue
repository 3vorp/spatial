<template>
	<div class="hero-background">
		<div class="container hero-container">
			<div class="hero-text">
				<div>
					<h1 class="title mb-0">Video Editing for the 21st Century</h1>
					<p>Every video editor has looked the same for the past 30 years. What if they didn't?</p>
				</div>

				<div class="btn-row mt-5">
					<router-link to="/product" class="btn btn-primary btn-lg">
						Get Started
						<mdicon name="chevron-right" />
					</router-link>
					<router-link to="/about" class="btn btn-light btn-lg">
						Learn More
						<mdicon name="chevron-right" />
					</router-link>
				</div>
			</div>
			<!-- ideally this would be a product image but obviously this is a demo -->
			<img src="/static/images/hero_logo.png" class="hero-image" />
		</div>
	</div>

	<!-- this is so stupid but whatever -->
	<h1 class="text-center title">Discover Spatial</h1>
	<about hide-title />
</template>

<script>
import About from "./about.vue";

export default {
	components: {
		About,
	},
};
</script>

<style scoped lang="scss">
@use "../assets/css/variables.scss" as *;

.hero-background {
	background-image: url("/static/images/hero.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	box-shadow: $drop-shadow;
}

.hero-container {
	// compensate for navbar
	padding-top: 128px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	gap: 8px;
}

.hero-text {
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	color: $light;
}

.btn-row {
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	gap: 16px;
}

.hero-image {
	filter: drop-shadow($drop-shadow);
	max-width: 100%;
}

@media screen and (max-width: $breakpoint-tablet) {
	.hero-container {
		flex-flow: column-reverse nowrap;
	}
	.hero-text {
		align-items: center;
		* {
			text-align: center;
		}
	}
	.btn-row {
		justify-content: center;
	}
	.hero-image {
		max-width: 512px;
	}
}

@media screen and (max-width: $breakpoint-mobile) {
	.hero-image {
		max-width: 100%;
	}
}
</style>
