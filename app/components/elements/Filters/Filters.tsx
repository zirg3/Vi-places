import {FC, useState} from 'react';
import styles from '../Filters/Filters.module.scss'
import cn from 'classnames'
import {TypeSetState} from "../../../types/common";
import {IPlace} from "../../../types/place";

const countries = [
    {
    location: 'Париж',
    },
    {
    location: 'Перу',
    },
    {
    location: 'Гаити',
    },
    {
    location: 'Япония',
    },
    {
    location: 'Египет',
    },
    {
    location: 'Италия',
    },
]

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
                place.location.country.toLowerCase() === location.toLowerCase()
            ))
            setFilter(location)
        }
    }

    return (
        <div className={styles.wrapper}>
            {countries.map(country => (
                <button
                    key={country.location}
                    onClick={() => handleFilter(country.location)}
                    className={cn({
                        [styles.active]: country.location === filter
                    })}
                >{country.location}</button>
                ))}
        </div>
    );
};

export default Filters;
