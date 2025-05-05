import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/AspectRatio';
import NotFoundImage from '@/assets/images/notFoundImage.jpg';

const NotFoundPage: React.FC = () => {
  return (
    <section className="inline-grid justify-center items-center py-10 mx-auto">
      <div className="">
        <h1 className="text-2xl md:text-5xl font-normal text-indigo-500 mb-4 text-center font-clash">Oops! Page Not Found</h1>
        <p className="text-sm md:text-lg text-gray-600 mb-6 text-center tracking-tighter font-satoshi">Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.</p>

        <div className="flex justify-center gap-4">
          <Link to="/" className="bg-indigo-400 text-white py-2 px-3 md:px-6 rounded-lg font-clash text-lg hover:bg-indigo-500 transition-colors">
            Go to Homepage
          </Link>
          <Link
            to="/products"
            className="bg-indigo-400 text-white py-2 px-3 md:px-6 font-clash rounded-lg text-lg hover:bg-indigo-500 transition-colors">
            Browse Shop
          </Link>
        </div>
      </div>

      <div className="inline-flex md:flex justify-center items-center rounded-xl mt-8 max-w-4/5 md:max-w-full">
        <img src={NotFoundImage} alt="page-not-found" draggable={false} className="w-80 h-80 sm:w-96 md:w-full md:h-96 bg-cover rounded-xl" />
      </div>
    </section>
  );
};

export default NotFoundPage;
