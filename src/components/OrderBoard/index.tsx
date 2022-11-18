import { useState } from 'react'
import { Order } from '../../types/Order'
import { OrderModal } from '../OrderModal'

import * as S from './style'

type OrderItemProps = {
  label: string
  icon?: string
  orders: Order[]
}

export function OrderBoard({ label, icon, orders }: OrderItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  function handleOpenOrderModal(order: Order) {
    setIsVisible(true)
    setSelectedOrder(order)
  }

  function handleCloseOrderModal() {
    setIsVisible(false)
  }

  return (
    <S.Board>
      <OrderModal
        visible={isVisible}
        orders={selectedOrder}
        onCloseModal={handleCloseOrderModal}
      />

      <S.Header>
        <span>{icon}</span>
        <strong>{label}</strong>
        <span>({orders.length})</span>
      </S.Header>

      <S.Order>
        {orders.map((order) => (
          <button
            type="button"
            key={order._id}
            onClick={() => handleOpenOrderModal(order)}
          >
            <strong>Mesa {order.table}</strong>
            <span>{order.products.length} itens</span>
          </button>
        ))}
      </S.Order>
    </S.Board>
  )
}
