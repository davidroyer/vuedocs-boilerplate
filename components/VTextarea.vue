<template>
  <div>
    <slot name="slotTest"></slot>
    <label :for="id" v-text="label"></label>
    <textarea :id="id" v-on:keyup="keyup" v-on:input="input">
    </textarea>
  </div>
</template>

<script>
  /**
   * The custom HTML `<textarea>` component.
   * 
   * @author Sébastien
   * @license MIT
   */
  export default {
    name: 'VTextarea',
    props: {
      label: { type: String},
      /**
       * Use this directive to create two-way data bindings with the component.
       * It automatically picks the correct way to update the element based on the input type.
       * @model
       */
      value: { type: String },
      /**
       * Defines a unique identifier (ID) which must be unique in the whole document.
       */
      id: { type: String, required: true },
      /**
       * This Boolean property indicates that the user cannot interact with the control.
       */
      disable: { type: Boolean, default: false },

    },
    methods: {
      /**
       * Define if the control value is empty of not.
       * @return {boolean} true if empty; otherwise false
       */
      isEmpty () {
        return !this.value || this.value.length === 0
      },
      /**
       * @private
       */
      input (e) {
        this.value = e.target.value

        /**
         * Fired when the value is changed.
         * @param {string} value - The updated value
         */
        this.$emit('input', this.value)
      },
      /**
       * @private
       */
      keyup (e) {
        /**
         * Fired when a key is released.
         */
        this.$emit('keyup')
      }
    }
  }
</script>
