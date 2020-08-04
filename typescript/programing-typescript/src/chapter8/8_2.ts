// readFile型のシグネチャ
// function readFile(
//   path: string,
//   options: {encoding: string, flag?: string},
//   callback: (err: Error | null, data: string | null) => void
// ): void
import * as fs from 'fs'

// ファイル読み込み
fs.readFile(
  './test.log',
  {encoding: 'utf8'},
  (error, data) => {
    if (error) {
      console.error('error reading!', error)
      return
    }
    console.info('success reading!', data)
  }
)

// ファイル書き込み
fs.appendFile(
  './write.log',
  'New access log entry',
  error => {
    if (error) {
      console.error('error writing!', error)
    }
  })