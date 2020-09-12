import React, { memo } from 'react'
import * as S from './styles'

const Header: React.FC = () => {
  return (
    <S.Header>
      <h1>CRToGPA</h1>
    </S.Header>
  )
}

export default memo(Header)
