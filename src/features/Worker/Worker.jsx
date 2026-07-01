import { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "./components/Card";

const Worker = () => {
    const [pageSize, setPageSize] = useState(15)
    const [pageNumber, setPageNumber] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [totalPage, setTotalPage] = useState(0);
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const res = await api.get(`Account/get-all?pageNumber=${pageNumber}&pageSize=${pageSize}&roleId=a1234567-1111-1111-1111-111111111113`)
            console.log("DATA", res.data.data)
            if (res.data.success === true) {
                setHasNextPage(res.data.hasNextPage)
                setHasPrevPage(res.data.hasPrevPage)
                setTotalCount(res.data.totalCount)
                setTotalPage(res.data.totalPage)
                setData(res.data.data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [pageNumber, pageSize])

    return (
        <div className="container">
            <Card data={data}/>
        </div>
    )
}

export default Worker;