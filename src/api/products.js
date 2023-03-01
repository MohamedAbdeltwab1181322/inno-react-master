import http from "./http";


export const getProducts = () => {

    return new Promise((resolve, reject) => {

        http.get('products').then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    });
}

export const deleteProduct = (id) => {

    return new Promise((resolve, reject) => {

        http.delete('products/' + id).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    });
}


export const saveProduct = (data) => {

    return new Promise((resolve, reject) => {

        http.post('products/', data).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    });
}