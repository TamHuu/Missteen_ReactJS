import NavTabs from "./Atomic/navigation/tabs";
import React from "react";
import LogoHH from "./assets/img/LogoHHV.png";
import logo_tienphong from "./assets/img/logo_tienphong.png";
import logo_senvang from "./assets/img/logo_senvang.png";
function App() {
  return (
    <div>
      <NavTabs />
      {/* Footer */}
      <footer
        style={{ backgroundColor: "mediumvioletred", color: "ghostwhite" }}
      >
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div className="logoHH" style={{ padding: "25px 0" }}>
            <img style={{ width: "300px" }} src={LogoHH} />
            <div>
              {" "}
              <img src={logo_tienphong} alt="" />
              <img src={logo_senvang} alt="" />
            </div>
          </div>

          <ul
            style={{ padding: "32px", lineHeight: "32px", listStyle: "none" }}
          >
            <li>Bản quyền thuộc về HOA HẬU VIỆT NAM 2020</li>
            <li>Điện thoại: 028 - 3899 2222 * Fax: 028 - 3899 1111</li>
            <li>Địa chỉ: 6D Trường Sa, P.17, Bình Thạnh, TP.HCM</li>
          </ul>
        </div>
      </footer>
      {/* End footer */}
    </div>
  );
}

export default App;
