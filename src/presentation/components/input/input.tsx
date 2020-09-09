import React, { useContext } from 'react'
import Context from '@/presentation/context/form/form-context'

import * as S from './styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const getStatus = (): string => error ? '🔴' : '🟢'

  return (
    <div className={S.inputWrapper}>
      <input {...props} onChange={handleChange}/>
    </div>
  )
}

export default input
