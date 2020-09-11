import { FieldValidation } from '@/validations/protocols'
import { InvalidCRFormatError } from '@/domain/errors'

export class NumberValidation implements FieldValidation<string> {
  constructor(readonly field: string) {}
  validate(value: string): Error {
    const regex = /^[+-]?\d+(\.\d+)?$/
    return !value || regex.test(String(value))
      ? null
      : new InvalidCRFormatError()
  }
}
