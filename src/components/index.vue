<template>
  <div>
    <h1>文章</h1>
    <!-- <input type="text" v-model="addDate.tags.id" /> -->
    <input type="text" v-model="addDate.id" placeholder="id" />
    <input type="text" v-model="addDate.author" placeholder="author" />
    <input type="text" v-model="addDate.content" placeholder="content" />
    <input type="text" v-model="addDate.cover" placeholder="cover" />
    <input type="text" v-model="addDate.title" placeholder="title" />
    <button @click="add">新增</button>
    <br />
    <input type="text" placeholder="以名字查找" v-model="keywords" />
    <button @click="serch">查找</button>
    <br />
    <tr>
      <td>id</td>
      <td>author</td>
      <td>content</td>
      <td>cover</td>
      <td>title</td>
      <td>delete</td>
      <td>change</td>
    </tr>
    <tr v-for="(item,index) in serch(keywords)" :key="item.index">
      <td>{{item.id}}</td>
      <td>{{item.author}}</td>
      <td>{{item.content}}</td>
      <td>{{item.cover}}</td>
      <td>{{item.title}}</td>
      <td>
        <button @click="del(index)">删除</button>
      </td>
      <td>
        <button @click="flagclick(index)">修改</button>
      </td>
    </tr>
    <div class="content" v-show="flag">
      <input type="text" v-model="alterDate.author" />
      <input type="text" v-model="alterDate.content" />
      <input type="text" v-model="alterDate.cover" />
      <input type="text" v-model="alterDate.title" />
      <button @click="alter">更新</button>
      <button @click="unflagclick">取消</button>
    </div>
    <router-link to="../test">去到练习页面</router-link>
  </div>
</template>

<script>
import "../main";
import Axios from "axios";
export default {
  data() {
    return {
      addDate: {
        tags: {
          id: ""
        },
        id: "",
        author: "",
        content: "",
        cover: "",
        title: ""
      },
      alterDate: {
        title: "",
        cover: "",
        tags: {
          id: ""
        },
        content: "",
        author: ""
      },
      flag: false,
      temidnex: "",
      artcallist: [],
      keywords: ""
    };
  },
  mounted() {
    this.getlist();
  },
  watch: {
    $route: "getlist"
  },
  methods: {
    //渲染
    getlist() {
      Axios.get(
        ` ${this.$root.BaseUrl}/api/article/list/${this.$route.params.page}`,
        this.$root.headers
      )
        .then(res => {
          window.console.log(res);
          this.artcallist = res.data.data;
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    //增加
    add() {
      Axios.post(
        `${this.$root.BaseUrl}/api/article/save`,
        this.addDate,
        this.$root.headers
      )
        .then(res => {
          window.console.log(res);
          var pusharr = {
            tags: {
              id: this.addDate.tags.id
            },
            id: this.addDate.id,
            author: this.addDate.author,
            content: this.addDate.content,
            cover: this.addDate.cover,
            title: this.addDate.title
          };
          this.artcallist.push(pusharr);
          this.addDate.id='';this.addDate.author='';
          this.addDate.content='';this.addDate.cover='';
          this.addDate.title='';
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    //删除
    del(index) {
      this.artcallist.splice(index, 1);
      // window.console.log(this.artcallist[index].tags.__ob__.dep.id);
      // Axios.post(
      //   `${this.$root.BaseUrl}/api/tags/delete`,
      //   this.artcallist[index].tags.__ob__.dep.id,
      //   this.$root.headers
      // )
      //   .then(res => {
      //     window.console.log(res);
      //     this.artcallist.splice(index, 1);
      //   })
      //   .catch(err => {
      //     window.console.log(err);
      //   });
    },

    flagclick(index) {
      this.flag = true;
      this.temidnex = index;
    },

    unflagclick() {
      this.flag = false;
    },
    //修改
    alter() {
      Axios.post(
        `${this.$root.BaseUrl}/api/article/save`,
        this.alterDate,
        this.$root.headers
      )
        .then(res => {
          window.console.log(res);
          var newobj = JSON.parse(res.config.data);
          this.artcallist[this.temidnex].title = newobj.title;
          this.artcallist[this.temidnex].cover = newobj.cover;
          // this.artcallist[index].tags.id = newobj.tags.id;
          this.artcallist[this.temidnex].content = newobj.content;
          this.artcallist[this.temidnex].author = newobj.author;
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    //查找
    serch(keywords) {
      // var newlist=[];
      // this.artcallist.forEach(item=>{
      //   if(item.author.indexOf(keywords)!=-1){
      //     newlist.push(item)
      //   }
      // });
      // return newlist;
      var newlist = this.artcallist.filter(item => {
        if (item.author.indexOf(keywords) != -1) {
          return item;
        }
      });
      return newlist;
    }
  }
};
</script>

<style lang="less" scoped>
tr {
  // position: absolute;
  left: 530px;
}
td {
  border: 1px;
  border-style: dashed;
  width: 60px;
  text-align: center;
}
.content {
  width: 100px;
  height: 250px;
  margin: 0 auto;
  position: fixed;
  top: 150px;
  left: 500px;
}
</style>

