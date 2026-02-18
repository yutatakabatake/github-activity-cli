# GitHub Activity CLI
GitHubユーザーの最近のアクティビティをターミナルから素早く確認するためのCLIツールです。  
このプロジェクトはバックエンド学習の一環として作成されました。

## 特徴

- **リアルタイム取得**: GitHub APIを使用して、指定したユーザーの最新パブリックイベントを取得。
- **詳細表示**: イベントの種類、リポジトリ名、日付、時刻を整理して表示。
- **レート制限対応**: GitHub APIの制限（60回/時）に達した際、解除までの時間を通知するエラーハンドリングを実装。
- **軽量動作**: 外部ライブラリに依存せず、Node.js標準機能を中心に構築。

## 推奨環境

- [Node.js](https://nodejs.org/) (v18.0.0以上)

## インストール

1. リポジトリをクローンします：
```bash
$ git clone https://github.com/yutatakabatake/github-activity-cli.git
$ cd github-activity-cli
```

2. ユーザー名を引数で指定します
```bash
$ node app.js <username>
```