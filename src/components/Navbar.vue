<template>
  <div>
    <slot :user="user">我是默认值 {{ user.lastName }} </slot>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <slot name="todo" :todo="todo">
          {{ todo.text }}
        </slot>
      </li>
    </ul>
    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a>订单管理</a></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      user: {
        firstName: "Wu",
        lastName: "zhidong"
      },
      test: [1, 2, 3, 4],
      todoList: [
        { id: 1, text: "跑步" },
        { id: 2, text: "看电影" },
        { id: 3, text: "打篮球" }
      ]
    };
  },
  created() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped></style>
