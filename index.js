const express = require('express');
const app = express();
app.use(express.json({limit: '50mb'})); // 允許接收大圖片

let latestImage = "";

// 處理 ESP32-CAM 上傳
app.post('/upload', (req, res) => {
    latestImage = req.body.image;
    res.sendStatus(200);
});

// 處理 App 的網頁顯示請求
app.get('/view-image', (req, res) => {
  res.send(`
    <html>
      <body style="margin:0; text-align:center;">
        <img src="${latestImage}" style="width:100%;">
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000);