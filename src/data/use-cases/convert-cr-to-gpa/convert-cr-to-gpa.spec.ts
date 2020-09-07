import faker from 'faker'
import { ConvertCRToGPA } from '@/data/use-cases/convert-cr-to-gpa/convert-cr-to-gpa'

type SutTypes = {
  sut: ConvertCRToGPA
}

const makeSut = (): SutTypes => {
  const sut = new ConvertCRToGPA()
  return {
    sut
  }
}

describe('ConvertCRToGpa', () => {
  it('should return a GPA converted from the received CR', () => {
    const { sut } = makeSut()
    const cr = faker.random.number({ min: 1, max: 10 })
    const expectedGpa = 4 * cr / 10
    const gpa = sut.convert(cr)
    expect(gpa).toBe(expectedGpa)
  })
})
