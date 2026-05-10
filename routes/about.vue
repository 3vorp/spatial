<template>
	<!-- really stupid hack for literally nesting the page inside the home page -->
	<div v-if="!hideTitle" class="container">
		<h1 class="title mb-0">So what is Spatial anyways?</h1>
		<p class="text-center">We're glad you asked.</p>
	</div>

	<div class="container section">
		<div>
			<h2>Spatial is all about spatial windowing.</h2>
			<p>
				Traditional video editors are focused on the ever-present timeline. Practically all
				information about a given video clip is represented in the timeline in some manner.
			</p>
			<p>
				While this makes sense for small projects and can be a clear way to represent change over
				time, as the scale of a project increases, the amount of time spent "scrubbing" through the
				timeline for that one element that you know was <i>just there</i>, and now you can't find,
				disproportionally increases.
			</p>
			<p>
				The thing is, this is a solved problem. Computers have been using the "spatial" computing
				metaphor for over thirty years, where content is represented as fixed objects in space. As
				it turns out, humans are particularly good at remembering where things are when they're the
				ones who put them there. A hidden computer window appear where you last left it, so why
				can't we do the same with video editing?
			</p>
		</div>
		<img src="/static/images/about/timeline.jpg" />
	</div>
	<div class="container section section-secondary">
		<img src="/static/images/about/spatial.png" />
		<div>
			<h2>So how does it work?</h2>
			<p>
				Instead of basing all content on a timeline, each frame is represented as a snapshot in
				space. You can drag around key frames anywhere in the working area, and much like computer
				windows, there's several tools at your disposal for managing and tracking frames on the
				screen.
			</p>
			<p>
				Since you can always see the content you're working on, you never end up hunting down that
				one specific object you were just working with, since it's always exactly where you left it.
				An extra bonus is that there's significantly more space to see what you're working on
				without a massive timeline in the way, boosting productivity further.
			</p>
			<p>
				If all of this is too foreign to you as a (hopefully soon-formerly) timeline editor, there's
				always a progress bar visible, and several view modes that let you see data in a time-driven
				way. Give it a try and you may end up being surprised by how little you end up using these
				features.
			</p>
		</div>
	</div>
	<div class="container text-center">
		<h2 class="mb-5">Ready to leave timelines behind forever?</h2>
		<router-link to="/spatial/product" class="btn btn-primary btn-lg">
			Start Working Spatially
			<mdicon name="chevron-right" />
		</router-link>
	</div>
</template>

<script>
export default {
	name: "about",
	props: {
		hideTitle: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>
@use "../assets/css/variables.scss" as *;

.section {
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	gap: 32px;
}

.section img {
	max-width: 512px;
	height: auto;
}

// swap colors
.section-secondary {
	background-color: $dark;
	color: $light;
}
</style>
