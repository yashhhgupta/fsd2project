import Card from "./UI/Card";
import Button from "react-bootstrap/Button";
import classes from "./Signup.module.css";
const Login = () => {
  return (
    <Card className={classes.input}>
      <form>
        <label>Username</label>
        <input type="text" id="username" />
        <label>password</label>
        <input type="password" id="password" />
        <div class="text-center">
          <Button variant="light">Submit</Button>
        </div>
      </form>
    </Card>
  );
};
export default Login;
