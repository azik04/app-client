import { useEffect, useState } from "react"
import api from "../../../../services/api";
import Input from "../../../../components/Input/Input";
import MapContainer from "../../../../components/MapContainer/MapContainer";
import SecondaryButton from "../../../../components/Button/SecondaryButton/SecondaryButton";
import DialogPop from "../../../../components/Pop/DialogPop/DialogPop";

const AddressInfo = ({ activeId, fetchData }) => {
    const [removePop, setRemovePop] = useState(false);
    const [form, setForm] = useState({
        name: "",
        address: "",
        lat: 0,
        lng: 0,
    });

    const fetchDataById = async () => {
        try {
            const res = await api.get(`Address/id/${activeId}`)
            if (res.data.success === true) {
                setForm({
                    name: res.data.data.name,
                    address: res.data.data.address,
                    lat: res.data.data.lat,
                    lng: res.data.data.lng
                });
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!activeId) return;

        fetchDataById()
    }, [activeId])


    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const updateMap = async (e) => {
        e.preventDefault()

        const res = await api.put(`Address/id/${activeId}`, form)
    }

    const removeAddress = async (e) => {
        try {
            e.preventDefault()
            const res = await api.delete(`Address/id/${activeId}`)
            if (res.data.success === true) {
                fetchData()
                setRemovePop(false)
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="address-info">
            <form onSubmit={updateMap}>
                <div className="row">
                    <Input col="col-12 col-md-6" labelFor="name" value={form.name} label="Name" id="name" type="text" onChange={handleChange} name="name" placeholder="Enter your Address Name" />
                </div>

                <MapContainer form={form} setForm={setForm} />
                
                <SecondaryButton setRemovePop={setRemovePop} />
            </form>

            {removePop && (<DialogPop remove={removeAddress} header="Remove Address" text="address" onClose={() => setRemovePop(false)} />)}
        </div>
    )
}

export default AddressInfo;