export function Partner({ imageURL }) {
  return (
      <img
        src={imageURL}
        alt={imageURL}
        className="m-auto md:w-[150px]"
      />
  );
}