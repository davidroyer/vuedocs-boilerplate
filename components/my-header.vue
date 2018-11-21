<template>
  <div>
      <h1>This Header is actually a Vue Template</h1>
      <slot></slot>
      <!-- Use this slot to set the subheading -->
      <slot name="subheading"></slot>
  </div>
</template>
<script>
import mixinA from '../mixins/mixinA'

export default {
    name: 'my-header',
    mixins: [mixinA]
}    
</script>
<style scoped>

</style>