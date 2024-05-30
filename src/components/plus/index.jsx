import { CiCirclePlus } from "react-icons/ci";
import "./Plus.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../context/slice/countSlice";

const Plus = () => {
    const count = useSelector((state) => state.count.value);
    const [inc, setInc] = useState(localStorage.getItem("count") || "");
    const dispatch = useDispatch();


    return (
        <div className="plus">
            <input
                maxLength={10}
                value={inc}
                onChange={(e) => setInc(e.target.value)}
                type="number"
                placeholder="Enter number"
            />
            <button disabled={count >= 100000000} onClick={() => dispatch(increment(+inc || 1))} className="plus__btn">
                <CiCirclePlus />
            </button>
        </div>
    );
};

export default Plus;
