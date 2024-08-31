import { FC, PropsWithChildren, createContext, useContext, useMemo, useState } from 'react'

interface FormModalProviderProps {
	steps: string[]
	setSteps: (steps: string[]) => void
}

const FormModalContext = createContext<FormModalProviderProps>({} as FormModalProviderProps)

export const FormModalProvider: FC<PropsWithChildren> = ({ children }) => {
	const [steps, setSteps] = useState<string[]>([])
	const options = useMemo(() => ({ steps, setSteps }), [steps, setSteps])

	return <FormModalContext.Provider value={options}>{children}</FormModalContext.Provider>
}

export const useFormModal = () => useContext(FormModalContext)
