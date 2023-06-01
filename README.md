# README

- [README](#readme)
  - [開発者向け](#開発者向け)
    - [環境構築](#環境構築)
    - [実行](#実行)
    - [本番環境](#本番環境)
    - [フォルダ構成](#フォルダ構成)

## 開発者向け

### 環境構築

- Node.js

### 実行

```bash
$ npm install
```

```bash
$ npm run dev
```

### 本番環境

```bash
$ npm run deploy
```

### フォルダ構成

```bash
src
├── config: 設定ファイル
├── frameworks
│   ├── database: データベース関連
│   ├── external: 外部サービス関連
│   └── web-server
│       ├── middleware: Expressミドルウェア
│       └── router: ルーティング
├── modules
│   ├── core: アプリケーションのビジネスロジック
│   └── shared: 横断的なモジュール
└── utils: ユーティリティ関数
```
