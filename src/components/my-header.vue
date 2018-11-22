<template>
  <div>
      <h1>This Header is actually a Vue Template</h1>
      <slot></slot>
      <!-- @slot Use this slot to set the subheading -->
      <slot name="subheading"></slot>
  </div>
</template>
<script>
import mixinA from '../mixins/mixinA'

  /**
   * A header component
   * 
   * ```html
   * <my-header>
   *    Some Important Heading
   *    <h2 slot="subheading">Subheading Slot</h2>
   * </my-header>
   * ```
   */
export default {
    name: 'my-header',
    mixins: [mixinA]
}    
</script>
<style scoped>

</style>