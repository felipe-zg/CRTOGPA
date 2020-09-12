import { Converter } from '@/domain/use-cases'
import { background } from '@/presentation/styles/colors'

type Gpa = {
  scale: number
  grade: string
  bg: string
}

export class ConvertCRToGPA implements Converter<number, Gpa> {
  gpa: Gpa

  constructor() {
    this.gpa = { scale: 0, grade: '', bg: '' }
  }

  convert(cr: number): Gpa {
    this.gpa.scale = (4 * cr) / 10
    switch (true) {
      case this.gpa.scale >= 4.0:
        this.gpa.grade = 'A'
        this.gpa.bg = background.bgGreen
        break
      case this.gpa.scale >= 3.7:
        this.gpa.grade = 'A-'
        this.gpa.bg = background.bgGreen
        break
      case this.gpa.scale >= 3.3:
        this.gpa.grade = 'B+'
        this.gpa.bg = background.bgBlue
        break
      case this.gpa.scale >= 3.0:
        this.gpa.grade = 'B'
        this.gpa.bg = background.bgBlue
        break
      case this.gpa.scale >= 2.7:
        this.gpa.grade = 'B-'
        this.gpa.bg = background.bgBlue
        break
      case this.gpa.scale >= 2.3:
        this.gpa.grade = 'C+'
        this.gpa.bg = background.bgYellow
        break
      case this.gpa.scale >= 2.0:
        this.gpa.grade = 'C'
        this.gpa.bg = background.bgYellow
        break
      case this.gpa.scale >= 1.7:
        this.gpa.grade = 'C-'
        this.gpa.bg = background.bgYellow
        break
      case this.gpa.scale >= 1.3:
        this.gpa.grade = 'D+'
        this.gpa.bg = background.bgRed
        break
      case this.gpa.scale >= 1.0:
        this.gpa.grade = 'D'
        this.gpa.bg = background.bgRed
        break
      case this.gpa.scale >= 0.7:
        this.gpa.grade = 'D-'
        this.gpa.bg = background.bgRed
        break
      default:
        this.gpa.grade = 'F'
        this.gpa.bg = background.bgRed
    }
    return this.gpa
  }
}
