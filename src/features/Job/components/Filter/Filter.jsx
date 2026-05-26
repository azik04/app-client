import "./style.css"
import Input from "../../../../components/Input/Input";

const Filter = () => {
    return (
        <div className="filter mb-4">
            <div className="row">
                <Input col="col-6 col-md-4 col-lg-3" labelFor="name" label="Name" id="name" type="text" name="name" placeholder="Enter your name" error="" />

                <Input col="col-6 col-md-4 col-lg-3" labelFor="name" label="Name" id="name" type="text" name="name" placeholder="Enter your name" error="" />

                <Input col="col-6 col-md-4 col-lg-3" labelFor="name" label="Name" id="name" type="text" name="name" placeholder="Enter your name" error="" />

                <Input col="col-6 col-md-4 col-lg-3" labelFor="name" label="Name" id="name" type="text" name="name" placeholder="Enter your name" error="" />

                <Input col="col-6 col-md-4 col-lg-3" labelFor="name" label="Name" id="name" type="text" name="name" placeholder="Enter your name" error="" />
                
                <Input col="col-6 col-md-4 col-lg-3" labelFor="name" label="Name" id="name" type="text" name="name" placeholder="Enter your name" error="" />

                <Input col="col-6 col-md-4 col-lg-3" labelFor="name" label="Name" id="name" type="text" name="name" placeholder="Enter your name" error="" />

                <Input col="col-6 col-md-4 col-lg-3" labelFor="name" label="Name" id="name" type="text" name="name" placeholder="Enter your name" error="" />

            </div>
        </div>
    );
}

export default Filter;