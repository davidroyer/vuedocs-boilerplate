/**
 * @mixin
 */
export default {
    created: function () {
        /**
         * Emitted when the component has been created
         */
        this.$emit('created')
        this.hello()
    },
    props: {
        /**
         * A prop from mixinA
         */
        mixinProp1: {
            type: String
        }
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        }
    }
}