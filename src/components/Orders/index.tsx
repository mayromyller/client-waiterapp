import { OrderBoard } from '../OrderBoard'

import { Order as OrderType } from '../../types/Order'

import * as S from './style'

const orders: OrderType[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '123',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668692877094-quatro-queijos.png',
          price: 40
        },
        quantity: 3,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1668694169829-coca-cola.png',
          price: 7
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f5'
      }
    ]
  }
]

export function Order() {
  return (
    <S.Container>
      <OrderBoard label="Fila de espera" icon="🕑️" orders={orders} />
      <OrderBoard label="Preparando" icon="👩‍🍳️" orders={[]} />
      <OrderBoard label="Pronto" icon="✅️" orders={[]} />
    </S.Container>
  )
}
