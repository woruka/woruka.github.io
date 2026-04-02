export type LearningStep = {
	id: string;
	title: string;
	path: string;
	summary: string;
	visibleChange: string;
};

export type LearningCommand = {
	command: string;
	description: string;
};

export type LearningExercise = {
	title: string;
	goal: string;
	hint: string;
};

export const learningIntro = {
	title: 'woruka.github.io Learning Guide',
	description:
		'このサイト自体を教材として使えるように、どのファイルを触ると何が変わるかを整理しています。Astro の基本構成を追いながら、1 ページずつ安全に編集できます。',
};

export const learningSteps: LearningStep[] = [
	{
		id: '01',
		title: 'トップページの見出しを変える',
		path: 'src/pages/index.astro',
		summary: 'Hero セクションの文言と、トップの構成を読むところから始めます。',
		visibleChange: 'Home のファーストビューと各セクションの文言が変わります。',
	},
	{
		id: '02',
		title: '技術データを編集する',
		path: 'src/data/techStacks.ts',
		summary: '紹介したい技術の名前、説明、学習ステップをデータとして管理します。',
		visibleChange: '/intro/ 一覧と各技術の詳細ページが変わります。',
	},
	{
		id: '03',
		title: 'メモを追加する',
		path: 'src/data/memos.ts',
		summary: '短い更新情報や学習ログをカードとして追加します。',
		visibleChange: 'Home の Notes セクションに新しいカードが表示されます。',
	},
	{
		id: '04',
		title: '共通スタイルを調整する',
		path: 'src/styles/global.css',
		summary: '配色、余白、タイポグラフィの基調をここでまとめて調整します。',
		visibleChange: '全ページの見た目が一括で変わります。',
	},
	{
		id: '05',
		title: '固定ページを追加する',
		path: 'src/pages/about.astro',
		summary: '単独ページを増やし、Astro のページルーティングを理解します。',
		visibleChange: '/about/ の内容が変わります。新規ページ追加の参考にもなります。',
	},
	{
		id: '06',
		title: '学習導線を拡張する',
		path: 'src/pages/learn.astro',
		summary: 'このガイドページ自体を編集して、自分用の教材に育てられます。',
		visibleChange: '/learn/ の手順と課題が変わります。',
	},
];

export const learningCommands: LearningCommand[] = [
	{
		command: 'npm install',
		description: '初回セットアップ。依存関係をインストールします。',
	},
	{
		command: 'npm run dev',
		description: '開発サーバーを起動します。通常は http://localhost:4321 で確認できます。',
	},
	{
		command: 'npm run build',
		description: '本番ビルドを作成し、型やルーティングの破綻がないか確認します。',
	},
	{
		command: 'npm run preview',
		description: 'ビルド済みの内容をローカルで確認します。',
	},
];

export const learningExercises: LearningExercise[] = [
	{
		title: 'Exercise 1: Hero を自分用に書き換える',
		goal: 'トップページの肩書きと説明文を、自分の発信内容に合わせて変える。',
		hint: '`src/pages/index.astro` の hero セクションだけを最初に編集すると差分が追いやすいです。',
	},
	{
		title: 'Exercise 2: 技術カードを 1 件公開する',
		goal: '`visible: false` の技術を 1 件 `true` にして、一覧に出す。',
		hint: '`src/data/techStacks.ts` の `visible` が `/intro/` の公開制御に使われています。',
	},
	{
		title: 'Exercise 3: Notes を 1 件追加する',
		goal: '更新ログを 1 件追加し、Home にカードを表示する。',
		hint: '`src/data/memos.ts` の配列に 1 オブジェクト追加するだけで反映されます。',
	},
];
