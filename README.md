# React-useReducer-ThemeApp

React の `useReducer` と `useContext` を使って、テーマ（Light / Dark）を切り替える練習用アプリです。

## 📌 概要

テーマの状態を `useReducer` で管理し、`useContext` を使って複数のコンポーネントから共有します。

Theme の状態管理を **Context + Reducer** に分離し、機能単位で整理した構成を実践しています。

## 🛠️ 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS
* useReducer
* useContext

## 📂 ディレクトリ構成

```text
src/
├── features/
│   └── theme/
│       ├── components/
│       │   ├── ThemeDisplay.tsx
│       │   └── ThemeToggle.tsx
│       ├── contexts/
│       │   └── ThemeContext.tsx
│       ├── reducers/
│       │   └── ThemeReducer.tsx
│       └── types/
│           └── Theme.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## 🔧 実装内容

### Theme Types

テーマの状態と Action の型を定義しています。

```ts
type Theme = "light" | "dark";

interface State {
  theme: Theme;
}

interface Action {
  type: "toggle";
}
```

### Theme Reducer

`useReducer` の状態更新処理を担当します。

```ts
const themeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "toggle":
      return {
        theme: state.theme === "light" ? "dark" : "light",
      };

    default:
      return state;
  }
};
```

### Theme Context

`useReducer` で管理している Theme の状態と `dispatch` を Context 経由で共有しています。

### Theme Toggle

ボタンをクリックすることで `dispatch` を実行し、Light / Dark を切り替えます。

### Theme Display

現在の Theme の状態を画面に表示します。

## 🎯 学習ポイント

* `useReducer` による状態管理
* `useContext` による状態共有
* Context と Reducer の責務分離
* TypeScript による状態・Action の型定義
* Feature-based なディレクトリ構成
* React コンポーネントの責務分離
* Tailwind CSS による UI 実装

## 🚀 起動方法

```bash
npm install
npm run dev
```

ブラウザで表示されたURLにアクセスしてください。

## 📝 GitHub Workflow

このプロジェクトでは、以下の Git / GitHub Workflow を使用しています。

```text
Issue
  ↓
Branch
  ↓
Commit
  ↓
Push
  ↓
Pull Request
  ↓
Merge
```

Theme 機能では、関連する複数の Issue を `feature/create-theme-app` ブランチにまとめて実装しています。
