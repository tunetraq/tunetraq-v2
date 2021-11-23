import { useDispatch } from "react-redux"
import { login } from "../src/redux/actions/auth.action";

function LoginRequest({heading, info, icon}) {

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login())
    };


    return (
        <div className="px-5 max-w-sm">
            <div className="flex items-center space-x-1">
                <h1 className="uppercase text-sm font-bold text-gray-800">{heading}</h1>
                {icon}
            </div>
            <p className="text-xs text-gray-400">{info}, <button onClick={handleLogin} className="cursor-pointer text-blue-500">click here</button> to sign in with Google</p>
        </div>
    )
}

export default LoginRequest
