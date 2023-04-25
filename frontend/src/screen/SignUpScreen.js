import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { publicRoutes } from "~/config/routePath";

import "~/styles/SignUpScreen.scss";

function SignUpScreen() {
    return (
        <div className="sign-up">
            <Form className="text-center">
                <h1 className="fw-bold">Register</h1>
                <Form.Group>
                    <Form.Control type="text" placeholder="Email" required />
                    <Form.Control type="password" placeholder="Password" required />
                    <Form.Control type="password" placeholder="Confirm password" required />
                </Form.Group>

                <Button type="submit">Create account</Button>
                <Link to={publicRoutes.signIn} className="link-sign-in">
                    Sign in here
                </Link>
            </Form>
        </div>
    );
}

export { SignUpScreen };
