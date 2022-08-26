import {IPlace} from "../../../types/place";
import React, {FC} from "react";
import Layout from "../../common/Layout";
import BookTrip from "./BookTrip/BookTrip";
import Information from "./Information/Information";
import Header from "./Header/Header";
import Wrapper from "./Wrapper/Wrapper";
import Meta from "../../../utils/Meta";
import {urlFor} from "../../../../lib/sanity";


interface IPlacePage {
    place: IPlace
}

const Place:FC<IPlacePage> = ({place}) => {
    return (
        <Layout isMaxWidth={false}>
            <Meta
                title={`${place.location.city} | ${place.location.country.rus}`}
                description='Лучшие туры у нас. Туры не дорого. Тур в Японию'
                image={urlFor(place.imagePath).url()}
            />
            <Wrapper imagePath={urlFor(place.imagePath).url()}>
                <Header/>
                <Information place={place}/>
                <BookTrip/>
            </Wrapper>
        </Layout>
    );
};

export default Place;
