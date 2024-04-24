module.exports = {
  types: [
    { value: 'feat', name: '✨ feat:     新功能' },
    { value: 'fix', name: '🐛 fix:      修复' },
    { value: 'init', name: '🎉 Init:     初始化' },
    { value: 'docs', name: '📝 docs:     文档变更' },
    { value: 'style', name: '💄 style:    代码格式(不影响代码运行的变动)' },
    {
      value: 'refactor',
      name: '♻️  refactor: 重构(既不是增加feature，也不是修复bug)',
    },
    { value: 'perf', name: '⚡️ perf:     性能优化' },
    { value: 'test', name: '✅ test:     增加测试' },
    { value: 'revert', name: '⏪️ Revert:   回退' },
    { value: 'build', name: '🚀‍ build:    构建过程或辅助工具的变动' },
    { value: 'ci', name: '👷 ci:       CI 配置' },
  ],
  // 消息步骤
  messages: {
    type: '请选择提交类型:',
    subject: '请简要描述提交(必填):',
    customScope: '请输入修改范围(可选):',
    body: '请输入详细描述(可选):',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交吗?',
  },
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['customScope'],
  subjectLimit: 72,
}