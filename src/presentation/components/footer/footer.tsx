import React, { memo } from 'react'

import * as S from './styles'

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <p>&copy; 2020</p>
      <p>created by Felipe zeba</p>
    </S.Footer>
  )
}

export default memo(Footer)
