const totalPrice = (product) => {
        let totalPrice = 0;
            product.forEach(item => {
                    const totalQuantity = item?.quantity || 1;
                    totalPrice = totalPrice + (item.price * totalQuantity);
                    if(item?.additional){
                        item.additional.forEach(el => {
                            if(el?.selected){
                                totalPrice = totalPrice + el.price
                            }
                        })
                    }
                })
        return totalPrice ? totalPrice.toFixed(2) : 0;
}

export default totalPrice;