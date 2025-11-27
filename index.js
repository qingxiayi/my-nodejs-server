const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>🎉 我的第一个 Node.js 服务器</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
          text-align: center;
          padding: 50px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        h1 { 
          font-size: 60px; 
          margin-bottom: 30px;
          animation: bounce 2s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .info {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          padding: 30px;
          border-radius: 20px;
          margin: 20px auto;
          max-width: 600px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        .info p {
          font-size: 20px;
          margin: 15px 0;
          line-height: 1.6;
        }
        .badge {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          padding: 8px 16px;
          border-radius: 20px;
          margin: 5px;
          font-size: 16px;
        }
        .footer {
          margin-top: 40px;
          opacity: 0.8;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <h1>🎉 成功部署！</h1>
      <div class="info">
        <p><strong>这是我的第一个 Node.js Web 服务器！</strong></p >
        <p>🕐 当前时间：${new Date().toLocaleString('zh-CN', {timeZone: 'Asia/Shanghai'})}</p >
        <p>
          <span class="badge">📦 Node.js ${process.version}</span>
          <span class="badge">💻 ${process.platform}</span>
        </p >
        <p>🌍 现在全世界都能访问这个网站了！</p >
      </div>
      <div class="footer">
        <p>💡 由 Vercel 提供支持 | 使用 Node.js 构建</p >
        <p>👨‍💻 作者：qingxiayi</p >
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log('========================================');
  console.log('   🚀 服务器启动成功！');
  console.log('========================================');
  console.log('');
  console.log('📍 端口：' + PORT);
  console.log('🌐 环境：' + (process.env.NODE_ENV || 'development'));
  console.log('');
});
