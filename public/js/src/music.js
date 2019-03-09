const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  theme: '#649ab6;',
  autoplay: false,
  audio: [
    {
      name: '半盏清寒',
      artist: '一盏灯',
      url: 'http://www.ytmp3.cn/down/58724.mp3',
      cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
    },
    {
      name: 'Always With Me',
      artist: '千与千寻',
      url: 'http://www.ytmp3.cn/down/52367.mp3',
      cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
    },
    {
      name: '风筝误',
      artist: '刘珂矣',
      url: 'http://up.mcyt.net/?down/46644.mp3',
      cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
    }
  ]
});