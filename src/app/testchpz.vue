<template>
	<div>
		<div>
			<el-form :inline="true" :model="searchForm" size="small" class="health-plan-schedule--form">
				<el-form-item>
					<el-button size="small" @click="lastWeek" type="primary" style="margin: 0.5rem;">
						上一周
					</el-button>
					<el-date-picker @change="changeOne" v-model="timesWeek" width="240" type="week"
						:format="getList.scheduleStartDate + ' 至 ' + getList.scheduleEndDate" placeholder="选择周" />
					<el-button size="small" @click="nextWeek" type="primary" style="margin: 0.5rem;">
						下一周
					</el-button>
				</el-form-item>
			</el-form>
		</div>
		
		
	</div>

</template>

<script>
	export default {
		data() {
			return {
				timesWeek: Date.now(), // 按照当前默认时间
				getList: {
					scheduleStartDate: '', // 排班开始日期
					scheduleEndDate: '', // 排班结束日期
				},
			};
		},
		methods: {
			//  转换时间格式
			fun(unixtimestamp) {
				const dt = new Date(unixtimestamp)
				const y = dt.getFullYear()
				const m = (dt.getMonth() + 1 + '').padStart(2, '0')
				const d = (dt.getDate() + '').padStart(2, '0')
				return `${y}-${m}-${d}`
			},
			// 当用户直接点击选择日期而不是点击进行以下操作
			// 此时val会默认传入星期一的时间戳
			changeOne(val) {
				const timeStamp = val.getTime() // 标准时间转为时间戳，毫秒级别
				this.getList.scheduleStartDate = this.fun(
					timeStamp - 24 * 60 * 60 * 1000
				) // 开始时间
				this.getList.scheduleEndDate = this.fun(
					timeStamp + 24 * 60 * 60 * 1000 * 5
				) // 结束时间
			},
			// 上一周
			// 604800000为一周的时间戳
			// 24 * 60 * 60 * 1000 * 7 = 604800000
			lastWeek() {
				this.getList.scheduleStartDate = this.fun(
					Date.parse(new Date(this.getList.scheduleStartDate)) - 604800000
				)
				this.getList.scheduleEndDate = this.fun(
					Date.parse(new Date(this.getList.scheduleEndDate)) - 604800000
				)
				this.timesWeek = this.fun(
					Date.parse(new Date(this.getList.scheduleStartDate))
				)
				this.$forceUpdate() // 强制更新
			},
			// 下一周
			nextWeek() {
				this.getList.scheduleStartDate = this.fun(
					Date.parse(new Date(this.getList.scheduleStartDate)) + 604800000
				)
				this.getList.scheduleEndDate = this.fun(
					Date.parse(new Date(this.getList.scheduleEndDate)) + 604800000
				)
				this.timesWeek = this.fun(
					Date.parse(new Date(this.getList.scheduleStartDate))
				)
				this.$forceUpdate() // 强制更新
			},
		},
		mounted() {
			// 86400000为一天时间戳  // 604800000为一周时间戳
			// 因为组件的限制，因为组件是从上周日到本周六，所有需要减去一天的时间戳
			//  写法大概为一周7天，减去当前已过天数，将天数转换成时间戳，最后再转换成日期
			this.getList.scheduleEndDate = this.fun(
				Date.parse(new Date()) +
				((7 - new Date(Date.parse(new Date())).getDay()) * 24 * 60 * 60 * 1000 -
					86400000))
			// 
			this.getList.scheduleStartDate = this.fun(
				Date.parse(new Date()) +
				((7 - new Date(Date.parse(new Date())).getDay()) * 24 * 60 * 60 * 1000 -
					604800000))
		}
	}
</script>

<style>
</style>
