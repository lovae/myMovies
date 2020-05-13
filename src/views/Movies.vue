<template>
  <div>
    <h1>最近热门电影</h1>
    <div class="wrapper">
      <el-card
        class="itembox"
        shadow="hover"
        v-for="item in movieList"
        :key="item.id"
      >
        <div class="block">
          <img class="image" :src="item.cover" />
          <h4>{{ item.title }}</h4>
          <div class="bottom">
            <el-tag>{{ item.rate }}</el-tag>
            <el-button type="text" class="button" @click="lookMore(item.id)"
              >查看详情</el-button
            >
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      movieList: []
    };
  },
  created() {
    axios({
      method: "get",
      url: "/j/search_subjects",
      params: {
        type: "movie",
        tag: "热门",
        page_limit: 50,
        page_start: 0
      }
    }).then(res => {
      this.movieList = res.data.subjects;
    });
  },
  methods: {
    lookMore(id) {
      this.$router.push(`/detail/${id}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  .itembox {
    display: inline-block;
    width: 250px;
    height: 470px;
    margin: 10px;
  }
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.el-tag {
  margin-right: 20px;
}
.button {
  display: inline-block;
}

.image {
  height: 300px;
  display: block;
  margin: 0 auto;
}
</style>
