import RevealOnScroll from "./RevealOnScroll";

const Heading = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="container mx-auto mb-10 text-center md:text-left">
      <RevealOnScroll>
        <h2 className="text-3xl font-light text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </RevealOnScroll>
      <RevealOnScroll>
        <p className="mx-auto mt-4 max-w-3xl text-white/60 md:mx-0">{text}</p>
      </RevealOnScroll>
    </div>
  );
};

export default Heading;
