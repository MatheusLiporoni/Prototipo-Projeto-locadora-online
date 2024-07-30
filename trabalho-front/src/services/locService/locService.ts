
import api from "../api";

interface RegisterParams {
    name: string;
    phone: string;
    email: string;
    cnpj_cpf: string;
    estado: string;
    cidade: string;
    endereco:string;
    password: string;
}

interface LoginParams{
    email: string
    password: string
}

const authService = {
    locRegister: async (params: RegisterParams) => {
        try {
            const res = await api.post("/newLocadora", params);
            return res;
        } catch (error: any) {
            return {
                data: error.response ? error.response.data : null,
                status: error.response ? error.response.status : 500,
                message: error.message,
            };
        }
    },

    Login: async (params: LoginParams) => {
       try {
        const res = await api.post("/loginLoc", params);
        if(res.status === 200){
            sessionStorage.setItem('key' , res.data.token)
        }

        return res
       } catch (error: any) {
        return {
            data: error.response ? error.response.data : null,
            status: error.response ? error.response.status : 500,
            message: error.message,
        };
    }
        
       
        
       
    }
};

export default authService;
