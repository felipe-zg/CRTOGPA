import { FieldValidation } from '@/validations/protocols'
import {
  RequiredFieldValidation,
  CRFormatValidation
} from '@/validations/validators'
import { NumberValidation } from '../number/number-validation'

export class ValidationBuilder {
  private constructor(
    readonly fieldName: string,
    readonly validations: Array<FieldValidation<any>>
  ) {}

  static field(field: string): ValidationBuilder {
    return new ValidationBuilder(field, [])
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  number(): ValidationBuilder {
    this.validations.push(new NumberValidation(this.fieldName))
    return this
  }

  cr(): ValidationBuilder {
    this.validations.push(new CRFormatValidation(this.fieldName))
    return this
  }

  build(): Array<FieldValidation<any>> {
    return this.validations
  }
}
