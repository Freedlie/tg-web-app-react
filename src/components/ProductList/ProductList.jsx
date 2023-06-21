import React, {useState} from 'react';

import css from './PrudoctList.module.css';
import ProductItem from "../../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";

const products = [
    {
        id: 1,
        title: "Футболка",
        description: "Короткорукава футболка з оригінальним принтом",
        price: 19.99
    },
    {
        id: 2,
        title: "Джинси",
        description: "Класичні джинси зі зношеним ефектом",
        price: 49.99
    },
    {
        id: 3,
        title: "Сукня",
        description: "Елегантна сукня для особливих випадків",
        price: 79.99
    },
    {
        id: 4,
        title: "Світшот",
        description: "Зручний світшот з капюшоном",
        price: 39.99
    },
    {
        id: 5,
        title: "Шорти",
        description: "Легкі шорти для спорту і відпочинку",
        price: 29.99
    },
    {
        id: 6,
        title: "Плаття",
        description: "Літнє плаття з квітковим малюнком",
        price: 59.99
    },
    {
        id: 7,
        title: "Сорочка",
        description: "Класична сорочка з довгими рукавами",
        price: 34.99
    },
    {
        id: 8,
        title: "Куртка",
        description: "Стильна куртка зі штучного хутра",
        price: 99.99
    },
    {
        id: 9,
        title: "Спортивні штани",
        description: "Штани для активного спорту",
        price: 44.99
    },
    {
        id: 10,
        title: "Сарафан",
        description: "Модний сарафан зі спідницею-сонце",
        price: 69.99
    }
];

const getTotalPrice = (items = []) => {
    return items.reduce((acc,item) => {
       return acc += item.price
    },0)
}

const ProductList = () => {

    const [addedItems, setAddedItems] = useState([]);

    const {tg} = useTelegram();

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else{
            newItems = [...addedItems, product]
        }
        setAddedItems(newItems);

        if(newItems.length === 0){
            tg.MainButton.hide();
        } else{
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Buy ${getTotalPrice(newItems)}`
            })
        }
    }


    return (
        <div className={css.list}>
            {products.map(item =>(
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={css.item}
                />
            ))}
        </div>
    );
};

export default ProductList;