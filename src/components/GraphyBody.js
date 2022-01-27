import {Card} from "react-bootstrap";
import downloadedImage from '../assets/download.jpg'
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../global/APIs";

export default function GraphyBody(props) {
    //states
    const [products, setProducts] = useState([])
    const [imageTerm, setImageTerm] = useState('happy')

    //fetching data from apis
    async function fetchDataFromGraphyServer() {
        await axios.get(BASE_URL + `search?q=${imageTerm}&api_key=dc6zaTOxFJmzC`).then(response => {
            setProducts(response.data.data)
        }).catch(e => {
            console.log(e)
        })
    }

    //hooks
    useEffect(() => {
        fetchDataFromGraphyServer()
    })

    //function body
    return (
        <>
            <br/>
            <div className="row">
                <Card style={{width: '20rem'}}>
                    <Card.Img variant="top" src={downloadedImage}/>
                </Card>
            </div>

        </>
    )
}
