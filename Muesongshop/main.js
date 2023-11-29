class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="navbar" id="navbar">
    <div class="logo" style="padding: 0.7%;">
      <a href="index.html"><img src="./pic/muesong_logo.png" width="180" height="32"></a>
    </div>

    <div class="nav-drop">
      <button class="dropbtn">หมวก</button>
      <div class="dropdown-content">
        <div class="left">
          <ul>
            <li class="nav-item"><label class="nav-category">หมวก</label></li>
            <li class="nav-item"><a href="all-hats-list.html"><label class="nav-category-items">หมวกทั้งหมด</label></a></li>
            <li class="nav-item"><a href="caps-list.html"><label class="nav-category-items">หมวกแก๊ป</label></a></li>
            <li class="nav-item"><a href="buckets-list.html"><label class="nav-category-items">หมวกบักเก็ต (หมวกทรงถัง)</label></a></li>
          </ul>
        </div>
        <div class="right">
          <div class="dropdown-img-cover">
            <li class="nav-item">
              <a href="hat-item-01.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/caps1-front.jpg">
                </div>
                <div>
                  <span><br>หมวกสกรีนหน้าฟักทอง Halloween</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a href="hat-item-02.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/caps2-side.jpg">
                </div>
                <div>
                  <span><br>หมวกสกรีน Bitcoin</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a href="hat-item-16.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/buck6.jpg">
                </div>
                <div>
                  <span><br>หมวกลาย Bubble Milk Tea ทรงบักเก็ต</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a href="hat-item-12.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/buck2.jpg">
                </div>
                <div>
                  <span><br>หมวกสีกรม ทรงบักเก็ต</span>
                </div>
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-drop">
      <button class="dropbtn">เสื้อ</button>
      <div class="dropdown-content">
        <div class="left">
          <ul>
            <li class="nav-item"><label class="nav-category">เสื้อ</label></li>
            <li class="nav-item"><a href="all-tops-list.html"><label class="nav-category-items">เสื้อทั้งหมด</label></a></li>
            <li class="nav-item"><a href="hoodie-list.html"><label class="nav-category-items">เสื้อแขนยาว</label></a></li>
            <li class="nav-item"><a href="t-shirt-list.html"><label class="nav-category-items">เสื้อแขนสั้น</label></a></li>
          </ul>
        </div>
          <div class="right">
          <div class="dropdown-img-cover">
            <li class="nav-item">
              <a href="shirt-item-01.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/shirt1-front.jpg">
                </div>
                <div>
                  <span><br>เสื้อยืดสกรีนลาย Tyler The Creator</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a href="shirt-item-02.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/shirt2-front.jpg">
                </div>
                <div>
                  <span><br>เสื้อยืดสกรีนลาย Nissan GTR R34</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a href="shirt-item-13.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/shirt13-front.jpg">
                </div>
                <div>
                  <span><br>เสื้อฮู้ดดี้ Polyphia</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a href="shirt-item-12.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/shirt12-front.jpg">
                </div>
                <div>
                  <span><br>เสื้อฮู้ดดี้ GAP</span>
                </div>
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-drop">
      <button class="dropbtn">กางเกง</button>
      <div class="dropdown-content">
        <div class="left">
          <ul>
            <li class="nav-item"><label class="nav-category">กางเกง</label></li>
            <li class="nav-item"><a href="all-bottoms-list.html"><label class="nav-category-items">กางเกงทั้งหมด</label></a></li>
            <li class="nav-item"><a href="shorts-list.html"><label class="nav-category-items">กางเกงขาสั้น</label></a></li>
            <li class="nav-item"><a href="pants-list.html"><label class="nav-category-items">กางเกงขายาว</label></a></li>
          </ul>
        </div>
                <div class="right">
          <div class="dropdown-img-cover">
            <li class="nav-item">
              <a href="shorts-item06.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/shorts6-front.png">
                </div>
                <div>
                  <span><br>กางเกงวอร์มขาสั้น</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a href="shorts-item08.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/shorts8-front.png">
                </div>
                <div>
                  <span><br>กางเกงขาสั้นผ้าวาฟเฟิลทรงหลวม</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a href="pants-item05.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/pants5-front.png">
                </div>
                <div>
                  <span><br>กางเกงขาจั๊มลาย Skull Virus</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a href="pants-item09.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/pants9-front.png">
                </div>
                <div>
                  <span><br>กางเกงขาจั๊มลาย Mario</span>
                </div>
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-drop">
      <button class="dropbtn">รองเท้า</button>
      <div class="dropdown-content">
        <div class="left">
          <ul>
            <li class="nav-item"><label class="nav-category">รองเท้า</label></li>
            <li class="nav-item"><a href="all-shoes-list.html"><label class="nav-category-items">รองเท้าทั้งหมด</label></a></li>
            <li class="nav-item"><a href="sneaker-shoes-list.html"><label class="nav-category-items">รองเท้าผ้าใบ</label></a></li>
            <li class="nav-item"><a href="sport-shoes-list.html"><label class="nav-category-items">รองเท้ากีฬา</label></a></li>
          </ul>
        </div>
                <div class="right">
          <div class="dropdown-img-cover">
            <li class="nav-item">
              <a href="shoes-item04.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/shoes4-fornt.jpg">
                </div>
                <div>
                  <span><br>Vans Women Sk8-Low</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a href="shoes-item02.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/shoes2-front.jpg">
                </div>
                <div>
                  <span><br>Vans x Pretty Guardian Sailor Moon Patchwork Old Skool Women's</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a href="sshoes-item05.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/sshoes5-front.jpg">
                </div>
                <div>
                  <span><br>Adidas DAME 8 MR. INCREDIBLE SHOES</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a href="sshoes-item09.html" class="nav-link">
                <div class="nav-preview">
                  <img class="nav-image" src="pic/sshoes9-front.jpg">
                </div>
                <div>
                  <span><br>Adidas COPA SENSE.4 FXG</span>
                </div>
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
    <div class = "cart">
      <button type = "button" id = "cart-btn" onclick="showcart()">
        <i class = "fas fa-shopping-cart"></i>
        <span id = "cart-count-info">0</span>
      
      </button>
      </div>
    </div>
      <div class = "cart-container" id="cartdiv">
    <div class="cart-header">
      <h1 id='cart-head'></h1>
      <button class="close-cart-btn" onclick="closecart()">X</button>
    </div>
    <div class = "cart-list" id="cart-list">
      
    </div>

    <div class = "cart-total">
    
      <span id = "cart-total-value">Total : </span>
      <br>
      <a href="payment.html">
        <button class="checkoutbtn"> จ่ายเงิน</button>
      </a>
    </div>
  </div>
