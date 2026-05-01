/**
 * Client-side tag filtering for /blog. Progressive enhancement: without JS,
 * all posts remain visible and chips are inert.
 */
const ROOT_ID = 'blog-filter-root';
const LIST_ID = 'blog-post-list';
const EMPTY_ID = 'blog-filter-empty';

export function initBlogTagFilter(): void {
	const root = document.getElementById(ROOT_ID);
	if (!root) return;

	const list = root.querySelector<HTMLElement>(`#${LIST_ID}`);
	const empty = root.querySelector<HTMLElement>(`#${EMPTY_ID}`);
	const chips = root.querySelectorAll<HTMLButtonElement>('.tag-filter-chip');
	const items = list?.querySelectorAll<HTMLElement>('.post-item') ?? [];

	function parseTags(el: HTMLElement): string[] {
		const raw = el.dataset.tags;
		if (!raw) return [];
		try {
			const parsed: unknown = JSON.parse(raw);
			return Array.isArray(parsed)
				? parsed.filter((t): t is string => typeof t === 'string')
				: [];
		} catch {
			return [];
		}
	}

	function setActiveTag(tag: string): void {
		chips.forEach((btn) => {
			const t = btn.dataset.tag ?? '';
			const active = t === tag;
			btn.classList.toggle('is-active', active);
			btn.setAttribute('aria-pressed', active ? 'true' : 'false');
		});
	}

	function applyFilter(tag: string): void {
		let visible = 0;
		items.forEach((el) => {
			const tags = parseTags(el);
			const show = tag === '' || tags.includes(tag);
			el.hidden = !show;
			if (show) visible++;
		});
		if (empty) empty.hidden = visible !== 0;

		const url = new URL(window.location.href);
		if (tag) url.searchParams.set('tag', tag);
		else url.searchParams.delete('tag');
		window.history.replaceState({}, '', url.toString());
	}

	chips.forEach((btn) => {
		btn.addEventListener('click', () => {
			const tag = btn.dataset.tag ?? '';
			setActiveTag(tag);
			applyFilter(tag);
		});
	});

	const params = new URLSearchParams(window.location.search);
	const initial = params.get('tag') ?? '';
	const tagKnown =
		initial === '' ||
		Array.from(chips).some((b) => (b.dataset.tag ?? '') === initial);
	const tag = tagKnown ? initial : '';
	setActiveTag(tag);
	applyFilter(tag);
}
