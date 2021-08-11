import { useForm } from 'react-hook-form';
import { useState } from 'react';
import fetcher, { FaunaFetcher } from '@/lib/faunaFetch';

type FormParams = {
  action: string;
  website: string;
};

export default function Form({ action, website }: FormParams) {
  const [result, setResult] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const submitForm = async (data: FaunaFetcher) => {
    try {
      fetcher(action, data);
      setResult(true);
      reset();
    } catch {
      setResult(false);
    }
  };

  return (
    <div className="mt-8 max-w-xl">
      {result && (
        <div className="mb-4 px-0 py-2 w-full !text-base italic font-bold">
          Thank you for your message!
        </div>
      )}
      <form
        onSubmit={handleSubmit(submitForm)}
        className="grid grid-cols-1 gap-6"
      >
        <label className="block">
          <span>Name</span>
          <input
            type="text"
            className="mt-1 block px-4 py-2 w-full bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            defaultValue=""
            {...register('name', { required: true })}
          />
          {errors.name && (
            <span className="!text-base text-red-500 italic">
              This field is required
            </span>
          )}
        </label>
        <label className="block">
          <span>Email</span>
          <input
            type="text"
            className="mt-1 block px-4 py-2 w-full bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            defaultValue=""
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="!text-base text-red-500 italic">
              This field is required
            </span>
          )}
        </label>
        <label className="block">
          <span>Message</span>
          <textarea
            className="mt-1 block px-4 py-2 w-full bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            rows={5}
            {...register('message', { required: true })}
          ></textarea>
          {errors.message && (
            <span className="!text-base text-red-500 italic">
              This field is required
            </span>
          )}
        </label>
        <input
          type="hidden"
          defaultValue={website}
          {...register('website', { required: true })}
        />
        <input type="hidden" defaultValue="" {...register('country')} />
        <button
          type="submit"
          className="inline-block px-2 py-1 font-bold bg-black text-white !no-underline"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
