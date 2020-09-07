export class ConvertionError extends Error {
  constructor() {
    super('Erro ao converter CR')
    this.name = 'ConvertionError'
  }
}
