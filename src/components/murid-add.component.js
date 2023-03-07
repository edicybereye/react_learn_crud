import React, { Component } from "react";
import MuridServices from "../services/murid.services";
import JurusanServices from "../services/jurusan.services";
import swal from "sweetalert";

export default class AddMurid extends Component {

    state = {
        jurusans: [],

        id: "",
        nama: "",
        profile: "",
        jurusan: "",
        tanggalLahir: "",
        document: "",
        jk: ""
    }
    constructor(props) {
        super(props);
        // this.save = this.save.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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



    onSubmit(e) {
        e.preventDefault()
       

        MuridServices.tambah({
            id: this.state.id,
            fullName: this.state.nama,
            tglLahir: this.state.tanggalLahir,
            gender: this.state.jk,
            document: "test",
            photo: this.state.profile,
            majorsId: this.state.jurusan,
            status: "1",
        }).then((e => {

            if (e.data.success === true) {
                this.setState({
                    id: "",
                    nama: "",
                });
                swal("Ok! Data Berhasil ditambahkan!", {
                    icon: "success",
                });
                window.location.replace("student");

            }
            // console.log(e.data.success);

        }))
    }

    render() {
        const { jurusans } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group">
                                <label>Murid ID</label>
                                <input
                                    type="number" className="form-control" id="id" required value={this.state.id} onChange={
                                        (e) => {
                                            this.setState({
                                                id: e.target.value
                                            })
                                        }
                                    } name="id"
                                />
                            </div>
                            <div className="form-group">
                                <label>Nama Jurusan</label>
                                <select className="form-control" required name="jurusan" onChange={
                                    (e) => {
                                        this.setState({
                                            jurusan: e.target.value
                                        })
                                    }
                                }>
                                    <option value="">-- Pilih Jurusan--</option>
                                    {jurusans.map((data, index) => (
                                        <option value={data.majorsId}>{data.major_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Nama Murid</label>
                                <input className="form-control" required onChange={
                                    (e) => {
                                        this.setState({
                                            nama: e.target.value
                                        })
                                    }
                                } />
                            </div>
                            <div className="form-group">
                                <label>Tanggal Lahir</label>
                                <input className="form-control" type="date" onChange={
                                    (e) => {
                                        this.setState({
                                            tanggalLahir: e.target.value
                                        })
                                    }
                                } required />
                            </div>
                            <div className="form-group">
                                <label>Jenis Kelamin</label>
                                <select className="form-control" onChange={
                                    (e) => {
                                        this.setState({
                                            jk: e.target.value
                                        })
                                    }
                                } required name="jk">
                                    <option value="">-- Pilih Jenis Kelamin--</option>
                                    <option value="L">Laki-laki</option>
                                    <option value="P">Perempuan</option>

                                </select>
                            </div>

                            <div className="form-group">
                                <label>Profile</label>
                                <div>
                                    <input className="form-control" onChange={
                                        (e) => {
                                            this.setState({
                                                profile: e.target.files[0]
                                            })
                                        }
                                    } type="file" required />
                                </div>

                            </div>
                            <div className="form-group" style={{ marginTop: 16 }}>
                                <button type="submit" className="btn btn-success">Simpan</button>
                            </div>
                        </div>

                    </div>
                </form>

            </div>
        );
    }
}