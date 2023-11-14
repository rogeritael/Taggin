import { Category } from "../../components/Category";
import { CategoryList } from "../../components/CategoryList";
import { Feed } from "../../components/Feed";
import { FeedImage } from "../../components/FeedImage";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";

import { images } from "../../db/images";

export function Home(){
    return (
        <main id="Home">
            <Header />
            <CategoryList>
                <Category title='importados' />
                <Category title='carros-pretos' />
            </CategoryList>
            <Feed>
                {images.map((image) => (
                    <FeedImage url={image.path} name={image.name}/>
                ))}
            </Feed>
            <Search />
        </main> //floating search
    )
}