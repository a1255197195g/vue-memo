<template>
    <div>
      <BaseTextInput :enter="addCommit"  class="add-task" ></BaseTextInput>
    </div>
</template>

<script>
import BaseTextInput from '../base/BaseTextInput.vue'
export default {
  name: 'HeaderView',
  data: function () {
    return {
    }
  },
  methods: {
    addCommit: function (value) {
      this.$emit('addNewTask', value)
    }
  },
  components: {
    BaseTextInput
  }
}
</script>
<style scoped>
  .add-task {
    margin: 10px;
    border: 1px solid #ddd;
  }
</style>
