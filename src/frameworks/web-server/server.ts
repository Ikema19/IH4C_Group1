import express from "express";
import { v1Router } from "./router/v1";

const app = express();

// サーバー設定
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ルーティング
if (process.env.NODE_ENV === "development") {
  // 開発用リクエスト内容表示
  app.use((req, _, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    console.log(`Request Body: ${JSON.stringify(req.body)}`, "\n");
    next();
  });
}

app.use("/api/v1", v1Router);

// エラーハンドリング

module.exports = app;
