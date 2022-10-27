import styled from "styled-components";

export const MainContainer = styled.div`
  width: 380px;
  background-color: #ffffff;
  color: black;
  border-radius: 10px;
  margin: 20px;
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
`;
export const ProductName = styled.span`
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
`;
export const ProductDetail = styled.span`
  color: #99a4be;
`;

export const TagContainer = styled.div`
  border-top: 0.2px solid #99a4be;
  border-bottom: 0.2px solid #99a4be;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100px;
  width: 100%;
  flex-wrap: wrap;
`;
export const TagItem = styled.span`
  text-align: center;
  padding: 5px;
  border: 1px solid #99a4be;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px
`;
