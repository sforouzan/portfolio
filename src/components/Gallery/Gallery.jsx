import classNames from "classnames";
import Image from "next/image";

const Gallery = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items?.map((item, i) => {
        return (
          <div
            key={i}
            className={classNames("bg-gray-100 h-[500px] relative rounded-[10px]", {
              'col-span-2': i % 4 === 0 || i % 4 === 3, // Apply to every 4th div starting from 0 and 3
            })}
          >
            <a href={item.link} className="block w-full h-full rounded-[10px]">
              <Image
                src={item.image} // Use fallback image if item.image is not provided
                alt="portfolio item"
                fill // Fill the parent container
                className="object-cover rounded-[10px]" // Ensure the image covers the div
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
