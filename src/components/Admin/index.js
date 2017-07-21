import React from 'react';

import AddBook from './AddBook';
import AddProject from './AddProject';
import AddWork from './AddWork';

import './Admin.css';


const Admin = () => (
  <div className="Admin">
    <AddWork />
    <AddProject />
    <AddBook />
  </div>
);

export default Admin;
