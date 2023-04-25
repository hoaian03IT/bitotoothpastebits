import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { publicRoutes } from "~/config/routePath";
import "~/styles/SignInScreen.scss";

function SignInScreen() {
    return (
        <div className="sign-in">
            <Form className="text-center">
                <h1 className="fw-bold">Login</h1>
                <Form.Group>
                    <Form.Control type="text" placeholder="Email" required />
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Button type="submit">Submit</Button>
                <Link to={publicRoutes.signUp} className="link-sign-up">
                    Sign Up here
                </Link>
            </Form>
        </div>
    );
}

export { SignInScreen };
