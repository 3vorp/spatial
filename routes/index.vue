<template>
	<div class="hero-container">
		<img src="/static/images/hero.jpg" class="hero-bg" />
		<div class="hero-fg">
			<div class="hero-text">
				<div>
					<h1 class="hero-tagline mb-0">Video Editing for the 21st Century</h1>
					<p>
						Every video editor has looked the same for the past 30 years. What if we could do
						better?
					</p>
				</div>

				<div class="btn-row">
					<router-link to="/spatial/login" class="btn btn-primary btn-hero mt-5">
						Get Started
						<mdicon name="chevron-right" />
					</router-link>
					<router-link to="/spatial/features" class="btn btn-light btn-hero mt-5">
						Learn More
						<mdicon name="chevron-right" />
					</router-link>
				</div>
			</div>
			<!-- ideally this would be a product image but obviously this is a demo -->
			<img src="/static/images/hero_logo.png" class="hero-image" />
		</div>
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

// container for both image and text
.hero-container {
	position: relative;
	width: 100%;
}

// make image undraggable to prevent weird selections
// this would have probably been easier with background-image in hindsight lol
.hero-bg {
	width: 100%;
	-webkit-user-drag: none;
	-khtml-user-drag: none;
	-moz-user-drag: none;
	-o-user-drag: none;
}

// setup grid with left being text and right as content
.hero-fg {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	position: absolute;
	padding: 16px 64px;
	// compensate for navbar in the way
	padding-top: 128px;
	width: 100%;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
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
	gap: 16px;
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
