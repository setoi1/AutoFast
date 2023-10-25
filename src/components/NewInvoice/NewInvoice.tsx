import { useState } from 'react';

import './NewInvoice.css';

export default function NewInvoice() {

  const [profit, setProfit] = useState(0);

  function calculateTotal() {
    const labor: number = document.getElementById('labor');
    const parts: number = document.getElementById('labor');
    const totalCost: number = document.getElementById('labor');

    const profit = labor + parts + totalCost;

    setProfit(profit);

    return profit
  }



  return (
    <>
      <h1>New Invoice</h1>
      <form action='submit' method='post' id='new-invoice-form'>
        <div id='new-invoice-container'>
          <label>Date</label>
          <input type='date' name='date' id='date' required />

          <label>Name</label>
          <input type='text' name='name' id='name' required />
          
          <label>Phone Number</label>
          <input type='tel' name='date' id='date' required />

          <label>Payment</label>
          <select name='payment-type' id='payment-type'>
            <option value='cash'>Cash</option>
            <option value='check'>Check</option>
            <option value='credit'>Credit</option>
          </select>

          <label>Paid</label>

          <h2>Cost</h2>

          <label>Labor</label>
          <input type='number' name='labor' id='labor-field' required />

          <label>Parts</label>
          <input type='number' name='parts' id='parts-field' required />

          <label>Total</label>

          <label>Profit</label>
          {profit}
          
          <input type='submit' value='Create' />
        </div>
      </form>
    </>
  )
}