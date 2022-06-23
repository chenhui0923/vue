<template>
	<div>
		<el-button type="info" plain @click="Refresh">刷新按钮</el-button><br />
		<span>{{ msg }}</span>


		<el-table :data="tableData" v-loading:loading border style="width: 100%">
			<el-table-column prop="fileName" label="文件名">
			</el-table-column>
			<el-table-column prop="thumbnail" label="缩略图">
				<template slot-scope="scope">
					<img :src="scope.row.thumbnail" min-width="70" height="70" />
				</template>
			</el-table-column>
			<el-table-column prop="priority" label="优先级">
			</el-table-column>
			<el-table-column prop="result" label="结果">
			</el-table-column>
			<el-table-column prop="timestamp" label="时间">
			</el-table-column>
		</el-table>
		<!-- <div>
			<div v-for="(item,index) in product">
				<img :src="item.imgSrc" alt="">
			</div>
		</div> -->

	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "this my",
				tableData: [{

						fileName: 1,
						thumbnail: require('../static/2 (1).jpg'),
						priority: 1,
						result: 1,
						timestamp: (new Date()).toUTCString()
					},
					{
					
							fileName: 1,
							thumbnail: require('../static/2 (2).jpg'),
							priority: 1,
							result: 1,
							timestamp: (new Date()).toUTCString()
						},

				]
			}
		},
		methods: {
			Refresh() {
				window.location.reload();

			}
		}
	}
</script>

<style scoped>
</style>
