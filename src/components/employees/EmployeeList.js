import EmployeeDetail from './EmployeeItem';

const EmployeeList = ({employees}) => {
  return (
    <>
      { 
        employees.map(e => {
          return (<EmployeeDetail key={e.id} employee={e}></EmployeeDetail>
          )
        })
      }
    </>
  )
}

export default EmployeeList;