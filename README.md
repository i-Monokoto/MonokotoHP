# 学会ウェブサイト

Astro で構成した静的サイトです。トップ、大会・研究会、入会案内・会則、役員・お問い合わせの4ページがあります。

## ローカルで確認

Node.js 22.23.4 以上の対応バージョンを用意し、本ディレクトリで実行します。

```sh
npm ci
npm run dev
```

ターミナルに表示された URL を開きます。`npm run build` で生成した `dist/` は、`npm run preview` で確認できます。

現在の Node.js が古い場合は、次のコマンドで `.node-version` に記載した Node.js をこの実行にだけ使えます。初回は npm が指定バージョンを取得します。

```sh
npm exec --yes --package="node@$(cat .node-version)" -- sh -c 'npm ci && npm run dev'
```

## 掲載情報を編集

`src/site.ts` に正式な学会名・概要、お知らせ、開催案内、役員情報を入力してください。お知らせの日付は `YYYY-MM-DD` 形式です。入会申込とお問い合わせには、回答者向け Google フォームの URL を設定します。

PDF は `public/` 内に配置し、設定には `public/` からの相対パスを記入します。例えば `public/documents/program.pdf` は `programPdf: 'documents/program.pdf'` と設定します。会則 PDF には `bylawsPdf` を使います。

## 公開時のビルド設定

プロジェクトサイト（`https://<owner>.github.io/<repo>/`）では `SITE_URL` に `https://<owner>.github.io`、`SITE_BASE` に `/<repo>` を指定してビルドします。

Cloudflare で管理する独自ドメインのルートを GitHub Pages に接続する場合は、`SITE_URL` をその公開 URL に設定し、`SITE_BASE` は未指定または `/` とします。GitHub Pages と Cloudflare の設定は公開工程で行います。 [Astro の GitHub Pages 公開ガイド](https://docs.astro.build/en/guides/deploy/github/)
