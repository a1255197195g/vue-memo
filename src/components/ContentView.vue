<template>
  <ul>
    <li v-for="(item, index) in list" :key="item.id" :class="item.isFinish?'finish':'unfinish'">
      <div>

        <span>{{index}}、</span>
        <span>{{item.value}}</span>
      </div>
      <div>
        <button class="removeButton" @click="deleteButtonClick(index)">删除</button>
        <button  class="finishButton" @click="finishButtonClick(index)">{{ item.isFinish ? '已完成':'未完成' }}</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ContentView',
  props: {
    list: Array,
    finishClick: Function,
    deleteClick: Function
  },
  methods: {
    finishButtonClick: function (index) {
      if (this.finishClick) {
        this.finishClick(index)
      }
    },
    deleteButtonClick: function (index) {
      if (this.deleteClick) {
        this.deleteClick(index)
      }
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
    height: 40px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px 0 10px;
  }
  li span:first-child {
    margin:  0 10px;
  }

  .unfinish span{
    color: #c00;
  }

  .finish span {
    color: #999;
  }

  .finishButton {
    padding: 4px 6px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #666;
    cursor: pointer;
    outline: none;
    border: none;
    margin-right: 10px;
  }
  .unfinish .finishButton {
    color : white;
    background-color: #c00;
  }

  .removeButton {
    padding: 4px 13px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color : white;
    background-color: #c00;
    cursor: pointer;
    outline: none;
    border: none;
    margin-right: 10px;
  }

   li .removeButton {
    display: none;
  }

  li:hover .removeButton {
    display: inline-block;

  }

  li:hover {
    background-color: #f5f5f5;
  }

</style>
