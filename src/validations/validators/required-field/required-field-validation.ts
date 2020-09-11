import { FieldValidation } from '@/validations/protocols'
import { RequiredFieldError } from '@/validations/errors'

export class RequiredFieldValidation implements FieldValidation<string> {
  constructor(readonly field: string) {}
  validate(value: string): Error {
    return value ? null : new RequiredFieldError()
  }
}
