import faker from 'faker'
import { InvalidCRFormatError } from '@/domain/errors'
import { CRFormatValidation } from '@/validations/validators/cr-format/cr-format-validation'

type SutTypes = {
  sut: CRFormatValidation
}

const makeSut = (): SutTypes => {
  const sut = new CRFormatValidation('cr')
  return {
    sut
  }
}

describe('CRFormatValidation', () => {
  it('should throw InvalidCRFormatError if cr format is invalid', () => {
    const { sut } = makeSut()
    const crResult = sut.validate(10.5)
    expect(crResult).toEqual(new InvalidCRFormatError())
  })

  it('should return falsy if cr format is valid', () => {
    const { sut } = makeSut()
    const crResult = sut.validate(faker.random.number({ min: 1, max: 10 }))
    expect(crResult).toBeFalsy()
  })
})
