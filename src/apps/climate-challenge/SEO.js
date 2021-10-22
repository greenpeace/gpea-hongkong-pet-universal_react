import { Helmet } from 'react-helmet-async';
import React from 'react';

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
      <title>立即免費登記「減碳生活節」！ - Greenpeace 綠色和平 | 香港</title>
      <meta
        property='og:title'
        content='立即免費登記「減碳生活節」！ - Greenpeace 綠色和平 | 香港'
      />
      {/* description */}
      <meta
        name='description'
        content='今年9月，綠色和平將舉辦「減碳生活節」，帶領更多市民在日常中實踐減碳生活。現只需在網上登記，即能參與「減碳生活節」，並送您更多日常減碳小貼士，一同減緩氣候危機，齊做「減碳小先峰」！'
      />
      <meta
        property='og:description'
        content='今年9月，綠色和平將舉辦「減碳生活節」，帶領更多市民在日常中實踐減碳生活。現只需在網上登記，即能參與「減碳生活節」，並送您更多日常減碳小貼士，一同減緩氣候危機，齊做「減碳小先峰」！'
      />
      {/* meta image */}
      <meta
        property='og:image'
        content='https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/08/dc4df26f-coffeemeetsclimate.jpg'
      />
    </Helmet>
  );
};

export default SEO;
