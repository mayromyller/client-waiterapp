import styled from 'styled-components'

export const Container = styled.header`
  background-color: #d73035;
  height: 198px;

  display: flex;
  align-items: center;
  padding: 1rem;
`

export const Box = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1,
  h2 {
    color: #fff;
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-weight: 400;
    font-size: 1rem;
    opacity: 0.9;
    margin-top: 0.45rem;
  }
`
