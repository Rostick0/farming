import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { category } = useParams();

    return (
        <div>{category}</div>
    );
};

export default ProductPage;