type InputProps = {
  labelName: string;
  type: "text" | "email";
};

const Input = ({ labelName, type }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 text-gray-500">
      <label>{labelName}</label>
      <input
        className="border outline-none border-gray-400 px-2 py-3 w-full focus:border-orange-200 "
        type={type}
        required
      />
    </div>
  );
};

export default Input;
