<template>
	<div class="container">
		<h1 class="title text-center mb-0">Get started with Spatial</h1>
		<p class="text-center mb-5">
			Spatial's workflow molds itself to your needs, whether you're a student or director of a
			cinema studio.
		</p>

		<div class="card-container">
			<div
				v-for="(card, i) in cards"
				:key="card.title"
				class="card"
				:class="card.recommended && 'card-recommended'"
			>
				<h2 class="text-center">{{ card.title }}</h2>
				<p>{{ card.description }}</p>
				<span class="price">
					<p class="dollar">$</p>
					<h3 class="amount">{{ card.price }}</h3>
					<p class="currency">USD</p>
				</span>
				<router-link to="/spatial/login" class="btn btn-dark btn-lg my-3">
					<mdicon name="cart" class="mr-2" />
					Add to cart
				</router-link>
				<ul>
					<li v-for="feat in card.features">{{ feat }}</li>
					<li v-for="_ in i * 5">Lorem ipsum</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cards: [
				{
					title: "Basic",
					description: "Best for students and those unfamiliar to video editing.",
					price: "79",
					features: [
						"Fully spatial window management",
						"Multiple view modes",
						"Up to 1080p rendering",
					],
				},
				{
					title: "Standard",
					description: "Advanced video editing for everyone.",
					price: "179",
					features: [
						"Everything included in Basic, plus…",
						"Lossless 4K rendering",
						"Sound editing",
						"3 months of Spatial Stock access",
					],
					recommended: true,
				},
				{
					title: "Pro",
					description: "Our full toolchain, for those who demand only the the best performance.",
					price: "449",
					features: [
						"Everything included in Basic and Standard, plus…",
						"Lua scripting integration",
						"Multi-user live cloud editing",
						"Apple Vision Pro support",
					],
				},
			],
		};
	},
};
</script>

<style scoped lang="scss">
@use "../assets/css/variables.scss" as *;

.card-container {
	margin-top: 32px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 32px;
}

.card {
	padding: 16px;
	border-radius: $border-radius;
	background-color: $light;
	filter: drop-shadow($drop-shadow);
	display: flex;
	flex-flow: column nowrap;
}

.card-recommended {
	border: 8px solid $primary;
}

.price {
	display: inline-flex;
	flex-flow: row nowrap;
	justify-content: center;
	gap: 2px;
	* {
		margin: 0;
	}
}

.amount {
	font-size: 32px;
}

.currency {
	align-self: end;
	margin-bottom: 4px;
}

@media screen and (max-width: $breakpoint-tablet) {
	.card-container {
		display: flex;
		flex-flow: column nowrap;
	}
}
</style>
