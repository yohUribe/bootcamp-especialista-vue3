const BASE_URL = import.meta.env.VITE_API_URL
export const fetchHeroes = async ({ name} = { name: '' }) =>{
    const response = await fetch(`${BASE_URL}/heroes?name=${name}&completed=false`)
    const total =  await response.json()
    return total.length
}
export const fetchHeroesSearch = async ({ page, limit, name} = { page: 1, limit: 5, name: '' }) =>{
    const response = await fetch(`${BASE_URL}/heroes?name=${name}&page=${page}&limit=${limit}&completed=false`)
    return await response.json()
}
