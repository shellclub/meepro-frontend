import { Fade } from "react-awesome-reveal";
import { Col } from "react-bootstrap";
import Slider from "react-slick";
import useSWR from "swr";
import fetcher from "../../fetcher-api/Fetcher";
import TrendingFashionTwoItem from "../trendingItem/TrendingFashionTwoItem";
import Spinner from "@/components/button/Spinner";

const FashionTwoSelling = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const { data, error } = useSWR("/api/fashionselling", fetcher, {
    onSuccess,
    onError,
  });

  if (error) return <div>Failed to load products</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  return (
    <>
      <Fade triggerOnce direction="up" delay={400}>
        <Col md={12}>
          <div className="section-title">
            <div className="section-detail">
              <h2 className="gi-title">
                Top <span>Selling</span>
              </h2>
            </div>
          </div>
        </Col>
        <Slider {...settings} className="gi-trending-slider mr-minus-24">
          {getData().map((item: any, index: number) => (
            <TrendingFashionTwoItem key={index} data={item} />
          ))}
        </Slider>
      </Fade>
    </>
  );
};

export default FashionTwoSelling;
