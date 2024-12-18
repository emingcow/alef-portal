<template>
  <div class="chat-container">

    <div class="chat-messages" ref="messagesContainer">
      <!-- 欢迎页面 -->
      <div v-if="!chatHistory.length" class="welcome-section">
        <div class="welcome-header">
          <div class="title-with-icon">
            <el-icon :size="36" color="#409EFF"><ChatRound /></el-icon>
            <h1>你好，我是小夫一言</h1>
          </div>
          <p class="subtitle">作为你的智能伙伴，我既能写文案、想点子，又能陪你聊天、答疑解惑。</p>
        </div>
        
        <!-- 推荐卡片区域 -->
        <div class="recommendation-cards">
          <el-row :gutter="20">
            <el-col :span="8" v-for="(card, index) in recommendCards" :key="index">
              <div class="rec-card" @click="useRecommendation(card)">
                <div class="card-header">
                  <el-icon :size="32" :color="card.color">
                    <component :is="card.icon" />
                  </el-icon>
                  <h3>{{ card.title }}</h3>
                </div>
                <p>{{ card.description }}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

      <!-- 对话记录 -->
      <div v-else class="message-list">
        <div v-for="(msg, idx) in chatHistory" :key="idx" 
             :class="['message', msg.role === 'user' ? 'user-message' : 'ai-message']">
          <div class="message-content">
            <div class="message-header">
              <el-icon :size="20" :class="msg.role">
                <User v-if="msg.role === 'user'" />
                <ChatRound v-else />
              </el-icon>
              <span>{{ msg.role === 'user' ? '我' : '小夫AI' }}</span>
            </div>
            <div class="text">{{ msg.text }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部功能区和输入框 -->
    <div class="chat-input-section">
      <!-- 功能提示按钮 -->
      <div class="suggestion-buttons">
        <el-button class="suggestion-btn" v-for="(btn, index) in suggestionButtons" :key="index">
          <el-icon><component :is="btn.icon" /></el-icon>
          {{ btn.text }}
        </el-button>
        <el-button class="suggestion-btn">
          <el-icon><More /></el-icon>
          更多
        </el-button>
      </div>

      <div class="input-container">
        <div class="input-wrapper">
          <!-- 左侧功能按钮 -->
          <div class="left-buttons">
            <el-tooltip content="上传文件" placement="top">
              <el-button><el-icon :size="20"><Upload /></el-icon></el-button>
            </el-tooltip>
            <el-tooltip content="网页链接" placement="top">
              <el-button><el-icon :size="20"><Link /></el-icon></el-button>
            </el-tooltip>
            <el-tooltip content="全球搜索" placement="top">
              <el-button><el-icon :size="20"><Position /></el-icon></el-button>
            </el-tooltip>
          </div>

          <!-- 输入框 -->
          <el-input
            v-model="inputMessage"
            :placeholder="placeholder"
            @keyup.enter="sendMessage"
            clearable
          >

          <template #suffix>
              <div class="submit-button" @click="sendMessage">
                <el-icon :size="16"><ArrowRight /></el-icon>
              </div>
            </template>
            <!-- 右侧发送按钮 -->
            <!-- <template #append>
              <el-button type="primary" @click="sendMessage">
                <el-icon><Position /></el-icon>
              </el-button>
            </template> -->
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.chat-container {
  display: flex;
  flex-direction: column;
  min-height: 95vh;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  background: transparent;
}

.chat-messages {
  flex: 1;
  padding: 0 24px;
  overflow: hidden;
}

/* 添加新样式 */
.model-selector {
  padding: 12px 20px;
  border-bottom: 1px solid #E5E6EB;
  background: #fff;
}

.model-options {
  display: flex;
  gap: 12px;
}

.model-option {
  padding: 6px 16px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
}

.model-option.active {
  background: #E8F3FF;
  color: #165DFF;
}

.model-option:hover:not(.active) {
  background: #F2F3F5;
}

.recommendation-cards {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.rec-card {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s;
  height: 180px;
}

.rec-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.rec-card h3 {
  font-size: 18px;
  color: #1D2129;
  margin-bottom: 12px;
}

.rec-card p {
  color: #86909C;
  font-size: 14px;
  margin-bottom: 12px;
}

.pdf-link {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #165DFF;
  font-size: 14px;
}

.function-bar {
  padding: 12px 20px;
  border-bottom: 1px solid #E5E6EB;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 16px 16px 0 0;
}

.function-buttons {
  display: flex;
  gap: 8px;
}

.input-tip {
  color: #86909C;
  font-size: 12px;
  margin-top: 8px;
}

/* 修改其他样式以匹配文心一言 */
.welcome-header {
  padding: 40px 0;
  text-align: left;
  /* max-width: 600px; */
  margin: 0 auto;
}

.welcome-header h1 {
  font-size: 32px;
  text-align: left;
  margin-bottom: 16px;
  color: #1D2129;
}

.welcome-header .subtitle {
  text-align: left;
  font-size: 16px;
  color: #86909C;
  line-height: 1.6;
}

.welcome-section {
  padding: 32px 0;
}

.welcome-header {
  padding: 0 0 48px;
  text-align: left;
  /* max-width: 720px; */
  margin: 0 auto;
}

.welcome-header h1 {
  font-size: 32px;
  text-align: left;
  margin-bottom: 16px;
  color: #000000;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.welcome-header .subtitle {
  text-align: left;
  font-size: 16px;
  color: #666666;
  line-height: 1.6;
}

.recommendation-cards {
  /* max-width: 720px; */
  margin: 0 auto;
  padding: 0;
}

.rec-card {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 120px;
  margin-bottom: 16px;
}

.rec-card:hover {
  border-color: #000000;
  transform: translateY(-1px);
}

.rec-card h3 {
  font-size: 16px;
  color: #000000;
  margin-bottom: 12px;
  font-weight: 500;
}

.rec-card p {
  color: #666666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 0;
}

.message-list {
  padding: 40px 0;
  max-width: 720px;
  margin: 0 auto;
}

.message {
  margin-bottom: 24px;
  max-width: 720px;
}

.message-content {
  padding: 16px 24px;
  border-radius: 12px;
  background: rgba(247, 247, 248, 0.9);
  backdrop-filter: blur(8px);
}

.user-message .message-content {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(229, 229, 229, 0.8);
}

.message-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #666666;
}

.message .text {
  font-size: 15px;
  line-height: 1.6;
  color: #000000;
}

.chat-input-section {
  position: sticky;
  bottom: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 20%);
  padding: 24px;
  margin-top: auto;
  backdrop-filter: blur(8px);
}

