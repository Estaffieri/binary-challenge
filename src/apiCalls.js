
export const getAllCategories = async () => {
    const response = await fetch("https://api.publicapis.org/categories")
    const data = await response.json()
    return console.log(data)
}

export const getCategoryEntries = async (category) => {
    const response = await fetch(`https://api.publicapis.org/entries?category=${category}`)
    const data = await response.json()
    return console.log(data)
}

export const getRandomApi = async () => {
    const response = await fetch("https://api.publicapis.org/random?auth=null")
    const data = await response.json()
    return console.log(data.entries)
}