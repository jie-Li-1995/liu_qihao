import { addPercent, delPercent, addThousand, deleteThousand, NumberRound, money, getStrLen } from './math'
import { download, downloadFile } from './download'

class ccw {
  addPercent: ((point: any) => string) | undefined
  delPercent: ((point?: string) => number) | undefined
  addThousand: ((point?: number) => string) | undefined
  deleteThousand: ((str?: string) => number) | undefined
  money: ((value: string | number, currency?: string, decimals?: number) => string) | undefined
  NumberRound: ((point?: number) => number) | undefined
  download: ((url: string, name?: string, query?: string) => void) | undefined
  downloadFile: ((data: Blob, name: string, query?: string) => void) | undefined
  getStrLen: ((val: string) => number) | undefined
}

ccw.prototype.addPercent = addPercent
ccw.prototype.delPercent = delPercent
ccw.prototype.addThousand = addThousand
ccw.prototype.deleteThousand = deleteThousand
ccw.prototype.money = money
ccw.prototype.NumberRound = NumberRound
ccw.prototype.getStrLen = getStrLen
//
ccw.prototype.download = download
ccw.prototype.downloadFile = downloadFile

const $ccw: any = new ccw()

export default $ccw
