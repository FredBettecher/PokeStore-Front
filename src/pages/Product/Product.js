import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
    const { _id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5008/${_id}`)
            .then(resp => setSaleOff(resp.data))
            .catch(err => console.log("Algo de errado não está certo. Erro " + err));
    }, []);
}