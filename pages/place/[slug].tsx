import React from 'react';
import {useRouter} from "next/router";
import Layout from "../../app/components/common/Layout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {API_URL} from "../../app/constants";
import {IPlace} from "../../app/types/place";
import Place from "../../app/components/screens/place/Place";

interface IPlacePage {
    place: IPlace
}

const PlacePage:NextPage<IPlacePage> = ({place}) => {
    // const {query: {slug}} = useRouter()

    return (
        <Place place={place}/>
    );
};


export const getStaticPaths:GetStaticPaths = async () => {

    const response = await fetch(`${API_URL}/places`)
    const places = await response.json()

    const paths = places.map((post:any) => ({
        params: {slug: post.slug}
    }))

    return { paths, fallback: true}
}

export const getStaticProps:GetStaticProps = async ({params}) => {

    const response = await fetch(`${API_URL}/places/${params.slug}`)
    const place = await response.json()

    return {
        props: {
            place
        }
    }
}


export default PlacePage;
