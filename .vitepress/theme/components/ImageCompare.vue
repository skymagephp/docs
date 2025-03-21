<template>
  <div class="image-compare" ref="container">
    <div class="image-container">
      <img :src="beforeImage" alt="Before" class="before-image" />
      <div class="after-container" :style="{ width: `${sliderPosition}%` }">
        <img :src="afterImage" alt="After" class="after-image" />
      </div>
      <div class="slider"
           :style="{ left: `${sliderPosition}%` }"
           @mousedown.prevent="startDrag"
           @touchstart.prevent="startDrag">
        <div class="slider-line"></div>
        <div class="slider-handle">
          <div class="arrow left-arrow">◀</div>
          <div class="arrow right-arrow">▶</div>
        </div>
      </div>
    </div>
    <div class="labels">
      <div class="label before-label">{{ beforeLabel }}</div>
      <div class="label after-label">{{ afterLabel }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    beforeImage: {
      type: String,
      required: true
    },
    afterImage: {
      type: String,
      required: true
    },
    beforeLabel: {
      type: String,
      default: 'Before'
    },
    afterLabel: {
      type: String,
      default: 'After'
    },
    initialPosition: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      sliderPosition: this.initialPosition,
      isDragging: false
    }
  },
  mounted() {
    // Use bind to ensure 'this' context is maintained
    this.boundOnDrag = this.onDrag.bind(this)
    this.boundStopDrag = this.stopDrag.bind(this)

    // Add event listeners with bound methods
    document.addEventListener('mousemove', this.boundOnDrag, { passive: false })
    document.addEventListener('mouseup', this.boundStopDrag)
    document.addEventListener('touchmove', this.boundOnDrag, { passive: false })
    document.addEventListener('touchend', this.boundStopDrag)
  },
  beforeUnmount() {
    // Remove event listeners with the same bound methods
    document.removeEventListener('mousemove', this.boundOnDrag)
    document.removeEventListener('mouseup', this.boundStopDrag)
    document.removeEventListener('touchmove', this.boundOnDrag)
    document.removeEventListener('touchend', this.boundStopDrag)
  },
  methods: {
    startDrag(event) {
      event.preventDefault() // Prevent default behavior
      this.isDragging = true
    },
    stopDrag() {
      this.isDragging = false
    },
    onDrag(event) {
      if (!this.isDragging) return

      // Prevent default to avoid scrolling while dragging
      if (event.cancelable) event.preventDefault()

      const container = this.$refs.container
      if (!container) return

      const rect = container.getBoundingClientRect()

      // Handle both mouse and touch events
      const clientX = event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX

      // Calculate position as percentage
      let position = ((clientX - rect.left) / rect.width) * 100

      // Constrain position between 0 and 100
      this.sliderPosition = Math.max(0, Math.min(100, position))
    }
  }
}
</script>

<style scoped>
.image-compare {
  position: relative;
  width: 100%;
  margin: 2rem 0;
  /* Removed border-radius to maintain original image look and feel */
  overflow: hidden;
  box-shadow: var(--vp-shadow-2);
  touch-action: none; /* Prevent scrolling on touch devices when interacting */
}

.image-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  user-select: none; /* Prevent text selection during dragging */
}

.before-image, .after-image {
  display: block;
  width: 100%;
  object-fit: cover;
  max-height: 80vh;
  pointer-events: none; /* Prevent image dragging */
}

.after-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  overflow: hidden;
  z-index: 1;
  border-right: 2px solid white;
}

.slider {
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  z-index: 2;
  cursor: ew-resize;
  touch-action: none; /* Prevent scrolling on touch devices when interacting */
}

.slider-line {
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.slider-handle {
  position: relative;
  width: 32px;
  height: 32px;
  background-color: var(--vp-c-brand);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.arrow {
  font-size: 10px;
  color: white;
  user-select: none;
}

.left-arrow {
  margin-right: 2px;
}

.right-arrow {
  margin-left: 2px;
}

.labels {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
}

.label {
  font-size: 0.9rem;
  font-weight: 500;
}

.before-label {
  text-align: left;
}

.after-label {
  text-align: right;
}
</style>
