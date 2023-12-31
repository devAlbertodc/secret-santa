import { CheckboxField, Label } from "@redwoodjs/forms"

const Checkbox = ({label, name , ...rest}) => {
  return (
    <div className="field">
      <CheckboxField name={name} id={name} {...rest} />
      <Label name={name}>{label}</Label>
    </div>
  )
}

export default Checkbox
