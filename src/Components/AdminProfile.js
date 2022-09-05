import {Link} from "react-router-dom";
import {
    MdSupervisedUserCircle,
    MdRestaurant,
    MdRestaurantMenu,
    MdOutlineReceipt,
    MdLogout,
  } from "react-icons/md";


  import { useNavigate} from "react-router-dom";
  import { useContext } from "react";
  import { UserContext } from "./userContext";


  function AdminProfile() {
  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout(){
   localStorage.removeItem("token");
   setUser(false);
   navigate("/");
  }


    return (
      <div className="flex justify-center space-x-2 my-5">
        <Link to="/account">
          <div className="bg-black p-5 rounded-full">
            <MdSupervisedUserCircle color="white" size="25" />
          </div>
        </Link>
        <Link to="/dashboard">
          <div className="bg-black p-5 rounded-full">
            <MdRestaurant color="white" size="25" />
          </div>
        </Link>
        <Link to="/incidents">
          <div className="bg-black p-5 rounded-full">
            <MdRestaurantMenu color="white" size="25" />
          </div>
        </Link>
        <Link to="/offenses">
          <div className="bg-black p-5 rounded-full">
            <MdOutlineReceipt color="white" size="25" />
          </div>
        </Link>
        <div className="bg-black p-5 rounded-full">
          <MdLogout color="white" size="25" />
        </div>
      </div>
    );
  }
  export default AdminProfile;