import { useEffect, useState } from "react";
import { Category } from "../../components/Category";
import { CategoryList } from "../../components/CategoryList";
import { Feed } from "../../components/Feed";
import { FeedImage } from "../../components/FeedImage";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";

import { tags } from "../../db/tags";
import { findByTag } from "../../functions/findByTag";
import { search } from "../../functions/search";
import { images } from "../../db/images";

export function Home(){
    const [appImages, setAppImages] = useState(images)


    function handleSelectCategory(category){
        const result = findByTag(category)
        setAppImages(result)
    }

    function handleSearch(term){
        const result = search(term)
        setAppImages(result)
    }

    return (
        <main id="Home">
            <Header />
            <CategoryList>
                {tags.map((tag) => (
                    <Category title={tag} clickAction={() => handleSelectCategory(tag)} />
                ))}
            </CategoryList>
            <Feed>
                {appImages.map((image) => (
                    <FeedImage url={image.path} name={image.name}/>
                ))}
            </Feed>
            <Search action={handleSearch} />
        </main> //floating search
    )
}