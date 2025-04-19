import { useState } from "react";
import useSWR from "swr";
import fetcher from "../../fetcher-api/Fetcher";
import Spinner from "@/components/button/Spinner";

const QuestionsOne = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const { data, error } = useSWR("/api/questions", fetcher, {
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
      <div className="gi-accordion style-1">
        {getData().map((item: any, index: number) => (
          <div
            key={index}
            className="gi-accordion-item"
            onClick={() => toggleAccordion(index)}
          >
            <h4 className="gi-accordion-header">{item.questions}</h4>
            <div
              className={`gi-accordion-body ${
                openIndex === index ? "show" : ""
              }`}
            >
              {item.ans}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuestionsOne;
