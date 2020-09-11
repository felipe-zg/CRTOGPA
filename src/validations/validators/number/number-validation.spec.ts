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
})
