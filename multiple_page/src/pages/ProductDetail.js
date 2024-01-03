import {useParams} from "react-router-dom";


function ProductDetailPage() {
    const params = useParams();

    return <h1>Details for {params.productId}</h1>
}

export default ProductDetailPage;