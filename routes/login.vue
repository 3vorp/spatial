<template>
	<div class="login-page-container">
		<div class="login-container">
			<div class="left-image">
				<img src="/static/images/login/logo.png" />
				<img src="/static/images/login/wordmark.png" />
			</div>
			<div class="login-accounts">
				<h2>{{ title }}</h2>

				<label for="email" class="mt-3">Email</label>
				<input v-model="email" class="text-field" id="email" placeholder="example@example.com" />

				<label for="password" class="mt-3">Password</label>
				<input v-model="password" type="password" class="text-field" id="email" />
				<small v-if="isLogin">
					<router-link to="/spatial/login" @click="forgotPassword">Forgot password?</router-link>
				</small>

				<template v-if="!isLogin">
					<label for="password" class="mt-3">Confirm password</label>
					<input v-model="confirm" type="password" class="text-field" id="email" />
				</template>

				<button class="btn btn-primary my-3" @click="action">{{ title }}</button>

				<!-- this is horrific but oh well it's a demo anyways lol -->
				<small style="justify-self: end">
					{{ isLogin ? "Need" : "Have" }} an account?
					<router-link to="/spatial/login" @click="toggleType">
						{{ isLogin ? "Register now" : "Log in" }}
					</router-link>
				</small>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isLogin: true,
			email: "",
			password: "",
			confirm: "",
		};
	},
	methods: {
		toggleType() {
			this.isLogin = !this.isLogin;
		},
		forgotPassword() {
			alert("There are no passwords to be forgotten!");
		},
		action() {
			// obviously this would actually do something if there was a real account system
			if (!this.isLogin && this.password !== this.confirm) return alert("Passwords don't match!");
			alert(this.isLogin ? "Logged in!" : "Registered!");
		},
	},
	computed: {
		title() {
			return this.isLogin ? "Log in" : "Sign up";
		},
	},
};
</script>

<style scoped lang="scss">
@use "../assets/css/variables.scss" as *;

.login-page-container {
	position: relative;
	width: 100%;
	height: calc(100vh - 64px);
	background-image: url("/static/images/login/bg.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}

// I hate working with absolute positioned things this makes no sense
.login-container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	display: flex;
	flex-flow: row nowrap;
}

.left-image {
	min-height: 100%;
	padding: 32px;
	width: 40%;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	gap: 32px;
	> img {
		max-height: 100%;
		max-width: 100%;
	}
	background: rgba($light, 0.8);
	backdrop-filter: blur(12px);
	border-top-left-radius: $border-radius;
	border-bottom-left-radius: $border-radius;
}

.login-accounts {
	min-height: 100%;
	display: flex;
	flex-flow: column nowrap;
	color: $light;
	width: 60%;
	padding: 32px;
	background: rgba($dark, 0.7);
	backdrop-filter: blur(12px);
	border-top-right-radius: $border-radius;
	border-bottom-right-radius: $border-radius;
}
</style>
