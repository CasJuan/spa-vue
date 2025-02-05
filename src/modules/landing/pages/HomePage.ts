import {
  onMounted,
  defineComponent,
  onUpdated,
  onBeforeMount,
  onErrorCaptured,
  onRenderTracked,
  onActivated,
  onDeactivated,
} from 'vue'

export default defineComponent({
  setup: () => {
    console.log('setup')

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
  },
})
