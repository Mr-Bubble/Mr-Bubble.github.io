<template>
  <div class="zh-body">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="dataForm.user_name"
          name="user_name"
          label="账号"
          placeholder="请输入 Zepp Life 账号"
          required
          :rules="[{ required: true, message: '请输入 Zepp Life 账号' }]"
        />
        <van-field
          v-model="dataForm.password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入 Zepp Life 密码"
          required
          :rules="[{ required: true, message: '请输入 Zepp Life 密码' }]"
        />
        <van-field
          v-model="dataForm.step"
          name="step"
          type="digit"
          label="步数"
          placeholder="请输入步数"
          required
          :rules="[{ required: true, message: '请输入步数' }]"
        />
        <van-field name="is_save" label="保存登录状态">
          <template #input>
            <van-switch v-model="dataForm.is_save" />
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>

    <div class="zh_footer_tips">
      <h4 class="app-font-danger">使用说明:</h4>
      <p>
        1、首次使用请在应用商店中下载 [Zepp Life]
        APP，打开软件并选择'没有账号立即注册'，一定要新注册不能用第三方账号授权登录
      </p>
      <p>
        2、进入 [Zepp Life] app，依次点击:
        我的->第三方接入->绑定你想同步数据的平台。
      </p>
      <p>3、使用此小程序进行提交。</p>
      <p class="text-red">
        4、特别注意: 首次提交后因账号刚注册官方安全限制第一次不会同步,需要等 24
        小时后再来提交方可同步,后续使用不再有此限制
      </p>
      <p>5、仅供学习交流，严禁用于商业用途，请于24小时内删除</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { postXmPorts } from "@/api/jxcxin";
import { closeToast, showLoadingToast, showNotify } from "vant";
const dataForm = reactive({
  user_name: "",
  password: "",
  is_save: false
});

const onSubmit = () => {
  const formData = new FormData();
  const { user_name, password, step } = dataForm;
  formData.append("user", user_name);
  formData.append("password", password);
  formData.append("step", step);
  showLoadingToast({
    message: "加载中...",
    forbidClick: true
  });
  postXmPorts(formData, true).then(response => {
    closeToast();
    if (response.code === 200) {
      showNotify({ type: "success", message: response.msg || "提交成功" });
    } else {
      showNotify({ type: "danger", message: response.msg || "提交失败" });
    }
  });
};
</script>

<style scoped lang="less">
.zh-body {
  background-color: var(--van-background);
  box-sizing: border-box;
  min-height: calc(100vh - 99px);
  padding-bottom: 20px;
  padding-top: 20px;
}

.zh_footer_tips {
  h4 {
    margin: 0;
  }
  text-align: left;
  background: var(--van-background-2);
  margin: 14px;
  padding: 10px;
  font-size: 12px;
  border-radius: 8px;
}
</style>
