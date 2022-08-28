import React, {FC} from 'react';
import Meta from "../../../utils/Meta";
import PlaceItem from "../../elements/Home/PopularPlaces/PlaceItem";
import Layout from "../../common/Layout";
import {IPlace} from "../../../types/place";

const Favorites:FC<{places: IPlace[]}> = ({places}) => {
    return (
        <Layout>
            <Meta
                title='Travel in dreams'
                description='Лучшие туры у нас. Туры не дорого. Тур в Японию'
            />

            <div style={{maxWidth: '80%', margin: '0 auto'}}>
                <h1 className='h1' style={{marginBottom: '4.5rem', fontSize: '20px', color: 'white'}}>Избранное</h1>
                {places.length ? (
                    places.map(place => (
                        <PlaceItem place={place} key={place._id} removeHandler={() => {alert(13)}}/>
                    ))) : (
                    <div style={{
                        marginTop:'-2rem',
                        color: '#e8e8e8',
                        opacity:'.6',
                        fontStyle:'italick'
                    }}>Ничего не найдено :(</div>
                )}
            </div>
        </Layout>
    );
};

export default Favorites;
