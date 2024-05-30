import { useSelector } from "react-redux"
import "./Result.scss"
const Result = () => {
    let count = useSelector((state) => state.count.value)
    return (
        <div className="result">
            <h1>{count}</h1>
        </div>
    )
}

export default Result