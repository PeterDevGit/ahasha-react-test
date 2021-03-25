import React, {Fragment, useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {addedToCart, setDataProducts, updateCountProducts} from "../../Redux/action";

import './ProductsList.scss';
import ProductItem from "../ProductItem/ProductItem";
import Header from "../Header/Header";
import Button from "../Button/Button";

const ProductsList = () =>{
    const [total, setTotal] = useState(0);
    const dispatch = useDispatch();
    const { products, cart } = useSelector(store => store);

    useEffect(() => {
        dispatch(setDataProducts());
    }, [dispatch]);

    const addProduct = (item, status) =>{
        dispatch(addedToCart(item, status));
    }

    const updateCountHandle = (id, count) => {
        dispatch(updateCountProducts(id, count));
    }

    return(
        <div className="wrapper">
            <Header totalPrice={total} />

            <div className="product-list">
                {products.length ? products.map((item) => {
                    return(
                        <Fragment key={item.id}>
                            <ProductItem
                               id={item.id}
                               product={item}
                               name={item.name}
                               date={item.date}
                               quantity={item?.quantity || 1}
                               price={item.price}
                               selected={item?.selected || 0}
                               updateCount={updateCountHandle}
                               addProduct={addProduct}
                            />
                        </Fragment>);
                        }
                      )
                    : null
                    }
            </div>

            <footer>
                <Button
                    label="Buy"
                    type="link"
                    url="/cart"
                    status={cart.length}
                />
            </footer>
        </div>);
}

export default ProductsList;
