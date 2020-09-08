import faker from 'faker'
import { FieldValidationSpy } from '@/validations/test'
import { ValidationComposite } from './validation-composite'

type SutTypes = {
  sut: ValidationComposite
  validationsSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string): SutTypes => {
  const validationsSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName)
  ]

  const sut = ValidationComposite.build(validationsSpy)

  return {
    sut,
    validationsSpy
  }
}

describe('ValidationComposite', () => {
  it('should return the first error found if any validation fails', () => {
    const field = faker.database.column()
    const { sut, validationsSpy } = makeSut(field)
    const errorMessage = faker.random.words()
    validationsSpy[0].error = new Error(errorMessage)
    validationsSpy[1].error = new Error(faker.random.words())
    const error = sut.validate(field, faker.random.number({ min: 1, max: 10 }))
    expect(error).toBe(errorMessage)
  })
})
