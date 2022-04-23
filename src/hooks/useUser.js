import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

/*Actions*/
import { setUser } from "../actions/UserActions";

const useUser = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { Post } = useAxios();

  const Login = async (userName) => {
    let result = await Post("Home/Login", userName);
    dispatch(setUser(result));

    if (result.isEmployee) {
      navigator("/EmployeesZone");
    } else {
      navigator("/");
    }
  };

  const LogOut = async () => {
    dispatch(setUser(null));
  };

  return {
    Login,
    LogOut,
  };
};

export default useUser;
