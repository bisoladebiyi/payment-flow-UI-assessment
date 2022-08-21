import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/elements/Button";
import Layout from "../components/Layout";
import styles from "../styles/ConfirmPayment.module.scss";

const ConfirmPayment = () => {
  const navigate = useNavigate();

  const next = (e) => {
    e.preventDefault();
    navigate("/purchase-complete");
  };
  const cancel = (e) => {
    e.preventDefault();
    navigate("/personal-info");
  };

  return (
    <Layout activeTab={2}>
      <div className={styles.receipt}>
        <div className={styles.receipt_header}>
          <p>Item Name</p>
          <p>₦ Price</p>
        </div>
        <div>
          <div className={styles.receipt_content}>
            <div>
              <p>Data science and usability</p>
              <p className={styles.price}>50,000.00</p>
            </div>
            <div>
              <p>Shipping</p>
              <p>0.00</p>
            </div>
          </div>
          <div className={styles.receipt_total}>
            <p>Total</p>
            <p className={styles.price}>50,000.00</p>
          </div>
        </div>
      </div>
      <div className={styles.bottomButtons}>
        <Button onClick={next}>Pay</Button>
        <button onClick={cancel} className={styles.cancel}>
          Cancel Payment
        </button>
      </div>
    </Layout>
  );
};

export default ConfirmPayment;
