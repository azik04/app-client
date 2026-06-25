import { useEffect, useState } from "react";
import DialogButton from "../../../../components/Button/DialogButton/DialogButton";
import Input from "../../../../components/Input/Input";
import { getClientId, getUserId } from "../../../../services/JwtService";
import api from "../../../../services/api";
import Select from "../../../../components/Select/Select";
import Textarea from "../../../../components/TextArea/Textarea";

const JobForm = ({ onClose }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const [addressId, setAddressId] = useState(0);
    const [serviceId, setServiceId] = useState(0);
    const [addressList, setAddressList] = useState([]);
    const [serviceList, setServiceList] = useState([]);
    const [error, setError] = useState({});

    const fetchAddress = async () => {
        const appId = getUserId();
        const res = await api.get(`Address/account/${appId}`)
        setAddressList(res.data.data)
    }

    const fetchService = async () => {
        const res = await api.get(`Service`)
        setServiceList(res.data.data)
    }

    useEffect(() => {
        fetchAddress()
        fetchService()
    }, [])

    const submit = async (e) => {
        e.preventDefault();

        const clientId = getClientId()

        const formData = new FormData();
        formData.append("name", name)
        formData.append("description", description)
        formData.append("file", file)
        formData.append("serviceId", serviceId)
        formData.append("addressId", addressId)
        formData.append("clientId", clientId)

        try {
            const res = await api.post("Job", formData);
            if (res.data.success === true) {
                fetchData()
                onClose()
            }
        } catch (err) {
            setError(err.response.data.errors)
        }
    }


    return (
        <form onSubmit={submit}>
            <div className="row">
                <Input col="col-6" labelFor="name" label="Name" id="name" type="text" onChange={e => setName(e.target.value)} value={name} name="name" placeholder="Enter your name" error={error.Name?.[0]}/>

                <Input col="col-6" labelFor="name" label="Name" id="name" type="file" onChange={e => setFile(e.target.files[0])} name="file" error={error.file?.[0]} />

                <Select col="col-6" label="Address" id="address" value={addressId} name="addressId" onChange={e => setAddressId(e.target.value)} options={addressList} />

                <Select col="col-6" label="Service" id="service" value={serviceId} name="serviceId" onChange={e => setServiceId(e.target.value)} options={serviceList} />

                <Textarea col="col-12" label="Description" id="description" value={description} name="description" onChange={e => setDescription(e.target.value)} placeholder="Enter your description" />
            </div>

            <DialogButton onClose={onClose} />
        </form>
    )
}

export default JobForm;