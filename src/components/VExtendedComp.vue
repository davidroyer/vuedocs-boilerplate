
<script>
import VBaseComp from './VBaseComp.vue'
/**
 * An example extended component that has been extended by another component
 *
 * ```html
 * <v-base-comp sample-text="Some Special Heading"/>
 * ```
 * @mixin
 */
export default {
    name: 'VExtendedComp',
    extends: VBaseComp,
    props: {
        sampleText: {
            default: 'Overwritten in VExtended Cmponent'
        },
        placeholder: {
            type: String,
        }
    }
}
</script>