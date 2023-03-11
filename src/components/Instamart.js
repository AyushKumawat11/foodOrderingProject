import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <h1 className="font-extrabold text-lg text-teal-600">{title}</h1>
      {isVisible ? (
        <button
          className="cursor-pointer hover:text-rose-700"
          onClick={() => setIsVisible(false)}
        >
          HIDE
        </button>
      ) : (
        <button
          className="cursor-pointer hover:text-rose-700"
          onClick={() => setIsVisible(true)}
        >
          SHOW
        </button>
      )}

      {isVisible && <h2 className="font-medium text-base">{description}</h2>}
    </div>
  );
};

const Instamart = () => {
  const [sectionVisible, setSectionVisible] = useState();
  return (
    <>
      <div className="m-2 border border-zinc-900">
        <Section
          title={"About Instamart"}
          description={
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }
          isVisible={sectionVisible === "about"}
          setIsVisible={(e) => {
            e ? setSectionVisible("about") : setSectionVisible("");
          }}
        ></Section>
      </div>

      <div className="m-2 border border-zinc-900">
        <Section
          title={"Team Instamart"}
          description={
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }
          isVisible={sectionVisible === "team"}
          setIsVisible={(e) => {
            e ? setSectionVisible("team") : setSectionVisible("");
          }}
        ></Section>
      </div>

      <div className="m-2 border border-zinc-900">
        <Section
          title={"Product Instamart"}
          description={
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }
          isVisible={sectionVisible === "product"}
          setIsVisible={(e) => {
            e ? setSectionVisible("product") : setSectionVisible("");
          }}
        ></Section>
      </div>
    </>
  );
};

export default Instamart;
