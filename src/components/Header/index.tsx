import logoIMG from '../../assets/images/logo.svg'

import * as S from './style'

export function Header() {
  return (
    <S.Container>
      <S.Box>
        <div>
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img
          src={logoIMG}
          alt="Um homem e uma  mulher (garçons), cada um segurando uma bandeja. "
        />
      </S.Box>
    </S.Container>
  )
}
