function chapter4_426() {

  // type MyEvent<T> = {
  //   target: T
  //   type: string
  // }
  
  // let buttonEvent: MyEvent<HTMLButtonElement> = {
  //   target: myButton,
  //   type: string
  // }

  // type MyEvent<T = HTMLElement> = {
  //   target: T
  //   type: string
  // }

  type MyEvent<T extends HTMLElement = HTMLElement> = {
    target: T
    type: string
  }

  let myEvent: MyEvent = {
    target: myElement,
    type: string
  }
}
