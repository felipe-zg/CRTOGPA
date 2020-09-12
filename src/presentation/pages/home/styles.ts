import styled from 'styled-components'
import { background, button, text } from '../../styles/colors'

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background: #fdd;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: ${background.bgPrimary};
  align-items: center;
  padding: 1rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;

  h2 {
    font-size: 2.2rem;
    align-self: flex-start;
  }

  h3 {
    font-size: 1.4rem;
    margin-top: 2rem;
    text-align: center;
  }

  @media (min-width: 700px) {
    padding: 3rem;
  }

  @media (min-width: 1100px) {
    width: 60vw;
    padding: 2rem 10rem;

    h2 {
      font-size: 3.6rem;
    }

    h3 {
      font-size: 1.8rem;
    }
  }
`

export const Error = styled.p`
  color: ${text.red};
  margin-top: 1rem;
  font-size: 1rem;

  @media (min-width: 700px) {
    margin-top: 1.2rem;
    font-size: 1.2rem;
  }

  @media (min-width: 1100px) {
    margin-top: 1.6rem;
  }
`

export const Button = styled.button`
  width: 100vw;
  max-width: 100%;
  margin-top: 2rem;
  border-radius: 25px;
  line-height: 50px;

  &:disabled {
    background-color: ${button.backgroundDisabled};
    color: ${button.colorDisabled};
    &:hover {
      opacity: 1;
    }
  }

  @media (min-width: 1100px) {
    width: 50vw;
    max-width: 50%;
    margin-top: 5rem;
    border-radius: 25px;
  }
`

export const Result = styled.div<{ bg: string }>`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  padding: 0.8rem;
  width: 100vw;
  max-width: 100%;
  border-radius: 25px;
  background: ${(props) => props.bg || background.bgSecondary};

  p {
    font-size: 1.5rem;
    color: ${text.white};
  }

  @media (min-width: 1100px) {
    padding: 1.2rem;
    border-radius: 25px;
  }
`
