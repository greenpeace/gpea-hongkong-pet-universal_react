import { Helmet } from 'react-helmet-async'
import React from 'react'

const SEO = () => {
  return (
    <Helmet>
      <html lang='zh' />
      {/* campaign dataLayer */}
      <script>
        {`
          var dataLayer = (window.dataLayer = window.dataLayer || []);
          dataLayer.push({
            gCampaign: "climate",
            gBasket: "climate-challenge",
          });
        `}
      </script>
      {/* title */}
      <title>減碳生活，由今天做起！ - Greenpeace 綠色和平 | 香港</title>
      <meta
        property='og:title'
        content='減碳生活，由今天做起！ - Greenpeace 綠色和平 | 香港'
      />
      {/* description */}
      <meta
        name='description'
        content='今年9月，綠色和平將舉辦「減碳生活節」，帶領更多市民在日常中實踐減碳生活。為答謝您對地球減碳的承諾，您將獲邀參加在10月1日及2日的「Coffee
        Meets
        Climate」體驗日，屆時會以多項有趣活動，讓您及公眾感受怎樣在日常生活中輕鬆地減低碳足跡，及認識眾多您不知道有關食物及氣候變化的關係，趕在9月28日前登記，免費體驗減碳生活，給地球一個coffee
        break！'
      />
      <meta
        property='og:description'
        content='今年9月，綠色和平將舉辦「減碳生活節」，帶領更多市民在日常中實踐減碳生活。為答謝您對地球減碳的承諾，您將獲邀參加在10月1日及2日的「Coffee
        Meets
        Climate」體驗日，屆時會以多項有趣活動，讓您及公眾感受怎樣在日常生活中輕鬆地減低碳足跡，及認識眾多您不知道有關食物及氣候變化的關係，趕在9月28日前登記，免費體驗減碳生活，給地球一個coffee
        break！'
      />
      {/* meta image */}
      <meta
        property='og:image'
        content='https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/08/64ff5b57-climate-challenge-kv.jpg'
      />
    </Helmet>
  )
}

export default SEO
