import { FC } from 'react'

import { Button, Stack, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Input } from '@/components/ui/inputs/input'
import { PasswordInput } from '@/components/ui/inputs/password'
import { Link } from '@/components/ui/link'
import { Credentials, credentialsSchema } from '@/schemas/credentials'
import { getSchemaDefault } from '@/utils/schema'

const LoginPage: FC = () => {
	const form = useForm<Credentials>({
		defaultValues: getSchemaDefault(credentialsSchema),
	})

	const navigate = useNavigate()

	return (
		<Stack width="100vw" height="100vh" direction="row">
			<Stack gap={3} bgcolor="juicy.neutral.90" width="45vw" justifyContent="center" alignItems="center">
				<Stack component="img" src="/contractor.svg" width="60%" />
				<Typography fontSize={24} color="juicy.neutral.20">
					Sistema de controle de contratos
				</Typography>
			</Stack>

			<Stack justifyContent="center" alignItems="center" width="55vw" px="15%" gap={4}>
				<Typography fontSize={24}>Seja bem-vindo(a)</Typography>

				<Input label="Usuário" name="email" control={form.control} />
				<PasswordInput label="Senha" name="password" control={form.control} />

				<Button fullWidth onClick={() => navigate('/')}>
					Login
				</Button>
				<Link to="login">Esqueci minha senha</Link>
			</Stack>
		</Stack>
	)
}

export default LoginPage
