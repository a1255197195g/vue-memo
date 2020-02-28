<template>
    <div class="footer-field">
        <span>未完成<span style="color:#c00">({{unfinishCount}})</span> / 全部<span style="color: #c00">({{allCount}})</span></span>
        <span><button  @click="$emit('hiddenFinish')"> {{isShowAll?'隐藏完成':'显示全部'}} </button></span>
    </div>
</template>

<script>
export default {
  name: 'FooterView',
  props: {
    unfinishCount: Number,
    allCount: Number,
    isShowAll: Boolean
  },
  methods: {
  }
}
</script>

<style scoped>

  .footer-field {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  }

  button {
    font-size: 12px;
    background-color: #c00;
    padding: 4px 6px;
    color: #fff;
    border-radius: 4px;
    outline: none;
  }
</style>
