import faker from 'faker'
import { RequiredFieldValidation } from '@/validations/validators/required-field/required-field-validation'
import { RequiredFieldError } from '@/validations/errors'

type SutTypes = {
  sut: RequiredFieldValidation
}

const makeSut = (): SutTypes => {
  const sut = new RequiredFieldValidation(faker.database.column())
  return {
    sut
  }
}
describe('RequiredFieldValidation', () => {
  it('should return RequiredFieldError if field is empty', () => {
    const { sut } = makeSut()
    const result = sut.validate(undefined)
    expect(result).toEqual(new RequiredFieldError())
  })

  it('should return falsy if field is not empty', () => {
    const { sut } = makeSut()
    const result = sut.validate(String(faker.random.number()))
    expect(result).toBeFalsy()
  })
})
