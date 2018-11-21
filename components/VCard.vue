<template>
  <div class="v-card">
    <div class="v-card-header" v-html="heading"></div>
    <div class="v-card-body">
      <!-- @slot Use this slot to for the card body, which is the middle area  -->
      <slot name="body"></slot>
    </div>
    <div class="v-card-footer">
      <!-- @slot Use this slot to for the card footer -->
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>

/**
 * A basic card component that offers 2 slots to use:
 * 1. Card Header
 * 2. Card Body
 * 3. Card Footer
 *
 * ```html
 * <v-card heading="Card Header">
 *  <div slot="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eius corrupti a sint recusandae neque dolorum distinctio cupiditate. Unde non, odit praesentium odio, voluptate laboriosam eos quod vero ipsa nemo.</div>
 *  <div slot="footer">Card Footer</div>
 * </v-card>
 * ```
 */  
export default {
  name: "VCard",
  props: {
    /**
     * The text for the heading
     */
    heading: {
      type: String
    }
  }
};
</script>

<style lang="scss">
.v-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid gray;
  margin: 0.5rem;
  font-size: 1.25rem;

  &-header {
    flex: 1;
    font-weight: 600;
  }

  &-body {
    flex: 1;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
</style>