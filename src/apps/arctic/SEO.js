import { Helmet } from "react-helmet-async";
import React from "react";

const SEO = () => {
  return (
    <Helmet>
      <html lang="zh" />
      {/* campaign dataLayer */}
      <script>
        {`
          var dataLayer = (window.dataLayer = window.dataLayer || []);
          dataLayer.push({
            gCampaign: "climate",
            gBasket: "earthday",
          });
        `}
      </script>
      {/* title */}
      <title>
        救氣候，阻止北極破壞！ - Greenpeace 綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="救氣候，阻止北極破壞！ - Greenpeace 綠色和平 | 香港"
      />
      {/* description */}
      <meta
        name="description"
        content="全賴有您，守護北極的力量日益強大。我們團結一起，讓守護北極的呼聲，揚得更遠！經過三年不懈的努力、超過700萬人揭露SHELL的野心；九月底，石油公司SHELL終於止步北極！現在，讓我們進一步確保所有石油公司永不復返。"
      />
      <meta
        property="og:description"
        content="全賴有您，守護北極的力量日益強大。我們團結一起，讓守護北極的呼聲，揚得更遠！經過三年不懈的努力、超過700萬人揭露SHELL的野心；九月底，石油公司SHELL終於止步北極！現在，讓我們進一步確保所有石油公司永不復返。"
      />
      {/* meta image */}
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/04/1d3a7e7b-earthday_main_banner.jpg"
      />
    </Helmet>
  );
};

export default SEO;
