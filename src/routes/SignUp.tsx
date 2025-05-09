import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
import { selectAuthLoading, signupUser } from '@/stores/auth';
import toaster from '@/utils/toaster';

const signUpSchema = z.object({
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters').nonempty('Password is required'),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectAuthLoading);
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: SignUpFormData) => {
    toaster.loading('Signing up...');
    dispatch(signupUser(data))
      .unwrap()
      .then(() => {
        toaster.success('Sign up successful!');
        navigate('/login');
      })
      .catch((rejectedValue) => {
        console.error('Sign up failed:', rejectedValue);
        toaster.error(rejectedValue as string || 'Sign up failed.');
      });
  };

  //Todo :
  // style the toaster his outputing a number instead actual toast
  // we got sucess from backend and acesstoken, store it the localstorage for now + redirect to home or make a dashboard page with toaster login success

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-indigo-700 mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password')}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={loading === 'pending'}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
