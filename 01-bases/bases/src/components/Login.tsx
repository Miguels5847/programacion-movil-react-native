import { useAuthContext } from "../Context/AuthContext"

export const Login = () => {
    const { saludo } = useAuthContext();

    return (
        <>
            <h3>Login</h3>
            <span>{saludo}</span>
        </>
    )
}
