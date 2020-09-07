import { Converter } from '@/domain/use-cases'

export class ConvertCRToGPA implements Converter {
  convert(cr: number): number {
    return 4 * cr / 10
  }
}
