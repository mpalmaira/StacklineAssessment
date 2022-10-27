import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../store/product/action";
import {
  MainContainer,
  ProductContainer,
  ProductName,
  ProductDetail,
  TagContainer,
  TagItem,
} from "./Sidebar.styles";

function Sidebar() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productData);
  const isLoading = useSelector((state) => state.product.isLoading);

  useEffect(() => {
    dispatch(getProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MainContainer>
      {isLoading && <div>Data loading...</div>}
      {product && (
        <div>
          <ProductContainer>
            <img src={product.image} height={200} width={200} alt="product" />
            <ProductName>{product.title}</ProductName>
            <ProductDetail>{product.subtitle}</ProductDetail>
          </ProductContainer>
          <TagContainer>
            {product.tags.map((tag) => {
              return <TagItem>{tag}</TagItem>;
            })}
          </TagContainer>
        </div>
      )}
    </MainContainer>
  );
}

export default Sidebar;
