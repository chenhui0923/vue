<template>
	<div>
		<el-button type="info" plain @click="Refresh">刷新按钮</el-button><br />
		<span>{{ msg }}</span>
		<p>{{now}}</p>
		<div class="static" :class="{ active: isActive, 'text-danger': hasError }">1</div>
		
		<template v-if="loginType === 'username'">
		  <label>Username</label>
		  <input placeholder="Enter your username" key="username-input">
		</template>
		<template v-else>
		  <label>Email</label>
		  <input placeholder="Enter your email address" key="email-input">
		</template>
		<button @click="btn1">切换</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "this my",
				message: 'Hello',
				isActive: true,
				hasError: true,
				loginType:''
			}
		},
		methods: {
			
			Refresh() {
				window.location.reload();

			},
		btn1(){
			console.log(this.loginType);
			if(this.loginType==''){
				this.loginType= 'username';
			}else{
				this.loginType = '';
			}
			
		}
			
		},
		computed: {
			now: function() {
				return Date.now()
			}
		}
	}
</script>

<style scoped>
</style>
