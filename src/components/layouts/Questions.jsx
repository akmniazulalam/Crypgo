import Accordion from "../Accordion";

const Questions = () => {
  return (
    <section className={"py-[72px] bg-primary"}>
      <div className={"max-w-[1200px] m-auto"}>
        <div className={"text-center"}>
          <h6 className={"font-dmSans text-[18px] text-white"}>
            Popular <span className={"text-btnC"}>questions</span>
          </h6>
          <h3
            className={"font-dmSans font-semibold text-[40px] text-white py-2"}>
            Learn more about Crypgo
          </h3>
          <p className={"font-dmSans text-base text-white/60"}>
            We accept 100+ cryptocurrencies around the world
          </p>
          <div className={"mt-10"}>
            <Accordion accordionTitle={"What is Crypgo?"} />
            <Accordion accordionTitle={"Is Crypgo available worldwide?"} />
            <Accordion
              accordionTitle={"Which cryptocurrencies are supported on Crypgo?"}
            />
            <Accordion
              accordionTitle={"Is my personal information secure with Crypgo?"}
            />
            <Accordion
              accordionTitle={"Are there any deposit or withdrawal fees?"}
            />
            <Accordion
              accordionTitle={"Does Crypgo offer advanced trading tools?"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
