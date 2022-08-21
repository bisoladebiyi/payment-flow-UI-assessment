import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.png";
import styles from "../styles/App.module.scss";
import BillingInfo from "./BillingInfo";
import ConfirmPayment from "./ConfirmPayment";
import PersonalInfo from "./PersonalInfo";
import PurchaseComplete from "./PurchaseComplete";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/personal-info");
    }
  }, [navigate]);

  return (
    <div className="App">
      <img src={bg} className={styles.background} alt="" />
      <svg
        className={styles.carret}
        width="12"
        height="9"
        viewBox="0 0 12 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.824524 0.683391C0.635739 0.436204 0.330027 0.436204 0.141382 0.683391C-0.0469851 0.930578 -0.0472636 1.3311 0.141382 1.57884L5.65899 8.81119C5.84763 9.05838 6.15307 9.05838 6.34157 8.81119L11.8586 1.57885C12.047 1.3311 12.0473 0.930949 11.8586 0.683393C11.67 0.436205 11.3643 0.436205 11.1756 0.683392L6.00028 7.2793L0.824524 0.683391Z"
          fill="#4E598C"
        />
      </svg>

      <Routes>
        <Route exact path="/personal-info" element={<PersonalInfo />} />
        <Route path="/billing-info" element={<BillingInfo />} />
        <Route path="/confirm-payment" element={<ConfirmPayment />} />
        <Route path="/purchase-complete" element={<PurchaseComplete />} />
      </Routes>
    </div>
  );
}

export default App;
