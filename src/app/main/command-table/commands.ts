import { Command } from "src/app/shared/types/command.model";
export const alterKeys=[
  "alt","ctrl","tab","win","enter","space"
] as const
export type AlterKeys =  typeof alterKeys[number]

export const keyboardKeys = [
  '1','2','3','4','5','6','7','8','9','0',
  'q','w','e','r','t','y','u','i','o','p',
  'a','s','d','f','g','h','j','k','l','ñ',
  'z','x','c','v','b','n','m',
  'F1','F2','F3','F4','F5','F6','F7','F8',
  'F9','F10','F11','F12'
] as const

export type KeyboardKeys = typeof keyboardKeys[number]

export const commands:Command[] = [
  {
    command:"keyboard.press_and_release",
    key:"win"
  },
  {
    command:"keyboard.press_and_release",
    key:"enter"
  },
  {
    command:"time.sleep",
    key:"2"
  },
  {
    command:'keyboard.press_and_release',
    key:'ctrl'
  }
]
