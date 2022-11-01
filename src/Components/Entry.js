import styles from './Entry.module.css';

function Entry(props) {
    return (
        <tr>
            <th className={styles.srno}>{props.srno}</th>
            <th className={styles.name}>{props.name}</th>
            <th>{props.rollno}</th>
        </tr>
    );
}

export default Entry;