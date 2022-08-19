import {FC, useState} from 'react';
import {BsBookmarkHeart} from 'react-icons/bs'
import styles from '../Header/Header.module.scss'
import Link from "next/link";
import {IFav} from "../../../../types/place";

const data:IFav[] = [
    {
        name: 'Japan',
        slug: 'Tokyo'
    },
    {
        name: 'Italy',
        slug: 'Italy'
    },
    {
        name: 'Srisa',
        slug: 'Srisa'
    },

]


const Favorites:FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.bookmark}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <span className={styles.buttonWrapper}>
                    <BsBookmarkHeart size={20} color='#e8e8e8'/>
                </span>
            </button>
            {isOpen && (
                <ul>
                    {data.map(fav => (
                        <li key={fav.slug}>
                            <Link href={`/place/${fav.slug}`}>
                                <a>{fav.name}</a>
                            </Link>
                        </li>

                    ))}
                </ul>
            )}
        </div>
    );
};

export default Favorites;
