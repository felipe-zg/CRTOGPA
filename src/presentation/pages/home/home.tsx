import React, { useState, useEffect } from 'react'
import Context from '@/presentation/context/form/form-context'
import * as S from './styles'

import { Input } from '@/presentation/components'
import { ValidationComposite } from '@/validations/validation-composite/validation-composite'
import { Converter } from '@/domain/use-cases'

type Gpa = {
  scale: number
  grade: string
}

type HomeProps = {
  validation: ValidationComposite
  converter: Converter<number, Gpa>
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
    <S.Home>
      <S.Header>
        <h1>CRToGPA</h1>
      </S.Header>
      <Context.Provider value={{ state, setState }}>
        <S.Form onSubmit={handleSubmit}>
          <h2>Seu CR</h2>

          <Input type="number" step="any" max="10" name="cr" />
          <S.Error>{state.crError}</S.Error>

          <S.Button type="submit" disabled={!!state.crError}>
            Converter
          </S.Button>

          <S.Result bg={state.gpa ? state.gpa.bg : undefined}>
            <p>{state.gpa ? state.gpa.scale.toFixed(2) : '-'}</p>
          </S.Result>

          {state.gpa && (
            <h3>
              {state.gpa.scale >= 2.7 ? 'Parabéns ! ' : ''} Seu GPA é{' '}
              {state.gpa.grade}
            </h3>
          )}
        </S.Form>
      </Context.Provider>

      <footer className="footer">
        <p>&copy; 2020</p>
        <p>created by Felipe zeba</p>
      </footer>
    </S.Home>
  )
}

export default home
