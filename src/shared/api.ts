import axios from 'axios'

export const contractorAPI = axios.create({
	baseURL: 'http://localhost:8080',
})
