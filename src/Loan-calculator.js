import { useState } from "react";
import styles from "./Loan-calculator.module.css";
export default function LoanCalculator() {
    const [loanFormData, setLoanFormData] = useState({
        loanAmount: "",
        loanTerm: "",
        interestRate: "",
    });
    const [monthlyPayment, setMonthlyPayment] = useState("");
    const [totalPayment, setTotalPayment] = useState("");
    const [totalInterest, setTotalInterest] = useState("");
    const [amountDetails, setAmountDetails] = useState({
        mmp: "",
        tpa: "",
        tip: "",
    });
    function handleOnChange(e) {
        const { name, value } = e.target;
        setLoanFormData((prev) => ({ ...prev, [name]: value }));
    }
    function calcute(e) {
        e.preventDefault();
        // another way to get form data instead of value and onchange
        const data = new FormData(e.target);
        const loanAmount = parseFloat(data.get("loan-amount"));
        const monthlyInterestRate =
            parseFloat(data.get("interest-rate")) / 100 / 12;
        const loanTermInMonths = parseFloat(data.get("loan-term")) * 12;
        // const monthlyInterestRate = loanFormData.interestRate / 12;
        // const loanAmount = loanFormData.loanAmount;
        // const totalNumberOfPayments = loanFormData.loanTerm * 12;
        // const monthlyMortgage =
        //     (loanAmount *
        //         (monthlyInterestRate *
        //             Math.pow(1 + monthlyInterestRate, totalNumberOfPayments))) /
        //     (Math.pow(1 + monthlyInterestRate, totalNumberOfPayments) - 1);
        // setAmountDetails((prev) => ({ ...prev, mmp: monthlyMortgage }));
        // console.log(loanFormData);
    }
    return (
        <>
            <form className={styles.form} onSubmit={calcute}>
                <div>
                    <label htmlFor='loanAmount'>Loan Amount:</label>
                    <input
                        name='loanAmount'
                        type='number'
                        id='loanAmount'
                        // value={loanFormData.loanAmount}
                        // onChange={handleOnChange}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor='loanTerm'>Loan Term:</label>
                    <input
                        name='loanTerm'
                        type='number'
                        id='loanTerm'
                        // value={loanFormData.loanTerm}
                        // onChange={handleOnChange}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor='interestRate'>Interest rate:</label>
                    <input
                        name='interestRate'
                        type='number'
                        id='interestRate'
                        // value={loanFormData.interestRate}
                        // onChange={handleOnChange}
                        required
                    ></input>
                </div>
                <button type='submit'>Calculate</button>
            </form>
            <p>Monthly mortgage payment:{amountDetails.mmp}</p>
            <p>Total payment amount:{amountDetails.tpa}</p>
            <p>Total interest paid:{amountDetails.tip}</p>
        </>
    );
}
