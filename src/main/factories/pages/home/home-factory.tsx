import React from 'react'
import { Home } from '@/presentation/pages'
import { makeCrValidation } from '@/main/factories/pages/home/cr-validation-factory'
import { ConvertCRToGPA } from '@/data/use-cases/convert-cr-to-gpa/convert-cr-to-gpa'

const makeHome: React.FC = () => {
  return (
    <Home validation={makeCrValidation()} converter={new ConvertCRToGPA()} />
  )
}

export default makeHome
