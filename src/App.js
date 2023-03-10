import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import JurusanList from './components/jurusan-list.component';
import AddJurusan from './components/jurusan-add.component';
import Jurusan from './components/jurusan.component';
import MuridList from './components/murid-list.component';
import AddMurid from './components/murid-add.component';

class App extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <a href='/majors' className='navbar-brand' style={{ paddingLeft: 20 }} >
            DB Campus
          </a>
          <div className='navbar-nav mr-auto'>
            <li>
              <Link to={"/majors"} className='nav-link'>
                Data Majors
              </Link>
            </li>
            <li>
              <Link to={"/students"} className='nav-link'>
                Data Students
              </Link>
            </li>
          </div>
        </nav>
        {/* Body Router  */}
        <div className='container mt-3'>
          <Routes>

            <Route path='tambah-jurusan' element={<AddJurusan />} />
            <Route path='tambah-murid' element={<AddMurid />} />
            <Route path='jurusan/:id' element={<Jurusan />} />
            <Route path='majors' element={<JurusanList />} />
            <Route path='students' element={<MuridList />} />
          </Routes>
        </div>
      </div>
    );
  }
}
export default App;
