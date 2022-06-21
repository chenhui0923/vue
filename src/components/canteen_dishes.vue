<template>
	<div>
		<div>
			<el-container>
			  <el-header>Header</el-header>
			  <el-container>
			    
			    <el-container>
			      <el-main>Main</el-main>
			      <!-- <el-footer>Footer</el-footer> -->
			    </el-container>
				<el-aside width="200px">Aside</el-aside>
			  </el-container>
			</el-container>
		
		</div>
		
		
	</div>
</template>


<script>
	export default {
		
		data() {
			return {
				message: ''
			};
		}
	};
</script>

<style>
	.el-header, .el-footer {
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
	    line-height: 100%;
	  }
	  
	  body > .el-container {
	    margin-bottom: 40px;
		height: 100%;
	  }

	  
	  
</style>
