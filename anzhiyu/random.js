var posts=["2024/12/09/hello-world/","2024/12/09/创建/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };