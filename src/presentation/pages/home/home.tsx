import React, { useState, useEffect } from 'react'
import Context from '@/presentation/context/form/form-context'
import * as S from './styles.scss'

import { Input } from '@/presentation/components'
import { ValidationComposite } from '@/validations/validation-composite/validation-composite'
import { Converter } from '@/domain/use-cases'

type HomeProps = {
  validation: ValidationComposite
  converter: Converter
}

const home: React.FC<HomeProps> = ({ validation, converter }: HomeProps) => {
  const [state, setState] = useState({
    cr: 0,
    gpa: undefined,
    crError: '',
    errorMessage: ''
  })

  useEffect(() => {
    setState({
      ...state,
      crError: validation.validate('cr', state.cr)
    })
  }, [state.cr])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setState({
      ...state,
      gpa: converter.convert(state.cr)
    })
  }

  return (
    <div className={S.home}>
      <header className={S.header}>
        <h1>LOGO</h1>
      </header>
      <Context.Provider value={{ state, setState }}>
        <form className={S.form} onSubmit={handleSubmit}>
          <h2>Seu CR</h2>

          <Input type="number" step="any" name="cr" />
          <p className={S.error}>{state.crError}</p>

          <button type="submit" className={S.submit} disabled={!!state.crError}>
            Converter
          </button>

          <div className={S.convertionResult}>
            <p>{state.gpa || '-'}</p>
          </div>

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
