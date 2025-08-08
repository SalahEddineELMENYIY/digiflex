import LoginForm from "../components/login/loginForm";

export default function Login() {
    return (
        <div>
            <h1 className="text-3xl text-cyan-800 first-letter:capitalize pb-16">
                Login
            </h1>
            <LoginForm />
        </div>
    );
}
