import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        Hello, it's really a pain to be followed. This is a mistake
          In some cases, someone actually hinders them with pain, just pain!
          He is happy with the needs of pleasure, to get pleasure from the ways he hates
          them! Hello, it's really a pain to be followed. This one
          the error of some people, indeed, with pains, they are just pains
          impedes! He was blessed with the necessities of pleasure, to obtain pleasure from
          he hates them! Thank you very much, the pain will be followed by adipiscing
          developer This error has caused some people to suffer them, and others to suffer
          it just gets in the way! He is happy with the needs of pleasure, to obtain pleasure
          he hates them! Thank you very much, the pain will be followed by adipiscing
          developer This error has caused some people to suffer them, and others to suffer
          it just gets in the way! He is happy with the needs of pleasure, to obtain pleasure
          he hates them! Thank you very much, the pain will be followed by adipiscing
          developer This error has caused some people to suffer them, and others to suffer
          it just gets in the way! He is happy with the needs of pleasure, to obtain pleasure
          he hates them!
          <br />
          <br />
          Hello, it's really a pain to be followed. This is a mistake
          In some cases, someone actually hinders them with pain, just pain!
          He is happy with the needs of pleasure, to get pleasure from the ways he hates
          them! Hello, it's really a pain to be followed. This one
          the error of some people, indeed, with pains, they are just pains
          impedes! He was blessed with the necessities of pleasure, to obtain pleasure from
          he hates them! Thank you very much, the pain will be followed by adipiscing
          developer This error has caused some people to suffer them, and others to suffer
          it just gets in the way! He is happy with the needs of pleasure, to obtain pleasure
          he hates them! Lorem ipsum dolor sit amet, consectetur.
        </p>
      </div>
    </div>
  );
}
