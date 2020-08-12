import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: #30336b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: light;
  color: #fff;
`

export const Description = styled.h2`
  font-size: 1.5rem;
  font-weight: lighter;
  color: #fff;
  margin-top: 2rem;
`

export const Illustration = styled.img`
  margin-top: 5rem;
  width: min(45rem, 100%);
`
