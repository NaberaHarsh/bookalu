import React from "react";
// import DropdownList from "react-widgets/lib/DropdownList";
import { FieldRenderProps } from "react-final-form";



type Props = FieldRenderProps<string, any>;

const Dropdown: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
    <div  className="">


          
{/* <DropdownList

 defaultValue="Yellow"
 data={["Red", "Yellow", "Blue", "Orange"]}
/>; */}
    <select 
    {...input} {...rest} >
 
         <option value="male">Male</option>
          <option value="female">Female</option>
         <option value="Rather Not Say">Rather Not Say</option>

      </select>
</div>
);
export default Dropdown;


