<template>
  <div>
    详情页
    <navbar>
      <template v-slot="{ user }">
        <div>
          父组件传给插槽的内容
          {{ user.firstName }}
        </div>
      </template>
      <template v-slot:todo="{ todo }">
        父组件
        {{ todo.text }}
      </template>
    </navbar>
  </div>
</template>
<script>
import navbar from "../components/Navbar";
export default {
  data() {
    return {
      slotName: "left"
    };
  },
  components: {
    navbar
  }
};
</script>
<style lang="scss" scoped></style>
