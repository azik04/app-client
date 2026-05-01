import { useEffect, useState } from "react";
import { getUserId } from "../../../../services/JwtService";
import api from "../../../../services/api";
import "./style.css"
import PrimaryPop from "../../../../components/Pop/PrimaryPop/PrimaryPop";
import AddressForm from "../AdressForm/AddressForm";
import AddressInfo from "../AddressInfo/AddressInfo";

const AddressList = ({ itemName, itemButtonName }) => {
    const [data, setData] = useState([]);
    const [createAddress, setCreateAddress] = useState(false)

    const fetchData = async () => {
        const clientId = getUserId()

        try {
            const res = await api.get(`Address/account/${clientId}`)
            if (res.data.success === true) {
                setData(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const [activeId, setActiveId] = useState(null);

    const toggle = (id) => {
        setActiveId(prev => prev === id ? null : id);
    };

    return (
        <>
            <div className="address-list">

                <div className="address-list__header">
                    <h3 className="address-list__title">Address</h3>

                    <div className="address-list__actions">
                        <button className="address-list__button btn btn-dark" onClick={() => setCreateAddress(true)}>New Address</button>
                    </div>
                </div>

                <ul className="address-list__list">
                    {data.length === 0 ? (
                        <li className="address-list__item">
                            <div className="address-list__card">
                                <div className="address-list__row">
                                    <span className="address-list__text fs-6">
                                        No addresses available
                                    </span>
                                </div>
                            </div>
                        </li>
                    ) : (
                        data.map(item => (
                            <li key={item.id} className="address-list__item">

                                <div className="address-list__card">

                                    <div className="address-list__row">
                                        <span className="address-list__text fs-6">
                                            {item.address}
                                        </span>

                                        <button className="address-list__toggle btn btn-sm" onClick={() => toggle(item.id)}>
                                            <i className={`fa-solid ${activeId === item.id ? "fa-arrow-down" : "fa-arrow-right"}`}></i>
                                        </button>
                                    </div>

                                    {activeId === item.id && (
                                        <div className="address-list__info">
                                            <AddressInfo activeId={activeId} fetchData={fetchData} />
                                        </div>
                                    )}

                                </div>

                            </li>
                        ))
                    )}
                </ul>

            </div>

            {createAddress && (
                <PrimaryPop header="Create Address" onClose={() => setCreateAddress(false)}>
                    <AddressForm onClose={() => setCreateAddress(false)} fetchData={fetchData} />
                </PrimaryPop>
            )}
            
        </>
    )
}

export default AddressList;