import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/elements/Button";
import Dropdown from "../components/elements/Dropdown";
import Input from "../components/elements/Input";
import Layout from "../components/Layout";
import styles from "../styles/PersonalInfo.module.scss"
import { states } from "../utils/constants";

const PersonalInfo = () => {
    const navigate = useNavigate()
    const next = (e) => {
        e.preventDefault()
        navigate("/billing-info")
    }
    const cancel = (e) => {
        e.preventDefault()
        navigate("/")
        
    }
  return (
    <Layout activeTab={0}>
     <form action="" className={styles.form} onSubmit={next}>
         <Input placeholder={"Enter name"} label="Name" required type="text" />
         <Input placeholder={"Enter email address"} label="Email" required type={"email"}/>
         <Input placeholder={"Enter address"} label="Address 1" required type="text" />
         <Input placeholder={"Enter address"} label="Address 2" type="text" />
         <div className={styles.bottomFields}>
         <Input placeholder={"Enter local government"} label="Local Government" type="text" />
         <Dropdown placeholder={"Select state"} label="State" options={states} />
         </div>
         <div className={styles.bottomButtons}>
             <Button>Next</Button>
             <button className={styles.cancel} onClick={cancel}>Cancel Payment</button>
         </div>
     </form>
    </Layout>
  );
};

export default PersonalInfo;
