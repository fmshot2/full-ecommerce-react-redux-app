import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutSteps = ({ shipping, confirmOrder, payment}) => {
  return (
<div className="checkout_steps_area">
    {shipping ? <Link to='#!' className='active'>
        <i class="icofont-check-circled"></i> Billing
    </Link> : <Link to="/shipping" disabled><i class="icofont-check-circled"></i> Shipping</Link>}

    {confirmOrder ? <Link to='#!' className='active'>
        <i class="icofont-check-circled"></i>Confirm Order</Link>
    : <Link to="/order/confirm" disabled><i class="icofont-check-circled"></i>Confirm Order
        </Link>}

    {payment ? <Link to='#!' className='active'><i class="icofont-check-circled"></i>Payment
    </Link> : <Link to="/payment" disabled><i class="icofont-check-circled"></i>Payment
        </Link>}

</div>  )
}

export default CheckoutSteps