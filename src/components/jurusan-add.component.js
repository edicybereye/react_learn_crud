import React, { Component } from "react";
import JurusanServices from "../services/jurusan.services";
import swal from "sweetalert";

export default class AddJurusan extends Component {
    state = {
        id: "",
        nama: ""
    }
    constructor(props) {
        super(props);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.save = this.save.bind(this);

    }

    onChangeId(e) {
        this.setState({
            id: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            nama: e.target.value
        });
    }

    save() {
        var data = {
            id: this.state.id,
            nama: this.state.nama
        };

        JurusanServices.tambah(data).then((e => {
            this.setState({
                id: e.data.id,
                nama: e.data.nama
            });
            if (e.data.success === true) {
                this.setState({
                    id: "",
                    nama: "",
                });
                swal("Ok! Data Berhasil ditambahkan!", {
                    icon: "success",});
                window.location.replace("majors");

            }
            console.log(e.data.success);

        }))
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label>ID Jurusan</label>
                    <input
                        type="number" className="form-control" id="id" required value={this.state.id} onChange={this.onChangeId} name="id"
                    />
                </div>
                <div className="form-group">
                    <label>Nama Jurusan</label>
                    <input
                        type="text" className="form-control" id="nama" required value={this.state.nama} onChange={this.onChangeName} name="nama"
                    />
                </div>
                <div className="form-group" style={{ marginTop: 16 }}>
                    <button onClick={this.save} className="btn btn-success">Simpan</button>
                </div>
            </div>
        );
    }
}