import React from "react";

function Card(props) {
  const { src, title, tagline, index } = props.props;
  return (
    <div
      key={index}
      className="flex flex-col items-center justify-center mb-16 transition-all duration-500 ease-in-out border border-gray-400 lg:mb-0 hover:shadow-2xl py-11 md:py-16 rounded-3xl px-9 hover:bg-gray-100"
    >
      <img src={src} alt={title} className="w-32 md:w-40" />
      <h5 className="text-2xl font-bold text-center text-purple-500 py-9 md:text-3xl">
        {title}
      </h5>
      <p className="text-sm text-center md:text-lg">{tagline}</p>
    </div>
  );
}

function Tools() {
  const Data = [
    {
      src: "Python.png",
      title: "Python",
      tagline: "- Learned Basics Of Python, Django And Flask Web Framework",
    },
    {
      src: "js.png",
      title: "JavaScript",
      tagline:
        "- This Is My Favourite Programming Language, I Know JS Pretty Well",
    },
    {
      src: "design.png",
      title: "UI/UX Design",
      tagline: "- Want To Learn Web Design In Future",
    },
    {
      src: "firefox.webp",
      title: "Firefox Developer Editon",
      tagline: "- Web Browser That I Use Daily",
    },
    {
      src: "vscode.png",
      title: "VS Code",
      tagline: "- Source Code Editor That I Use In Daily",
    },
    {
      src: "adobexd.png",
      title: "Adobe XD",
      tagline: "- Prototyping Tool That I Use In Web Design",
    },
  ];
  return (
    <section className="font-mono bg-white lg:pb-36">
      <h3 className="py-16 text-2xl font-bold text-center text-purple-500 md:py-20 md:text-3xl">
        Tools That I Use
      </h3>
      <div className="px-8 sm:px-20 lg:grid lg:grid-cols-2 lg:gap-10 xl:grid-cols-3 xl:gap-5 2xl:px-60">
        {Data.map((item, index) => {
          return <Card props={item} key={index} />;
        })}
      </div>
    </section>
  );
}

export default Tools;
