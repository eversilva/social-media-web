const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const checkIsValidEmail = (email: string) => regex.test(email)

export default checkIsValidEmail