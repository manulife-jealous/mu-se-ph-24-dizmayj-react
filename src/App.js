// import logo from './logo.svg';
import './App.css';
import EmployeeList from './components/employees/EmployeeList';
import ItemFilter from './components/filter/ItemFilter';
import { gql, useQuery } from '@apollo/client';

const GET_DEPARTMENT_EMPLOYEES = gql`
  query GetDepartmentEmployees {
    departments {
      id
      name
      employees {
        id
        name
      }
    }
  }
`;

const transformFilterData = (data) => {
  let pills = data.departments.map(pill => {
    return { 
      label: pill.name, 
      value: pill.name, 
      card: (<EmployeeList employees={pill.employees}></EmployeeList>)
    } 
  })
  return [{ value: 'all', label: 'All' },...pills];
}

function App() {
  
  const { data, loading, error } = useQuery(GET_DEPARTMENT_EMPLOYEES);

  if (loading) return (<p>Loading...</p>);
  if (error) return (<p>Error: {error.message}</p>);

  let employeesbydepartment = transformFilterData(data);

  return (
    <>
      <div style={{margin: '10px'}}>
        { !loading && employeesbydepartment && 
          <ItemFilter data={employeesbydepartment}></ItemFilter>
        }
      </div>
    </>
  );
}

export default App;
