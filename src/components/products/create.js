import { useState } from "react";
import { saveProduct } from "../../api/products";

export default function CreateProduct(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState(null);

    async function addProduct(e) {

        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);

        for (let i = 0; i < images.length; i++) {
            formData.append('images[]', images[i]);
        }

        await saveProduct(formData).then((res) => {
            props.update();
        }).catch((error) => alert("sth happened"))
    }

    function handleImage(e) {
        const files = e.target.files;
        setImages(files);
    }

    return (
        <>
            <form>
                <input onChange={(e) => setTitle(e.target.value)} ></input>
                <textarea onChange={(e) => setDescription(e.target.value)} ></textarea>

                <input multiple type='file' onChange={(e) => handleImage(e)} />

                <button onClick={addProduct}>
                    Save
                </button>
            </form>
        </>
    )
}