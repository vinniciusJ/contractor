import axios from 'axios'

export const contractorAPI = axios.create({
	baseURL: 'https://nominatim.openstreetmap.org/search?',
})
//https://nominatim.openstreetmap.org/search?q=Curitiba,%20Paran%C3%A1&format=json