.suggestion-buttons {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  max-width: 720px;
  margin: 0 auto 16px;
  overflow-x: auto;
  padding: 4px;
}

.suggestion-buttons::-webkit-scrollbar {
  display: none;
}

.suggestion-btn {
  --el-button-bg-color: transparent;
  /* --el-button-border-color: transparent; */
  --el-button-hover-bg-color: rgba(0, 0, 0, 0.05);
  --el-button-hover-border-color: transparent;
  --el-button-active-bg-color: rgba(0, 0, 0, 0.1);
  --el-button-text-color: #666666;
  height: 32px;
  padding: 0 12px;
  border-radius: 6px;
  white-space: nowrap;
  font-size: 14px;
}

.suggestion-btn .el-icon {
  margin-right: 4px;
}

.input-container {
  /* max-width: 720px; */
  margin: 0 auto;
}

.input-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(229, 229, 229, 0.8);
  border-radius: 24px;
  padding: 8px;
  transition: all 0.2s ease;
}

.input-wrapper:focus-within {
  border-color: #000000;
}

.left-buttons {
  display: flex;
  gap: 4px;
  padding-left: 4px;
}

.left-buttons .el-button {
  --el-button-bg-color: transparent;
  --el-button-border-color: transparent;
  --el-button-hover-bg-color: rgba(0, 0, 0, 0.05);
  --el-button-hover-border-color: transparent;
  --el-button-active-bg-color: rgba(0, 0, 0, 0.1);
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 50%;
}

:deep(.el-input) {
  flex: 1;
}

:deep(.el-input__wrapper) {
  background: transparent;
  box-shadow: none !important;
  padding: 0 8px;
}

:deep(.el-input__inner) {
  height: 64px;
  font-size: 18px;
  color: #000000;
}

:deep(.el-input__inner::placeholder) {
  color: #666666;
}

:deep(.el-input-group__append) {
  background: transparent;
  border: none;
  padding: 0;
}

:deep(.el-input-group__append .el-button) {
  border-radius: 50%;
  width: 32px;
  height: 32px;
  padding: 0;
  --el-button-bg-color: #000000;
  --el-button-border-color: #000000;
  --el-button-hover-bg-color: #262626;
  --el-button-hover-border-color: #262626;
}

:deep(.el-input-group__append .el-button .el-icon) {
  color: #ffffff;
}

.title-with-icon {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

:deep(.el-icon) {
  &.user {
    color: #000000;
  }
}

.rec-card .card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.rec-card .card-header h3 {
  margin: 0;
  font-size: 18px;
  color: #000000;
  font-weight: 500;
}

:deep(.el-button) {
  border-radius: 10px;
  /* width: 40px;
  height: 40px; */
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f3f3f4;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 4px;
}

.submit-button:hover {
  background: #e5e5e5;
}

.submit-button .el-icon {
  color: #303030;
  transition: transform 0.2s ease;
}

.submit-button:hover .el-icon {
  transform: translateX(2px);
}
</style>

<script setup>
import { ref, computed } from 'vue'
import { useMainStore } from '@/stores'
import { 
  User, ChatRound, Upload, Delete, Position,
  Document, Edit, Link, Picture, Connection,
  List, Reading, Sunny, More
} from '@element-plus/icons-vue'

const store = useMainStore()
const inputMessage = ref('')
const isLoading = ref(false)
const messagesContainer = ref(null)

const chatHistory = computed(() => store.chatHistory)

const featureCards = [
  {
    title: '智能对话',
    description: '支持多轮对话，理解更准确，回答更流畅',
    icon: 'ChatDotRound',
    iconColor: '#409EFF'
  },
  {
    title: '文档分析',
    description: '快速理解文档内容，提供专业见解',
    icon: 'Document',
    iconColor: '#67C23A'
  },
  {
    title: '创意助手',
    description: '激发创意灵感，辅助内容创作',
    icon: 'Sunny',
    iconColor: '#E6A23C'
  }
]

const sendMessage = async () => {
  if (!inputMessage.value.trim()) return
  
  isLoading.value = true
  await store.sendMessage(inputMessage.value)
  inputMessage.value = ''
  isLoading.value = false
  
  // 滚动到底部
  setTimeout(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  }, 100)
}

const clearChat = () => {
  store.chatHistory = []
}

// 添加快捷提示语
const quickPrompts = [
  '帮我写一篇关于人工智能的文章',
  '分析一下最近的经济形势',
  '帮我优化一段代码',
  '给我讲个有趣的故事'
]

const placeholder = '给小夫AI发送消息'

const usePrompt = (prompt) => {
  inputMessage.value = prompt
}

// 修改推荐卡片数据
const recommendCards = [
  {
    title: '通用对话',
    description: '智能对话助手，支持多轮对话，理解准确，回答流畅',
    icon: 'ChatDotRound',
    color: '#409EFF'
  },
  {
    title: '知识助手',
    description: '海量知识库支持，提供准确专业的知识解答',
    icon: 'Reading',
    color: '#67C23A'
  },
  {
    title: '创意助手',
    description: '激发创意灵感，辅助内容创作，提供多样化建议',
    icon: 'Sunny',
    color: '#E6A23C'
  }
]

const useRecommendation = (card) => {
  inputMessage.value = card.title
}

const suggestionButtons = [
  { icon: 'Picture', text: '创建图片' },
  { icon: 'Document', text: '代码' },
  { icon: 'Reading', text: '提供建议' },
  { icon: 'Document', text: '总结文本' },
  { icon: 'DataLine', text: '分析数据' },
]
</script> 