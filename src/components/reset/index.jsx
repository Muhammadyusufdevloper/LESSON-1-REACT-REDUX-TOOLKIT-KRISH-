import { GrPowerReset } from "react-icons/gr"
import "./Reset.scss"
import { useDispatch, useSelector } from "react-redux"
import { reset } from "../../context/slice/countSlice"

const Reset = () => {
    let count = useSelector((state) => state.count.value)
    let dispatch = useDispatch()
    return (
        <>
            <div>
                <button disabled={count <= 0} onClick={() => dispatch(reset())} className="reset">
                    <GrPowerReset />
                </button>
            </div>
        </>
    )
}

export default Reset