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
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_mMiIA1QAuVyy7ALCph6YTA77uRQQhtBjMWam1Z-suznDz3U',
    },
    {
      name: 'Always With Me',
      artist: '千与千寻',
      url: 'http://www.ytmp3.cn/down/52367.mp3',
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_mMiIA1QAuVyy7ALCph6YTA77uRQQhtBjMWam1Z-suznDz3U',
    },
    {
      name: '风筝误',
      artist: '刘珂矣',
      url: 'http://up.mcyt.net/?down/46644.mp3',
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_mMiIA1QAuVyy7ALCph6YTA77uRQQhtBjMWam1Z-suznDz3U',
    }
  ]
});