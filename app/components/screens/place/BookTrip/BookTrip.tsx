import styles from '../BookTrip/BookTrip.module.scss'
import {BsArrowRightShort} from 'react-icons/bs'

const BookTrip = () => {
    const BookTrip = () => {
        console.log('ok')
    }

    return (
        <button className={styles.button} onClick={BookTrip}>
            <span className={styles.text}>В путешествие!</span>
            <span className={styles.icon}>
                <BsArrowRightShort size='34'/>
            </span>
        </button>
    );
};

export default BookTrip;
