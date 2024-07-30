import api from "../api";

interface RegisterParams{
    locid: number
    preco: string
    modelo:string
    marca: string
    grupo: string

}

export type CarType = {
    preco: string
    modelo:string
    marca: string
    grupo: string
    situation:boolean

}

interface locid{
    locid:number
}
    



const carService = {
    postCar: async (params: RegisterParams) => {
        try {
            const res = await api.post("/newCar/:id", params);
            return res;
        } catch (error: any) {
            return {
                data: error.response ? error.response.data : null,
                status: error.response ? error.response.status : 500,
                message: error.message,
            };
        }
    },

    getCarsloc: async () => {
        try {
            const res = await api.get("/cars")
            return res.data
            
        } catch (error: any) {
                console.log(error)
        }
    },
    getMyCars: async (locid:number) => {
        try {
            const res = await api.get(`/mycars/${locid}`)
            return res.data
            
        } catch (error:any) {
            console.log(error)
            
        }
    }

    
}




export default carService