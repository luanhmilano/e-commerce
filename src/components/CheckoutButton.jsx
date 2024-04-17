import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CheckoutButton = ({carItems, setCarItems}) => {

  const navigate = useNavigate()

  const handleCheckout = () => {
    if(carItems.length > 0) {
      toast.success("Compra finalizada com sucesso!")

      navigate("/thank-you", { state: { carItems } })

      setCarItems([])
    } else {
      toast.error("Seu carrinho está vazio.")
    }
  }

  return (
    <button onClick={handleCheckout}>Finalizar Compra</button>
  )
}

export default CheckoutButton