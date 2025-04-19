"use client";

const LoadRowOrContainer = ({ children, onlyRow, className }: any) => {
  return (
    <>
      {onlyRow ? (
        children
      ) : (
        <section className={`gi-shop ${className}`}>
          <div className="container">{children}</div>
        </section>
      )}
    </>
  );
};

export default LoadRowOrContainer;
