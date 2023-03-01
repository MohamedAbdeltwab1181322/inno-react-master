import { useState, useEffect, useRef } from "react";
import { deleteProduct, getProducts } from "../../api/products";
import CreateProduct from "./create";
import Product from "./product";

export default function ListProducts() {

    const [products, setProducts] = useState([]);
    const [create, setCrrate] = useState(false);

    const productsList = async () => {
        await getProducts().then((data) => {
            setProducts(data);
        })
    }

    function deleteTheProduct(id) {
        deleteProduct(id).then((res) => {
            productsList();
        }).catch((err) => {
            alert("sth happened");
        });
    }

    useEffect(() => {
        productsList();
    }, [])

    function getImage(images) {

        if (images.length <= 0 || images[0].image_url === undefined) {
            return null
        }
        return images[0].image_url;
    }

    function addProduct(params) {
        setCrrate(true);
    }

    function update() {
        productsList();
        setCrrate(false);
    }

    return (
        <>
            <h3> Products </h3>
            <button onClick={addProduct} >Add One</button>

            {
                create ? <CreateProduct update={update} />
                :
                    products.length == 0 ?
                        (
                            <p> No Items </p>
                        ) :
                        (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Dewscription</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product) => {
                                            return (
                                                <Product
                                                    key={product.id}
                                                    id={product.id}
                                                    title={product.title}
                                                    description={product.description}
                                                    imageUrl={getImage(product.images)}
                                                    deleteTheProduct={deleteTheProduct}
                                                />

                                            );
                                        })
                                    }
                                </tbody>



                            </table>
                        )

            }
        </>



    )
}