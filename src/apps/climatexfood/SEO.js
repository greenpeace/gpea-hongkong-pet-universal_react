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
            gBasket: "climatexfood",
          });
        `}
      </script>
      {/* title */}
      <title>
        「氣候危機警告現正生效：點樣影響香港人？」網上科學101 - Greenpeace
        綠色和平 | 香港
      </title>
      <meta
        property='og:title'
        content='「氣候危機警告現正生效：點樣影響香港人？」網上科學101 - Greenpeace 綠色和平 | 香港'
      />
      {/* description */}
      <meta
        name='description'
        content='綠色和平邀請到大氣科學家、中文大學地球系統科學課程副教授戴沛權教授來與綠色和平項目主任伍漢林對談，講解近年氣候變化趨勢，以及為香港人帶來的生活影響。想知道氣候危機如何影響我們熟悉的食物？立即報名「氣候危機警告現正生效：點樣影響香港人？」網上科學101 ，一起裝備大腦，拯救地球！'
      />
      <meta
        property='og:description'
        content='綠色和平邀請到大氣科學家、中文大學地球系統科學課程副教授戴沛權教授來與綠色和平項目主任伍漢林對談，講解近年氣候變化趨勢，以及為香港人帶來的生活影響。想知道氣候危機如何影響我們熟悉的食物？立即報名「氣候危機警告現正生效：點樣影響香港人？」網上科學101 ，一起裝備大腦，拯救地球！'
      />
      {/* meta image */}
      <meta
        property='og:image'
        content='https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/07/c35d9bc0-climate-food-webinar-banner-or.jpg'
      />
    </Helmet>
  )
}

export default SEO
