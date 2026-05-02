import { useEffect, type RefObject } from 'react';

export function useEqualHeight(
	containerRef: RefObject<HTMLElement | null>,
	selector: string,
	deps: unknown[] = []
) {
	useEffect(() => {
		const setHeight = () => {
			const items = containerRef.current?.querySelectorAll<HTMLElement>(selector);
			if (!items || items.length === 0) return;

			// Reset
			items.forEach((el) => (el.style.height = 'auto'));

			// Tính max
			const max = Math.max(...Array.from(items).map((el) => el.offsetHeight));

			// Áp dụng
			items.forEach((el) => (el.style.height = `${max}px`));
		};

		setHeight();
		window.addEventListener('resize', setHeight);
		return () => window.removeEventListener('resize', setHeight);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);
}