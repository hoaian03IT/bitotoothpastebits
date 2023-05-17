import { useContext, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { publicRoutes } from "~/config/routePath";
import { Store } from "~/data/Store";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "~/data/actions/userActions";
import { loginApi } from "~/data/api";
import "~/styles/SignInScreen.scss";

function SignInScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { state, dispatch } = useContext(Store);
    const { user: userState } = state;

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch({ type: USER_LOGIN_REQUEST });
        try {
            const response = await loginApi({ email, password });
            dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });

            // navigate
            navigate(publicRoutes.home);
        } catch (error) {
            dispatch({ type: USER_LOGIN_FAIL, payload: error?.response?.data || error.message });
        }
    };

    return (
        <div className="sign-in">
            <Form className="text-center">
                <h1 className="fw-bold">Login</h1>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button type="submit" onClick={handleSubmit}>
                    {userState.loading ? <Spinner animation="border" size="sm" variant="dark" /> : "Submit"}
                </Button>
                <Link to={publicRoutes.signUp} className="link-sign-up">
                    Sign Up here
                </Link>
            </Form>
        </div>
    );
}

export { SignInScreen };
