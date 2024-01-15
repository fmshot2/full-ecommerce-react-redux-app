import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const CheckoutSteps = ({ shipping, confirmOrder, payment}) => {
    const location = useLocation();

  return (
<div className="checkout_steps_area">
    {shipping ? <Link to='shipping' className={location.pathname == '/shipping' ? 'active' : 'complated'}>
        <i class="icofont-check-circled"></i> Billing
    </Link> : <Link to="#!" disabled><i class="icofont-check-circled"></i> Shipping</Link>}

    {confirmOrder ? <Link to='/order/confirm' className={location.pathname == '/order/confirm' ? 'active' : 'complated'}>
        <i class="icofont-check-circled"></i>Confirm Order</Link>
    : <Link to="#!" disabled><i class="icofont-check-circled"></i>Confirm Order
        </Link>}

    {payment ? <Link to='/payment!' className={location.pathname == '/payment' ? 'active' : 'complated'}><i class="icofont-check-circled"></i>Payment
    </Link> : <Link to="#!" disabled><i class="icofont-check-circled"></i>Payment
        </Link>}

</div>  )
}

export default CheckoutSteps