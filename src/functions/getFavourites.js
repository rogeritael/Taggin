export function getFavorites(){
    return JSON.parse(localStorage.getItem('favorites'))
}