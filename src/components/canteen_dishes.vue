<template>
	<div>
		<div>
			<el-container>
				<el-header>打菜</el-header>
				<el-container>

					<el-container>
						<el-main>
							<el-table :data="tableData" style="width: 100%;font-size: 30px; "  >
								<el-table-column prop="id" label="id" width="180">
								</el-table-column>

								<el-table-column label="菜品图" width="250px" >
					
								
										<el-image style="width: 100px; height: 100px" :src="URL"></el-image>
								
									
								</el-table-column>
								
								<el-table-column prop="name" label="编码" width="180">
								</el-table-column>
								<el-table-column prop="address"  width="100px" label="单价">
								</el-table-column>
								<el-table-column prop="address" width="100px" label="类别">
								</el-table-column>
							</el-table>

						</el-main>
						<!-- <el-footer>Footer</el-footer> -->
					</el-container>
					<el-aside width="350px">
						<div>姓名：{{name}}</div>
						<div>部门：{{pading}}</div>
					</el-aside>
				</el-container>
			</el-container>

		</div>


	</div>
</template>


<script>
	export default {

		data() {
			return {
				message: '',
				tableData: [{
					id: '1',
					images: require('../static/2 (1).jpg'),
					name: '王小虎',
					address: '素菜'
				}, {
					id: '2',
					images: require('../static/2 (2).jpg'),
					name: '王小虎',
					address: '荤菜'
				}, {
					id: '3',
					images: require('../static/2 (1).jpg'),
					name: '王小虎',
					address: '半荤'
				}],
				name: "小老鼠",
				pading: "信息部",
				URL:require('../static/2 (1).jpg')
			};
		}
	};
</script>

<style>
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 100%;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 10rem;
		height: 100%;
	}

	body>.el-container {
		margin-bottom: 0px;
		height: 50px;
	}
</style>
