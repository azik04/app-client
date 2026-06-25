import { useEffect, useState } from "react";
import Input from "../../../../components/Input/Input";
import { getUserId } from "../../../../services/JwtService";
import DialogButton from "../../../../components/Button/DialogButton/DialogButton";
import api from "../../../../services/api";

const UpdateUser = ({ onClose, fetchData }) => {
    const [file, setFile] = useState(null)
    const [form, setForm] = useState({
        id: "",
        phoneNumber: "",
        name: "",
        surname: "",
        file: null
    })

    const userId = getUserId()

    const handleChange = (e) => {
        const { name, value, files } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: name === "file" ? files[0] : value
        }))
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await api.get(`Account/id/${userId}`)
                if (res.data.success === true) {
                    setForm(prev => ({
                        ...prev,
                        id: res.data.data.id,
                        name: res.data.data.name,
                        surname: res.data.data.surname,
                        phoneNumber: res.data.data.phoneNumber
                    }))
                }
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [userId])

    const update = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("id", form.id);
        formData.append("name", form.name);
        formData.append("surname", form.surname);
        formData.append("phoneNumber", form.phoneNumber);

        if (form.file) {
            formData.append("file", form.file);
        }

        try {
            const res = await api.put(`Account/id/${userId}`, formData)
            if (res.data.success === true) {
                fetchData()
                onClose()
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={update}>
            <div className="row">
                <Input col="col-6 col-md-4" labelFor="name" label="Name" id="name" type="text" onChange={handleChange} value={form.name} name="name" placeholder="Enter your name" error="" />

                <Input col="col-6 col-md-4" labelFor="surname" label="Surname" id="surname" type="text" onChange={handleChange} value={form.surname} name="surname" placeholder="Enter your surname" error="" />

                <Input col="col-6 col-md-4" labelFor="phoneNumber" label="Phone Number" id="phoneNumber" type="text" onChange={handleChange} value={form.phoneNumber} name="phoneNumber" placeholder="Enter your Phone Number" error="" />

                <Input col="col-12" labelFor="file" label="Select the Photo" id="file" value={form.fileName} type="file" onChange={handleChange} name="file" placeholder="Enter your file" error="" />
                <span>{}</span>
            </div>

            <DialogButton onClose={onClose} />
        </form>
    )
}

export default UpdateUser;