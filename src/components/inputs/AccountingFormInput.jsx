import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const AccountingFormInput = ({
  type,
  name,
  id,
  placeholder,
  onChange,
  value,
  isRequired = true,
  hasIcon = false,
}) => {
  const [isShowPass, setIsShowPass] = useState(false);

  return (
    <div className="relative bg-white h-12 w-96">
      <input
        className="outline-none w-full h-full px-4 py-2 pr-16"
        type={isShowPass ? "text" : type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={isRequired}
      />
      {hasIcon &&
        (!isShowPass ? (
          <span className="absolute right-0 top-0 bg-gray-200 px-3 py-[9px]">
            <BsEye
              onClick={() => {
                setIsShowPass(true);
              }}
              size={30}
            />
          </span>
        ) : (
          <span className="absolute right-0 top-0 bg-gray-200 px-3 py-[9px]">
            <BsEyeSlash
              onClick={() => {
                setIsShowPass(false);
              }}
              size={30}
            />
          </span>
        ))}
    </div>
  );
};
export default AccountingFormInput;
