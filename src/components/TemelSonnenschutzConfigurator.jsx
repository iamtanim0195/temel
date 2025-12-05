"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

const TemelSonnenschutzConfigurator = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        project_type: "",
        area_type: [],
        width: "",
        depth: "",
        height: "",
        orientation: "",
        wind: "",
        usage: "",
        budget: "",
        priority: "",
        name: "",
        email: "",
        phone: "",
        zip: "",
        message: "",
        addons: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleMultipleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            const newArray = [...prev[name]];
            if (newArray.includes(value)) {
                newArray.splice(newArray.indexOf(value), 1);
            } else {
                newArray.push(value);
            }
            return { ...prev, [name]: newArray };
        });
    };

    const nextStep = () => {
        setStep((prevStep) => Math.min(prevStep + 1, 6));
    };

    const prevStep = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const emailData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            zip: formData.zip,
            message: formData.message,
            project_type: formData.project_type,
            area_type: formData.area_type.join(", "),
            width: formData.width,
            depth: formData.depth,
            height: formData.height,
            orientation: formData.orientation,
            wind: formData.wind,
            usage: formData.usage,
            budget: formData.budget,
            priority: formData.priority,
            addons: formData.addons.join(", "),
        };

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                emailData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                (response) => {
                    toast.success("Email sent successfully!");
                    setFormData({
                        project_type: "",
                        area_type: [],
                        width: "",
                        depth: "",
                        height: "",
                        orientation: "",
                        wind: "",
                        usage: "",
                        budget: "",
                        priority: "",
                        name: "",
                        email: "",
                        phone: "",
                        zip: "",
                        message: "",
                        addons: [],
                    });
                },
                (error) => {
                    toast.error("Failed to send email. Please try again.");
                }
            );
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Finden Sie Ihr perfektes Sonnenschutz-System
                </h1>
                <p className="text-gray-600 mt-2">
                    Get your louvered roof, pergola, awning, sun sail, or locking system in just a few steps – perfectly suited to your project in Vienna & Lower Austria.
                </p>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-between mb-6 flex-wrap gap-3">
                {["1. Nutzung", "2. Bereich", "3. Maße & Bedingungen", "4. Empfehlung", "5. Extras", "6. Anfrage"].map((stepLabel, index) => (
                    <div
                        key={index}
                        className={`text-center py-2 px-4 rounded-full ${step === index + 1 ? "bg-teal-600 text-white" : "bg-gray-200"}`}
                    >
                        {stepLabel}
                    </div>
                ))}
            </div>

            {/* Form Steps */}
            <form onSubmit={sendEmail}>
                {/* Step 1: Project Type */}
                {step === 1 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">What are you planning to use the sun protection for?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                            {["private", "balkon", "gastro", "other"].map((type) => (
                                <label key={type} className="flex items-center p-4 border rounded-lg hover:bg-teal-50">
                                    <input
                                        type="radio"
                                        name="project_type"
                                        value={type}
                                        onChange={handleChange}
                                        className="mr-4"
                                    />
                                    <div>
                                        <strong>{type === "private" ? "Private Terrace / Garden" : type === "balkon" ? "Balcony / Loggia" : type === "gastro" ? "Gastronomy / Hotel Industry" : "Other Project"}</strong>
                                        <small className="text-gray-500">{type === "private" ? "Home, family, retreat" : type === "balkon" ? "Apartment, limited space" : type === "gastro" ? "Outdoor dining area, beer garden, rooftop" : "Office, business, special solution"}</small>
                                    </div>
                                </label>
                            ))}
                        </div>
                        <div className="flex justify-between">
                            <button type="button" className="text-teal-600" onClick={nextStep}>
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: Area Type */}
                {step === 2 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Which area do you want to cover?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                            {[
                                { value: "terrace", label: "Terrace at home" },
                                { value: "garden", label: "Freestanding garden area" },
                                { value: "balcony", label: "Balcony / Loggia" },
                                { value: "rooftop", label: "Rooftop / Roof terrace" },
                                { value: "wintergarden", label: "Winter garden / Glass roof" },
                                { value: "gastgarten", label: "Gastgarten / Beer garden" },
                            ].map((area) => (
                                <label key={area.value} className="flex items-center p-4 border rounded-lg hover:bg-teal-50">
                                    <input
                                        type="checkbox"
                                        name="area_type"
                                        value={area.value}
                                        onChange={handleMultipleChange}
                                        className="mr-4"
                                    />
                                    <div>
                                        <strong>{area.label}</strong>
                                    </div>
                                </label>
                            ))}
                        </div>
                        <div className="flex justify-between">
                            <button type="button" className="text-teal-600" onClick={prevStep}>
                                Back
                            </button>
                            <button type="button" className="text-teal-600" onClick={nextStep}>
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Area Dimensions */}
                {step === 3 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">How does your area look like?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                            <div className="flex flex-col">
                                <label>Width (in meters)</label>
                                <input
                                    type="text"
                                    name="width"
                                    value={formData.width}
                                    onChange={handleChange}
                                    className="p-2 border rounded"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label>Depth (in meters)</label>
                                <input
                                    type="text"
                                    name="depth"
                                    value={formData.depth}
                                    onChange={handleChange}
                                    className="p-2 border rounded"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label>Height (optional)</label>
                                <input
                                    type="text"
                                    name="height"
                                    value={formData.height}
                                    onChange={handleChange}
                                    className="p-2 border rounded"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label>Orientation</label>
                                <select name="orientation" onChange={handleChange} className="p-2 border rounded">
                                    <option value="">Please select</option>
                                    <option value="south">South</option>
                                    <option value="east">East</option>
                                    <option value="west">West</option>
                                    <option value="north">North</option>
                                </select>
                            </div>
                            <div>
                                <label>Wind Situation</label>
                                <select name="wind" onChange={handleChange} className="p-2 border rounded">
                                    <option value="">Please select</option>
                                    <option value="normal">Normal</option>
                                    <option value="windy">Windy</option>
                                    <option value="strongwind">Strong wind</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button type="button" className="text-teal-600" onClick={prevStep}>
                                Back
                            </button>
                            <button type="button" className="text-teal-600" onClick={nextStep}>
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 4: Recommendations */}
                {step === 4 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Our recommendations for your project</h2>
                        <p>Based on your information, we suggest the following systems. You can discuss everything in detail with Temel later.</p>
                        {/* Render recommended products here */}
                        <div className="flex justify-between">
                            <button type="button" className="text-teal-600" onClick={prevStep}>
                                Back
                            </button>
                            <button type="button" className="text-teal-600" onClick={nextStep}>
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 5: Additional Features */}
                {step === 5 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Which additional features are interesting for you?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                            {["Insect protection", "Lighting", "Heaters", "Windproof screens"].map((addon) => (
                                <label key={addon} className="flex items-center p-4 border rounded-lg hover:bg-teal-50">
                                    <input
                                        type="checkbox"
                                        name="addons"
                                        value={addon}
                                        onChange={handleMultipleChange}
                                        className="mr-4"
                                    />
                                    <div>
                                        <strong>{addon}</strong>
                                    </div>
                                </label>
                            ))}
                        </div>
                        <div>
                            <label>Notes (optional)</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="p-2 border rounded w-full"
                            ></textarea>
                        </div>
                        <div className="flex justify-between">
                            <button type="button" className="text-teal-600" onClick={prevStep}>
                                Back
                            </button>
                            <button type="button" className="text-teal-600" onClick={nextStep}>
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* Final Step: Contact Information */}
                {step === 6 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Almost done – how can we contact you?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col">
                                <label>Your Name*</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="p-2 border rounded"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label>Your Email*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="p-2 border rounded"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col">
                                <label>Your Phone*</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="p-2 border rounded"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label>Your ZIP Code / City*</label>
                                <input
                                    type="text"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    required
                                    className="p-2 border rounded"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button type="button" className="text-teal-600" onClick={prevStep}>
                                Back
                            </button>
                            <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded-full">
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default TemelSonnenschutzConfigurator;
