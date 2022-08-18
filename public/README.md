# lucklyrsLive 
Every bit of life


博客由hexo NexT搭建 地址   &nbsp; https://lucklyrs.cn/


### 注意事项

该博客初略搭建的小插件

### music plugins

  https://github.com/MoePlayer/APlayer


 （1）解压后将dist文件夹复制到themes\next\source\js\src文件夹下
```javascript
const ap = new APlayer({
// 大概格式结构参考文档
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '风筝误',  
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});
```
（2）打开themes\next\layout\_layout.swig文件，将文件以下文件添加

```html
<link rel="stylesheet" href="/js/src/APlayer.min.css">
<div id="aplayer"></div>
<script type="text/javascript" src="/js/src/APlayer.min.js"></script>
<script type="text/javascript" src="/js/src/music.js"></script>
```

（3） hexo g   hexo s 重新生成 访问页面，就能看到左下角的音乐播放器

## Author

更新中 欢迎探讨 O(∩_∩)O谢谢
