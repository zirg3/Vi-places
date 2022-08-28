import {FC} from 'react';
import styles from '../PopularPlaces/PopularPlaces.module.scss'
import mapImg from '../../../../../assets/images/map.png'
import {IPlace} from "../../../../types/place";
import Link from "next/link";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {urlFor} from "../../../../../lib/sanity";
import PlaceItem from "./PlaceItem";

interface IPopularPlaces {
    places: IPlace[]
    isLoading: boolean
}

const PopularPlaces:FC <IPopularPlaces> = ({places, isLoading}) => {

    return (
        <div className={styles.wrapper}>
            <h2>Популярные места</h2>
            {isLoading ? (
                <div style={{marginTop: '-2rem'}}>
                    <Skeleton
                        count={3}
                        height={150}
                        borderRadius='20px'
                        baseColor='#1b1b1d'
                        highlightColor='#2c2c2e'
                    />
                </div>
                ) : places.length ? (
                places.map(place => (
                    <PlaceItem place={place} key={place._id}/>
                ))
                ) : (
                    <div style={{
                    marginTop:'-2rem',
                    color: '#e8e8e8',
                    opacity:'.6',
                    fontStyle:'italick'
                }}>Ничего не найдено :(</div>
            )}
        </div>
    );
};

export default PopularPlaces;
