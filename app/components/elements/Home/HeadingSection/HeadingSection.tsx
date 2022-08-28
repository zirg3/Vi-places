import {FC} from 'react';
import styles from '../HeadingSection/HeadingSection.module.scss'
import mapImg from '../../../../../assets/images/map.png'

const HeadingSection: FC = () => {


    return (
        <section className={styles.section} style={{backgroundImage: `url(${mapImg.src})`}}>
            <div>
                <h1>Лучшие места для путешествий</h1>
            </div>
        </section>
    );
};

export default HeadingSection;
