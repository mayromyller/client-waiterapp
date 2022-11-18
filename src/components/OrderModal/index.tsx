import x from '../../assets/images/close-icon.svg'
import { Order } from '../../types/Order'
import { formatPrice } from '../../utils/formatPrice'

import * as S from './style'

type OrderModalProps = {
  visible: boolean
  orders: Order | null
  onCloseModal: () => void
}

export function OrderModal({ visible, orders, onCloseModal }: OrderModalProps) {
  if (!visible || !orders) {
    return null
  }

  const total = orders.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity
  }, 0)

  return (
    <S.Container>
      <S.Box>
        <header>
          <strong>{orders.table}</strong>

          <button type="button" onClick={onCloseModal}>
            <img
              src={x}
              alt="Close button"
              aria-label="Icon for close button"
            />
          </button>
        </header>

        <S.Info>
          <small>Status do Pedido</small>
          <div>
            <span>
              {orders.status === 'WAITING' && '🕑️'}
              {orders.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {orders.status === 'DONE' && '✅'}
            </span>
            <strong>
              {orders.status === 'WAITING' && 'Fila de Espera'}
              {orders.status === 'IN_PRODUCTION' && 'Preparando'}
              {orders.status === 'DONE' && 'Pronto'}
            </strong>
          </div>
        </S.Info>

        <S.OrderDetails>
          <small>Items</small>

          <div>
            {orders.products.map((order) => (
              <S.OrderBox key={order._id}>
                <img
                  src={`http://localhost:3333/uploads/${order.product.imagePath}`}
                  alt={order.product.name}
                />
                <div>
                  <small>{order.quantity}x</small>

                  <S.Group>
                    <strong>{order.product.name}</strong>
                    <small className="price">
                      {formatPrice(order.product.price)}
                    </small>
                  </S.Group>
                </div>
              </S.OrderBox>
            ))}
          </div>

          <S.Resume>
            <small>Total</small>
            <strong>{formatPrice(total)}</strong>
          </S.Resume>
        </S.OrderDetails>

        <S.Footer>
          <button className="done">
            <small>✅</small>
            Concluir pedido
          </button>

          <button>Cancelar pedido</button>
        </S.Footer>
      </S.Box>
    </S.Container>
  )
}
