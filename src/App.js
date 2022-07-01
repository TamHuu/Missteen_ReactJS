import NavTabs from "./Atomic/navigation/tabs";
import React from "react";
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
            <img
              style={{ width: "300px" }}
              src="http://hhvn.com.vn/wp-content/uploads/2020/05/Logo-HHVn2020-1024x294.png"
            />
            <div>
              {" "}
              <img src="http://hhvn.com.vn/wp-content/themes/hhvn/images/logo_tienphong.png" />
              <img src="http://hhvn.com.vn/wp-content/themes/hhvn/images/logo_senvang.png" />
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
