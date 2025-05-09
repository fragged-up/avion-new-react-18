import { toast, ToastOptions } from 'react-hot-toast';

type ToastType = 'success' | 'error' | 'loading' | 'default';

const baseConfig: ToastOptions = {
  position: 'top-right',
  duration: 3000,
  style: {
    borderRadius: '10px',
    background: '#333',
    color: '#fff',
  },
  iconTheme: {
    primary: '#fff',
    secondary: '#333',
  },
};

const toaster = {
  success: (msg: string, opts?: ToastOptions) =>
    toast.success(msg, { ...baseConfig, ...opts }),

  error: (msg: string, opts?: ToastOptions) =>
    toast.error(msg, { ...baseConfig, ...opts }),

  loading: (msg: string, opts?: ToastOptions) =>
    toast.loading(msg, { ...baseConfig, ...opts }),

  message: (msg: string, opts?: ToastOptions) =>
    toast(msg, { ...baseConfig, ...opts }),

  promise: <T>(
    promise: Promise<T>,
    messages: { loading: string; success: string; error: string },
    opts?: ToastOptions
  ) =>
    toast.promise(promise, {
      loading: messages.loading,
      success: messages.success,
      error: messages.error,
      ...baseConfig,
      ...opts,
    }),
};

export default toaster;
