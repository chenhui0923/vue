<template>
  <div class="hello">
    <h1>{{ cell }}</h1>
  
	<ul>
		<li><a :href="URL">食堂链接</a></li>
		<li><a href="./testchpz">出货排载</a></li>
		<li><a href="./new_file">测试链接</a></li>
		<li><a href="./first">学习vue的链接</a></li>
		<li><a href="./inputtest">输入框样式测试</a></li>
		<li><a href="./sum">饿了么合计</a></li>
		
		
	</ul>
	
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
	  return{
		  URL:'./canteen_dishes',
		  cell: 'chenhui'
	  }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
