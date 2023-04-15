import ReactSelect from "react-select";

const Select = ({ options, id }: any) => {
  return (
    <ReactSelect
      unstyled
      options={options}
      classNames={{
        control: (state) =>
          `bg-black  p-4 border border-gray-500 font-bold text-lg !cursor-pointer`,
        option: (state) =>
          `${
            state.isSelected ? "font-bold" : "font-normal"
          } !cursor-pointer bg-black p-2 text-lg hover:bg-slate-800`,
        container: () => "",
        menu: () => "border border-gray-500 py-2 !z-20 bg-black",
      }}
      placeholder="Select your UPI App"
    />
  );
};

export default Select;
