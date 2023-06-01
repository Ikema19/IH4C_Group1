const express = require("express");

const app = express();

// サーバー設定
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ルーティング
if (process.env.NODE_ENV === "development") {
  // 開発用リクエスト内容表示
  app.use((req, _, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    console.log(`Request Body: ${JSON.stringify(req.body)}`);
    next();
  });
}

app.route("/").get((_, res) => {
  res.status(200).send({
    message: "Hello World!",
  });
});

// エラーハンドリング

module.exports = app;
