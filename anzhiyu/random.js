var posts=["2024/12/19/文章/新环境写博客/","2024/12/19/文章/配置环境/","2024/12/19/文章/创建算子/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };