import { FC, ReactNode, createContext, useContext, useMemo, useRef } from 'react'

export interface ModalOptions {
	openModal: () => void
	closeModal: () => void
}

interface ModalProviderProps extends ModalOptions {
	children: ReactNode
}

const ModalContext = createContext<ModalOptions>({} as ModalOptions)

export const ModalProvider: FC<ModalProviderProps> = ({ children, openModal, closeModal }) => {
	const options = useMemo(() => ({ openModal, closeModal }), [openModal, closeModal])

	return <ModalContext.Provider value={options}>{children}</ModalContext.Provider>
}

export const useModalContext = () => useContext(ModalContext)
export const useModal = () => useRef<ModalOptions>(null)
