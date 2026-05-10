<template>
	<signin :is-login="false" />
</template>

<script>
import Signin from "../components/signin.vue";
export default {
	components: {
		Signin,
	},
};
</script>
