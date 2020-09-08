import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: string

  validate(fieldNamme: string, fieldValue: number): string {
    return this.errorMessage
  }
}
