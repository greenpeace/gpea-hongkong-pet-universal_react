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
            gBasket: "elm",
          });
        `}
      </script>
      {/* title */}
      <title>守護大嶼 - Greenpeace 綠色和平 | 香港</title>
      <meta
        property='og:title'
        content='守護大嶼 - Greenpeace 綠色和平 | 香港'
      />
      {/* description */}
      <meta
        name='description'
        content='海洋住屋不對立，為了珍貴脆弱的香港海洋生態，及讓市民安居樂業，一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」方案！'
      />
      <meta
        property='og:description'
        content='海洋住屋不對立，為了珍貴脆弱的香港海洋生態，及讓市民安居樂業，一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」方案！'
      />
      {/* meta image */}
      <meta
        property='og:image'
        content='https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1853/ecology-sharelink.jpg?v=1624962949576'
      />
    </Helmet>
  );
};

export default SEO;
