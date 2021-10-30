//inside app password change
import React,{ useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { updatePasswordAction } from "../../../actions/user";



const ChangePassword = () => {
//   const { push } = useHistory();
  const [state, setState] = useState({
    current: "",
    newPassword: "",
    userId: null,
  });
  const dispatch = useDispatch();
  	const user = useSelector((state) => state.user);
      // console.log(user)



  const updatePassword = (e) => {
    e.preventDefault();
    dispatch(
      updatePasswordAction({
        current: state.current,
        newPassword: state.newPassword,
        userId: user._id,
      })
    );
     setState({ ...state, current: "", newPassword: "" });
  };

  return 3 === 3 ? (
    <div className="container mt-100">
      <Helmet>
        <title>Update Password</title>
        <meta name="description" content="update the user password" />
      </Helmet>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <div className="row ml-minus-15 mr-minus-15">
        <div className="col-3 p-15">
          <Sidebar />
        </div>
        <div className="col-9 p-15">
          <div className="card">
            <h3 className="card__h3">Change Password</h3>
            <form onSubmit={updatePassword}>
              <div className="group">
                <input
                  type="password"
                  name=""
                  className="group__control"
                  placeholder="Current Password"
                  onChange={(e) =>
                    setState({ ...state, current: e.target.value })
                  }
                  value={state.current}
                />
              </div>
              <div className="group">
                <input
                  type="password"
                  name=""
                  className="group__control"
                  placeholder="New Password"
                  onChange={(e) =>
                    setState({ ...state, newPassword: e.target.value })
                  }
                  value={state.newPassword}
                />
              </div>
              <div className="group">
                <button
                  type="submit"
                  value="Update Password"
                  className="btn btn-success"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};
export default ChangePassword;
