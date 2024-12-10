var posts=["2024/12/10/hello-world/","2024/12/10/创建/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };