const Button = ({ name }) => {
  return (
    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full whitespace-nowrap hover:bg-gray-200">
      {name}
    </button>
  );
};

export default Button;
