import {
  onMounted,
  defineComponent,
  onUpdated,
  onBeforeMount,
  onErrorCaptured,
  onRenderTracked,
  onActivated,
  onDeactivated,
  ref,
} from 'vue'

export default defineComponent({
  setup: () => {
    console.log('setup')

    const counter = ref(0)

    onMounted(() => {
      console.log('onMounted')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onErrorCaptured(() => {
      console.log('onErrorCaptured')
    })
    onRenderTracked(() => {
      console.log('onRenderTracked')
    })
    onActivated(() => {
      console.log('onActivated')
    })
    onDeactivated(() => {
      console.log('onDeactivated')
    })

    return {
      counter,
    }
  },
})
