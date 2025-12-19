const ServiceItem = ({ title, description, image }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <img src={image} className="w-16 h-16" />
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;
