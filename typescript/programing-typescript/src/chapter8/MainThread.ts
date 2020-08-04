import { Worker } from "worker_threads"

const worker = new Worker('WorkerScript.js')

worker.onmessage = e => {
  console.log(e.data)
}
worker.postMessage('some data')