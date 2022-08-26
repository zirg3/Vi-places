import {FC} from "react";
import {IPlace} from "../../../../types/place";
import style from '../Information/Information.module.scss'
import {FaMapMarkerAlt, FaStar, FaCalendar} from 'react-icons/fa'
import Map from "./Map";
import {PortableText} from "../../../../../lib/sanity";

const Information: FC<{place: IPlace}> = ({place}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.heading}>
                <FaMapMarkerAlt color='#e8e8e8' size={20}/>
                <h1>{place.location.city + ', ' + place.location.country.rus}</h1>
            </div>
            <article>{<PortableText value={place.description}/>}</article>
            <div className={style.additional}>
                <div className={style.rating}>
                    <FaStar color='#FDAE32' size={18} className={style.star}/>
                    <span>{place.rating}/10</span>
                </div>
                <div className={style.duration}>
                    <FaCalendar color='#565658' size={18} className={style.calendar}/>
                    <span>{place.duration}</span>
                </div>
            </div>
            <Map location={place.location}/>
        </div>
    );
};

export default Information;
