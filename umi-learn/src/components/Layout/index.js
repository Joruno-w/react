import React from 'react';
import styles from './index.css';
function Index(props) {
    return (
        <div>
            <div className={styles.header}>{props.header}</div>
            <div className={styles.main}>
                <div className={styles.left}>{props.aside}</div>
                <div className={styles.right}>{props.content}</div>
            </div>
        </div>
    );
}

export default Index;