export type MemoEntry = {
	date: string;
	title: string;
	summary: string;
	href?: string;
};

// Add entries here when you want to publish a new note.
export const memos: MemoEntry[] = [];
