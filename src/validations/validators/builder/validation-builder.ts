import { FieldValidation } from '@/validations/protocols'
import { RequiredFieldValidation, CRFormatValidation } from '@/validations/validators'

export class ValidationBuilder {
  private constructor(
    readonly fieldName: string,
    readonly validations: FieldValidation[]
  ) {}

  static field(field: string): ValidationBuilder {
    return new ValidationBuilder(field, [])
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  cr(): ValidationBuilder {
    this.validations.push(new CRFormatValidation(this.fieldName))
    return this
  }

  build(): FieldValidation[] {
    return this.validations
  }
}
