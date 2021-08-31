import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mainShare = () => {
  const fbShare = () => {
    var baseURL = "https://www.facebook.com/sharer/sharer.php";
    var u = "https://act.gp/3bLDMwF";
    var t = (window.innerHeight - 436) / 2;
    var l = (window.innerWidth - 626) / 2;
    window.open(
      baseURL + "?u=" + encodeURIComponent(u),
      "_blank",
      "width=626,height=436,top=" + t + ",left=" + l
    );
  };
  // WEB SHARE API
  if (navigator.share) {
    navigator
      .share({
        title: "",
<<<<<<< HEAD
        text:
          "立即聯署與綠色和平一起敦促其長期、妥善地存置這批危害生態和人體的廢水，使大家的海洋免於進一步的破壞。👉 ",
        url: "https://act.gp/3uK2A0S",
=======
        text: "多年來，綠色和平以建立30%海洋保護區為目標，立即聯署守護海洋，攜手成立全球海洋保護區！👉 ",
        url: "https://act.gp/3l2XZCq",
>>>>>>> b3a76c9d1bcda93e86b0f586060c2bf31cb6f46b
      })
      .then()
      .catch();
  } else {
    fbShare();
  }
};

const Index = () => {
  return (
    <>
      {/* <aside className="left-header">
          <span className="lh_dec color-bg"></span>
          <div className="left-header_social">
              <ul >
                  <li><a href="https://www.facebook.com/greenpeacehk/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'facebook-square']} size="lg"/>
                  </a></li>
              </ul>
          </div>
      </aside> */}
      {/* MOBILE */}
      <div className='share-btn showshare color-bg'>
        <span onClick={() => mainShare()}>分享</span>
      </div>
      {/* DESKTOP */}
      <div className='hc_dec_color'>
        <div className='page-subtitle page-subtitle-custom share-btn-desktop'>
          <span onClick={() => mainShare()}>分享</span>
        </div>
      </div>
    </>
  );
};

export default Index;
