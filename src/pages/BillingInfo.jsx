import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/elements/Button'
import Dropdown from '../components/elements/Dropdown'
import Input from '../components/elements/Input'
import Layout from '../components/Layout'
import styles from "../styles/BillingInfo.module.scss"
import { cardTypes } from '../utils/constants'

const BillingInfo = () => {
    const navigate = useNavigate()
    const next = (e) => {
        e.preventDefault()
        navigate("/confirm-payment")
    }
    const cancel = (e) => {
        e.preventDefault()
        navigate("/personal-info")
        
    }
  return (
    <Layout activeTab={1}>
     <form action="" className={styles.form} onSubmit={next}>
         <Input placeholder={"Enter name on card"} label="Name on Card" required type="text" />
         <Dropdown placeholder={"Enter card type"} label="Card Type" required options={cardTypes}/>
         <div className={styles.bottomFields}>
         <Input placeholder={"1234   5678   9012   3456"} label="Card details" required inputType={"cardNo"} />
         <Input placeholder={"01  /  99"} label="Expiry date" required inputType={"date"} />
         <Input placeholder={"123"} label="CVV" required inputType={"cvv"} />
         </div>
         <div className={styles.bottomButtons}>
             <Button>Next</Button>
             <button className={styles.cancel} onClick={cancel}>Cancel Payment</button>
         </div>
     </form>
    </Layout>
  )
}

export default BillingInfo