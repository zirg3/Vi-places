import type {GetStaticProps, NextPage} from 'next'
import Layout from "../app/components/common/Layout";
import {IPlace} from "../app/types/place";
import Search from "../app/components/elements/Search/Search";
import Filters from "../app/components/elements/Filters/Filters";
import HeadingSection from '../app/components/elements/Home/HeadingSection/HeadingSection';
import {SANITY_QUERIES} from "../app/constants";
import PopularPlaces from "../app/components/elements/Home/PopularPlaces/PopularPlaces";
import {useState} from "react";
import Meta from "../app/utils/Meta";
import sanityClient from '../lib/sanity'

interface IHome {
    initialPlaces: IPlace[]
}

 const Home:NextPage<IHome> = ({initialPlaces}) => {
    const [places, setPlaces] = useState(initialPlaces)
    const [isLoading, setIsLoading] = useState(false)
     console.log(initialPlaces)
  return (
      <Layout>
          <Meta
              title='Travel in dreams'
              description='Лучшие туры у нас. Туры не дорого. Тур в Японию'
          />
          <div style={{maxWidth: '80%', margin: '0 auto'}}>
              <HeadingSection />
              <Search setPlaces={setPlaces} initialPlaces={initialPlaces} setIsLoading={setIsLoading}/>
              <Filters setPlaces={setPlaces} initialPlaces={initialPlaces}/>
              <PopularPlaces places={places} isLoading={isLoading}/>
          </div>
      </Layout>
  )
}

export const getStaticProps:GetStaticProps = async () => {

  const response = await sanityClient.fetch(SANITY_QUERIES.getPlaces)    //fetch(`${API_URL}/places`)
  // const initialPlaces = await response.json()

  return {
    props: {
        initialPlaces: response
    },
    revalidate: 1,
  }
}

export default Home