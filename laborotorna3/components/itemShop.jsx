import React, {useState} from "react"; 
import { ModalItem } from "./itemShopModal";
export const ItemShop = ({nameItem, price, srcPicture, description}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="product-item">
                <img src={srcPicture} alt="pictures"/>
                <div className="product-list">
                    <h3>{nameItem}</h3>
                    <span className="price">{price} UAH</span>
                    <a className="button" onClick={() => setIsOpen(true)}>Придбати</a>
                    {isOpen && <ModalItem isOpen={setIsOpen}
                    nameItem = {nameItem} price= {price}
                    srcPicture = {srcPicture} 
                    description = {description}
                    />}
                </div>
            </div>
        </>
    );

};