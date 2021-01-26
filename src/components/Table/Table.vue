<template>
  <div>
    <el-input v-model="search" size="mini" placeholder="输入关键字搜索" prefix-icon="fontFamily el-icon-umpsousuo"/>
<!--    <el-button id="addBtn" type="primary" icon="el-icon-plus" @click="dialogVisible = true">添加信息</el-button>-->
    <el-table
                :columns="columns"
                @handleSizeChange="handleSizeChange"
                @handleCurrentChange="handleCurrentChange"
                ref="multipleTable"
                :data="tableData.filter(data => !search || (data.id += '').toLowerCase().includes(search.toLowerCase()))"
                border style="width: 100%"
                @selection-change="handleSelectionChange">
      <slot name="table_oper"/>
      <el-table-column type="selection" width="55"></el-table-column>
      <template v-for="(item, index) in columns">
        <el-table-column
          v-if="item.show != false"
          :key="index"
          :type="toggleSelection"
          :prop="item.prop"
          :label="item.label"
          :align="item.align?item.align:'center'"
          :width="item.width"
          :formatter="item.formatter?item.formatter : formatterValue"
        >
        </el-table-column>
      </template>

      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" icon="fontFamily el-icon-umpchakan1" size="medium"></el-button>
          <el-button @click="btnEdit(scope.$index, scope.row)" type="text" icon="fontFamily el-icon-umpB" size="medium"></el-button>
          <!--单个删除按钮-->
          <el-button @click="btnDelete(scope.$index, scope.row)" type="text"
                    icon="fontFamily el-icon-umpshanchu" size="medium"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div align="center">
      <el-pagination layout="total,prev, pager, next, sizes, jumper"
                     :page-sizes="[20, 50, 100]"
                     :page-size="query.pageSize"
                     :total="this.query.total"
                     :current-page="query.currentPage"
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     style="text-align: center;margin-top: 1%;">
      </el-pagination>
    </div>
