const mainShare = () => {
  const fbShare = () => {
    var baseURL = 'https://www.facebook.com/sharer/sharer.php'
    var u = 'https://act.gp/3yTIBy2'
    var t = (window.innerHeight - 436) / 2
    var l = (window.innerWidth - 626) / 2
    window.open(
      baseURL + '?u=' + encodeURIComponent(u),
      '_blank',
      'width=626,height=436,top=' + t + ',left=' + l
    )
  }
  // WEB SHARE API
  if (navigator.share) {
    navigator
      .share({
        title: '',
        text: '海洋住屋不對立，為了珍貴脆弱的香港海洋生態，及讓市民安居樂業，一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」方案！👉 ',
        url: 'https://act.gp/3ef6isG',
      })
      .then()
      .catch()
  } else {
    fbShare()
  }
}

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
  )
}

export default Index
