import styles from './Table.module.css';
import Entry from './Entry';

function Table(props) {
    return (
        <div className={styles.outer}>
            <table>
                <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Roll No.</th>
                </tr>
                {props.StudentList.map((entry) => <Entry
                    srno={entry.srno}
                    name={entry.name}
                    rollno={entry.rollno} />)
                }
            </table>
        </div>
    );
}

export default Table;