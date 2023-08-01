type PythonCommand = 'keyboard.press_and_release'|'time.sleep'|'keyboard.write'
export type Command = { command: PythonCommand, key: string }

export type TypeOfCommand = 'pressAndRelease'|'timeSleep'|'write'


