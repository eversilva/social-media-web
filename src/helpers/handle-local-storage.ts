export const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {

     const data = window?.localStorage?.getItem(key)

     return JSON.parse(data!)
  }
}

export const setLocalStorage = (key: string, value: unknown) => {
  if (typeof window !== 'undefined') {

    const data = JSON.stringify(value)

    return window?.localStorage?.setItem(key, data)
  }
}

export const removeLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return window?.localStorage?.removeItem(key)
  }
}