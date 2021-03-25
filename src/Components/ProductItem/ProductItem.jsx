import React, {Fragment, useEffect, useState} from "react";

import './ProductItem.scss';
import arrowImg from "../../img/arrow.svg";

const ProductItem = ({
         id,
         parent,
         product,
         name,
         date,
         quantity,
         quantityStatus,
         price,
         arrow,
         addProduct,
         updateCount,
         children,
         selected
    }) => {
    const numberQuantity = Number(quantity);
    const [productQuantity, setProductQuantity] = useState(numberQuantity);
    const [statusCart, setStatusCart] = useState(selected);

    useEffect(() => {
        if(numberQuantity !== productQuantity){
            updateCount(id, productQuantity);
        }
    }, [productQuantity])

    const changeQuantity = (type) => {
        const updatedCount = type === "minus" ? productQuantity - 1 : productQuantity + 1;
        updatedCount > 0 && setProductQuantity(updatedCount);
    }

    const changeStatusCart = (e) => {
        const status = e.target.checked;
        setStatusCart(status);
        const choiceChildren = children ? parent : false;
        addProduct(product, status, choiceChildren);
    }

    return (
        <Fragment>
            <span className="product-item">
                <input
                    type="checkbox"
                    value={statusCart}
                    checked={!!statusCart}
                    onChange={changeStatusCart}
                />
                <span className="title-data-block">
                    {name &&
                        <span className="product-title-block">
                        <span className="small-text-top">
                            to:
                        </span>
                        <span className="product-title">
                            {name}
                        </span>
                    </span>}

                    {date &&
                        <span className="product-date">
                            {date}
                        </span>}
                </span>

                {quantity && quantityStatus &&
                    <span className="product-quantity">
                        <span
                            className="product-quantity-minus"
                            onClick={() => changeQuantity('minus')}
                        >-</span>
                        <span className="number-quantity">{productQuantity}</span>
                        <span
                            className="product-quantity-plus"
                            onClick={() => changeQuantity('plus')}
                        >+</span>
                    </span>}

                {price &&
                    <span className="product-price">$ {price}</span>
                }

                {arrow &&
                    <span className="single-product-arrow">
                         <img className="single-product-page" src={arrowImg} alt="product-page"/>
                    </span>
                }

                </span>
        </Fragment>);
        };

ProductItem.defaultProps = {
    selected: false,
    children: false,
    id: 0,
    parent: 0,
    product: {},
    name: '',
    date: '',
    quantity: 0,
    quantityStatus: true,
    price: 0,
    arrow: true,
    addProduct: () => {},
    updateCount: () => {},
}

export default ProductItem;