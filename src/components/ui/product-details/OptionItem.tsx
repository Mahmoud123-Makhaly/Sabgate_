import React from "react";
interface ISidebarFilterItemProps {
  type?: React.HTMLInputTypeAttribute | undefined;
  name?: string;
  label?: string;
  id?: string;
  containerClassName?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  price?: string | number;
}
const OptionItem = (
  props: ISidebarFilterItemProps & React.InputHTMLAttributes<HTMLInputElement>
) => {
  const {
    type,
    containerClassName,
    id,
    label,
    name,
    onChange,
    price,
    ...rest
  } = props;
  return (
    <div className={`border d-flex rounded ${containerClassName}`}>
      <div className="border-end mx-3 pe-3 flex-col">
        <input
          className="form-check-input "
          type={type}
          name={name || "input"}
          id={id}
          onChange={onChange}
          {...rest}
        />
      </div>
      <label htmlFor={id} className="text-discount text-14 text-gray w-100">
        <p className="fw-bold">{label}</p>
        <p>{price}</p>
      </label>
    </div>
  );
};

export default OptionItem;
