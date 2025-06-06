import { useState } from 'react';
import { selectCartItems, selectIsCartOpen } from '@/stores/cart';
import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
import CheckoutSummaryItem from '@/features/cart/CheckoutSummaryItem';

const CheckoutPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(selectIsCartOpen);
  const CART_ITEMS = useAppSelector(selectCartItems);
  const totalPrice = CART_ITEMS.reduce((sum: any, item: any) => sum + item.productPrice * item.quantity, 0);

  console.log(CART_ITEMS);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    address: '123 Main Street, Apartment 5B, Springfield, IL',
    email: 'johndoe@example.com',
    card: '1234 5678 9876 5432',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#4E4D91] text-white py-4 text-center">
        <h1 className="text-3xl font-clash font-medium">Checkout</h1>
      </header>

      <div className="flex flex-col md:flex-row justify-between p-8 max-w-screen-xl mx-auto">
        <div className="w-full md:w-2/3 bg-gray-100 p-6 rounded-lg shadow-lg mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-[#4E4D91] mb-4 font-clash">Order Summary</h2>
          <ul className="space-y-3">
            {CART_ITEMS.length > 0 ? (
              CART_ITEMS.map((item: any) => (
                <li key={item._id}>
                  <CheckoutSummaryItem item={item} />
                </li>
              ))
            ) : (
              <li>Your cart is empty.</li>
            )}
            <li className="flex justify-between font-semibold pt-4 border-t border-gray-300">
              <span className='font-clash font-semibold text-[#4e4d93]'>Total</span>
              <span className='font-clash'>${totalPrice.toFixed(2)}</span>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#4E4D91] mb-4">Billing Details</h2>
          <form onSubmit={handleSubmit} className='font-satoshi'>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E4D91]"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E4D91]"
                placeholder="Enter your address"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E4D91]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="card" className="block text-gray-700">
                Credit Card Number
              </label>
              <input
                type="text"
                id="card"
                name="card"
                value={formData.card}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E4D91]"
                placeholder="Enter your credit card number"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#4E4D91] font-clash text-xl text-white py-3 rounded-md hover:bg-[#3a3a7a] focus:outline-none focus:ring-2 focus:ring-[#4E4D91]">
              Complete Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
