import {FC, useState} from 'react';
import styles from '../Filters/Filters.module.scss';
import cn from 'classnames';
import {TypeSetState} from "../../../types/common";
import {IPlace} from "../../../types/place";
import uniqBy from 'lodash/uniqBy';


interface IFilters {
    setPlaces: TypeSetState<IPlace[]>
    initialPlaces: IPlace[]
}

const Filters: FC<IFilters> = ({setPlaces, initialPlaces}) => {
    const [filter,setFilter] = useState('')

    const handleFilter = (location: string) => {
        if (filter === location) {
            setPlaces(initialPlaces)
            setFilter('')
        } else {
            setPlaces(initialPlaces.filter(place =>
                place.location.country.rus.toLowerCase() === location.toLowerCase()
            ))
            setFilter(location)
        }
    }

    return (
        <div className={styles.wrapper}>
            {uniqBy(initialPlaces, 'location.country.rus').map(country => (
                <button
                    key={country.location.city}
                    onClick={() => handleFilter(country.location.country.rus)}
                    className={cn({
                        [styles.active]: country.location.country.rus === filter
                    })}
                >{country.location.country.rus}</button>
                ))}
        </div>
    );
};

export default Filters;
