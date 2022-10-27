import { useSelector } from "react-redux";
import {
  StyledTable,
  TableHead,
  TableRow,
  TableData,
  MainContainer,
} from "./Table.styles";

function Table() {
  const product = useSelector((state) => state.product.productData);
  return (
    <MainContainer>
      <StyledTable>
        <tr>
          <TableHead>WEEK ENDING</TableHead>
          <TableHead>RETAIL SALES</TableHead>
          <TableHead>WHOLESALE SALES</TableHead>
          <TableHead>UNITS SOLD</TableHead>
          <TableHead>RETAILER MARGIN</TableHead>
        </tr>
        <tbody>
          {product?.sales.map((product) => {
            return (
              <TableRow>
                <TableData>{product.weekEnding}</TableData>
                <TableData>{product.retailSales}</TableData>
                <TableData>{product.wholesaleSales}</TableData>
                <TableData>{product.unitsSold}</TableData>
                <TableData>{product.retailerMargin}</TableData>
              </TableRow>
            );
          })}
        </tbody>
      </StyledTable>
    </MainContainer>
  );
}

export default Table;
