import React from 'react'
import CartItem from './CartItem'

const Cart = ({carItems, onUpdateCart}) => {
  return (
    <div>
      <h1>Carrinho</h1>
      {carItems.length === 0 ? (<p>Não há itens no carrinho.</p>) : (
        <>
          {carItems.map((item) => (
            <CartItem item={item} onUpdateCart={onUpdateCart} />
          ))}
        </>
      )}
    </div>
  )
}

export default Cart