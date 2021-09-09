import { addPercent, delPercent, addThousand, deleteThousand, NumberRound, money, getStrLen } from './math/index'
import { download, downloadFile } from './download/index'

// interface Ccw {
//   addPercent: ((point: any) => string) | undefined
//   delPercent: ((point?: string) => number) | undefined
//   addThousand: ((point?: number) => string) | undefined
//   deleteThousand: ((str?: string) => number) | undefined
//   money: ((value: string | number, currency?: string, decimals?: number) => string) | undefined
//   NumberRound: ((point?: number) => number) | undefined
//   download: ((url: string, name?: string, query?: string) => void) | undefined
//   downloadFile: ((data: Blob, name: string, query?: string) => void) | undefined
//   getStrLen: ((val: string) => number) | undefined
// }

const $ccw = {
  addPercent,
  delPercent,
  addThousand,
  deleteThousand,
  money,
  NumberRound,
  download,
  downloadFile,
  getStrLen
}

export default $ccw
