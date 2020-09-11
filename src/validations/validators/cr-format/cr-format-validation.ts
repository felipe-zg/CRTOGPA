import { FieldValidation } from '@/validations/protocols'
import { InvalidCRFormatError } from '@/domain/errors'

export class CRFormatValidation implements FieldValidation<number> {
  constructor(readonly field: string) {}
  validate(cr: number): Error {
    return cr <= 0 || cr > 10 ? new InvalidCRFormatError() : null
  }
}
