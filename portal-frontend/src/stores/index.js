import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    chatHistory: [],
    currentAgent: null,
    dashboardData: null
  }),
  
  actions: {
    async sendMessage(message) {
      // 模拟API调用
      const response = { text: `AI回复: ${message}`, timestamp: Date.now() }
      this.chatHistory.push(response)
    },
    
    async loadDashboardData() {
      // 模拟加载数据
      this.dashboardData = {
        usage: {},
        efficiency: {},
        cost: {}
      }
    }
  }
}) 