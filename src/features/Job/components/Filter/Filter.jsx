import "./style.css"
import Input from "../../../../components/Input/Input";
import Select from "../../../../components/Select/Select";
import { useEffect, useState } from "react";
import api from "../../../../services/api";

const Filter = ({setServiceId, serviceName}) => {
    const[serviceData, setServiceData] = useState();

    const fetchService = async() => {
        try{
            const res = await api.get("Service")
            setServiceData(res.data.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchService()
    },[])

    return (
        <div className="filter mb-4">
            <div className="row">
                <Select col="col-6 col-md-4 col-lg-3" label="Service" id="service" onChange={(e) => setServiceId(e.target.value)} name="service" options={serviceData} value={serviceName}/>

                <Input col="col-6 col-md-4 col-lg-3" labelFor="name" label="Name" id="name" type="text" name="name" placeholder="Enter your name" error="" />

                <Input col="col-6 col-md-4 col-lg-3" labelFor="name" label="Name" id="name" type="text" name="name" placeholder="Enter your name" error="" />

                <Input col="col-6 col-md-4 col-lg-3" labelFor="name" label="Name" id="name" type="text" name="name" placeholder="Enter your name" error="" />
            </div>
        </div>
    );
}

export default Filter;