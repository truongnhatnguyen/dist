import { Link, useHistory} from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./style.css";
import {withRouter} from "react-router-dom"
import React, { useEffect, useState } from "react";
import { AppButton } from "../AppButton";
// import { useDispatch } from 'react-redux';

const AppCardProduct = ({ type = null,props}) => {
  const history = useHistory();
  const [currentTag, setCurrentTag] = useState(type);
  const [defaultParams, setDefaultParams] = useState({
    type
  });
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    async function fetchPostList() {
      try {
        const params = {...defaultParams}
        const requesUrl = `https://6287bf14e9494df61b3f443a.mockapi.io/api/v1/productsList`;
        const response = await fetch(requesUrl,{params});
        const responseJson = await response.json();
        console.log(responseJson);
        
        setPostList(responseJson);
      
        
      } catch (error) {
        console.log("error to fetch post list", error.message);
      }
    }

    fetchPostList();
  }, [defaultParams]);
const handlViewDetail = (user) =>{
  console.log(">>>>> check user", props);
  history.push(`/detail/${user.id}`)
}
  const onHandleTagName = (value) => {
    setCurrentTag(value);
    setDefaultParams((prevState) => ({ ...prevState, type: +value }));
  };
  const listButton = [
    { label: "Tất Cả", value: null },
    { label: "Chung Cư", value: 1 },
    { label: "Condotel", value: 2  },
    { label: "Biệt thự", value: 3 },
    { label: "Shophouse", value: 4 },
    
  ];
  return (
    <>
      <h4>sản phẩm</h4>
      <div className="TopProduct">
        {listButton.map((tag, idx) => {
          return (
            <AppButton
              key={idx}
              isActive ={currentTag === tag.value}
              onClick ={() => {
                onHandleTagName(tag.value);
              }}
            >
              {tag.label}
            </AppButton>
          );
        })}
      </div>
      <div className="products">
        {
          postList.map((item) => {
            return (
              <div className="card" key={item.id} onClick={() => {handlViewDetail(item)} }>
                <div className="card__image">
                  <Link to={`/detail/${item.id}`}>
                    <img
                      src={item.images[0]}
                      alt=""
                    />
                  </Link>
                  <div className="card__tag">{item.type.name}</div>
                  <div className="card__tag-heart">
                    <FaHeart />
                  </div>
                </div>
                <div className="card__title">{item.title}</div>
                <div className="card__address">{item.address}</div>
                <div className="card__description">
                  <div className="card__price">
                    giá từ :{" "}
                    <span style={{ color: "black", fontWeight: "700" }}>
                      {item.price.from}-{item.price.to}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default withRouter(AppCardProduct);
