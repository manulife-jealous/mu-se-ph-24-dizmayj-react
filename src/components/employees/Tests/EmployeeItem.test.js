import {cleanup, fireEvent, render} from '@testing-library/react';
import EmployeeDetail from './EmployeeItem';


// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('EmployeeDetail changes the isOpenState state after onclick', () => {
  const {findAllByText} = render(
    <EmployeeDetail employee={{id: 1, name: "Test"}} />,
  );

  expect(findAllByText("Test")).toBeTruthy();
});