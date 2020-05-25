import * as Axios from "axios";

const apiFirebase = Axios.create({
    baseURL:'https://livemovie-5152b.firebaseio.com/'
})
export default apiFirebase;