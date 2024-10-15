import React from "react";
import { useSelector } from "react-redux";
import "./UserInfo.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function UserInfo() {
  return (
    <div className="user-info_container">
      <ContactInformation />
      <ShippingAddress />
    </div>
  );
}

function ContactInformation() {
  return (
    <div className="contact-info_container">
      <h3>Contact Information</h3>
      <input type="email" placeholder="Email" />
    </div>
  );
}

function ShippingAddress() {
  const { cartList } = useSelector((state) => state.cart);

  function checkoutHandler() {
    if (cartList.length < 1) {
      toast.error("Your shopping list is Emtpy");
      return;
    }
    let totalPrice = cartList.reduce((acc, cur) => {
      return acc + cur.qty * cur.price;
    }, 0);
    if (totalPrice < 1) {
      toast.error("Cannot process order value of zero(0).");
      return;
    }
    toast.success("Checked out");

    // Redirect to the home page after 5 seconds
    setTimeout(() => {
      window.location.href = "/"; // Change the window location to the home page
    }, 2000); // 5000 milliseconds = 5 seconds
  }

  return (
    <div className="shipping-address_container">
      <h3>Shipping Address</h3>
      <div className="shipping-address_wrapper">
        <input type="name" placeholder="First name" id="firstname" />
        <input type="name" placeholder="Last name" id="lastname" />
        <input type="name" placeholder="Address" id="address" />
        <input type="name" placeholder="City" id="city" />
        <button className="checkout-btn mt-3" onClick={checkoutHandler}>
          Checkout
        </button>

      </div>
    </div>
  );
}

export default UserInfo;
