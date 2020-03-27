import React from "react";
import Row from "./../secondary/row";
import Cell from "./../tertiary/cell";

const Table = ({data, tableNames = [{name: 'id', key: 'id'}]}) => (
    <table>
        <thead>
            <tr className={'header'}>
                {
                    tableNames.map((text) => {
                        return <Cell key={text.name} text={text.name} />
                    })
                }
            </tr>
        </thead>
        <tbody>
            {
                data.map((rowData) => {
                    return <Row key={rowData.id} data={rowData} tableNames={tableNames} />
                })
            }
        </tbody>
    </table>
);

export default Table;