import http from "../https-connect";

class JurusanServices {
    getAll() {
        return http.get("/jurusan");
        // console.log("");
    }
    get(id) {
        return http.get("/jurusan/" + id);
    }

    tambah(data) {
        return http.post("jurusan/add", data)
    }
    hapus(data) {
        return http.post("jurusan/delete", data)
    }

    edit(data) {
        return http.post("jurusan/edit", data)
    }

}

export default new JurusanServices();