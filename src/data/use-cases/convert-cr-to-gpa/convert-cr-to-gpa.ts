import { Converter } from '@/domain/use-cases'

type Gpa = {
  scale: number
  grade: string
}

export class ConvertCRToGPA implements Converter<number, Gpa> {
  gpa: Gpa

  constructor() {
    this.gpa = { scale: 0, grade: '' }
  }

  convert(cr: number): Gpa {
    this.gpa.scale = (4 * cr) / 10
    switch (true) {
      case this.gpa.scale >= 4.0:
        this.gpa.grade = 'A'
        break
      case this.gpa.scale >= 3.7:
        this.gpa.grade = 'A-'
        break
      case this.gpa.scale >= 3.3:
        this.gpa.grade = 'B+'
        break
      case this.gpa.scale >= 3.0:
        this.gpa.grade = 'B'
        break
      case this.gpa.scale >= 2.7:
        this.gpa.grade = 'B-'
        break
      case this.gpa.scale >= 2.3:
        this.gpa.grade = 'C+'
        break
      case this.gpa.scale >= 2.0:
        this.gpa.grade = 'C'
        break
      case this.gpa.scale >= 1.7:
        this.gpa.grade = 'C-'
        break
      case this.gpa.scale >= 1.3:
        this.gpa.grade = 'D+'
        break
      case this.gpa.scale >= 1.0:
        this.gpa.grade = 'D'
        break
      case this.gpa.scale >= 0.7:
        this.gpa.grade = 'D-'
        break
      default:
        this.gpa.grade = 'F'
    }
    return this.gpa
  }
}
