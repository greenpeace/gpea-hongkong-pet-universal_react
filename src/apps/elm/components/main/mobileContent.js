import React, {useState, useRef, useEffect} from "react";
import { Grid, Row, Col } from "rsuite";
import swiperContent from "../../data/swiper.json";

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    console.log('wow')
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const MobileContent = () => {
  const { data = [] } = swiperContent;
  return (
    <div className='mobile-content-wrap'>
      <Grid fluid>
        {(data || []).map((d) => {
          const { title, description } = d.content;
          return (
            <FadeInSection key={d.id}>
              <Row>
                {d.image_url && (
                  <Col xs={24}>
                    <img
                      loading='lazy'
                      src={d.image_url}
                      alt={description}
                      className='img mobile-image'
                    />
                  </Col>
                )}
                <Col xs={24}>
                  {title && <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>}
                  <div className='mobile-content'>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                  </div>
                </Col>
              </Row>
            </FadeInSection>
          );
        })}
      </Grid>
    </div>
  );
};

export default MobileContent;
