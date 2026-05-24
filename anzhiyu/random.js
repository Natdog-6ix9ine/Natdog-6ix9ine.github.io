var posts=["2026/05/24/创建算子/","2026/05/24/新环境写博客/","2026/05/24/测试自动部署/","2026/05/24/配置环境/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };