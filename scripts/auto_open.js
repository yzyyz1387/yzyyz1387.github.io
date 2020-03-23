var spawn = require('child_process').exec;
hexo.on('new', function(data){
  spawn('start  "D:\makdownpad\MarkdownPad2.exe" ' + data.path);
});
