import faker from 'faker'
import { ValidationBuilder as sut } from '@/validations/validators/builder/validation-builder'
import { RequiredFieldValidation } from '../required-field/required-field-validation'

describe('ValidationBuilder', () => {
  it('should return  RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validators = sut.field(field).required().build()
    expect(validators).toEqual([new RequiredFieldValidation(field)])
  })
})
