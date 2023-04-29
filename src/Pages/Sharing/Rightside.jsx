import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "./Qzone";
import bg from "../../assets/bg.png";
import { useContext } from "react";
import { AuthProviderContext } from "../../AuthProvider/AuthContext";

const Rightside = () => {
  const { googleLogIn, githubLogIn } = useContext(AuthProviderContext);

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubLogIn = () => {
    githubLogIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <h3 className="mb-2">login</h3>
        <Button
          onClick={handleGoogleLogIn}
          className="mb-2"
          variant="outline-danger"
        >
          <FaGoogle /> Login With Google
        </Button>
        <Button onClick={handleGithubLogIn} variant="outline-info">
          <FaGithub></FaGithub> Login With GitHub
        </Button>
      </div>
      <div className="mt-4">
        <h4 className="mb-3">Find us On</h4>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Qzone></Qzone>
      </div>
      <div
        className="position-relative"
        style={{
          backgroundImage: `url(${bg})`,
          height: "450px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white px-2 position-absolute mt-5  text-center">
          <h3 className="mt-5">Create an Amazing Newspaper</h3>
          <p className="mt-4">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button className="mt-3" variant="danger">
            Danger
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Rightside;
