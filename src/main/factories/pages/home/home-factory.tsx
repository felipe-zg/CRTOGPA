import React from 'react'
import { Home } from '@/presentation/pages'
import { makeCrValidation } from '@/main/factories/pages/home/cr-validation-factory'

const makeHome: React.FC = () => {
  return <Home validation={makeCrValidation()} />
}

export default makeHome
