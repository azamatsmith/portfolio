import React from 'react';

import AddBook from './AddBook';
import AddProject from './AddProject';
import AddWork from './AddWork';

const Admin = () => (
  <div className="Admin">
    <AddWork />
    <AddProject />
    <AddBook />
  </div>
);

export default Admin;
