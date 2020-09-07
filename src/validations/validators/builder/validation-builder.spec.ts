import faker from 'faker'
import { ValidationBuilder as sut } from '@/validations/validators/builder/validation-builder'
import { RequiredFieldValidation, CRFormatValidation } from '@/validations/validators'

describe('ValidationBuilder', () => {
  it('should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validators = sut.field(field).required().build()
    expect(validators).toEqual([new RequiredFieldValidation(field)])
  })

  it('should return CRFormatValidation', () => {
    const field = faker.database.column()
    const validators = sut.field(field).cr().build()
    expect(validators).toEqual([new CRFormatValidation(field)])
  })

  it('should return a list of validations', () => {
    const field = faker.database.column()
    const validators = sut.field(field).required().cr().build()
    expect(validators).toEqual([
      new RequiredFieldValidation(field),
      new CRFormatValidation(field)
    ])
  })
})
