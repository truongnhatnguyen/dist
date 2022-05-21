import React, { useEffect, useState } from "react";
import "./style.css";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router-dom";
const AppDetail = (props) => {
  const [detail, setdetail] = useState({});
  let { id } = useParams();
  useEffect(() => {
    async function fetchDetailList() {
      // let id = props.match.params.id;
      const requesUrl = `https://6287bf14e9494df61b3f443a.mockapi.io/api/v1/productsList/${id}`;
      const response = await fetch(requesUrl);
      const responseJson = await response.json();
      console.log(">>>>>>>>>check response", responseJson);
      setdetail(responseJson);
    }

    fetchDetailList();
  }, []);

  console.log(">>>>check props", props.match.params.id);
  console.log(">>>>check aarrrrrrrrrrrr", detail);
  let isEmtyObj = Object.keys(detail).length === 0
  return (
    
    <>
    {isEmtyObj === false && <>
      <div className="slideshow-container">
        <div className="mySlides1">
          <img
            src={detail.images[0]}
            alt=""
            style={{ width: "100%", overflowY: "hidden" }}
          />
        </div>

        <a href="#" className="prev">
          ❮
        </a>
        <a href="#" className="next">
          ❯
        </a>
      </div>
      <div className="content__detail">
        <div className="content__detail-top">
          <div className="title__detail">
            <h1>{detail.title}</h1>
            <div className="city">{detail.address}</div>
            <div className="acreage">Diện tích : {detail.area}m2</div>
          </div>
          <div className="price__detail">
            {detail.price.from}tỷ - {detail.price.to}tỷ
            {/* 15ty - 20ty */}
          </div>
        </div>
        <div className="description__detail">
          <h3 style={{ color: "black" }}>Thông tin chi tiết </h3>
          <div className="text">
            {detail.description}
            {/* {props.match.params.id} */}
            {/* Hateco Laroma là tổ hợp dự án văn phòng, trung tâm thương
                    mại và căn hộ 5 sao toạ lạc tại vị trí đắc địa trung tâm của
                    quận Đống Đa. Mang phong cách kiến trúc Tân cổ điển được đầu
                    tư tâm huyết bởi chủ đầu tư Hateco, tạo điểm nhấn trong từng
                    đường nét kiến trúc Italia tạo nên sức hút với giới thượng
                    lưu. <br />
                  </div>
                  <div className="text">
                    I. VỊ TRÍ DỰ ÁN <br />
                    Tọa lạc tại số 4A Huỳnh Thúc Kháng kéo dài, Láng Thượng,
                    Đống Đa,Hateco Laroma kết nối trong tích tắc đến các tuyến
                    giao thông huyết mạch của Thủ đô như Láng, Nguyễn Chí Thanh,
                    Láng Hạ, Thái Hà, Kim Mã, Văn Cao.
                    <br />
                  </div>
                  <div className="text">
                    Dễ dàng di chuyển đến các khu vực trung tâm hành chính bằng
                    các tuyến đường lớn như: Nguyễn Chí Thanh, Láng Hạ, Giảng
                    Võ, Thái Hà,… Gần các trung tâm thương mại lớn, dịch vụ vui
                    chơi giải trí: TTTM Vincom Nguyễn Chí Thanh, Rạp chiếu phim
                    Quốc Gia, Trung tâm nghệ thuật Âu Cơ,.. Nằm trong khu vực dễ
                    dàng kết nối với hệ thống hồ điều hoà xung quanh: Hồ Đống
                    Đa, hồ Thành Công,… Trung tâm của lõi thủ đô Hà Nội như:
                    quận Đống Đa, quận Ba Đình, quận Hoàn Kiếm,... Gần các bệnh
                    viện lớn: Bệnh viện Việt Pháp, Viện Nhi Trung Ương, Viện Nội
                    Tiết,{id} */}
          </div>
        </div>
      </div>
    
    
    
    </>}
    </>
  );
};

export default withRouter(AppDetail);
