import { useEffect, useState } from "react";
import DialogPop from "../../components/Pop/DialogPop/DialogPop";
import api from "../../services/api";
import PagedFooter from "../../components/PagedFooter/PagedFooter";

const Admin = () => {
    const [data, setData] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [hasNextPage, setHasNextPage] = useState(false);
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [pageSize, setPageSize] = useState(15);
    const [pageNumber, setPageNumber] = useState(1);
    const [banPop, setBanPop] = useState(false)
    const [activeId, setActiveId] = useState(null)

    const fetchData = async () => {
        const res = await api.get(`Account/get-all?pageNumber=${pageNumber}&pageSize=${pageSize}`)
        if (res.data.success === true) {
            setData(res.data.data)
            setHasNextPage(res.data.hasNextPage)
            setHasPrevPage(res.data.hasPrevPage)
            setPageNumber(res.data.pageNumber)
            setPageSize(res.data.pageSize)
            setTotalCount(res.data.totalCount)
        }
    }

    useEffect(() => {
        fetchData()
    }, [pageNumber, pageSize])

    const banUser = async () => {
        const res = await api.patch(`Account/id/${activeId}`)
    }

    return (
        <div className="container">
            <div className="card shadow-sm border-0 rounded">
                <div className="card-body p-3">

                    <div className="text-center mt-1 mb-4">
                        <h4 className>User Management</h4>
                    </div>

                    <div className="table-responsive">
                        <table className="table align-middle table-hover rounded border m-0">
                            <thead className="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>

                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((user, index) => (
                                    <tr key={user.id}>
                                        <td className="fw-semibold">{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td className="text-muted">{user.email}</td>
                                        <td className="text-muted">{user.phoneNumber}</td>

                                        <td className="text-end">
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => { setBanPop(true); setActiveId(user.id) }}>Ban</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <PagedFooter totalCount={totalCount} hasNextPage={hasNextPage} hasPrevPage={hasPrevPage} pageNumber={pageNumber} pageSize={pageSize} setPageNumber={setPageNumber} setPageSize={setPageSize} />
                    </div>

                </div>
            </div>

            {banPop && <DialogPop header="Ban User" remove={banUser} text={"user"} onClose={() => setBanPop(false)} />}
        </div>
    );
};

export default Admin;