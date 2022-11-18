import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 1rem;
`

export const Board = styled.div`
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 1rem;

  header {
    padding: 8px;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    justify-content: center;
  }
`

export const Order = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;

  button {
    padding: 3rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(204, 204, 204, 0.4);
    width: 100%;
    background: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #f4f5f6;
    }

    & + button {
      margin-top: 1rem;
    }

    strong {
      font-weight: 500;
      font-size: 1rem;
    }

    span {
      font-size: 14;
      color: #666;
    }
  }
`
