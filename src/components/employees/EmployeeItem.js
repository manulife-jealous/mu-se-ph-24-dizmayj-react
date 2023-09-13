import { useState } from "react";
import EmployeeItemDetail from "./EmployeeItemDetails";

const EmployeeDetail = ({employee}) => {
  const { id, name } = employee;

  const [isOpenState, setIsOpenState] = useState(false);

  const handleOnClick = async () => {
    setIsOpenState(!isOpenState);
  };
  
  return (
    <>
      <div style={{ borderRadius: '10px', border: '1px black solid' , margin: '10px', padding: '10px', width: '240px'}}>
        <h3 onClick={handleOnClick} >{name}</h3>

        { isOpenState &&
          <EmployeeItemDetail employeeDetailId={id}></EmployeeItemDetail>}
      </div>
    </>
  )
}

export default EmployeeDetail;