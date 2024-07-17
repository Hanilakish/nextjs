import React from 'react'
import {useParams} from "react-router-dom";

const ProductDetailPage=()=>
{
    let{id}=useParams();
    return(
        <div className="bg-gray-200 h-screen flex justify-center items-center">
            <div className="p-11 bg-white shadow-lg rounded-lg">
                <h1 className="text-6xl font-bold text-blue-600 mb-4">Product</h1>
                <p className="text-lg text-gray-800 mb-2">Viewing deatials for product ID:{id}</p>
            </div>
        </div>
    );
};

export default ProductDetailPage;