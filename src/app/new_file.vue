<template>
  <div align="center">
    <el-button icon="el-icon-refresh" @click="resetQuery">刷新</el-button>
    <el-table
      ref="multipleTable"
      @select-all="selectAll"
      @select="selectA"
      :data="tableData"
      style="width: 800px; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column type="selection" width="180" />
      <el-table-column prop="date" label="日期" sortable width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" sortable width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    {{ selectList }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      selectList: [],
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          children: [
            {
              id: 31,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
            {
              id: 32,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
          ],
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    // 全选操作
    selectAll() {
      this.checked = !this.checked;
      let list = this.getNewTableDate(this.tableData);
      if (this.checked) {
        list.forEach((item) => {
          var boo = false;
          this.selectList.forEach((item2) => {
            if (item.id == item2.id) {
              boo = true;
            }
          });
          if (!boo) {
            this.selectList.push(item);
          }
        });
      } else {
        list.forEach((item) => {
          this.selectList.forEach((item2, index) => {
            if (item.id == item2.id) {
              this.selectList.splice(index, 1);
            }
          });
        });
      }
      this.select(this.tableData, this.checked);
    },
    // 单选操作
    selectA(se, row) {
      if ((se.length = this.tableData.length)) {
        this.checked = true;
      } else {
        this.checked = false;
      }
      let selected = se.length && se.indexOf(row) !== -1;
      if (selected) {
        this.selectList.push(row);
      } else {
        this.selectList.forEach((re, index) => {
          if (re.id == row.id) {
            this.selectList.splice(index, 1);
          }
        });
      }
    },
    // 全选
    select(val, boo) {
      val.forEach((row) => {
        this.$refs.multipleTable.toggleRowSelection(row, boo);
        if (row.children != undefined) {
          this.select(row.children, boo);
        }
      });
    },
    // 提取表格数据
    getNewTableDate(arr) {
      let array = [];
	  //去除undefined
      arr.forEach((item) => {
        array.push(item);
        if (item.children != undefined) {
          item.children.forEach((item2) => {
            array.push(item2);
          });
        }
      });
      return array;
    },
    // 刷新
    resetQuery() {
      this.tableData = [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          children: [
            {
              id: 31,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
            {
              id: 32,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
          ],
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          id: 5,
          date: "2016-05-08",
          name: "张三",
          address: " 1516 弄",
        },
      ];
      // 勾选之前选中的数据
      this.getSelectList();
    },
    getSelectList() {
      if (this.selectList.length != 0) {
        let arr = this.tableData;
        var array = [];
        let list = this.getNewTableDate(arr);
        list.forEach((ite) => {
          this.selectList.forEach((ite2) => {
            if (ite.id == ite2.id) {
              array.push(ite2);
            }
          });
        });
        if (array.length == list.length) {
          this.checkedKeys = true;
        } else {
          this.checkedKeys = false;
        }
        this.togselect(arr, true);
      }
    },
    togselect(arr, boo) {
      this.$nextTick(() => {
        arr.forEach((row) => {
          this.selectList.forEach((sa) => {
            if (row.id == sa.id) {
              this.$refs.multipleTable.toggleRowSelection(row, boo);
            }
          });
          if (row.children != undefined) {
            this.togselect(row.children, boo);
          }
        });
      });
    },
  },
};
</script>