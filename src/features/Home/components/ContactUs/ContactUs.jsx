import { useState } from "react"
import api from "../../../../services/api"
import Input from "../../../../components/Input/Input"
import Textarea from "../../../../components/TextArea/Textarea"

const ContactUs = () => {
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState({})

    const post = async () => {
        try {
            const res = await api.post("ContactUs", {
                email,
                fullName,
                title,
                description
            })

        } catch (err) {
            console.log(err)
            setError();
        }

    }
    return (
        <section class="py-5 bg-light">
            <div class="container">

                <h2 class="fw-semibold mb-5 text-dark">Contact Us</h2>

                <div class="row g-3">
                    <Input col="col-6" labelFor="name" label="Name" id="name" type="text" onChange={e => setName(e.target.value)} value={name} name="name" placeholder="Enter your name" error={error.Name?.[0]} />

                    <Input col="col-6" labelFor="email" label="Email" id="email" type="text" onChange={e => setEmail(e.target.value)} value={name} name="name" placeholder="Enter your email" error={error.Email?.[0]} />

                    <Input col="col-12" labelFor="title" label="Title" id="title" type="text" onChange={e => setTitle(e.target.value)} value={name} name="name" placeholder="Enter your title" error={error.Title?.[0]} />

                    <Textarea col="col-12" label="Description" id="description" name="description" onChange={e => setDescription(e.target.value)} placeholder="Enter your description" error={error.Description?.[0]}/>

                    <div class="col-12">
                        <button onClick={post} class="btn btn-dark btn-lg w-100">
                            Submit
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactUs