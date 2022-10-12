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
		<div v-for="(value, name, index) in object">
			{{ index }}. {{ name }}: {{ value }}
		</div>

		<!--计算属性适用  -->
		<li v-for="n in evenNumbers">{{ n }}</li>
		<!-- 计算属性不适用 -->
		<ul v-for="set in sets">
			<li v-for="n in even(set)">{{ n }}</li>
		</ul>
		<div style="float: left;">
			<ch-input textcs="手机号"></ch-input>
		</div>
	<el-button type="primary">主要按钮</el-button>
		<div style="display: block;">
			<input type="text" v-model="info"/>
			<button @click="infoclick">添加</button>
			<ul>
				<li v-for="item in list">{{item}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import chinput from '../app/inputtest.vue'
	export default {
		data() {
			return {
				msg: "this my",
				message: 'Hello',
				isActive: true,
				hasError: true,
				loginType: '',
				object: {
					title: 'How to do lists in Vue',
					author: 'Jane Doe',
					publishedAt: '2016-04-10'
				},
				numbers: [1, 2, 3, 4, 5],
				sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]],
				info:'',
				list:[]
			}
		},
		methods: {

			Refresh() {
				window.location.reload();

			},
			btn1() {
				console.log(this.loginType);
				if (this.loginType == '') {
					this.loginType = 'username';
				} else {
					this.loginType = '';
				}

			},
			even: function (numbers) {
			    return numbers.filter(function (number) {
			      return number % 2 === 0
			    })
			  },
			infoclick(){
				this.list.push(this.info)
				this.info=''
			}

		},
		computed: {
			now: function() {
				return Date.now()
			},
			evenNumbers: function() {
				return this.numbers.filter(function(number) {
					return number % 2 === 0
				})
			}
		},
		components:{
			"ch-input":chinput
		}
	}
</script>

<style scoped>
</style>