`
  }
}
customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="footer">
    <div class="footer-item">
      <img src="pic/favicon.png" width="49" height="85">
    </div>
    <div class="footer-text">
      <div >
          <ul>
            <li class="fix"><a href="" class="fixx"><label class="nav-category-footer">อ้างอิงเครื่องมือที่ใช้</label></a></li>
            <li class="fix"><a href="" class="fixx"><label class="nav-category-items">HTML & CSS</label></a></li>
            <li class="fix"><a href="" class="fixx"><label class="nav-category-items">Json</label></a></li>
            <li class="fix"><a href="" class="fixx"><label class="nav-category-items">JavaScript</label></a></li>
            <li class="fix"><a href="" class="fixx"><label class="nav-category-items">เว็บไซต์อ้างอิง: Netflix.shop</label></a></li>
          </ul>
        </div>

    </div>
    <div class="footer-text">
      <div >
          <ul>
            <li class="fix"><a href="" class="fixx"><label class="nav-category-footer">สมาชิกในกลุ่ม</label></a></li>
            <li class="fix"><a href="" class="fixx"><label class="nav-category-items">64070015 นายจิราพันธ์ ขวัญรักษ์</label></a></li>
            <li class="fix"><a href="" class="fixx"><label class="nav-category-items">64070023 นายโชตชฎา อุปโยคิน</label></a></li>
            <li class="fix"><a href="" class="fixx"><label class="nav-category-items">64070024 นายฐนกร อมตเวทย์</label></a></li>
            <li class="fix"><a href="" class="fixx"><label class="nav-category-items">64070046 นายธรรมปพน ประทุม</label></a></li>
            <li class="fix"><a href="" class="fixx"><label class="nav-category-items">64070071 นายพรรษา ร่องยืด</label></a></li>
          </ul>
        </div>

    </div>
    <div class="footer-text">
      <div >
          <ul>
            <li class="fix2"><a href="" class="fixx"><label class="nav-category-footer2">เว็บไซต์นี้เป็นส่วนหนึ่งของโปรเจ็ควิชา Web Technology 1/2565</label></a></li>
            <li class="fix2"><a href="" class="fixx"><label class="nav-category-footer2">โดยมีอาจารย์ที่ปรึกษา ผศ.ดร. มานพ พันธ์โคกกรวด </label></a></li>
            <li class="fix2"><a href="" class="fixx"><label class="nav-category-footer2">จัดทำโดยกลุ่มนักศึกษาคณะเทคโนโลยีสารสนเทศชั้นปีที่ 2 </label></a></li>
          </ul>
        </div>

    </div>

  </footer>`
  }
}
customElements.define("my-footer", MyFooter);