/**
 * Client-side tag filtering for /writings. Progressive enhancement: without JS,
 * all posts remain visible and chips are inert.
 */
const ROOT_ID = 'writings-filter-root';
const LIST_ID = 'writings-post-list';
const EMPTY_ID = 'writings-filter-empty';

function readDataTags(el: HTMLElement): string[] {
	const raw = el.getAttribute('data-tags');
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

function readChipTag(btn: HTMLButtonElement): string {
	return btn.getAttribute('data-tag') ?? '';
}

export function initWritingsTagFilter(): void {
	const root = document.getElementById(ROOT_ID);
	if (!root) return;

	const list = root.querySelector<HTMLElement>(`#${LIST_ID}`);
	const empty = root.querySelector<HTMLElement>(`#${EMPTY_ID}`);
	const chips = root.querySelectorAll<HTMLButtonElement>('.tag-filter-chip');
	const items = list?.querySelectorAll<HTMLElement>('.post-item') ?? [];

	function setActiveTag(tag: string): void {
		chips.forEach((btn) => {
			const t = readChipTag(btn);
			const active = t === tag;
			btn.classList.toggle('is-active', active);
			btn.setAttribute('aria-pressed', active ? 'true' : 'false');
		});
	}

	function applyFilter(tag: string): number {
		let visible = 0;
		items.forEach((el) => {
			const tags = readDataTags(el);
			const show = tag === '' || tags.includes(tag);
			el.hidden = !show;
			if (show) visible++;
		});
		if (empty) empty.hidden = visible !== 0;

		const url = new URL(window.location.href);
		if (tag) url.searchParams.set('tag', tag);
		else url.searchParams.delete('tag');
		window.history.replaceState({}, '', url.toString());

		return visible;
	}

	chips.forEach((btn) => {
		btn.addEventListener('click', () => {
			const tag = readChipTag(btn);
			setActiveTag(tag);
			let visible = applyFilter(tag);
			if (items.length > 0 && visible === 0 && tag !== '') {
				setActiveTag('');
				applyFilter('');
			}
		});
	});

	const params = new URLSearchParams(window.location.search);
	const initial = params.get('tag') ?? '';
	const tagKnown =
		initial === '' ||
		Array.from(chips).some((b) => readChipTag(b) === initial);
	let tag = tagKnown ? initial : '';

	setActiveTag(tag);
	let visible = applyFilter(tag);

	/* Recover from a stale ?tag= that matches no rows (blank list). */
	if (items.length > 0 && visible === 0 && tag !== '') {
		tag = '';
		setActiveTag(tag);
		applyFilter(tag);
	}
}
