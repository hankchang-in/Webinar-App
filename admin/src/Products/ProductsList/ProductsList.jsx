'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Navbar from '../../Home/Navbar/Navbar'
const ProductsPage = () => {
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const limit = 10;

    useEffect(() => {
        fetchProducts();
    }, [currentPage, searchQuery]);

    const fetchProducts = async () => {
        setIsLoading(true);
        console.log(currentPage)
        try {
            const response = await axios.get(`http://localhost:3000/api/products`, {
                params: {
                    limit,
                    skip: ((currentPage - 1) * limit),
                    search: searchQuery
                }
            });

            console.log(response)
            setProducts(response.data);
            // setTotalPages(Math.ceil(response.data.total / limit));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
        setIsLoading(false);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            try {
                await axios.delete(`/api/products/${id}` , {
                    params:{
                        id,
                    }
                });
                fetchProducts();
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };



    return (
        <div className="flex h-6/6" >
            <div >
                <Navbar></Navbar>
            </div>
            <div className="overflow-scroll h-screen container mx-auto p-4 max-w-7xl">
                <div className="mb-8">

                    <div className="relative max-w-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search products by name or description..."
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                {isLoading ? (
                    <div className="animate-pulse space-y-4">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-16 bg-gray-100 rounded-lg" />
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Product Image</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Product</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Description</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Price</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Stock</th>
                                            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {products.map((product) => (
                                            <tr key={product._id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-4 h-10 w-10 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><img src={product.productImage} alt="" /></td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.productName}</td>
                                                <td className="px-4 py-4 text-sm text-gray-600 max-w-xs truncate">{product.productDescription}</td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                                                    <span className="inline-block bg-blue-50 text-blue-800 px-2 py-1 rounded">
                                                        ${product.productPrice.toFixed(2)}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.productQuantity > 10 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                        }`}>
                                                        {product.productQuantity.stock} in stock
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                                    <button
                                                        onClick={() => handleEdit(product)}
                                                        className="text-blue-600 hover:text-blue-900 p-2 rounded-lg hover:bg-blue-50 transition-all"
                                                        aria-label="Edit product"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(product._id)}
                                                        className="text-red-600 hover:text-red-900 p-2 rounded-lg hover:bg-red-50 transition-all"
                                                        aria-label="Delete product"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {products.length === 0 && (
                                <div className="text-center py-12">
                                    <div className="mx-auto mb-4 text-gray-400">
                                        <svg className="w-16 h-16 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-600 text-lg">No products found{searchQuery && ` matching "${searchQuery}"`}</p>
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery('')}
                                            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            Clear search
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="mt-6 flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-100">
                            {/* Mobile buttons remain the same */}

                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>{/* Showing results text remains same */}</div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        {/* Previous button remains same */}

                                        {(() => {
                                            const pages = [];
                                            const maxVisible = 5; // Show max 5 page numbers
                                            let start = Math.max(1, currentPage - 2);
                                            let end = Math.min(totalPages, currentPage + 2);

                                            if (currentPage <= 3) {
                                                end = Math.min(maxVisible, totalPages);
                                            }
                                            if (currentPage >= totalPages - 2) {
                                                start = Math.max(totalPages - maxVisible + 1, 1);
                                            }

                                            // First page
                                            if (start > 1) {
                                                pages.push(
                                                    <button key={1} onClick={() => setCurrentPage(1)}
                                                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${1 === currentPage ? 'bg-blue-50 border-blue-500 text-blue-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                                            }`}
                                                    >
                                                        1
                                                    </button>
                                                );
                                                if (start > 2) pages.push(<span key="start-ellipsis" className="px-4 py-2 text-gray-500">...</span>);
                                            }

                                            // Main range
                                            for (let i = start; i <= end; i++) {
                                                pages.push(
                                                    <button
                                                        key={i}
                                                        onClick={() => setCurrentPage(i)}
                                                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${i === currentPage
                                                                ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                                                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                                            }`}
                                                    >
                                                        {i}
                                                    </button>
                                                );
                                            }

                                            // Last page
                                            if (end < totalPages) {
                                                if (end < totalPages - 1) pages.push(<span key="end-ellipsis" className="px-4 py-2 text-gray-500">...</span>);
                                                pages.push(
                                                    <button key={totalPages} onClick={() => setCurrentPage(totalPages)}
                                                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${totalPages === currentPage ? 'bg-blue-50 border-blue-500 text-blue-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                                            }`}
                                                    >
                                                        {totalPages}
                                                    </button>
                                                );
                                            }

                                            return pages;
                                        })()}

                                        {/* Next button remains same */}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>

    );
};

export default ProductsPage;