<template>
	<div>
		<div>
			<el-container>
				<el-header style="height: 90px;line-height: 90px;background-color:#B3C0D1; background-color: #225794;">
					<h1>个人菜单</h1>

				</el-header>
				<el-container>

					<el-container>
						<el-main>
							<el-table :data="tableData" style="width: 100%;font-size: 50px;border-radius: 30px;">
								<!-- <el-table-column prop="cell" label="编码" class="column">
								</el-table-column> -->
								<el-table-column label="菜品图" class="column"  prop="imgurl">
								<template slot-scope="scope">
									<el-image style="width:230px; height:190px;" :src="scope.row.imgurl"
										:preview-src-list="[scope.row.imgurl]">
									</el-image>
																		
								</template>

								</el-table-column>
								<el-table-column prop="food_name" label="菜品名称" class="column">
								</el-table-column>

								<el-table-column prop="unit_price" label="单价" class="column">
								</el-table-column>
								<el-table-column prop="category" label="类别" class="column">
								</el-table-column>
							</el-table>

						</el-main>
						<!-- <el-footer>Footer</el-footer> -->
					</el-container>
					<el-aside width="350px">
						<!-- 取餐状态判断 -->
						<div class="state" style="background-color: #28e851;" v-show="state === 1">
							<h1>状态：已取餐</h1>
						</div>
						<div class="state" style="background-color: #ffb013" v-show="state === 0">
							<h1>状态：未取餐</h1>
						</div>
						<div class="state" style="background-color:#e60000 ;" v-show="state === 2">
							<h1>状态：未点餐</h1>
						</div>

						<div class="name">姓名：{{name}}</div>
						<!-- 部门长度判断，调整字体大小 -->
						<div class="name" v-show="pading.length<=3">部门：{{pading}}</div>
						<div class="name" style="font-size: 40px;" v-show="pading.length>3&&pading.length<=5">
							部门：{{pading}}</div>
						<div class="name" style="font-size: 30px;" v-show="pading.length>5">部门：{{pading}}</div>



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
					cell: 'A01',
					unit_price: '1',
					category: '素菜',
					food_name: '酸辣土豆丝',
					imgurl:require('../assets/2 (1).jpg')
				}, {
					id: '2',
					cell: 'C01',
					unit_price: '1',
					category: '荤菜',
					food_name: '铁锅炖大鹅',
					imgurl:require('../assets/2 (2).jpg')

				}, {
					id: '3',
					cell: 'B01',
					unit_price: '1',
					category: '半荤',
					food_name: '花菜炒肉',
					imgurl:require('../assets/5.jpg')
				}],
				name: "小陈晖",
				// pading: "业务六部大货组",
				pading: "信息部",
				state: 1,
			};
		},
		methods: {
		
		}
	};
</script>

<style>
	.el-header {

		color: #fff;
		text-align: center;
		font-size: 45px;
	}

	.header {}

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
		line-height: 5rem;
	}

	body>.el-container {
		margin-bottom: 0px;
		height: 160px;

	}

	.el-table .cell {
		line-height: 200px;
		height: 190px;
		text-align: center;
		margin: 0 auto;
	}

	.el-table th.el-table__cell>.cell {
		line-height: 3.125rem;
		height: 3.125rem;
		text-align: center;
		margin: 0 auto;
		font-size: 35px;

	}

	.name {
		/* border: 1px solid ; */
		height: 15rem;
		margin: 15px auto;
		line-height: 15rem;
		border-radius: 20px;
		background-color: #FFFFFF;
		width: 95%;
		font-size: 50px;
		color: #425849;

	}

	.state {
		margin: 15px auto;
		width: 95%;
		height: 190px;
		border-radius: 20px;
		font-size: 50px;
		line-height: 190px;
		color: #fff;

	}
</style>
