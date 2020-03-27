import React from 'react';

const ListItem = ({title, description, tags, date, children}) => {

    return <div className="list-item">
        <h3>{title}</h3>
        <p>{description}</p>
        <h5>{date}</h5>
        <div>
            {children}
        </div>
    </div>;
}

export default ListItem;