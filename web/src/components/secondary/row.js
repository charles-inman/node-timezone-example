import React from "react";
import Cell from "./../tertiary/cell";

const Row = ({data, tableNames}) => (
    <tr>
        {
            tableNames.map((name, id) => {
                return <Cell key={id} text={data[name.key]} />;
            })
        }
    </tr>
);

export default Row;