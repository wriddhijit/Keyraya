import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import ReCAPTCHA from "react-google-recaptcha";

function Login() {
    const [formData, setFormData] = useState({
        email: '', // Changed from name to email for typical login process
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    // const [Captcha, setCaptcha] = useState(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // if (!Captcha) {
    //     alert("Please verify that you are not a robot.");
    //     return;
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Adjust the URL as needed to match your backend endpoint
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
            console.log('Login successful:', response.data);
            alert('Login successful!'); // Or handle redirect to dashboard or other appropriate actions
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : 'No response');
            alert('Login failed: ' + (error.response ? error.response.data.message : 'No response'));
        }
    };

    return (
        <>
            <div className="container mx-auto p-4">
                <form className="max-w-lg" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-loose focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-8">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-loose focus:outline-none focus:shadow-outline pr-10"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
                            >
                                {showPassword ? (
                                    <img
                                        src="src/assets/icons8-hide-password-50.png"
                                        alt="Hide Password"
                                        className="h-6 w-6"
                                    />
                                ) : (
                                    <img
                                        src="src/assets/icons8-show-password-50.png"
                                        alt="Show Password"
                                        className="h-6 w-6"
                                    />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="mb-4">
                    {/* <ReCAPTCHA sitekey="6LdxUbopAAAAALgGaG7pe5bHQX2iGuB_EZQlRtCZ" onChange={(val) => setCaptcha(val)} /> */}
                        {/* <label className="block text-gray-700 text-lg font-bold mb-2">
                            <input type="checkbox" className="mr-2 leading-loose" />
                            I'm not a robot
                        </label> */}
                    </div>
                    <button
                        type="submit"
                        // disabled={Captcha}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                </form>

                <p className="px-3 pt-4 text-balance text-center">
                    By clicking through, I agree with the{" "}
                    <Link to="/Terms&Conditions">
                        <span className="underline text-blue-500">
                            Terms & Conditions{" "}
                        </span>
                    </Link>
                    and{" "}
                    <Link to="/Privacy_Policy">
                        <span className="underline text-blue-500">Privacy Policy</span>
                    </Link>
                </p>
            </div>
        </>
    );
}

export default Login;
