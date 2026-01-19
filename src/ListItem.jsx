import {useState} from "react";

const ListItem = ({text, onDelete}) => {
    const [isDone, setIsDone ] = useState(false);

    return (
        <li
            className="list-element"
            style={{
                textDecoration: isDone ? 'line-through' : 'none'
            }}
        >
            {/*kun divissä, niin yliviivaus pelkästään tekstistä eikä koko listitemista */}
            <div onClick={() => setIsDone(!isDone)}>
            {text}
            </div>
            <button onClick={onDelete}>🗑️</button>
        </li>
    );
}

export default ListItem
