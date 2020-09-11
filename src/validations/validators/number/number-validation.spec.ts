import faker from 'faker'
import { InvalidCRFormatError } from '@/domain/errors'
import { NumberValidation } from '@/validations/validators'

type SutTypes = {
  sut: NumberValidation
}

const makeSut = (): SutTypes => {
  const sut = new NumberValidation('cr')
  return {
    sut
  }
}

describe('CRFormatValidation', () => {
  it('should throw InvalidCRFormatError if value is not a valid number', () => {
    const { sut } = makeSut()
    const result = sut.validate('9..4')
    expect(result).toEqual(new InvalidCRFormatError())
  })

  it('should return falsy if value is a valid number', () => {
    const { sut } = makeSut()
    const result1 = sut.validate(
      String(faker.random.number({ min: 4.1, max: 4.9 }))
    )
    const result2 = sut.validate(
      String(faker.random.number({ min: 1, max: 10 }))
    )
    expect(result1).toBeFalsy()
    expect(result2).toBeFalsy()
  })

  it('should return falsy if value is empty', () => {
    const { sut } = makeSut()
    const result = sut.validate('')
    expect(result).toBeFalsy()
  })
})
