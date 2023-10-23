import { setLocalStorage } from '@/helpers/handle-local-storage';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import api from '@/services/api';
import { login } from '@/services/auth';

type Props = {
    email: string,
    password: string,
}

export const fetchAuthLogin = async ({ email, password }: Props) => 
    new Promise(async (resolve, reject) => {
        await api({
            method: "post",
            url: `/auth/login`,
            data: {
                email,
                password,
            },
        })
        .then(response => {
            const { accessToken } = response.data
            login(accessToken)
            resolve(response)
        })
        .catch(error => {
            reject(error)
        })     
    })
