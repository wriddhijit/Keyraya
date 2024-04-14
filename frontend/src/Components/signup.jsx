import { useState } from 'react';
import axios from 'axios';
// import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        aadharNumber: '',
        drivingLicenseNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // const [Captcha, setCaptcha] = useState(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // if (!Captcha) {
        //     alert("Please verify that you are not a robot.");
        //     return;
        // }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
            console.log('Signup successful:', response.data);
            alert("Signup successful!");
        } catch (error) {
            console.error('Signup error:', error.response ? error.response.data : 'No response');
            alert("Signup failed: " + (error.response ? error.response.data.error : 'No response'));
        }
    };

    return (
        <div className="container mx-auto p-4">
            <form className="max-w-lg" onSubmit={handleSubmit}>
                {['name', 'phoneNumber', 'aadharNumber', 'drivingLicenseNumber', 'email'].map((field, index) => (
                    <div className="mb-4" key={index}>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            {field.charAt(0).toUpperCase() + field.replace(/([A-Z])/g, ' $1').slice(1)}
                        </label>
                        <input
                            type="text"
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-loose focus:outline-none focus:shadow-outline"
                            placeholder={`Enter your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                            required
                        />
                    </div>
                ))}
                <div className="mb-8 relative">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-loose focus:outline-none focus:shadow-outline pr-10"
                        placeholder="Enter your password"
                        required
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
                    >
                        <img
                            src={showPassword ? "src/assets/icons8-hide-password-50.png" : "src/assets/icons8-show-password-50.png"}
                            alt={showPassword ? "Hide Password" : "Show Password"}
                            className="h-6 w-6"
                        />
                    </button>
                </div>
                <div className="mb-8 relative">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Confirm Password
                    </label>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-loose focus:outline-none focus:shadow-outline pr-10"
                        placeholder="Confirm your password"
                        required
                    />
                    <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center px-3 "
                    >
                        <img
                            src={showConfirmPassword ? "src/assets/icons8-hide-password-50.png" : "src/assets/icons8-show-password-50.png"}
                            alt={showConfirmPassword ? "Hide Password" : "Show Password"}
                            className="h-6 w-6"
                        />
                    </button>
                </div>
                <div className="mb-4">
                {/* <ReCAPTCHA sitekey="6LdxUbopAAAAALgGaG7pe5bHQX2iGuB_EZQlRtCZ" onChange={(val) => setCaptcha(val)} /> */}
                </div>
                <button
                    type="submit"
                    // disabled={Captcha}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Sign Up
                </button>
            </form>
            <p className="px-3 pt-4 text-balance text-center">
                By clicking through, I agree with the{" "}
                <Link to="/Terms&Conditions">
                    <span className="underline text-blue-500">
                        Terms & Conditions
                    </span>
                </Link>
                {" "} and {" "}
                <Link to="/Privacy_Policy">
                    <span className="underline text-blue-500">Privacy Policy</span>
                </Link>
            </p>
        </div>
    );
}

export default Signup;
