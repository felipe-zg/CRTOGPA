export interface FieldValidation<T> {
  field: string
  validate: (fieldValue: T) => Error
}
