import React, {FC, MouseEvent} from 'react';
import styles from "./PopularPlaces.module.scss";
import {urlFor} from "../../../../../lib/sanity";
import Link from "next/link";
import {IPlace} from "../../../../types/place";

const PlaceItem:FC<{place: IPlace, removeHandler?: (e:MouseEvent<HTMLButtonElement>)=>void}> = ({place, removeHandler}) => {
    return (
        <Link href={`place/${place.slug.current}`}>
            <a className={styles.item} style={{backgroundImage: `url(${urlFor(place.imagePath).url()})`}}>
                <span className={styles.heading}>
                    {place.location.city + ', ' + place.location.country.rus}
                </span>
                {removeHandler && (
                    <button onClick={removeHandler}>
                        <span className={`material-icons-outlined ${styles.iconRemove}`}>highlight_off</span>
                    </button>
                )}
            </a>
        </Link>
    );
};

export default PlaceItem;
