<template>
    <div class="base-text-input-field">
      <input   @keyup.enter="enterClick"  v-model="value" type="text" placeholder="请输入新的备忘任务1">
    </div>
</template>

<script>
export default {
  name: 'baseTextInput',
  props: {
    id: String,
    enter: Function
  },
  data: function () {
    return {
      value: ''
    }
  },
  methods: {
    enterClick: function () {
      if (this.enter && this.enter instanceof Function) {
        this.enter(this.value)
        this.value = ''
      }
    }
  }
}
</script>

<style scoped>

  input {
    outline: none;
    border: none;
    height: 40px;
    width: 95%;
    margin: 0 10px;
    box-sizing: border-box;
    font-size: 14px;
  }

  .base-text-input-field {
    border: 1px solid #ddd;
    height: 40px;
    border-radius: 4px;
  }

</style>
