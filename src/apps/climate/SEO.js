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
            gBasket: "climate-emergency",
          });
        `}
      </script>
      {/* title */}
      <title>全球氣候告急 攜手拯救 - Greenpeace 綠色和平 | 香港</title>
      <meta
        property='og:title'
        content='全球氣候告急 攜手拯救 - Greenpeace 綠色和平 | 香港'
      />
      {/* description */}
      <meta
        name='description'
        content='氣候危機已經威脅全球，極端天氣事件頻頻發生，包括水災、海冰融化、熱浪等。專家亦警告如地球持續升溫，將會帶來更強、更頻繁的極端天氣。請即聯署守護氣候，推動落實氣候政策。'
      />
      <meta
        property='og:description'
        content='氣候危機已經威脅全球，極端天氣事件頻頻發生，包括水災、海冰融化、熱浪等。專家亦警告如地球持續升溫，將會帶來更強、更頻繁的極端天氣。請即聯署守護氣候，推動落實氣候政策。'
      />
      {/* meta image */}
      <meta
        property='og:image'
        content='https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/0a6fc2b2-20210913_climate_launchvisual-01.jpg'
      />
    </Helmet>
  );
};

export default SEO;
