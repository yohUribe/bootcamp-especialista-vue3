const BASE_URL = import.meta.env.VITE_API_URL
export const registerUser = async ( form ) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(form)
    }

    return await fetch(`${BASE_URL}/users`, options)

    /*const data = await response.json()*/
}

export const loginUser = async ( {email, password} ) => {

    return await fetch(`${BASE_URL}/users?email=${email}&password=${password}`)
}
