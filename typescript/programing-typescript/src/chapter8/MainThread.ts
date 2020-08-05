import {fork} from 'child_process'

const child = fork('./ChildThread.js')

child.on('message', data =>
  console.info('child process sent a message', data)
)

child.send({type: 'syn', data: [3]})