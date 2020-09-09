import React from 'react'

import * as S from './styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const input: React.FC<Props> = (props: Props) => {
  return (
    <div className={S.inputWrapper}>
      <input {...props}/>
    </div>
  )
}

export default input
