import { useState, useCallback } from 'react';

export const MAX_STEP = 4;

export function stepToMainIndex(step: number): number {
	if (step === 0) return 0;
	if (step >= 1 && step <= 3) return 1;
	return 2; // step 4
}

export function stepToSubIndex(step: number): number {
	if (step === 0) return 0;
	if (step >= 1 && step <= 3) return step - 1;
	return 2; // step 4
}

export function mainIndexToStep(mainIndex: number): number {
	if (mainIndex === 0) return 0;
	if (mainIndex === 1) return 1;
	return 4;
}

export function useConsideringTabs() {
	const [currentStep, setCurrentStep] = useState(0);

	const goToStep = useCallback((step: number) => {
		setCurrentStep(step);
	}, []);

	const goPrev = useCallback(() => {
		setCurrentStep((prev) => (prev === 0 ? MAX_STEP : prev - 1));
	}, []);

	const goNext = useCallback(() => {
		setCurrentStep((prev) => (prev === MAX_STEP ? 0 : prev + 1));
	}, []);

	const handleMainTabClick = useCallback((mainIndex: number) => {
		goToStep(mainIndexToStep(mainIndex));
	}, [goToStep]);

	const handleSubTabClick = useCallback((subIndex: number) => {
		goToStep(subIndex + 1); // sub 0,1,2 → step 1,2,3
	}, [goToStep]);

	// Swipe
	const handleSwipe = useCallback(
		(direction: 'left' | 'right') => {
			if (direction === 'left') {
				setCurrentStep((prev) => (prev === MAX_STEP ? 0 : prev + 1));
			} else {
				setCurrentStep((prev) => (prev === 0 ? MAX_STEP : prev - 1));
			}
		},
		[]
	);

	return {
		currentStep,
		mainIndex: stepToMainIndex(currentStep),
		subIndex: stepToSubIndex(currentStep),
		goPrev,
		goNext,
		handleMainTabClick,
		handleSubTabClick,
		handleSwipe,
	};
}