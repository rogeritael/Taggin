import { images } from "../db/images";

export function findByTag(tag){
    return images.filter((image) => image.tags.includes(tag))
}