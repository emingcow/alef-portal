<template>
  <div class="analysis-container">
    <div class="dashboard-header">
      <div class="title-section">
        <h1>AI 赋能效果分析大屏</h1>
        <div class="subtitle">基于1000+企业实践数据 · 实时更新</div>
      </div>
      <div class="time-info">
        <div class="data-source">数据来源：企业内部数据 + 第三方机构调研</div>
        <div class="data-update">最近更新：{{ currentTime }}</div>
      </div>
    </div>

    <div class="dashboard-content">
      <!-- 效率提升维度 -->
      <div class="dimension-card efficiency">
        <div class="card-header">
          <h3>效率提升维度</h3>
          <div class="overall-metric">整体效率提升 <span class="highlight">456%</span></div>
        </div>
        
        <div class="metrics-grid">
          <div class="metric-group">
            <h4>时间节省</h4>
            <div class="metric-item">
              <div class="metric-header">
                <span>任务完成时间对比</span>
                <span class="improvement">提升12.5倍</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 8%">
                  <span>人工: 4小时</span>
                </div>
                <div class="after" style="width: 96%">
                  <span>AI: 20分钟</span>
                </div>
              </div>
            </div>
            <div class="metric-item">
              <div class="metric-header">
                <span>工作流程优化</span>
                <span class="improvement">优化率85%</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 15%">
                  <span>原流程: 12步</span>
                </div>
                <div class="after" style="width: 85%">
                  <span>现流程: 3步</span>
                </div>
              </div>
            </div>
          </div>

          <div class="metric-group">
            <h4>生产力倍增</h4>
            <div class="metric-item">
              <div class="metric-header">
                <span>单位时间产出</span>
                <span class="improvement">提升8倍</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 12%">
                  <span>10���位/小时</span>
                </div>
                <div class="after" style="width: 96%">
                  <span>80单位/小时</span>
                </div>
              </div>
            </div>
            <div class="metric-item">
              <div class="metric-header">
                <span>并行处理能力</span>
                <span class="improvement">提升50倍</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 2%">
                  <span>2任务</span>
                </div>
                <div class="after" style="width: 100%">
                  <span>100+任务</span>
                </div>
              </div>
            </div>
          </div>

          <div class="highlight-metrics">
            <div class="highlight-item">
              <span class="label">自动化任务比例</span>
              <span class="value">78%</span>
              <span class="trend">↑32%</span>
            </div>
            <div class="highlight-item">
              <span class="label">24/7工作覆盖</span>
              <span class="value">99.9%</span>
              <span class="trend">↑45%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 成本优化维�� -->
      <div class="dimension-card cost">
        <div class="card-header">
          <h3>成本优化维度</h3>
          <div class="overall-metric">年度总节省 <span class="highlight">¥1280万</span></div>
        </div>

        <div class="metrics-grid">
          <div class="metric-group">
            <h4>人力成本优化</h4>
            <div class="metric-item">
              <div class="metric-header">
                <span>人工工时节省</span>
                <span class="improvement">-65%</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 35%">
                  <span>原工时: 100人天/月</span>
                </div>
                <div class="after" style="width: 100%">
                  <span>现工时: 35人天/月</span>
                </div>
              </div>
            </div>
            <div class="metric-item">
              <div class="metric-header">
                <span>重复性工作替代</span>
                <span class="improvement">替代率92%</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 8%">
                  <span>人工处理: 8%</span>
                </div>
                <div class="after" style="width: 92%">
                  <span>AI处理: 92%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="metric-group">
            <h4>运营成本优化</h4>
            <div class="metric-item">
              <div class="metric-header">
                <span>错误处理成本</span>
                <span class="improvement">-85%</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 15%">
                  <span>原成本: 100万/年</span>
                </div>
                <div class="after" style="width: 100%">
                  <span>现成本: 15万/年</span>
                </div>
              </div>
            </div>
            <div class="metric-item">
              <div class="metric-header">
                <span>资源利用率</span>
                <span class="improvement">提升45%</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 55%">
                  <span>原利用率: 55%</span>
                </div>
                <div class="after" style="width: 100%">
                  <span>现利用率: 95%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="highlight-metrics">
            <div class="highlight-item">
              <span class="label">人员效能提升</span>
              <span class="value">325%</span>
              <span class="trend">↑125%</span>
            </div>
            <div class="highlight-item">
              <span class="label">管理成本优化</span>
              <span class="value">-42%</span>
              <span class="trend">↓180万</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 质量提升维度 -->
      <div class="dimension-card quality">
        <div class="card-header">
          <h3>质量提升维度</h3>
          <div class="overall-metric">质量达标率 <span class="highlight">99.8%</span></div>
        </div>

        <div class="metrics-grid">
          <div class="metric-group">
            <h4>准确性提升</h4>
            <div class="metric-item">
              <div class="metric-header">
                <span>错误率对比</span>
                <span class="improvement">降低96%</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 96%">
                  <span>人工: 4.8%</span>
                </div>
                <div class="after" style="width: 4%">
                  <span>AI: 0.2%</span>
                </div>
              </div>
            </div>
            <div class="metric-item">
              <div class="metric-header">
                <span>标准化程度</span>
                <span class="improvement">提升75%</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 25%">
                  <span>原标准化: 25%</span>
                </div>
                <div class="after" style="width: 100%">
                  <span>现标准化: 98%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="metric-group">
            <h4>专业性提升</h4>
            <div class="metric-item">
              <div class="metric-header">
                <span>决策支持准确度</span>
                <span class="improvement">92%</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 65%">
                  <span>人工决策: 65%</span>
                </div>
                <div class="after" style="width: 92%">
                  <span>AI辅助: 92%</span>
                </div>
              </div>
            </div>
            <div class="metric-item">
              <div class="metric-header">
                <span>专业知识覆盖</span>
                <span class="improvement">提升280%</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 25%">
                  <span>原覆盖: 1000+知识点</span>
                </div>
                <div class="after" style="width: 100%">
                  <span>现覆盖: 38000+知识点</span>
                </div>
              </div>
            </div>
          </div>

          <div class="highlight-metrics">
            <div class="highlight-item">
              <span class="label">一致性水平</span>
              <span class="value">96.5%</span>
              <span class="trend">↑38%</span>
            </div>
            <div class="highlight-item">
              <span class="label">解决方案质量</span>
              <span class="value">95.2%</span>
              <span class="trend">↑42%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 创新赋能维度 -->
      <div class="dimension-card innovation">
        <div class="card-header">
          <h3>创新赋能维度</h3>
          <div class="overall-metric">创新指数 <span class="highlight">92.5</span></div>
        </div>

        <div class="metrics-grid">
          <div class="metric-group">
            <h4>业务创新</h4>
            <div class="metric-item">
              <div class="metric-header">
                <span>新业务模式发现</span>
                <span class="improvement">+15个</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 20%">
                  <span>传统方式: 3个/年</span>
                </div>
                <div class="after" style="width: 100%">
                  <span>AI赋能: 18个/年</span>
                </div>
              </div>
            </div>
            <div class="metric-item">
              <div class="metric-header">
                <span>创新项目孵化</span>
                <span class="improvement">+285%</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 25%">
                  <span>原孵化: 8个/年</span>
                </div>
                <div class="after" style="width: 100%">
                  <span>现孵化: 32个/年</span>
                </div>
              </div>
            </div>
          </div>

          <div class="metric-group">
            <h4>能力提升</h4>
            <div class="metric-item">
              <div class="metric-header">
                <span>员工技能增强</span>
                <span class="improvement">+168%</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 35%">
                  <span>原掌握: 3个领域/人</span>
                </div>
                <div class="after" style="width: 100%">
                  <span>现掌握: 8个领域/人</span>
                </div>
              </div>
            </div>
            <div class="metric-item">
              <div class="metric-header">
                <span>团队协作效率</span>
                <span class="improvement">+225%</span>
              </div>
              <div class="comparison-bar">
                <div class="before" style="width: 30%">
                  <span>原效率: 4h/任务</span>
                </div>
                <div class="after" style="width: 100%">
                  <span>现效率: 1.2h/任务</span>
                </div>
              </div>
            </div>
          </div>

          <div class="highlight-metrics">
            <div class="highlight-item">
              <span class="label">市场机会识别</span>
              <span class="value">+312%</span>
              <span class="trend">↑85个</span>
            </div>
            <div class="highlight-item">
              <span class="label">知识沉淀量</span>
              <span class="value">+585%</span>
              <span class="trend">↑12万条</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.analysis-container {
  min-height: 100vh;
  background: #0A0F1E;
  color: #fff;
  padding: 32px;
  overflow-x: hidden;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 24px 32px;
  background: rgba(123, 103, 238, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.title-section h1 {
  font-size: 36px;
  margin: 0;
  background: linear-gradient(to right, #36BFFA, #7B67EE);
  color: transparent;
}

.subtitle {
  color: #666;
  margin-top: 12px;
  font-size: 16px;
}

.time-info {
  text-align: right;
}

.data-source {
  color: #666;
  margin-bottom: 8px;
  font-size: 14px;
}

.data-update {
  color: #36BFFA;
  font-size: 16px;
  font-family: monospace;
}

.dashboard-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1920px;
  margin: 0 auto;
}

.dimension-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  padding: 32px;
  position: relative;
  height: calc(50vh - 100px);
  min-height: 520px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.dimension-card:hover {
  transform: translateY(-5px);
}

.dimension-card.efficiency {
  background: linear-gradient(135deg, rgba(54, 191, 250, 0.1), rgba(255, 255, 255, 0.02));
}

.dimension-card.cost {
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(255, 255, 255, 0.02));
}

.dimension-card.quality {
  background: linear-gradient(135deg, rgba(251, 146, 60, 0.1), rgba(255, 255, 255, 0.02));
}

.dimension-card.innovation {
  background: linear-gradient(135deg, rgba(123, 103, 238, 0.1), rgba(255, 255, 255, 0.02));
}

.dimension-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 24px;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  background-size: 200% 100%;
  z-index: -1;
  animation: shine 3s infinite;
  opacity: 0.5;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.card-header h3 {
  font-size: 28px;
  margin: 0;
  font-weight: 600;
}

.overall-metric {
  font-size: 20px;
  background: rgba(255, 255, 255, 0.05);
  padding: 8px 16px;
  border-radius: 12px;
}

.overall-metric .highlight {
  color: #36BFFA;
  font-weight: bold;
  margin-left: 8px;
}

.metrics-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  overflow-y: auto;
}

