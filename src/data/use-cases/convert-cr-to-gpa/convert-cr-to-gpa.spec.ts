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
    const gpa = sut.convert(7.5)
    expect(gpa).toBe(3)
  })
})
