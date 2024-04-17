import React from 'react'
import CartItem from './CartItem'
import CheckoutButton from './CheckoutButton'

const Cart = ({carItems, onUpdateCart, onRemoveFromCart}) => {

  const totalPrice = carItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div>
      <h1>Carrinho</h1>
      {carItems.length === 0 ? (<p>Não há itens no carrinho.</p>) : (
        <>
          {carItems.map((item) => (
            <CartItem key={item.id} item={item} onUpdateCart={onUpdateCart} onRemoveFromCart={onRemoveFromCart} />
          ))}
          <div className="total">
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <CheckoutButton />
          </div>
        </>
      )}
    </div>
  )
}

export default Cart