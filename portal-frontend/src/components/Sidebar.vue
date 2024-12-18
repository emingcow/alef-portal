<template>
  <div class="sidebar">
    <div class="logo">
      <el-icon :size="28" color="#165DFF"><Monitor /></el-icon>
      <h2>小夫AI</h2>
    </div>
    <el-menu
      :default-active="activeMenu"
      class="menu"
      router
    >
      <el-menu-item index="/chat">
        <el-icon><ChatDotRound /></el-icon>
        <span>AI对话</span>
      </el-menu-item>
      <el-menu-item index="/agent">
        <el-icon><Grid /></el-icon>
        <span>AI工具箱</span>
      </el-menu-item>
      <el-menu-item index="/dashboard">
        <el-icon><DataLine /></el-icon>
        <span>AI提效大屏</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Monitor, Grid } from '@element-plus/icons-vue'

const route = useRoute()
const activeMenu = computed(() => route.path)
</script>

<style scoped>
.sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-right: 1px solid #e6e6e6;
}

.logo {
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 8px;
  border-bottom: 1px solid #f0f0f0;
}

.logo h2 {
  margin: 0;
  font-size: 18px;
  color: #165DFF;
}

.menu {
  border-right: none;
  margin-top: 8px;
}

:deep(.el-menu-item) {
  height: 48px;
  line-height: 48px;
  margin: 4px 0;
}

:deep(.el-menu-item.is-active) {
  background: #E8F3FF;
  color: #165DFF;
  border-right: 3px solid #165DFF;
}

:deep(.el-menu-item:hover) {
  background: #F5F7FA;
}
</style> 