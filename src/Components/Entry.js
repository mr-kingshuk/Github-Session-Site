import styles from './Entry.module.css';

function Entry(props) {
    return (
        <tr>
            <th>{props.srno}</th>
            <th>{props.name}</th>
            <th>{props.rollno}</th>
        </tr>
    );
}

export default Entry;