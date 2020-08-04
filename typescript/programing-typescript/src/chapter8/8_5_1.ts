interface Emitter {
  // イベントを送信します
  emit(channel: string, value: unknown): void

  // イベントが送信された時に何かを行います
  on(channel: string, f: (value: unknown) => void): void
}

import redis from 'redis'

let client = redis.createClient()

client.on('ready', () => console.info('Client is ready'))
client.on('error', e => console.error('An error occurred!', e))
client.on('reconnecting', params => console.log('Reconnecting...', params))

// type RedisClient = {
//   on(event: 'ready', f: () => void): void
//   on(event: 'reconnecting', f: (params: {attempt: number, delay: number}) => void): void
// }

type Events =  {
  ready: void
  error: Error
  reconnecting: {attempt: number, delay: number}
}

// type RedisClient = {
//   on<E extends keyof Events>(
//     event: E,
//     f: (arg: Events[E]) => void
//   ): void
// }

type RedisClient = {
  on<E extends keyof Events>(
    event: E,
    f: (arg: Events[E]) => void
  ): void
  emit<E extends keyof Events>(
    event: E,
    arg: Events[E]
  ): void
}