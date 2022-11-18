import styled from 'styled-components'

export const Container = styled.div`
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div`
  background: #fff;
  width: 480px;
  height: auto;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }
  }

  button {
    line-height: 0;
    border: none;
    background: transparent;
  }
`

export const Info = styled.div`
  margin-top: 1.5rem;

  small {
    font-size: 14px;
    opacity: 0.8;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-top: 8px;
  }
`

export const OrderDetails = styled.div`
  margin-top: 32px;

  small {
    font-weight: 500;
    font-size: 14px;
    color: #333;
    opacity: 0.8;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }
`

export const OrderBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  img {
    width: 48px;
    height: 40px;
    border-radius: 6px;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: flex-start;
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .price {
    font-weight: 400;
    font-size: 14px;
    color: #666666;
    display: block;
  }
`

export const Resume = styled.footer`
  display: flex;
  margin-top: 1.5rem;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  small {
    font-weight: 500;
    font-size: 14px;
    color: #333333;
    opacity: 0.8;
  }

  strong {
    font-weight: 600;
    font-size: 16px;
    color: #333333;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;

  button {
    width: 100%;
    padding: 24px 0;
    font-weight: 600;
    font-size: 16px;
    color: #d73035;
    background: transparent;
    transition: filter 0.3s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .done {
    background: #333333;
    border-radius: 48px;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`
