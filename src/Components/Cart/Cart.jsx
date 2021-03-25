import React, {useState, useEffect, Fragment} from 'react';
import { useSelector, useDispatch } from "react-redux";

import Header from "../Header/Header";
import ProductItem from "../ProductItem/ProductItem";
import Button from "../Button/Button";

import './Cart.scss';
import {addedToCart, setDataProducts, updateCountProducts} from "../../Redux/action";

import totalPrice from "../../utils/utils";

const Cart = (props) => {
    const [total, setTotal] = useState(0);
    const dispatch = useDispatch();
    const { cart, products } = useSelector(store => store);

    useEffect(() => {
        const price = totalPrice(cart);
        setTotal(price);
    }, [cart]);


    const addProduct = (item, status, idParent = false) =>{
        dispatch(addedToCart(item, status, idParent));
    }

    const updateCountHandle = (id, count) => {
        dispatch(updateCountProducts(id, count));
    }

    const format = (data) => {
        return {
            date: data.date,
            id: data.id,
            name: data.name,
            price: data.price
        }
    }

    const handleSubmit = () => {
        let orderObject = [];

        cart.forEach(product => {
            orderObject.push(format(product));

            if(product?.additional){
                product.additional.forEach(pr => {
                    pr?.selected && orderObject.push(format(pr));
                })
            }
        });

        console.log('orderObject', orderObject);

        props.history.push('/');
        dispatch(setDataProducts());

    }

    const additionalProduct = (additional, parent) => {
        return additional.map((prod) => {
            return(
                <span
                    key={prod.id}
                    className="additional-option"
                >
                    <ProductItem
                        id={prod.id}
                        product={prod}
                        name={prod.name}
                        date={prod.date}
                        quantity={prod?.quantity || 1}
                        quantityStatus={false}
                        price={prod.price}
                        arrow={false}
                        updateCount={updateCountHandle}
                        addProduct={addProduct}
                        parent={parent}
                        selected={prod?.selected || 0}
                        children
                    />
            </span>
            );
        })
    }

    return (
        <>
            <Header />

            {cart.length  ? (
                <Fragment>
                    <div className="cart-block">
                        <span className="top-cart">
                            <span className="top-cart-price">$ {total}</span>
                            <span className="top-cart-text">
                                Lorem ipsum<br />lorem ipsumLOrem lorem
                            </span>
                        </span>

                        <span className="cart-products">
                            {cart.map((item) => {
                                    return(
                                        <Fragment key={item.id}>
                                            <ProductItem
                                                id={item.id}
                                                product={item}
                                                name={item.name}
                                                date={item.date}
                                                quantity={item?.quantity || 1}
                                                quantityStatus={false}
                                                price={item.price}
                                                selected={1}
                                                arrow={false}
                                                updateCount={updateCountHandle}
                                                addProduct={addProduct}
                                            />
                                            {item?.additional && item.additional.length && additionalProduct(item.additional, item.id) }
                                        </Fragment>);
                                    }
                                )}
                        </span>

                        <span className="total-cart">
                            <span className="total-cart-text">Total</span>
                            <span className="total-cart-price">$ {total}</span>
                        </span>
                    </div>

                    <footer>
                        <Button
                            label="Confirm"
                            handleSubmit={handleSubmit}
                        />
                    </footer>
                </Fragment>
                ) : (
                <div className="product-list">
                    <h2
                        style={{marginBottom: '50px'}}
                    >Cart entry
                    </h2>
                    <footer>
                        <Button
                            label="Back to shop"
                            type="link"
                            url="/"
                        />
                    </footer>
                 </div>
                )}
        </>
    );
}

export default Cart;