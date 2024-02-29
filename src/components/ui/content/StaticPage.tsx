import React from "react";

import { AccordionMaker } from "@components";
interface IContentProps {
  header: string;
  body: any;
  type: "static" | "accordion";
}
const StaticPage = async (props: IContentProps) => {
  const { header, body, type } = props;
  const BodyComp = () => {
    switch (type) {
      case "static":
        return (
          <div
            className="terms-content"
            dangerouslySetInnerHTML={{ __html: body }}
          ></div>
        );
      case "accordion":
        return (
          <div className="faq">
            <AccordionMaker
              items={body.map((item: any) => ({
                header: <span>{item.question}</span>,
                content: (
                  <div
                    className="terms-content"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  ></div>
                ),
              }))}
            />
          </div>
        );
      default:
        return (
          <div
            className="terms-content"
            dangerouslySetInnerHTML={{ __html: body }}
          ></div>
        );
    }
  };
  return (
    <React.Fragment>
      <div className="mb-4">
        <div
          className="static-title my-4"
          dangerouslySetInnerHTML={{ __html: header }}
        ></div>
        {BodyComp()}
      </div>
    </React.Fragment>
  );
};

export default StaticPage;
