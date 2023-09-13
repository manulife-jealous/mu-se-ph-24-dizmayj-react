import { gql, useQuery } from '@apollo/client';

const GET_EMPLOYEE_DETAIL = gql`
  query GetEmployeeDetail($employeeDetailId: ID) {
    employeeDetail(id: $employeeDetailId) {
      id
      name
      dob
      department
      title
      avatarUrl
    }
  }
`;

const EmployeeItemDetail = ({employeeDetailId}) => {
  const { data, loading, error } = useQuery(GET_EMPLOYEE_DETAIL, {variables: {employeeDetailId}});

  if (loading) return (<p>Loading...</p>);
  if (error) return (<p>Error: {error.message}</p>);

  return(<>
    {!loading && data &&
      <>
        <div><b>Name : </b>{data?.employeeDetail.name}</div>
        <div><b>Title : </b>{data?.employeeDetail.title}</div>
        <div><b>Date of Birth : </b> {data?.employeeDetail.dob}</div>
      </>
    }
  </>)
}

export default EmployeeItemDetail;