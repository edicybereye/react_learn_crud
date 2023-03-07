import http from "../https-connect";

class MuridServices {
    getAll() {
        return http.get("/student");
        // console.log("");
    }
    get(id) {
        return http.get("/student/" + id);
    }

    tambah(data) {
        return http.post("student/add", data,);
    }
    hapus(data) {
        return http.post("student/delete", data)
    }

    edit(data) {
        return http.post("student/edit", data)
    }

}

export default new MuridServices();