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
            gCampaign: "oceans",
            gBasket: "sanctuaries",
          });
        `}
      </script>
      {/* title */}
      <title>
        守護海洋，攜手成立全球海洋保護區！ - Greenpeace 綠色和平 | 香港
      </title>
      <meta
        property='og:title'
        content='守護海洋，攜手成立全球海洋保護區！ - Greenpeace 綠色和平 | 香港'
      />
      {/* description */}
      <meta
        name='description'
        content='海洋的面積占地球71%，是世界最大的供氧來源，也孕育豐富的生物多樣性，包含鯨魚、海豚、海龜、珊瑚等美妙海洋生物。然而，海洋現在卻因塑膠污染、非法捕魚、氣候變遷等面臨前所未有的重大生態危機。我們需要更多人一起站出來聯署加入，並捐款資助綠色和平！'
      />
      <meta
        property='og:description'
        content='海洋的面積占地球71%，是世界最大的供氧來源，也孕育豐富的生物多樣性，包含鯨魚、海豚、海龜、珊瑚等美妙海洋生物。然而，海洋現在卻因塑膠污染、非法捕魚、氣候變遷等面臨前所未有的重大生態危機。我們需要更多人一起站出來聯署加入，並捐款資助綠色和平！'
      />
      {/* meta image */}
      <meta
        property='og:image'
        content='https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/03/26435735-og-petition.jpeg'
      />
    </Helmet>
  );
};

export default SEO;
