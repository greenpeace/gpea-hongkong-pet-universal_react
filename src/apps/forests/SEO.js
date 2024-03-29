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
            gCampaign: "forests",
            gBasket: "forests",
          });
        `}
      </script>
      {/* title */}
      <title>全球僅餘 15%森林被完整保存 - Greenpeace 綠色和平 | 香港</title>
      <meta
        property='og:title'
        content='全球僅餘 15%森林被完整保存 - Greenpeace 綠色和平 | 香港'
      />
      {/* description */}
      <meta
        name='description'
        content='熱帶森林、溫帶雨林和北方森林，調節氣候、提供淡水和氧氣，更是地球約三分之二陸生動植物的棲息地。但不法分子、無良企業非法砍伐與毁林，加上氣候危機加劇森林大火，令全球每2秒就有相約1個足球場面積的森林消失、僅餘 15%森林被完整保護。'
      />
      <meta
        property='og:description'
        content='熱帶森林、溫帶雨林和北方森林，調節氣候、提供淡水和氧氣，更是地球約三分之二陸生動植物的棲息地。但不法分子、無良企業非法砍伐與毁林，加上氣候危機加劇森林大火，令全球每2秒就有相約1個足球場面積的森林消失、僅餘 15%森林被完整保護。'
      />
      {/* meta image */}
      <meta
        property='og:image'
        content='https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/024889a6-2021-forests-relaunch.jpg'
      />
    </Helmet>
  );
};

export default SEO;
