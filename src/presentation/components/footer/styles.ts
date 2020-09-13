import styled from 'styled-components'
import { background, text } from '@/presentation/styles/colors'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 0.5rem 0 0.2rem 0;
  background: ${background.bgPrimaryDark};

  p {
    color: ${text.white};
    font-size: 0.8rem;
  }
`
