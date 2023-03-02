import React, { Component } from "react";
import JurusanServices from "../services/jurusan.services";
import { withRouter } from "../common/with-router";
import swal from "sweetalert";
class Jurusan extends Component {
    state = {
        jurusan: {
            majorsId: "",
            major_name: ""
        }
    }
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);

    }

    componentDidMount() {
        this.getData(this.props.router.params.id);
    }

    getData(id) {
        JurusanServices.get(id).then((e) => {
            this.setState({
                jurusan: e.data.data[0]
            });
            console.log(e.data.data);
        });
    }

    onChangeId(e) {
        const majorsId = e.target.value;
        this.setState(function (prevState) {
            return {
                jurusan: {
                    ...prevState.jurusan,
                    majorsId: majorsId
                }
            };
        });
    }

    onChangeName(e) {
        const major_name = e.target.value;
        this.setState(function (prevState) {
            return {
                jurusan: {
                    ...prevState.jurusan,
                    major_name: major_name
                }
            };
        });
    }

    save() {
        var data = {
            id: this.state.jurusan.majorsId,
            nama: this.state.jurusan.major_name
        };

        JurusanServices.edit(data).then((e => {
            this.setState({
                id: e.data.id,
                nama: e.data.nama
            });

            console.log(e.data.success);
            swal("Ok! Data Berhasil diedit!", {
                icon: "success",});
            window.location.replace("../majors");

        }))
    }


    delete() {
        var data = {
            id: this.state.jurusan.majorsId,
        };

        swal({
            title :  "Hapus data",
            text : "Anda akan menghapus data ini?",
            icon : "warning",
            buttons : true,
            dangerMode : true
        }).then((willDelete)=>{
            if(willDelete){
                JurusanServices.hapus(data).then((e => {
                    this.setState({
                        id: e.data.id,
        
                    });
        
                    console.log(e.data.success);
                    swal("Berhasil dihapus", {icon : "success"});    
                    window.location.replace("../majors");
        
                }))
            }else{
                swal("Membatalkan penghapusan", {icon : "success"});
            }
            
        });

       
    }

    render() {
        const { jurusan } = this.state;
        return (
            <div>
                <div className="form-group">
                    <label>ID Jurusan</label>
                    <input
                        type="number" className="form-control" id="id" required value={jurusan.majorsId} onChange={this.onChangeId} name="id"
                    />
                </div>
                <div className="form-group">
                    <label>Nama Jurusan</label>
                    <input
                        type="text" className="form-control" id="nama" required value={jurusan.major_name} onChange={this.onChangeName} name="nama"
                    />
                </div>
                <div className="form-group" style={{ marginTop: 16 }}>
                    <button onClick={this.save} className="btn btn-success">Edit</button> <button onClick={this.delete} className="btn btn-danger">Hapus</button>

                </div>
            </div>
        );
    }
}

export default withRouter(Jurusan);