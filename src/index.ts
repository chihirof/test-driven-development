export function log(msg: string) {
  return msg + '*****'
}

const logMsg = log('hello ts world')
console.log(logMsg)