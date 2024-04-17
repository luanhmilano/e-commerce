import React from 'react'

const Cart = ({carItems}) => {
  return (
    <div>
      <h1>Carrinho</h1>
      {carItems.length === 0 ? (<p>Não há itens no carrinho.</p>) : (
        <>
          {carItems.map((item) => (
            <p>{item.name}</p>
          ))}
        </>
      )}
    </div>
  )
}

export default Cart