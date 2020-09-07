export class InvalidCRFormatError extends Error {
  constructor() {
    super('Formato de CR inválido')
    this.name = 'InvalidCRFormat'
  }
}
