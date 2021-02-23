import React from "react";

import { TablePane, Row, RowHeader, Column } from "./table";

function Table({ children, classes, ...restprops }) {
  return <TablePane {...restprops}>{children}</TablePane>;
}

Table.Row = function tableRow({ children, classes, ...restprops }) {
  return <Row {...restprops}>{children}</Row>;
};

Table.RowHeader = function tableRowHeader({ children, classes, ...restprops }) {
  return <RowHeader {...restprops}>{children}</RowHeader>;
};

Table.Column = function tableColumn({ children, classes, ...restprops }) {
  return <Column {...restprops}>{children}</Column>;
};

function MainTable({ children, classes, ...restprops }) {
  const { data, header } = restprops;
  return (
    <Table>
      <Table.Row>
        {Object.keys(header).map(header => {
          return (
            <Table.RowHeader>{header}</Table.RowHeader>
          )
        })}
      </Table.Row>
      {data.map((item, index) => {
        return (
          <Table.Row key={index}>
            {Object.values(item).map(col => {
              return (
                <>
                  <Table.Column>{col}</Table.Column>
                </>
              )
            })}
          </Table.Row>
        )
      })}
    </Table>
  );
}
export default MainTable;
