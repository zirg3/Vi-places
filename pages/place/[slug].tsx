import React from 'react';
import {useRouter} from "next/router";
import Layout from "../../app/components/common/Layout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {SANITY_QUERIES} from "../../app/constants";
import {IPlace} from "../../app/types/place";
import Place from "../../app/components/screens/place/Place";
import sanityClient from "../../lib/sanity";
import ErrorPage from "../error";

interface IPlacePage {
    place: IPlace
}

const PlacePage:NextPage<IPlacePage> = ({place}) => {
    // const {query: {slug}} = useRouter()
    const router = useRouter()
    if (!router.isFallback && !place?.slug || place === undefined) {
        return <ErrorPage/>
    }

    return (
        <Place place={place}/>
    );
};

export const getStaticPaths:GetStaticPaths = async () => {

    const response = await sanityClient.fetch(SANITY_QUERIES.getPlaces)  // const response = await fetch(`${API_URL}/places/`)
    // const places = await response.json()

    const paths = response.map((post:any) => ({
        params: {slug: post.slug.current}
    }))

    return { paths: paths || [], fallback: true}
}

export const getStaticProps:GetStaticProps = async ({params}) => {
    const place = await sanityClient.fetch(SANITY_QUERIES.getPlace(params?.slug))
    // const response = await fetch(`${API_URL}/places/${params?.slug}`)

    return {
        props: {
            place
        },
        revalidate: 1,
    }
}




export default PlacePage;
