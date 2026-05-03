import { useEffect, type RefObject } from 'react';

export function useEqualHeight(
	containerRef: RefObject<HTMLElement | null>,
	selector: string | string[],
	deps: unknown[] = []
) {
	useEffect(() => {
		const setHeight = () => {
			const selectors = Array.isArray(selector) ? selector : [selector];

			selectors.forEach((sel) => {
				const items = containerRef.current?.querySelectorAll<HTMLElement>(sel);
				if (!items || items.length === 0) return;

				// Reset để lấy chiều cao tự nhiên
				items.forEach((el) => (el.style.height = 'auto'));

				// Tính chiều cao lớn nhất trong nhóm
				const max = Math.max(...Array.from(items).map((el) => el.offsetHeight));

				// Áp dụng chiều cao lớn nhất cho cả nhóm
				items.forEach((el) => (el.style.height = `${max}px`));
			});
		};

		setHeight();
		window.addEventListener('resize', setHeight);
		return () => window.removeEventListener('resize', setHeight);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);
}