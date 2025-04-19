import useSWR from "swr";
import fetcher from "../../fetcher-api/Fetcher";
import Spinner from "@/components/button/Spinner";

const TermTwo = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const { data, error } = useSWR("/api/termtwo", fetcher, {
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
      <div className="gi-common-wrapper">
        {getData().map((item: any, index: any) => (
          <div key={index} className="col-sm-12 gi-cgi-block">
            <div className="gi-cgi-block-inner">
              <h5 className="gi-cgi-block-title">{item.questions}</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since
                the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.{" "}
                <b>Lorem Ipsum is simply dutmmy text.</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TermTwo;
