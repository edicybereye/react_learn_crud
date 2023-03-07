import React, { Component } from "react";
import MuridServices from "../services/murid.services";
import { Link } from "react-router-dom";

export default class MuridList extends Component {
    state = {
        murid: []
    }

    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);

    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        MuridServices.getAll().then((e) => {
            this.setState({
                murid: e.data.data
            });
            console.log(e.data.data);
        }).catch((e) => console.log(e));
    }


    render() {
        const { murid } = this.state;

        return (
            <div>
                <h4>Data Murid</h4>
                <Link
                    to={'/tambah-murid'}
                    className="btn btn-primary" style={{ marginBottom: 16 }}>Tambah Murid</Link>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Profile Pics</th>
                            <th>Nama Murid</th>
                            <th>Nama Jurusan</th>
                            <th>Tanggal Lahir</th>
                            <th>JK</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {murid.map((data, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{data.profilePics}</td>
                                <td>{data.fullName}</td>
                                <td>{data.majorsName}</td>
                                <td>{data.tglLahir}</td>
                                <td>{data.gender}</td>
                                <td><Link to={'../murid/' + data.studentId} className="btn btn-warning">Detail</Link></td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        );
    }
}