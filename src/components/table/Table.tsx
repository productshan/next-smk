import React from "react";

interface Table {
    columns: {
        header: string;
        accessor?: string;
        className?: string;
    }[];
    renderRow: (item: any) => React.ReactNode;
    items: any[];
    center?: boolean;
}

function Table(props: Table) {
    return (
        <div className="w-full mt-4">
            <table className="w-full">
                <thead>
                    <tr>
                        {props.columns.map((col) => (
                            <th className={`${props.center ? "text-center" : "text-left"} ${col.className}`} key={col.accessor}>
                                {col.header}
                            </th>
                        ))}
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>{props.items.map((data) => props.renderRow(data))}</tbody>
            </table>
        </div>
    );
}

export default Table;
