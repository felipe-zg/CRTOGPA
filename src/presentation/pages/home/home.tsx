import React, { useState, useEffect } from 'react'
import Context from '@/presentation/context/form/form-context'
import * as S from './styles.scss'

import { Input } from '@/presentation/components'
import { ValidationComposite } from '@/validations/validation-composite/validation-composite'

type HomeProps = {
  validation: ValidationComposite
}

const home: React.FC<HomeProps> = ({ validation }: HomeProps) => {
  const [state, setState] = useState({
    cr: 0,
    crError: '',
    errorMessage: ''
  })

  useEffect(() => {
    setState({
      ...state,
      crError: validation.validate('cr', state.cr)
    })
  }, [state.cr])

  return (
    <div className={S.home}>
      <header className={S.header}>
        <h1>LOGO</h1>
      </header>
      <Context.Provider value={{ state, setState }}>
        <form className={S.form}>
          <h2>Seu CR</h2>

          <Input type="text" name="cr" />

          <button type="button" className={S.submit}>
            Converter
          </button>

          <div className={S.convertionResult}>
            <p>3.7</p>
          </div>
          <p>{state.crError}</p>

          <h3>Parabéns ! Seu GPA é ótimo</h3>
        </form>
      </Context.Provider>

      <footer className="footer">
        <p>created by Felipe zeba</p>
      </footer>
    </div>
  )
}

export default home
