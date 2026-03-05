export const TECH_STATUS_ORDER = ['experienced', 'learning'] as const;

export type TechStatus = (typeof TECH_STATUS_ORDER)[number];

export type TechStack = {
	slug: string;
	name: string;
	status: TechStatus;
	category: string;
	visible: boolean;
	summary: string;
	beginnerPoints: string[];
	firstSteps: string[];
	roadmap?: { phase: string; goal: string }[];
	resources?: { label: string; url: string }[];
};

export const TECH_STATUS_META: Record<TechStatus, { label: string; description: string }> = {
	experienced: {
		label: '実務経験あり',
		description: '業務で使用したことがある技術領域',
	},
	learning: {
		label: '学習中',
		description: '入門から体系的に学んでいる技術領域',
	},
};

export const techStacks: TechStack[] = [
	{
		slug: 'swift',
		name: 'Swift',
		status: 'experienced',
		category: 'Mobile',
		visible: true,
		summary: 'iOSアプリ開発の基礎言語。Optional・値型・非同期処理の理解から始めるのが最短です。',
		beginnerPoints: ['変数と型、Optional', '構造体とクラス、Protocol', '非同期処理（async/await）とエラーハンドリング'],
		firstSteps: [
			'Playgroundで文法を確認し、Optionalとguard letを反復する',
			'Todoリストを作り、モデル（struct）と画面ロジックを分離する',
			'公開APIを1本叩いて、一覧表示 + エラー表示を実装する',
		],
		roadmap: [
			{
				phase: 'Phase 1: 文法と型',
				goal: '値型・参照型、Optional、列挙型を説明できる状態にする',
			},
			{
				phase: 'Phase 2: UIと状態管理',
				goal: 'SwiftUIで2〜3画面の遷移とフォーム入力を実装する',
			},
			{
				phase: 'Phase 3: 通信とデータ',
				goal: 'async/awaitでAPI通信し、成功/失敗のUI分岐を実装する',
			},
			{
				phase: 'Phase 4: 小さく運用',
				goal: 'README付きの小規模サンプルを1本公開して振り返る',
			},
		],
		resources: [
			{ label: 'The Swift Programming Language', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/' },
			{ label: 'Apple Developer: Swift', url: 'https://developer.apple.com/swift/' },
			{ label: 'SwiftUI Tutorials', url: 'https://developer.apple.com/tutorials/swiftui' },
		],
	},
	{
		slug: 'swiftui',
		name: 'SwiftUI',
		status: 'experienced',
		category: 'Mobile',
		visible: false,
		summary: '宣言的UIでiOS画面を構築するフレームワーク。状態管理の理解が鍵です。',
		beginnerPoints: ['Viewとレイアウト', '@State / @Binding', '画面遷移とデータ受け渡し'],
		firstSteps: ['1画面のプロフィールUIを作る', 'フォーム入力とバリデーションを作る', '一覧画面を実装する'],
	},
	{
		slug: 'flutter',
		name: 'Flutter',
		status: 'experienced',
		category: 'Mobile',
		visible: false,
		summary: 'DartでiOS/Androidを共通開発できるクロスプラットフォーム技術です。',
		beginnerPoints: ['Widgetツリーの理解', 'Stateful/Statelessの使い分け', 'ルーティングと画面分割'],
		firstSteps: ['カウンター以外の2画面アプリを作る', 'フォームと一覧のCRUDを実装する', '簡単な状態管理を導入する'],
	},
	{
		slug: 'power-apps',
		name: 'Power Apps',
		status: 'experienced',
		category: 'Power Platform',
		visible: false,
		summary: 'ローコードで業務アプリを短期間に作るためのプラットフォームです。',
		beginnerPoints: ['Canvas Appの基本', 'フォームとギャラリー', 'コネクタ連携'],
		firstSteps: ['申請フォームを作る', '一覧・詳細画面を分ける', '通知フローと連携する'],
	},
	{
		slug: 'power-automate',
		name: 'Power Automate',
		status: 'experienced',
		category: 'Power Platform',
		visible: false,
		summary: '定型業務を自動化するワークフローサービス。トリガー設計が重要です。',
		beginnerPoints: ['トリガーとアクション', '条件分岐と例外処理', '承認フロー'],
		firstSteps: ['通知自動化フローを作る', '承認付きフローを作る', '失敗時の再実行を設計する'],
	},
	{
		slug: 'power-query-dataflows',
		name: 'Power Query (Dataflows)',
		status: 'experienced',
		category: 'Data',
		visible: false,
		summary: 'データ整形と再利用を行うETL基盤。手順の再現性を作りやすいです。',
		beginnerPoints: ['データ取得と変換', '型と品質チェック', 'Dataflowsの運用'],
		firstSteps: ['CSV取込と整形処理を作る', 'エラー行の扱いを定義する', '更新スケジュールを設定する'],
	},
	{
		slug: 'dataverse',
		name: 'DataVerse',
		status: 'experienced',
		category: 'Data',
		visible: false,
		summary: 'Power Platform向けのデータ基盤。テーブル設計と権限設計が中心です。',
		beginnerPoints: ['テーブル・列設計', 'リレーション定義', 'ロールとアクセス制御'],
		firstSteps: ['小規模ERを設計する', 'フォームから登録できるようにする', '参照権限を分離する'],
	},
	{
		slug: 'kotlin',
		name: 'Kotlin',
		status: 'learning',
		category: 'Mobile',
		visible: false,
		summary: 'Android開発の主言語。Null安全と拡張関数の活用が学習ポイントです。',
		beginnerPoints: ['Null安全と基本文法', 'クラスとデータクラス', 'Coroutines基礎'],
		firstSteps: ['文法課題を1周する', '簡単な一覧アプリを作る', 'API取得をCoroutinesで実装する'],
	},
	{
		slug: 'react',
		name: 'React',
		status: 'learning',
		category: 'Frontend',
		visible: false,
		summary: 'コンポーネント指向でUIを組み立てるライブラリ。状態管理が中心テーマです。',
		beginnerPoints: ['JSXとコンポーネント', 'useState/useEffect', 'propsと状態の分離'],
		firstSteps: ['フォーム付き小アプリを作る', 'API結果の一覧表示を作る', 'コンポーネント分割を行う'],
	},
	{
		slug: 'python',
		name: 'Python',
		status: 'learning',
		category: 'Backend / Automation',
		visible: false,
		summary: '自動化とデータ処理に強い汎用言語。小さなスクリプトから始めやすいです。',
		beginnerPoints: ['基本文法と関数', 'ファイル入出力', 'ライブラリ利用'],
		firstSteps: ['日次処理の自動化スクリプトを書く', 'CSV加工スクリプトを作る', '例外処理を入れて堅牢化する'],
	},
	{
		slug: 'html',
		name: 'HTML',
		status: 'learning',
		category: 'Frontend',
		visible: false,
		summary: 'Webページの構造を作る基礎技術。意味のあるマークアップが重要です。',
		beginnerPoints: ['セマンティックタグ', 'フォーム要素', 'アクセシビリティ基礎'],
		firstSteps: ['プロフィールページを作る', 'フォームを実装する', '見出し構造を見直す'],
	},
	{
		slug: 'css',
		name: 'CSS',
		status: 'learning',
		category: 'Frontend',
		visible: false,
		summary: 'UIの見た目を設計するスタイル言語。レイアウトと可読性の調整が中心です。',
		beginnerPoints: ['Flexbox/Grid', '余白とタイポグラフィ', 'レスポンシブ対応'],
		firstSteps: ['カードレイアウトを作る', 'モバイル崩れを修正する', '配色変数を設計する'],
	},
	{
		slug: 'javascript',
		name: 'JavaScript',
		status: 'learning',
		category: 'Frontend',
		visible: false,
		summary: 'Webの挙動を実装する基本言語。配列操作と非同期処理を重点学習。',
		beginnerPoints: ['配列・オブジェクト操作', 'DOM操作', 'Promise/async/await'],
		firstSteps: ['小さなUI挙動を実装する', 'APIからデータ取得する', 'エラー処理を実装する'],
	},
];
