<template>
  <div class="feature-card" :class="{ 'has-icon': !!icon }">
    <div v-if="icon" class="feature-icon">
      <img v-if="icon.startsWith('http')" :src="icon" :alt="title" />
      <span v-else class="emoji-icon">{{ icon }}</span>
    </div>
    <div class="feature-content">
      <h3 class="feature-title">{{ title }}</h3>
      <p class="feature-desc">{{ description }}</p>
      <a v-if="link" :href="link" class="feature-link">Learn more →</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.feature-card {
  background-color: #f9f9f9;
  border-radius: var(--vp-border-radius);
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: var(--vp-shadow-1);
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--vp-shadow-3);
}

.feature-card.has-icon {
  padding-top: 2rem;
}

.feature-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.feature-icon img {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.emoji-icon {
  font-size: 3rem;
  line-height: 1;
}

.feature-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.feature-title {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  color: var(--vp-c-text-1);
}

.feature-desc {
  margin: 0 0 1rem;
  flex: 1;
  color: var(--vp-c-text-2);
}

.feature-link {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  margin-top: auto;
  display: inline-block;
  transition: color 0.2s ease;
}

.feature-link:hover {
  color: var(--vp-c-brand-dark);
}

:deep(.dark) .feature-card {
  background-color: #242424;
}
</style>
