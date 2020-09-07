export class RequiredFieldError extends Error {
  constructor() {
    super('O campo é obrigatório')
    this.name = 'RequiredFieldError'
  }
}
