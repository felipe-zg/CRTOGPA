export interface Converter<T, R> {
  convert: (grade: T) => R
}