.metrics-grid::-webkit-scrollbar {
  width: 6px;
}

.metrics-grid::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.metrics-grid::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.metric-group {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 24px;
}

.metric-group h4 {
  margin: 0 0 20px 0;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}

.metric-item {
  margin-bottom: 20px;
}

.metric-item:last-child {
  margin-bottom: 0;
}

.metric-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.metric-header span {
  font-size: 15px;
}

.improvement {
  color: #4ADE80;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 12px;
  background: rgba(74, 222, 128, 0.1);
  border-radius: 20px;
}

.comparison-bar {
  height: 36px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 18px;
  position: relative;
  overflow: hidden;
}

.comparison-bar .before,
.comparison-bar .after {
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.comparison-bar .before {
  background: rgba(255, 255, 255, 0.1);
  z-index: 1;
}

.comparison-bar .after {
  background: linear-gradient(90deg, #36BFFA, #7B67EE);
  z-index: 2;
}

.highlight-metrics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: auto;
  padding-top: 24px;
}

.highlight-item {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
}

.highlight-item:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.05);
}

.highlight-item .label {
  display: block;
  color: #666;
  font-size: 14px;
  margin-bottom: 12px;
}

.highlight-item .value {
  display: block;
  font-size: 28px;
  font-weight: bold;
  color: #36BFFA;
  margin-bottom: 8px;
}

.highlight-item .trend {
  font-size: 14px;
  color: #4ADE80;
  padding: 4px 12px;
  background: rgba(74, 222, 128, 0.1);
  border-radius: 12px;
  display: inline-block;
}

@keyframes shine {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* 响应式布局 */
@media (max-width: 1600px) {
  .dashboard-content {
    gap: 24px;
  }
  
  .dimension-card {
    padding: 24px;
    min-height: 480px;
  }
}

@media (max-width: 1200px) {
  .dashboard-content {
    grid-template-columns: 1fr;
  }
  
  .dimension-card {
    height: auto;
    min-height: auto;
  }
}

@media (max-width: 768px) {
  .analysis-container {
    padding: 16px;
  }
  
  .dashboard-header {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
  
  .time-info {
    text-align: center;
  }
  
  .highlight-metrics {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')
let timeInterval

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

onMounted(() => {
  updateTime()
  timeInterval = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
  }
})
</script> 