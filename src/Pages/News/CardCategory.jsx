import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaBookmark,
  FaEye,
  FaShareAlt,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const CardCategory = ({ categoriesCard }) => {
  const {
    _id,
    details,
    image_url,
    thumbnail_url,
    title,
    total_view,
    author,
    rating,
  } = categoriesCard;
  return (
    <div className="mt-5">
      <Card>
        <div className="bg-dark text-white d-flex px-2 py-2 ">
          <Image
            style={{ width: "60px", height: "40px" }}
            src={thumbnail_url}
            roundedCircle
          />
          <div className="p-0 m-0 flex-grow-1 ms-2">
            <h4 className="p-0 m-0">{author?.name}</h4>
            <span className="p-0 m-0">
              {moment(author?.published_date).format("Y-M-D")}
            </span>
          </div>
          <div>
            <FaBookmark></FaBookmark> <FaShareAlt />
          </div>
        </div>
        <Card.Img src={image_url} />
        <Card.Body>
          <Card.Text>
            <p>{details.slice(0, 250)}...</p>
            <span className="text-danger m-0">
              <Link to={`/news/${_id}`}>Read More</Link>
            </span>
          </Card.Text>
        </Card.Body>
        <hr />
        <div className="d-flex justify-content-between align-items-center p-2 px-3">
          <div>
            <Rating
              placeholderRating={rating.number}
              emptySymbol={
                <FaStarHalfAlt className="text-danger"></FaStarHalfAlt>
              }
              placeholderSymbol={<FaStar className="text-danger"></FaStar>}
              fullSymbol={<FaStar className="text-danger"></FaStar>}
              readonly
            />
            <span className="px-1">{rating.number}</span>
          </div>
          <div>
            <FaEye></FaEye> {total_view}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardCategory;
