import Box from "../../Box/Box";
import LoginForm from "./LoginForm/LoginForm";

export default function RightContainer() {
    return (
        <div>
            <Box>
                <LoginForm />
            </Box>
            <Box>
                Don't have an account? <span>Sign up</span>
            </Box>
            <div>Get the app.</div>
            <div>
                Buttons
            </div>
        </div>
    );
}