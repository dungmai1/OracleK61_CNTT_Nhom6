import axios from 'axios'

const api = 'http://localhost:8080/order/'
class CheckoutService{
    createOrder(PMMT,address,token,data){
        return axios.post(`${api}create?payment_method=${PMMT}&address=${address}`,data, {
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });;
    }
}
export default new CheckoutService()