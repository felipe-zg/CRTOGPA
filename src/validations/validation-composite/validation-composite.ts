import { Validation } from '@/presentation/protocols/validation'
import { FieldValidation } from '../protocols'

export class ValidationComposite implements Validation {
  private constructor(readonly validators: Array<FieldValidation<any>>) {}

  static build(validators: Array<FieldValidation<any>>): ValidationComposite {
    return new ValidationComposite(validators)
  }

  validate(fieldName: string, fieldValue: number): string {
    const validators = this.validators.filter((v) => v.field === fieldName)

    for (const validator of validators) {
      const error = validator.validate(fieldValue)
      if (error) return error.message
    }
  }
}
