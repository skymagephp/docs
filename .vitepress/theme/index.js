import DefaultTheme from 'vitepress/theme'
import './custom.css'
import CodeGroup from './components/CodeGroup.vue'
import ImageCompare from './components/ImageCompare.vue'
import FeatureCard from './components/FeatureCard.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register custom components
    app.component('CodeGroup', CodeGroup)
    app.component('ImageCompare', ImageCompare)
    app.component('FeatureCard', FeatureCard)
  }
}
