var posts=["2024/12/10/文章/1/","2024/12/10/文章/新环境写博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };