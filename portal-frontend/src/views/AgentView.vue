<template>
  <div class="agent-container">
    <div class="header">
      <div class="title-with-icon">
        <el-icon :size="32" color="#7B67EE"><Monitor /></el-icon>
        <h1>你的工作学习助手</h1>
      </div>
    </div>

    <!-- 主要功能区域 -->
    <div class="main-features">
      <el-row :gutter="20">
        <!-- 实时记录 -->
        <el-col :span="8">
          <div class="feature-card light-blue">
            <h2>实时记录</h2>
            <div class="feature-list">
              <p>实时语音转文字</p>
              <p>区分发言人</p>
              <p>智能总结要点</p>
            </div>
            <div class="feature-image">
              <el-icon :size="64" color="#7B67EE"><Microphone /></el-icon>
            </div>
            <el-button class="action-button">
              <el-icon><Microphone /></el-icon>
              开始录音
            </el-button>
          </div>
        </el-col>

        <!-- 阅读助手 -->
        <el-col :span="8">
          <div class="feature-card light-purple">
            <div class="feature-tag">限时 无限次</div>
            <h2>阅读助手</h2>
            <div class="feature-list">
              <p>全文总结与翻译</p>
              <p>思维导图生成</p>
              <p>文档解读问答</p>
            </div>
            <div class="feature-image">
              <el-icon :size="64" color="#7B67EE"><Document /></el-icon>
            </div>
            <el-button class="action-button">
              <el-icon><Upload /></el-icon>
              开始上传
            </el-button>
          </div>
        </el-col>

        <!-- PPT创作 -->
        <el-col :span="8">
          <div class="feature-card light-violet">
            <h2>PPT创作</h2>
            <div class="feature-list">
              <p>一句话、长文本、音视频</p>
              <p>1000万字长文档</p>
              <p>一键生成精美PPT</p>
            </div>
            <div class="feature-image">
              <el-icon :size="64" color="#7B67EE"><PictureFilled /></el-icon>
            </div>
            <el-button class="action-button">
              <el-icon><Edit /></el-icon>
              开始创作
            </el-button>
          </div>
        </el-col>
      </el-row>

      <!-- 其他功能区域 -->
      <el-row :gutter="20" class="sub-features">
        <!-- 音视频速读 -->
        <el-col :span="8">
          <div class="sub-card">
            <h3>音视频速读</h3>
            <div class="sub-content">
              <div class="sub-text">
                <p>音视频转文字</p>
                <p>生成和导出摘要脑图</p>
              </div>
              <el-icon :size="24" color="#7B67EE"><VideoPlay /></el-icon>
            </div>
          </div>
        </el-col>

        <!-- 链接速读 -->
        <el-col :span="8">
          <div class="sub-card">
            <h3>链接速读</h3>
            <div class="sub-content">
              <div class="sub-text">
                <p>解析网页URL/播客RSS</p>
                <p>智能总结链接的关键信息</p>
              </div>
              <el-icon :size="24" color="#7B67EE"><Link /></el-icon>
            </div>
          </div>
        </el-col>

        <!-- 格式转换 -->
        <el-col :span="8">
          <div class="sub-card">
            <h3>格式转换</h3>
            <div class="sub-content">
              <div class="sub-text">
                <p>PDF转Word/Excel/图片</p>
                <p>图片转Word/Excel/PDF</p>
              </div>
              <el-icon :size="24" color="#7B67EE"><RefreshRight /></el-icon>
            </div>
          </div>
        </el-col>
      </el-row>

      <!-- 最近使用记录 -->
      <div class="recent-section">
        <h2>大家都这么用</h2>
        <el-row :gutter="20">
          <el-col :span="8" v-for="(item, index) in recentItems" :key="index">
            <div class="recent-card">
              <div class="recent-content">
                <el-icon :size="20" :color="item.iconColor"><component :is="item.icon" /></el-icon>
                <span class="recent-title">{{ item.title }}</span>
              </div>
              <span class="recent-time">{{ item.time }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  Monitor, Microphone, Upload, Edit, VideoPlay,
  Link, RefreshRight, Document, Timer, PictureFilled
} from '@element-plus/icons-vue'

const recentItems = [
  {
    title: '会议网课语音转文字',
    icon: 'Document',
    iconColor: '#7B67EE',
    time: '音频 02:47:46'
  },
  {
    title: 'AI帮你解读西游记',
    icon: 'Document',
    iconColor: '#7B67EE',
    time: '图书1本'
  },
  {
    title: '一分钟速读专业论文',
    icon: 'Timer',
    iconColor: '#7B67EE',
    time: '论文1篇'
  }
]
</script>

<style scoped>
.agent-container {
  /* padding: 40px; */
  width: 85%;
  max-width: 1400px;
  margin: 0 auto;
  min-height: calc(100vh - 80px);
}

.header {
  margin-bottom: 40px;
}

.title-with-icon {
  display: flex;
  align-items: center;
  gap: 16px;
}

.title-with-icon h1 {
  font-size: 28px;
  color: #1a1a1a;
  margin: 0;
  font-weight: 600;
}

.main-features {
  margin-bottom: 40px;
}

.feature-card {
  position: relative;
  padding: 24px;
  border-radius: 16px;
  height: 280px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.light-blue {
  background: linear-gradient(to bottom right, #E8F4FF, #F0FAFF);
}

.light-purple {
  background: linear-gradient(to bottom right, #F0F0FF, #F5F5FF);
}

.light-violet {
  background: linear-gradient(to bottom right, #F5F0FF, #FAF5FF);
}

.feature-tag {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #FF9500;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.feature-card h2 {
  font-size: 24px;
  color: #1a1a1a;
  margin: 0 0 16px 0;
  font-weight: 600;
}

.feature-list {
  margin-bottom: 20px;
}

.feature-list p {
  margin: 8px 0;
  color: #666;
  font-size: 14px;
}

.feature-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.feature-image .el-icon {
  padding: 20px;
  border-radius: 16px;
  background: rgba(123, 103, 238, 0.1);
}

.action-button {
  width: 100%;
  height: 44px;
  border-radius: 8px;
  background: white;
  color: #1a1a1a;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.action-button:hover {
  background: #f5f5f5;
}

.sub-features {
  margin-top: 20px;
}

.sub-card {
  background: white;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 20px;
  height: 120px;
  cursor: pointer;
  transition: all 0.2s;
}

.sub-card:hover {
  border-color: #7B67EE;
  transform: translateY(-2px);
}

.sub-card h3 {
  font-size: 18px;
  color: #1a1a1a;
  margin: 0 0 12px 0;
  font-weight: 500;
}

.sub-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.sub-text p {
  margin: 4px 0;
  color: #666;
  font-size: 14px;
}

.recent-section {
  margin-top: 30px;
}

.recent-section h2 {
  font-size: 20px;
  color: #1a1a1a;
  margin: 0 0 20px 0;
  font-weight: 600;
}

.recent-card {
  background: white;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
}

.recent-card:hover {
  border-color: #7B67EE;
  transform: translateY(-2px);
}

.recent-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.recent-title {
  font-size: 14px;
  color: #1a1a1a;
}

.recent-time {
  font-size: 12px;
  color: #999;
}
</style> 