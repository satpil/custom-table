import styled from "styled-components";

export const PaginationButton = styled.div`
align-items: flex-end;
justify-content: flex-end;
display: inline-block;
/* flex: 1; */

`;
export const PaginationList = styled.a`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
  &:hover {
    background-color: #ddd;
  }
  &.active {
    background-color: #ddd;
    // color: white;
    // border: 1px solid #4caf50;
  }
  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const active1 = styled.div`
background-color: #ddd;
`