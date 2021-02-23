import React from "react";
import { PaginationButton, PaginationList } from "./pagination";
import { Row, Container } from "react-bootstrap";

function Pagination({ children, classes, ...restprops }) {
  return <PaginationButton {...restprops}>{children}</PaginationButton>;
}
Pagination.List = function PaginationListItem({
  children,
  classes,
  ...restprops
}) {
  return <PaginationList {...restprops}>{children}</PaginationList>;
};

function MainPagination() {
  return (
    <React.Fragment>
      <Pagination>
        <Pagination.List>&laquo;</Pagination.List>
        <Pagination.List>1</Pagination.List>
        <Pagination.List>2</Pagination.List>
        <Pagination.List>&raquo;</Pagination.List>
      </Pagination>
    </React.Fragment>
  );
}

export default MainPagination;
