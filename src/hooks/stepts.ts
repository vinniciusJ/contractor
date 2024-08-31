import { useQueryParam } from './params'

export const useSteps = () => {
	const [currentStep, setCurrentStep] = useQueryParam('step')

	return [Number(currentStep ?? 0), setCurrentStep] as const
}

export const useCurrentStep = () => useSteps()[0]
export const useSetStep = () => useSteps()[1]