<!--    <div style="margin-top: 10px;margin-bottom: 10px;margin-right: 90%">-->
<!--      <el-button @click="toggleSelection()">取消选择</el-button>-->
<!--    </div>-->
    <el-dialog title="传感器信息" :visible.sync="dialogVisible" :before-close="handleClose">
    <el-form
      v-model="productForm"
      label-width="110px"
      >
      <el-form-item label="id">
        <el-input v-model="productForm.id" @input="change($event)"></el-input>
      </el-form-item>
      <el-form-item label="bbox">
        <el-input v-model="productForm.bbox" @input="change($event)"></el-input>
      </el-form-item>
      <el-form-item label="beginTime">
        <el-input v-model="productForm.beginTime" @input="change($event)"></el-input>
      </el-form-item>
      <el-form-item label="description">
        <el-input v-model="productForm.description" @input="change($event)"></el-input>
      </el-form-item>
      <el-form-item label="beginTime">
        <el-input v-model="productForm.endTime" @input="change($event)"></el-input>
      </el-form-item>
      <el-form-item label="name">
        <el-input v-model="productForm.name" @input="change($event)"></el-input>
      </el-form-item>
      <el-form-item label="obsProperty">
        <el-input v-model="productForm.obsProperty" @input="change($event)"></el-input>
      </el-form-item>
      <el-form-item label="obsTime">
        <el-input v-model="productForm.obsTime" @input="change($event)"></el-input>
      </el-form-item>
      <el-form-item label="procedureId">
        <el-input v-model="productForm.procedureId" @input="change($event)"></el-input>
      </el-form-item>
      <el-form-item label="type">
        <el-input v-model="productForm.type" @input="change($event)"></el-input>
      </el-form-item>
      <el-form-item label="wkt">
        <el-input v-model="productForm.wkt" @input="change($event)"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="btnSave">确 定</el-button>
    </div>
  </el-dialog>

  <el-dialog title="详细信息" :visible.sync="dialogFormVisible">
    <el-form :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
      <el-form-item label="名称" prop="name">
        <el-input v-model="temp.name"  />
      </el-form-item>
      <el-form-item label="图像" prop="img">
        <el-input v-model="temp.img" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="btnSave">确 定</el-button>
    </div>
  </el-dialog>

  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
      this.dialogFormVisible = true;
    },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    change(e) {
      const val = e.target;
      console.log(val);
      this.$forceUpdate()  //更新视图
    },

    btnAdd() {
      this.dialogVisible = true
      this.editRowIndex = -1
    },

    handleClose(done){
      this.$confirm('确定关闭吗').then(() => {
        // function(done)，done 用于关闭 Dialog
        done();
        console.info("点击右上角 'X' ，取消按钮或遮罩层时触发");
      }).catch(() => {
        console.log("点击确定时触发");
      });
    },

    btnReset() {
      productForm:{}
    },

    // 单个删除
    btnDelete(index, row) {
      console.log(index, row);
      this.$confirm(`确认是否删除姓名为${row.name}的记录？`, '删除', {
        confirmButtonText: '确定',
      }).then(() => {
        let res = this.tableData.splice(index, 1)
        let msg = `删除成功`
        if (!res) {
          msg = `删除失败`
        }
        this.$message({
          type: 'info',
          message: msg
        });
      })
    },

    //保存
    btnSave() {
      this.dialogVisible = false
      /*
        unshift()：头部插入
        push()：底部插入
        splice(从哪里开始, 删除多少个, 添加)中间插入
      */
      if (this.editRowIndex == -1) {
        //添加
        this.tableData.push(this.productForm)
      } else {
        //修改
        this.tableData.splice(this.editRowIndex, 1, this.productForm)
      }

      //清空表单内容
      this.productForm = { brand_right: 0 }
    },

    //编辑实现
    btnEdit(index, row) {
      console.log(index, row)
      this.editRowIndex = index
      this.dialogVisible = true
      //将内容显示在表单上
      this.productForm.id = row.id
      this.productForm.bbox = row.bbox
      this.productForm.beginTime = row.beginTime
      this.productForm.description = row.description
      this.productForm.endTime = row.endTime
      this.productForm.name = row.name
      this.productForm.obsTime = row.obsTime
      this.productForm.procedureId = row.procedureId
      this.productForm.type = row.type
      this.productForm.wkt = row.wkt
    },

    // 重新渲染name列
    formatter(row, column, cellValue) {
      return 'hello ' + row.name;
    },

    // 改变页面大小处理
    handleSizeChange(size) {
      this.$data.query.pageSize = size;
      // this.limit = size;
      this.load(this.query.pageNum,this.query.pageSize);
      console.log(this.query.pageSize)      //每页下拉显示数据
    },

    // 翻页处理
    handleCurrentChange: function (currentPage) {

      this.load(currentPage,20);
      console.log(this.query.pageNum)   //点击第几页
    },

    editTableData(row) {},

    formatterValue(row, column, cellValue) {
      return cellValue;
    },

    getTotal(){
      var _this = this
      this.$axios.get('observation/getObservation' ,{

      }).then(resp => {
        console.log(resp.status)
        if(resp.status === 200){
          _this.query.total = resp.data;
          console.log("获取成功")
          console.log(resp.data)
        }else{
          _this.$message({
            message: resp.data.msg,
            type:'warning'
          })
        }
      })
    },

    load(pageNum,pageSize){
      var _this = this
      this.$axios.get('observation/getObservationByPage' ,{
        params: {
          pageNum: pageNum,
          pageSize: pageSize
        }
      }).then(resp => {
        console.log(pageNum)
        if(resp.status === 200){
          _this.tableData = resp.data;
          _this.productForm = resp.data;
          _this.query.total = resp.data.total;
          _this.query.pageNum = pageNum;
          _this.query.pageSize = pageSize;
          console.log("获取成功")
          console.log(pageNum)
          console.log(_this.query.pageNum)
          console.log(_this.tableData);
        }else{
          _this.$message({
            message: resp.data.msg,
            type:'warning'
          })
        }
        this.getTotal()
        //
      })
    },

  },
  data() {
    return {
      query:{
        pageNum: 1,
        pageSize: this.pageSize,
        // limit: 5,
        total: this.total,
      },
      columns:[
        {prop:'id',label:'id',width:'50',align:'left'},
        {prop:'bbox',label: 'bbox',width: '90',align: 'center'},
        {prop:'beginTime',label: 'beginTime',width: '200',align: 'center'},
        {prop:'description',label: 'description',width: '140',align: 'center'},
        {prop:'endTime',label: 'endTime',width: '200',align: 'center'},
        {prop:'name',label: 'name',width: '120',align: 'left'},
        {prop:'obsProperty',label: 'obsProperty',width: '130',align: 'left'},
        {prop:'obsTime',label: 'obsTime',width: '200',align: 'left'},
        {prop:'procedureId',label: 'procedureId',width: '130',align: 'left'},
        {prop:'type',label: 'type',width: '100',align: 'left'},
        {prop:'wkt',label: 'wkt',width: '100',align: 'left'},
      ],
      dialogVisible:false,
      dialogFormVisible:false,
      productForm:{},
      search: '',
      tableData: [
        {id: '1',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '2',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '3',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '4',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '5',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '6',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '7',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '8',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '9',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '10',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '11',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '12',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '13',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '14',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '15',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '16',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '17',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '18',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '19',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '20',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
        // {id: '21',bbox: 'null',beginTime: '2020-12-15T00:00:00Z',description: 'null', endTime: '2020-12-15T01:00:00Z',name:'null',obsProperty:'AirQuality',obsTime:'2020-12-15T01:00:00Z',procedureId:'420100056',type:'null',wkt:'null'},
      ],
      multipleSelection: [],
      temp:{
        name:'',
        img:''
      }
    }
  },
  mounted:function (){
    this.load(1,20)
  }
}
</script>

<style scoped>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    margin-top: 20px;
  }
  .el-table thead{
    color: #2c3e50;
  }
  #addBtn{
    margin-right: 1100px;
  }

</style>
