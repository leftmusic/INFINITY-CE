export default {
  async fetch(request, env) {
    // 使用ASSETS handler来处理静态文件
    return env.ASSETS.fetch(request);
  }
};