<template>
  <div style="width: 100%;">
    <el-form ref="productInfo" :model="productInfo" label-width="5em" :inline="true">
      <el-form-item label="产品名" prop="productName">
        <el-input v-model="productInfo.productName"></el-input>
      </el-form-item>
      <el-form-item label="生成日期" prop="creatDate">
        <el-date-picker
          v-model="productInfo.creatDate"
          align="right"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="产品等级" prop="level">
        <el-select v-model="productInfo.level">
          <el-option
            v-for="item in levelList"
            :label="item.dict_value"
            :value="item.dict_key"
            :key="item.dict_key"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="primary" @click="queryUserList(1)">查询</el-button> -->
        <!-- <el-button type="primary" @click="reset()">重置</el-button> -->
        <el-button type="success" @click="dialogFormVisible = true">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="productInfoList" :stripe="true">
      <el-table-column label="产品名" prop="productName"></el-table-column>
      <el-table-column label="生产日期" prop="creatDate"></el-table-column>
      <el-table-column label="产品等级" prop="level"></el-table-column>
      <el-table-column label="操作" width="250">
        <template slot-scope="scope">
          <el-button type="text" @click="goToUserDetail(scope.row)">详情</el-button>
          <!-- <el-button type="text" @click="updateUserStatus(scope.row)">修改用户状态</el-button>
          <el-button type="text" @click="updatePermission(scope.row)">修改</el-button>
          <el-button type="text" @click="updatePermission(scope.row)">删除</el-button>-->
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗 -->
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form ref="productInfo2" :model="productInfo2" label-width="5em" :inline="true">
        <el-form-item label="产品名" prop="productName">
          <el-input v-model="productInfo2.productName"></el-input>
        </el-form-item>
        <el-form-item label="生成日期" prop="creatDate">
          <el-date-picker
            v-model="productInfo2.creatDate"
            align="right"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="产品等级" prop="level">
          <el-select v-model="productInfo2.level">
            <el-option
              v-for="item in levelList"
              :label="item.dict_value"
              :value="item.dict_key"
              :key="item.dict_key"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "CreateReadUpdateDelete",
  data() {
    return {
      productInfo: {
        productName: "",
        creatDate: "",
        level: ""
      },
      // 用于弹窗的表单
      productInfo2: {
        productName: "",
        creatDate: "",
        level: ""
      },
      productInfoList: [
        { productName: "汇源肾宝", creatDate: "2020-02-02", level: "SS级" }
      ],
      dialogFormVisible: false,

      // 枚举字段
      levelList: [
        { dict_key: "0", dict_value: "SS级" },
        { dict_key: "1", dict_value: "S级" },
        { dict_key: "2", dict_value: "A级" },
        { dict_key: "3", dict_value: "B级" },
        { dict_key: "4", dict_value: "C级" },
        { dict_key: "5", dict_value: "D级" },
        { dict_key: "6", dict_value: "E级" }
      ]
    };
  }
};
</script>