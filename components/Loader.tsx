import styles from '../styles/Loader.module.css';
import {BeatLoader} from 'react-spinners'
const Loader = () => {
    return (
        <div className={styles.wrapper}>
            {/* <div className={styles.loader}> */}
            <BeatLoader
                color="#f00"
                speedMultiplier={2}
                size={30}
                // size={40}
                />
            {/* </div> */}
        </div>
     );
}

export default Loader;