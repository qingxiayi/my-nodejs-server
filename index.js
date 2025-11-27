const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    if (req.url === '/') {
        // 首页
        res.end(`
            <!DOCTYPE html>
            <html lang="zh-CN">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>我的网站 - 月相世界</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    body {
                        font-family: 'Arial', sans-serif;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        min-height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 20px;
                    }
                    .container {
                        background: white;
                        padding: 50px 40px;
                        border-radius: 20px;
                        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                        text-align: center;
                        max-width: 600px;
                        width: 100%;
                        animation: fadeIn 0.5s ease-in;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 15px;
                        font-size: 36px;
                    }
                    .subtitle {
                        color: #666;
                        margin-bottom: 40px;
                        font-size: 16px;
                    }
                    .nav-links {
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                    }
                    .nav-btn {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 20px 30px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        text-decoration: none;
                        border-radius: 15px;
                        font-size: 20px;
                        transition: all 0.3s;
                        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
                    }
                    .nav-btn:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 25px rgba(102, 126, 234, 0.6);
                    }
                    .nav-btn .icon {
                        font-size: 28px;
                        margin-right: 15px;
                    }
                    .nav-btn.secondary {
                        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                        box-shadow: 0 5px 15px rgba(240, 147, 251, 0.4);
                    }
                    .nav-btn.secondary:hover {
                        box-shadow: 0 10px 25px rgba(240, 147, 251, 0.6);
                    }
                    .footer {
                        margin-top: 40px;
                        color: #999;
                        font-size: 14px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>🌙 月相世界 Moon World 🌙</h1>
                    <p class="subtitle">探索月相的神秘与美丽</p>
                    
                    <div class="nav-links">
                        <a href="/moon" class="nav-btn">
                            <span class="icon">🌙</span>
                            <span>月相周期展示</span>
                        </a>
                        
                        <a href="/astrology" class="nav-btn secondary">
                            <span class="icon">🔮</span>
                            <span>本命月相灵魂解读</span>
                        </a>
                    </div>
                    
                    <div class="footer">
                        <p>✨ 由 qingxiayi 创建</p>
                        <p>🚀 部署在 Vercel</p>
                    </div>
                </div>
            </body>
            </html>
        `);
        
    } else if (req.url === '/moon') {
        // 月相周期页面
        res.end(`
            <!DOCTYPE html>
            <html lang="zh-CN">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>月相周期</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    body {
                        font-family: Arial, sans-serif;
                        background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                        min-height: 100vh;
                        padding: 20px;
                    }
                    .container {
                        max-width: 1000px;
                        margin: 0 auto;
                        background: white;
                        padding: 40px;
                        border-radius: 20px;
                        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                    }
                    h1 {
                        text-align: center;
                        color: #1e3c72;
                        margin-bottom: 15px;
                        font-size: 36px;
                    }
                    .description {
                        text-align: center;
                        color: #666;
                        margin-bottom: 40px;
                        font-size: 16px;
                    }
                    .moon-container {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                        gap: 25px;
                        margin-bottom: 40px;
                    }
                    .moon-phase {
                        text-align: center;
                        padding: 25px 15px;
                        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                        border-radius: 15px;
                        transition: all 0.3s;
                        cursor: pointer;
                    }
                    .moon-phase:hover {
                        transform: translateY(-10px) scale(1.05);
                        box-shadow: 0 15px 30px rgba(0,0,0,0.2);
                    }
                    .moon {
                        font-size: 70px;
                        margin: 10px 0;
                        filter: drop-shadow(0 5px 10px rgba(0,0,0,0.1));
                    }
                    .phase-name {
                        font-weight: bold;
                        color: #1e3c72;
                        margin-top: 10px;
                        font-size: 18px;
                    }
                    .phase-name-en {
                        color: #666;
                        font-size: 12px;
                        margin-top: 5px;
                    }
                    .day {
                        color: #888;
                        margin-top: 8px;
                        font-size: 14px;
                    }
                    .back-link {
                        display: inline-block;
                        padding: 15px 40px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        text-decoration: none;
                        border-radius: 30px;
                        font-size: 16px;
                        transition: all 0.3s;
                        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
                    }
                    .back-link:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 10px 25px rgba(102, 126, 234, 0.6);
                    }
                    .link-container {
                        text-align: center;
                        margin-top: 40px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>🌙 月相周期 Moon Phases 🌙</h1>
                    <p class="description">月球绕地球公转一周约29.5天，呈现出8个主要月相</p>
                    
                    <div class="moon-container">
                        <div class="moon-phase">
                            <div class="moon">🌑</div>
                            <div class="phase-name">新月</div>
                            <div class="phase-name-en">New Moon</div>
                            <div class="day">第 1 天</div>
                        </div>
                        <div class="moon-phase">
                            <div class="moon">🌒</div>
                            <div class="phase-name">娥眉月</div>
                            <div class="phase-name-en">Waxing Crescent</div>
                            <div class="day">第 3-7 天</div>
                        </div>
                        <div class="moon-phase">
                            <div class="moon">🌓</div>
                            <div class="phase-name">上弦月</div>
                            <div class="phase-name-en">First Quarter</div>
                            <div class="day">第 7 天</div>
                        </div>
                        <div class="moon-phase">
                            <div class="moon">🌔</div>
                            <div class="phase-name">盈凸月</div>
                            <div class="phase-name-en">Waxing Gibbous</div>
                            <div class="day">第 10-13 天</div>
                        </div>
                        <div class="moon-phase">
                            <div class="moon">🌕</div>
                            <div class="phase-name">满月</div>
                            <div class="phase-name-en">Full Moon</div>
                            <div class="day">第 15 天</div>
                        </div>
                        <div class="moon-phase">
                            <div class="moon">🌖</div>
                            <div class="phase-name">亏凸月</div>
                            <div class="phase-name-en">Waning Gibbous</div>
                            <div class="day">第 17-20 天</div>
                        </div>
                        <div class="moon-phase">
                            <div class="moon">🌗</div>
                            <div class="phase-name">下弦月</div>
                            <div class="phase-name-en">Last Quarter</div>
                            <div class="day">第 22 天</div>
                        </div>
                        <div class="moon-phase">
                            <div class="moon">🌘</div>
                            <div class="phase-name">残月</div>
                            <div class="phase-name-en">Waning Crescent</div>
                            <div class="day">第 25-28 天</div>
                        </div>
                    </div>
                    
                    <div class="link-container">
                        <a href="/" class="back-link">← 返回首页</a>
                    </div>
                </div>
            </body>
            </html>
        `);
        
    } else if (req.url === '/astrology') {
        // 月相灵魂解读引导页
        res.end(`
            <!DOCTYPE html>
            <html lang="zh-CN">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>本命月相灵魂解读</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    body {
                        font-family: Arial, sans-serif;
                        background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                        min-height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 20px;
                    }
                    .container {
                        max-width: 700px;
                        background: white;
                        padding: 50px 40px;
                        border-radius: 20px;
                        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                        text-align: center;
                    }
                    h1 {
                        color: #1e3c72;
                        margin-bottom: 15px;
                        font-size: 36px;
                    }
                    .subtitle {
                        color: #666;
                        font-style: italic;
                        margin-bottom: 35px;
                        font-size: 18px;
                    }
                    .description {
                        color: #444;
                        line-height: 1.8;
                        margin-bottom: 35px;
                        text-align: left;
                    }
                    .feature {
                        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                        padding: 20px;
                        border-radius: 12px;
                        margin: 20px 0;
                        text-align: left;
                        transition: transform 0.3s;
                    }
                    .feature:hover {
                        transform: translateX(10px);
                    }
                    .feature-title {
                        font-weight: bold;
                        color: #1e3c72;
                        font-size: 18px;
                        margin-bottom: 8px;
                    }
                    .feature-desc {
                        color: #666;
                        font-size: 15px;
                    }
                    .btn-container {
                        margin: 40px 0 30px 0;
                    }
                    .btn {
                        display: inline-block;
                        padding: 18px 50px;
                        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                        color: white;
                        text-decoration: none;
                        border-radius: 35px;
                        font-size: 20px;
                        font-weight: bold;
                        transition: all 0.3s;
                        box-shadow: 0 10px 30px rgba(245, 87, 108, 0.4);
                    }
                    .btn:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 15px 40px rgba(245, 87, 108, 0.6);
                    }
                    .back-link {
                        display: inline-block;
                        margin-top: 20px;
                        color: #667eea;
                        text-decoration: none;
                        font-size: 16px;
                        transition: color 0.3s;
                    }
                    .back-link:hover {
                        color: #764ba2;
                    }
                    .note {
                        margin-top: 30px;
                        padding: 15px;
                        background: #fff3cd;
                        border-left: 4px solid #ffc107;
                        border-radius: 5px;
                        color: #856404;
                        font-size: 14px;
                        text-align: left;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>🌙 本命月相灵魂解读 🌙</h1>
                    <p class="subtitle">"Unveiling the Soul's Purpose through the Lunation Cycle"</p>
                    
                    <div class="description">
                        <div class="feature">
                            <div class="feature-title">✨ 自动日夜模式计算</div>
                            <div class="feature-desc">根据你的出生日期、时间和地点，精准计算你出生时的月相</div>
                        </div>
                        <div class="feature">
                            <div class="feature-title">🎯 个性化灵魂解读</div>
                            <div class="feature-desc">深度分析你的人生使命、天赋才能与灵魂发展方向</div>
                        </div>
                        <div class="feature">
                            <div class="feature-title">🌟 AI 智能分析</div>
                            <div class="feature-desc">基于占星学与心理学理论，由 Google AI 提供专业解读</div>
                        </div>
                    </div>

                    <div class="btn-container">
                        <a href="https://ai.studio/apps/drive/1xdAp5ucJBXrnwXsuKxE" target="_blank" class="btn">
                            🔮 开始我的灵魂解读
                        </a>
                    </div>
                    
                    <div class="note">
                        💡 提示：点击按钮后将在新窗口打开 AI 解读应用。请准备好你的出生日期、时间和地点信息。
                    </div>
                    
                    <a href="/" class="back-link">← 返回首页</a>
                </div>
            </body>
            </html>
        `);
        
    } else {
        // 404页面
        res.statusCode = 404;
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>404 - 页面未找到</title>
                <style>
                    body {
                        font-family: Arial;
                        text-align: center;
                        padding: 50px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        min-height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .container {
                        background: white;
                        padding: 50px;
                        border-radius: 20px;
                        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                    }
                    h1 { font-size: 80px; margin: 0; color: #667eea; }
                    p { font-size: 24px; color: #666; margin: 20px 0; }
                    a {
                        display: inline-block;
                        padding: 15px 40px;
                        background: #667eea;
                        color: white;
                        text-decoration: none;
                        border-radius: 25px;
                        font-size: 18px;
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>404</h1>
                    <p>🌙 页面未找到</p>
                    <p>这个月相还没有出现...</p>
                    <a href="/">返回首页</a>
                </div>
            </body>
            </html>
        `);
    }
});

server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});