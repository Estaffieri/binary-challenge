
export const getAllCategories = () => {
    fetch("https://api.publicapis.org/categories")
        .then(response => response.json())
        .then(data => console.log(data))//returns an array of strings
}

export const getCategoryEntries = (category) => {
    return fetch(`https://api.publicapis.org/entries?category=${category}`)
        .then(response => response.json())
        .then(data => console.log(data.title))
}

export const getRandomApi = () => {
    return fetch("https://api.publicapis.org/random")
    .then(response => response.json())
    .then(data => console.log(data))
}