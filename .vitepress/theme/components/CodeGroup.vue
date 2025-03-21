<template>
  <div class="code-group">
    <div class="tabs">
      <button v-for="(tab, i) in tabs"
              :key="i"
              class="tab"
              :class="{ active: i === activeTab }"
              @click="activeTab = i">
        {{ tab }}
      </button>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [],
      activeTab: 0
    }
  },
  mounted() {
    const slots = this.$slots.default()
    if (!slots) return

    // Extract tab titles from code block comments
    slots.forEach(slot => {
      if (slot.type.name === 'pre') {
        const titleMatch = slot.props?.class?.match(/language-(\w+)/)
        if (titleMatch) {
          this.tabs.push(titleMatch[1])
        }
      }
    })

    // Hide all tabs except active one
    this.updateVisibility()
  },
  watch: {
    activeTab() {
      this.updateVisibility()
    }
  },
  methods: {
    updateVisibility() {
      const slots = this.$slots.default()
      if (!slots) return

      slots.forEach((slot, i) => {
        if (slot.el) {
          slot.el.style.display = i === this.activeTab ? 'block' : 'none'
        }
      })
    }
  }
}
</script>

<style scoped>
.code-group {
  margin: 1.5rem 0;
  border-radius: var(--vp-border-radius);
  overflow: hidden;
  box-shadow: var(--vp-shadow-1);
}

.tabs {
  display: flex;
  background-color: #f9f9f9;
  border-bottom: 1px solid rgba(60, 60, 60, 0.12);
  overflow-x: auto;
}

.tab {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
  border-bottom: 2px solid transparent;
  min-width: 6rem;
  text-align: center;
}

.tab.active {
  color: var(--vp-c-brand);
  font-weight: 500;
  border-color: var(--vp-c-brand);
}

.content {
  position: relative;
}

.content :deep(pre) {
  margin: 0;
  border-radius: 0;
}

:deep(.dark) .tabs {
  background-color: #242424;
}
</style>
