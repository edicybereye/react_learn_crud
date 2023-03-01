import React, { Component } from "react";
import JurusanServices from "../services/jurusan.services";
// import { Link } from "react-router-dom";

export default class JurusanList extends Component {
    state = {
        jurusans: []
    }

    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);

    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        JurusanServices.getAll().then((e) => {
            this.setState({
                jurusans: e.data.data
            });
            console.log(e.data.data);
        }).catch((e) => console.log(e));
    }


    render() {
        const { jurusans } = this.state;

        return (
            <div>
                <h4>Data Majors</h4>
                <button className="btn btn-primary" style={{ marginBottom: 16 }}>Tambah Jurusan</button>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Jurusan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jurusans.map((data, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{data.major_name}</td>
                                <td><button className="btn btn-warning">Detail</button></td>
                                
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        );
    }
}