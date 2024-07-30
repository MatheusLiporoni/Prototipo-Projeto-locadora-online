
import api from "../api";
interface FormData {
    name: string;
    idade: string;
    dataNascimento: string;
    email: string;
    password: string;
    phone: string;
    cpf: string;
  }

interface LoginParams{
    email: string
    password: string
}



const ClienteService = {
    clientRegister: async (params: FormData) => {
        try {
            const res = await api.post("/newUser", params);
            return res;
        } catch (error: any) {
            return {
                data: error.response ? error.response.data : null,
                status: error.response ? error.response.status : 500,
                message: error.message,
            };
        }
    },
    LoginCli: async (params: LoginParams) => {
        try {
         const res = await api.post("/logincli", params);
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
}

export default ClienteService;