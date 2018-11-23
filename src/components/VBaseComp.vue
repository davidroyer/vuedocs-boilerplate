<template>
    <div class="v-base-comp">
        <h4>{{ sampleText }}</h4>
        <!--the appropriate input should go here-->
    </div>
</template>

<script>
/**
 * An Example Base Component that will be extended
 *
 * ```html
 * <v-base-comp sample-text="Base Component Sample Text"/>
 * ```
 * @mixin
 */
export default {
    name: 'VBaseComp',
    props: {

        /**
         * A prop within the base component
         */
        sampleText: {
            type: String,
            default: 'Default sample text'
        }
    },
}
</script>