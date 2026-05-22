# 佐藤健一 Portfolio

Next.js 14（App Router）+ TypeScript + Tailwind CSS + Framer Motion で構築したポートフォリオサイトです。

## セットアップ

```bash
npm install
npm install react-icons next-themes
npm run dev
```

> `react-icons` と `next-themes` は `package.json` に含まれています。新規クローン時は `npm install` のみで足ります。

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## ビルド

```bash
npm run build
npm start
```

## 主な機能

- ダーク / ライトモード（localStorage にユーザー選択を保存、初回は OS 設定に準拠）
- スクロールアニメーション（Framer Motion `useInView`）
- レスポンシブ対応（モバイル / タブレット / デスクトップ）

## プロジェクト構成

```
app/              # App Router（layout, page, globals.css）
components/       # UI コンポーネント
  sections/       # 各セクション（Hero, About, ...）
lib/              # データ・テーマユーティリティ
public/           # 静的アセット
```
