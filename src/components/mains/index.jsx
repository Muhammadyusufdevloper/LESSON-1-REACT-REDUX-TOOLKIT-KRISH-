import { CiCircleMinus } from "react-icons/ci"
import "./Mains.scss"
import { useDispatch, useSelector } from "react-redux"
import { decrement } from "../../context/slice/countSlice"
import { useEffect, useState } from "react"

const Mains = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.count.value)
    const [dec, setDec] = useState("")
    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    return (
        <>
            <div className="mains">
                <input value={dec} onChange={(e) => setDec(e.target.value)} type="number" placeholder="Enter number" />
                <button disabled={count <= dec} onClick={() => dispatch(decrement(+dec || 1))} className="mains__btn"><CiCircleMinus /></button>
            </div>
        </>
    )
}

export default Mains