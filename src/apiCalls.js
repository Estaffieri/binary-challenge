
export const getAllCategories = () => {
    return fetch("https://api.publicapis.org/categories")
    .then(response => response.json())
    .then(data => console.log(data))
    
}

export const getCategoryEntries = (category) => {
    return fetch(`https://api.publicapis.org/entries?category=${category}`)
    .then (response => response.json())
    .then(data => console.log(data))
}

export const getRandomApi = () => {
    return fetch("https://api.publicapis.org/random?auth=null")
    .then(response => response.json())
    .then(data => console.log(data.entries))
}