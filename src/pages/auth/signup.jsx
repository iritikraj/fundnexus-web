import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Sign up</h2>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <div className="flex gap-4">
          <input
            {...register("firstName", { required: true })}
            placeholder="First Name"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            {...register("lastName", { required: true })}
            placeholder="Last Name"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <input
          {...register("email", { required: true })}
          placeholder="Email"
          type="email"
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          {...register("mobile", { required: true })}
          placeholder="Mobile Number"
          type="tel"
          className="w-full px-4 py-2 border rounded-md"
        />

        <div className="flex gap-4">
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            {...register("confirmPassword", { required: true })}
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="flex gap-4">
          <select {...register("country", { required: true })} className="w-full px-4 py-2 border rounded-md">
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>

          <select {...register("city", { required: true })} className="w-full px-4 py-2 border rounded-md">
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>

        <select {...register("description", { required: true })} className="w-full px-4 py-2 border rounded-md">
          <option value="">Which describes you?</option>
          <option value="Investor">Investor</option>
          <option value="Startup">Startup</option>
        </select>

        <input
          {...register("aadhar", { required: true })}
          placeholder="Aadhar Number"
          type="text"
          className="w-full px-4 py-2 border rounded-md"
        />

        <div className="justify-center items-center flex flex-col space-y-2">
          <label className="inline-flex items-center">
            <input type="checkbox" {...register("terms", { required: true })} className="mr-2" />
            I agree to the <a href="#" className="text-blue-600 pl-1 pr-1">Terms of use</a>
            and
            <a href="#" className="text-blue-600 pl-1 pr-1">Privacy policy</a>
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" {...register("newsletter")} className="mr-2" />
            Send me occasional updates and newsletter
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition cursor-pointer"
        >
          Continue
        </button>

        <p className="text-center text-gray-600">
          Already have an account? <a onClick={() => navigate('/login')} className="text-blue-600 cursor-pointer">Log in</a>
        </p>
      </form>
    </div>
  );
}