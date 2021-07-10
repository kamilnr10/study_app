import React, { useState } from 'react';
// import UsersList from 'components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Form from 'components/organisms/Form/Form';
// import { users as usersData } from 'data/users';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashboard';
import AddUser from 'views/AddUser';
import UsersProvider from 'providers/UsersProvider';

// const mockAPI = (succes) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (usersData) {
//         resolve([...usersData]);
//       } else {
//         reject({ message: 'Error' });
//       }
//     }, 2000);
//   });
// };

// export const UsersContext = React.createContext({
//   users: [],
//   handleAddUser: () => {},
//   deleteUser: () => {},
// });

const Root = () => {
  // const [users, setUsers] = useState(usersData);
  // const [isLoading, setLoadingState] = useState([]);

  // const deleteUser = (name) => {
  //   const filteredUsers = users.filter((user) => user.name !== name);
  //   setUsers(filteredUsers);
  // };

  // const handleAddUser = (formValues) => {
  //   const newUser = {
  //     name: formValues.name,
  //     attendance: formValues.attendance,
  //     average: formValues.average,
  //   };

  //   setUsers([newUser, ...users]);
  // };

  // useEffect(() => {
  //   setLoadingState(true);
  //   mockAPI()
  //     .then((data) => {
  //       setLoadingState(false);
  //       setUsers(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Switch>
                <Route path="/add-user">
                  <AddUser />
                </Route>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
              </Switch>
            </Wrapper>
          </UsersProvider>
          {/* <UsersContext.Provider value={{ users, handleAddUser, deleteUser }}> */}

          {/* </UsersContext.Provider> */}
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
