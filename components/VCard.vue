<template>
  <div class="v-card">
    <div class="v-card-header" v-html="heading"></div>
    <div class="v-card-body">
      <!-- Use this slot to for the card body, which is the middle area  -->
      <slot name="body"></slot>
    </div>
    <div class="v-card-footer">
      <!-- Use this slot to for the card footer -->
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VCard",
  props: {
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