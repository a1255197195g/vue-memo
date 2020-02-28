<template>
    <div class="menu-field">
      <HeaderView @addNewTask="addNewTask"></HeaderView>
      <ContentView :list="showList"  :deleteClick="deleteClick" :finishClick="finishClick" class="content-field"></ContentView>
      <FooterView @hiddenFinish="hiddenFinish"  class="footer-field"
                 :isShowAll="isShowAll" :allCount="allCount" :unfinishCount="unfinishCount"></FooterView>
    </div>
</template>

<script>
import ContentView from './ContentView.vue'
import HeaderView from './HeaderView.vue'
import FooterView from './FooterView.vue'
import Storage from '../js/Storage.js'
export default {
  name: 'MenuView',
  data: function () {
    return {
      list: [
        {
          id: 0,
          value: '五篇英文作文',
          isFinish: false
        },
        {
          id: 1,
          value: '三小时的数学视频',
          isFinish: true
        },
        {
          id: 2,
          value: '语文背诵',
          isFinish: false
        }
      ],
      isShowAll: true
    }
  },
  computed: {
    allCount: function () {
      return this.list.length
    },
    unfinishCount: function () {
      var i = 0
      this.list.forEach(item => {
        item.isFinish === false && i++
      })
      return i
    },
    showList: function () {
      return this.list.filter(item => {
        return this.isShowAll ? true : !item.isFinish
      })
    }
  },
  watch: {
    list: function (newValue, oldValue) {
      Storage.saveList(newValue)
    }
  },
  mounted: function () {
    this.list = Storage.readList()
  },
  methods: {
    addNewTask (value) {
      if (!confirm('确定要增加?')) {
        return
      }
      const task = {
        id: this.list.length,
        value: value
      }
      this.list.push(task)
    },
    hiddenFinish: function () {
      this.isShowAll = !this.isShowAll
    },
    finishClick: function (index) {
      this.list = this.list.map((item, itemIndex) => {
        if (itemIndex === index) {
          item.isFinish = !item.isFinish
        }
        return item
      })
    },
    deleteClick: function (index) {
      this.list = this.list.filter((item, itemIndex) => {
        return itemIndex !== index
      })
    }
  },

  components: {
    ContentView,
    HeaderView,
    FooterView
  }
}
</script>
<style scoped>
  .menu-field {
    border: 1px solid #ddd;
    width: 500px;
    margin:  0 auto;
    border-radius: 6px;
    padding: 20px;
  }

  .content-field {
    margin: 10px 10px 0;
  }

  .footer-field {
    margin: 0 10px;
    margin-top: 20px;
  }
</style>
