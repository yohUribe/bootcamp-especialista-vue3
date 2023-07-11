const BASE_URL = import.meta.env.VITE_API_URL
export const fetchHerores = async ({ page, limit} = { page: 1, limit: 5 }) =>{
    const response = await fetch(`${BASE_URL}/heroes?page=${page}&limit=${limit}`)

    return await response.json()
}
