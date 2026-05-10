<template>
	<div class="hero-fg">
		<div class="hero-text">
			<div>
				<h1 class="hero-tagline mb-0">Video Editing for the 21st Century</h1>
				<p>
					Every video editor has looked the same for the past 30 years. What if we rethought everything?
				</p>
			</div>

			<div class="btn-row mt-5">
				<router-link to="/spatial/login" class="btn btn-primary btn-hero">
					Get Started
					<mdicon name="chevron-right" />
				</router-link>
				<router-link to="/spatial/features" class="btn btn-light btn-hero">
					Learn More
					<mdicon name="chevron-right" />
				</router-link>
			</div>
		</div>
		<!-- ideally this would be a product image but obviously this is a demo -->
		<img src="/static/images/hero_logo.png" class="hero-image" />
	</div>

	<div class="container">
		<div class="section">
			<h1>What Makes Spatial Different?</h1>
			<p>This is just a demo website for some branding I made. This is not a real product!</p>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@use "../assets/css/variables.scss" as *;

// setup grid with left being text and right as content
.hero-fg {
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	background-image: url("/static/images/hero.jpg");
	padding: 64px;
	// compensate for navbar in the way
	padding-top: 128px;
}

.hero-text {
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	color: $light;
}

.hero-tagline {
	font-size: 48px;
}

.btn-row {
	display: flex;
	flex-flow: row wrap;
	gap: 16px 8px;
	align-items: center;
}

// bigger buttons
.btn-hero {
	height: 48px;
	padding: 0 24px;
	font-size: 20px;
	letter-spacing: 2px;
}

.hero-image {
	margin: auto;
	filter: drop-shadow($drop-shadow);
}
</style>
