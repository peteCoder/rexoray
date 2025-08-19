import RevealOnScroll from "./RevealOnScroll";

const Heading = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="text-center md:text-left container mx-auto mb-5">
      <RevealOnScroll>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-6 mb-3 uppercase inline-block relative after:absolute after:h-2 after:w-20 after:bg-primary after:left-0 after:bottom-0 dark:text-white">
          {title}
        </h2>
      </RevealOnScroll>
      <RevealOnScroll>
        <p className="max-w-3xl dark:text-gray-300">{text}</p>
      </RevealOnScroll>
    </div>
  );
};

export default Heading;
