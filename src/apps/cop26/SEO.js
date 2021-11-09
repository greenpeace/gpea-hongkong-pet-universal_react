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
            gBasket: "cop26",
          });
        `}
      </script>
      {/* title */}
      <title>
        COP26峰會分析暨氣候講座：全球氣候政策與未來 - Greenpeace 綠色和平 | 香港
      </title>
      <meta
        property='og:title'
        content='COP26峰會分析暨氣候講座：全球氣候政策與未來 - Greenpeace 綠色和平 | 香港'
      />
      {/* description */}
      <meta
        name='description'
        content='第26屆聯合國氣候變化大會（COP26）於11月中結束，綠色和平項目主任伍漢林與大家即時分析會後重點，包括會議出爐政策、《巴黎協定》後各地緩解氣候變化進度等。講座亦會詳述現時全球氣候變化實況與危機，以及綠色和平的氣候倡議。免費報名參與講座，緊貼全球氣候政策及現狀發展，了解拯救氣候方法！'
      />
      <meta
        property='og:description'
        content='第26屆聯合國氣候變化大會（COP26）於11月中結束，綠色和平項目主任伍漢林與大家即時分析會後重點，包括會議出爐政策、《巴黎協定》後各地緩解氣候變化進度等。講座亦會詳述現時全球氣候變化實況與危機，以及綠色和平的氣候倡議。免費報名參與講座，緊貼全球氣候政策及現狀發展，了解拯救氣候方法！'
      />
      {/* meta image */}
      <meta
        property='og:image'
        content='https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/11/8bfb0494-climate-food-webinar-banner-preview.jpg'
      />
    </Helmet>
  );
};

export default SEO;
