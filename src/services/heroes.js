const BASE_URL = import.meta.env.VITE_API_URL
export const fetchHeroesLength = async ({ gender} = { gender: '' }) =>{
    const response = await fetch(`${BASE_URL}/heroes?gender=${gender}&completed=false`)
    const total =  await response.json()
    return total.length
}
export const fetchHeroes = async ({ gender} = { gender: '' }) =>{
    const response = await fetch(`${BASE_URL}/heroes?gender=${gender}&completed=false`)
    const total =  await response.json()
    return total
}
export const fetchHeroesSearch = async ({ page, limit, gender} = { page: 1, limit: 5, gender: ''}) =>{
    const response = await fetch(`${BASE_URL}/heroes?gender=${gender}&page=${page}&limit=${limit}&completed=false`)
    return await response.json()
}
export const createHeroe = async ({form}) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(form)
    }
    const response = await fetch(`${BASE_URL}/heroes`, options)
    return  await response.json()
}
export const deleteHeroe = async ({id}) =>{
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(`${BASE_URL}/heroes/${id}`, options)

    return  await response.json()
}
