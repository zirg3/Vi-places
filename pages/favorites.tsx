import React from 'react';
import {NextPageAuth} from "../app/types/auth";
import {IPlace} from "../app/types/place";
import Favorites from "../app/components/screens/favorites/Favorites";
import {GetStaticProps} from "next";
import sanityClient from "../lib/sanity";
import {SANITY_QUERIES} from "../app/constants";


const FavoritesPage:NextPageAuth<{places: IPlace[]}> = ({places}) => {
    return (
        <Favorites places={places}/>
    );
};


FavoritesPage.isOnlyUser = true

export const getStaticProps:GetStaticProps = async () => {

    const response = await sanityClient.fetch(SANITY_QUERIES.getPlaces)    //fetch(`${API_URL}/places`)
    // const initialPlaces = await response.json()

    return {
        props: {
            places: response
        }
    }
}

export default FavoritesPage;
