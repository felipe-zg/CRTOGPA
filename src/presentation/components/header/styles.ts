import styled from 'styled-components'
import { background, text } from '@/presentation/styles/colors'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100vw;
  background: ${background.bgPrimaryDark};

  h1 {
    font-family: 'Monoton', cursive;
    color: ${text.white};
    font-size: 1.7rem;
  }
`
