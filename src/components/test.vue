<template>
  <div>
    <div>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <select name="" id="">
          <option value="">未回复</option>
          <option value="">已回复</option>
      </select>
      <button>搜索</button>
      <button>重置</button>
    </div>
    <tr>
        <td></td>
        <td>反馈内容</td>
        <td>反馈电话</td>
        <td>反馈时间</td>
        <td>操作</td>
    </tr>
    <tr>
        <td><el-checkbox/></td>
        <td>APP不错</td>
        <td>17882237256</td>
        <td>2020.2.21</td>
        <td>
            <button>回复</button>
            <button>编辑</button>
        </td>
    </tr>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
    tr{
        display: flex;
        justify-content: space-around;
    }
    td{
        width: 20%;
        text-align: center
    }
</style>