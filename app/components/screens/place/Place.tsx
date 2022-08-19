import {IPlace} from "../../../types/place";
import React, {FC} from "react";
import Layout from "../../common/Layout";
import BookTrip from "./BookTrip/BookTrip";
import Information from "./Information/Information";
import Header from "./Header/Header";

interface IPlacePage {
    place: IPlace
}

const Place:FC<IPlacePage> = ({place}) => {
    return (
        <Layout>
            <Header/>
            <Information place={place}/>
            <BookTrip/>
        </Layout>
    );
};

export default Place;
