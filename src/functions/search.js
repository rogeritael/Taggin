import { images } from "../db/images";

export function search(term){
    return images.filter(image => {
        const lowerCaseQuery = term.toLowerCase();
        return (
            image.name.toLowerCase().includes(lowerCaseQuery) ||
            image.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
        );
    });
}