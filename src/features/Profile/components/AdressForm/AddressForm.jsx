import { useState } from "react";
import "./style.css"
import { getUserId } from "../../../../services/JwtService";
import api from "../../../../services/api";
import Input from "../../../../components/Input/Input";
import DialogButton from "../../../../components/Button/DialogButton/DialogButton";
import MapContainer from "../../../../components/MapContainer/MapContainer";

const AddressForm = ({ onClose, fetchData }) => {
    const [error, setError] = useState({});
    const [form, setForm] = useState({
        name: "",
        address: "",
        lan: 0,
        lng: 0,
        appId: ""
    });
    const clientId = getUserId();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            appId: clientId,
            [name]: value
        }));
    };

    const submit = async (e) => {
        e.preventDefault()

        try {
            const res = await api.post("Address", form)
            if (res.data.success === true) {
                fetchData()
                onClose()
            }
        } catch (error) {
            setError(error.response.data.errors)
            console.log(error.response.data.errors)
        }
    }

    return (
        <form onSubmit={submit}>
            <div className="row">
                <Input col="col-12" labelFor="name" label="Name" id="name" type="text" onChange={handleChange} value={form.name} name="name" placeholder="Enter your name" error={error?.Name?.[0]} />
            </div>

            <MapContainer form={form} setForm={setForm} errors={error.Address} />

            <DialogButton onClose={onClose} />
        </form>
    )
}

export default AddressForm;