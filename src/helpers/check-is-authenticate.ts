import { getLocalStorage } from "./handle-local-storage"

export const checkIsAuthenticate = () => {
    const token = getLocalStorage('token')
    const payload = getLocalStorage('user-persist')

    if (token === null || payload === null) {
        return false
    }

    if (payload?.exp < Date.now() / 1000) {
        return false
    }

    return true
}
