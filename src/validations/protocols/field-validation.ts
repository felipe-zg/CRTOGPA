export interface FieldValidation{
  field: string
  validate: (fieldValue: number) => Error
}
