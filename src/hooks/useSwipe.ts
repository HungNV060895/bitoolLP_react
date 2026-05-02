import { useRef, useCallback } from 'react';

interface UseSwipeOptions {
    threshold?: number;
    onSwipeLeft: () => void;
    onSwipeRight: () => void;
}

export function useSwipe({ threshold = 50, onSwipeLeft, onSwipeRight }: UseSwipeOptions) {
    const touchStartX = useRef(0);

    const onTouchStart = useCallback((e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].screenX;
    }, []);

    const onTouchEnd = useCallback(
        (e: React.TouchEvent) => {
            const diff = touchStartX.current - e.changedTouches[0].screenX;
            if (Math.abs(diff) < threshold) return;
            if (diff > 0) onSwipeLeft();
            else onSwipeRight();
        },
        [threshold, onSwipeLeft, onSwipeRight]
    );

    return { onTouchStart, onTouchEnd };
}