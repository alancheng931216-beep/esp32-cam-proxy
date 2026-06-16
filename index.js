// 在你的 index.js 中加入這個路徑
app.get('/view-image', (req, res) => {
  res.send(`
    <html>
      <body style="margin:0; text-align:center;">
        <img src="${latestImage}" style="width:100%;">
      </body>
    </html>
  `);
});