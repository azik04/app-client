import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import PrimaryButton from "../../components/Button/PrimaryButton/PrimaryButton";

const SignUp = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(0);
    const [pin, setPin] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const post = async (e) => {
        e.preventDefault()

        try {
            const res = await api.post("Account/sign-up", { name, surname, email, phoneNumber, password, pin, role })

            if (res.data.success === true) {
                navigate(`/auth/check-mail?email=${email}&type=1`)
            }
        } catch (err) {
            setErrors(err.response.data?.errors)
        }
    }

    return (
        <form className="auth__form" onSubmit={post} class="d-flex flex-column gap-3">
            <div className="row">

                <Input col="col-6" labelFor="name" label="Name" id="name" type="text" onChange={e => setName(e.target.value)} name="name" placeholder="Enter your name" error={errors.Name?.[0]} />

                <Input col="col-6" labelFor="surname" label="Surname" id="surname" type="text" onChange={e => setSurname(e.target.value)} name="surname" placeholder="Enter your surname" error={errors.Surname?.[0]} />

                <Input col="col-12" labelFor="email" label="Email" id="email" type="text" onChange={e => setEmail(e.target.value)} name="email" placeholder="Enter your email" error={errors.Email?.[0]} />

                <Input col="col-6" labelFor="phoneNumber" label="Phone Number" id="phoneNumber" type="text" onChange={e => setPhoneNumber(e.target.value)} name="phoneNumber" placeholder="Enter your phone number" error={errors.PhoneNumber?.[0]} />

                <Input col="col-6" labelFor="passsword" label="Passsword" id="passsword" type="passsword" onChange={e => setPassword(e.target.value)} name="password" placeholder="Enter your passsword" error={errors.Password?.[0]} />

                <Select col="col-12" label="Select the Role" id="role" name="Role" value={role} onChange={e => setRole(Number(e.target.value))} options={[{ id: 1, name: "Client" }, { id: 2, name: "Worker" }]} error={errors.Role?.[0]} />

                {role === 2 && (<Input col="col-12" labelFor="pin" label="Pin" id="pin" type="text" onChange={e => setPin(e.target.value)} name="pin" placeholder="Enter your pin code" error={errors.Pin?.[0]} />)}

                <div class="d-flex align-items-center justify-content-between mb-3">
                    <a href="/auth" class="small">Already have an account ?</a>
                </div>
            </div>

            <PrimaryButton />
        </form>
    )
}

export default SignUp;