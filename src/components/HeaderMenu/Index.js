import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../actions/UserActions";
import "./HeaderMenu_Style.css";

const HeaderMenu = ({ type }) => {
  const dispatch = useDispatch();

  const [elements, saveElements] = React.useState([]);

  React.useEffect(() => {
    let tmp = [];
    if (type === "categories") {
      tmp = [
        {
          name: "All",
          link: "/Catalog",
        },
        {
          name: "Sport",
          link: "/Catalog?category=Sport",
        },
        {
          name: "Casual",
          link: "/Catalog?category=Casual",
        },
        {
          name: "Formal",
          link: "/Catalog?category=Formal",
        },
      ];
    } else {
      tmp = [
        { name: "Profile", link: "/Profile" },
        { name: "Log out", link: "/" },
      ];
    }
    saveElements(tmp);
  }, []);

  const logOut = async (link) => {
    if (link === "/") {
      dispatch(deleteUser(undefined));
    }
  };

  return (
    <div
      className='header-menu'
      style={
        type === "user"
          ? {
              right: "0px",
              left: "unset",
              borderRadius: "0px",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
              paddingLeft: "1.2%",
              paddingRight: "20px",
            }
          : {}
      }
    >
      <h2>{type === "categories" ? "Categories Menu" : "Profile Menu"}</h2>
      <ul>
        {elements.map((item, index) => {
          return (
            <li key={`menu-header-${index}`}>
              <Link
                to={item.link}
                onClick={() => {
                  logOut(item.link);
                }}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderMenu;
