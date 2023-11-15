export function markAsFavorite(image){

    if(JSON.parse(localStorage.getItem('favorites')) === null){
        localStorage.setItem('favorites', JSON.stringify([image]))
        return
    }

    const storedImages = JSON.parse(localStorage.getItem('favorites')) || []
    const isAlreadyStored = storedImages.find((stored) => stored.path === image.path)
    
    if(isAlreadyStored){
        const updatedImages = storedImages.filter((stored) => stored.path !== image.path)
        localStorage.setItem('favorites', JSON.stringify(updatedImages))
        return
    }

    const updatedImages = [...storedImages, image ]
    localStorage.setItem('favorites', JSON.stringify(updatedImages))

}