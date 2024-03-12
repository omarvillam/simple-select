import {CountryProps} from "../utils/countries";

interface CheckboxProps extends CountryProps {
  onChange: () => void
}

function Checkbox({label, selected, onChange}: CheckboxProps) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={selected} onChange={onChange} />
        {label}
      </label>
    </div>
  );
}

export default Checkbox