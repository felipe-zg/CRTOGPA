import React from 'react'

import { ValidationComposite } from '@/validations/validation-composite/validation-composite'
import { ValidationBuilder } from '@/validations/validators/builder/validation-builder'

export const makeCrValidation = (): ValidationComposite => {
  return ValidationComposite.build([
    ...ValidationBuilder.field('cr').required().cr().build()
  ])
}
