type InputProps = {
  labelName?: string;
  type: "text" | "email" | "search";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input = ({ labelName, type, placeholder, value, onChange, className }: InputProps) => {
  return (
    <div className={`flex flex-col gap-2 text-gray-500 `}>
      <label>{labelName}</label>
      <input
        className={`border outline-none border-gray-400 px-2 py-3 w-full focus:border-orange-200 ${className}`}
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
