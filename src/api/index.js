/**
 * 模块化方式处理 默认处理 modules文件夹下的所有js文件 内容以export default导出的文件
 * @param { 模块内容集合 } moduleContext
 * @returns modules集合
 */
const modulesHandle = (moduleContext = {}) => {
  if (!Object.keys(moduleContext).length) return
  const modules = {}
  Object.keys(moduleContext).forEach((v) => {
    for (const key in moduleContext[v].default) {
      modules[key] = moduleContext[v].default[key]
    }
  })
  return modules
}

const apis = modulesHandle(import.meta.glob('./modules/**/*.js', { eager: true }))
export const useRequest = () => apis
