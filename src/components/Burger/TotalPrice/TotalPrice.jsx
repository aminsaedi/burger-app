import React from "react";
import './totalPrice.css'

const TotalPrice = ({ price,onClick }) => {
  return (
    <div className="totalPrice" >
       قیمت برگر : {price.toString().toPersianDigits()} تومن
      <button  className="totalPrice__button" onClick={onClick} >😜 ثبت سفارش</button>
    </div>
  );
};

export default TotalPrice;
