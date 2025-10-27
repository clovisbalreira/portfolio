import { acrescentarZero } from './acrescentarZero.js'

export function formatarData(data){
  return `${acrescentarZero(data.getDate())}/${acrescentarZero(data.getMonth() + 1)}/${data.getFullYear()}`
}