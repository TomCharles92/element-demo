<template>
  <div>
    <h1>表单</h1>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="活动名称"
        prop="name"
      >
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item
        label="校验数字"
        prop="num"
      >
        <el-input
          v-model.number="ruleForm.num"
          type="number"
        />
      </el-form-item>
      <el-form-item
        label="活动区域"
        prop="region"
      >
        <el-select
          v-model="ruleForm.region"
          placeholder="请选择活动区域"
        >
          <el-option
            label="区域一"
            value="shanghai"
          />
          <el-option
            label="区域二"
            value="beijing"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        label="活动时间"
        required
      >
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              v-model="ruleForm.date1"
              type="date"
              placeholder="选择日期"
              style="width: 100%;"
            />
          </el-form-item>
        </el-col>
        <el-col
          class="line"
          :span="2"
        >
          -
        </el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              v-model="ruleForm.date2"
              type="fixed-time"
              placeholder="选择时间"
              style="width: 100%;"
            />
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item
        label="即时配送"
        prop="delivery"
      >
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item>
      <el-form-item
        label="活动性质"
        prop="type"
      >
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox
            label="美食/餐厅线上活动"
            name="type"
          />
          <el-checkbox
            label="地推活动"
            name="type"
          />
          <el-checkbox
            label="线下主题活动"
            name="type"
          />
          <el-checkbox
            label="单纯品牌曝光"
            name="type"
          />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item
        label="特殊资源"
        prop="resource"
      >
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助" />
          <el-radio label="线下场地免费" />
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="活动形式"
        prop="desc"
      >
        <el-input
          v-model="ruleForm.desc"
          type="textarea"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm"
        >
          立即创建
        </el-button>
        <el-button @click="resetForm('ruleForm')">
          重置
        </el-button>
      </el-form-item>
    </el-form>

    <el-form
      ref="ruleForm2"
      el-form
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="产品名称"
        prop="productName"
      >
        <el-input v-model="ruleForm.productName" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    let ckeckNumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("不能为空"));
      }
      // setTimeout(() => {
      // if (!Number.isInteger(value)) {
      //     callback(new Error('请输入数字值'));
      // } else {
      //     if (value < 18) {
      //     callback(new Error('必须年满18岁'));
      //     } else {
      //     callback();
      //     }
      // }
      // }, 1000);
    };
    return {
      ruleForm: {
        name: "",
        num: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        productName: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        num: [
          { required: true, message: "请输入数字", trigger: "blur" },
          { type: "number", message: "请输入数字类型" }
          // {validator: ckeckNumber, trigger: 'blur'}
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
        productName: [
          { required: true, message: "请填写产品名称", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs["ruleForm"].validate(valid => {
        debugger;
        if (valid) {
          alert("submit!");

          this.$refs["ruleForm2"].validate(valid => {
            if (valid) {
              alert("submit!");
            } else {
              console.log("error submit!!");
              return false;
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.demo-ruleForm {
  width: 460px;
  text-align: left;
}

.demo-ruleForm .el-select /deep/ .el-input {
  width: 360px;
}

.demo-ruleForm /deep/ .line {
  text-align: center;
}
</style>