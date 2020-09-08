import { FieldValidation } from '@/validations/protocols/field-validation'

export class FieldValidationSpy implements FieldValidation {
  error: Error = null

  constructor(readonly field: string) {}

  validate(fieldName: number): Error {
    return this.error
  }
}
