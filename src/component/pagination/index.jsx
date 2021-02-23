import React from "react";
import { PaginationButton, PaginationList } from "./pagination";
// import { Row, Container } from "react-bootstrap";

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

function MainPagination({ children, classes, ...restprops }) {
  const [pageArray, setPageArray] = React.useState([]);
  const { entryCount, data } = restprops

  React.useEffect(() => {
    let len = 0;
    let countArray = [];
    let pagination = Math.round(data.length / entryCount)
    for (let i = 1; i <= pagination; i++) {
      len = len + 1;
      countArray.push(len);
      setPageArray(countArray);
    }
  },[entryCount,data])
  return (
    <React.Fragment>
      <Pagination>
        <Pagination.List>&laquo;</Pagination.List>
        {pageArray.map((item, index) => {
          return (
            <Pagination.List key={index}>{index + 1}</Pagination.List>
          )
        })}
        <Pagination.List>&raquo;</Pagination.List>
      </Pagination>
    </React.Fragment>
  );
}

export default MainPagination;
