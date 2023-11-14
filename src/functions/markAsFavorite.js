export function markAsFavorite(image){
    const storedImages = JSON.parse(localStorage.getItem('favorites'))

    if(storedImages.find((stored) => stored.name === image.name)){
        const updatedImages = storedImages.filter((stored) => stored.image !== image.name)
        localStorage.setItem('favorites', JSON.stringify(updatedImages))
        return
    }

    const updatedImages = storedImages.push(image)
    localStorage.setItem('favorites', JSON.stringify(updatedImages))

}