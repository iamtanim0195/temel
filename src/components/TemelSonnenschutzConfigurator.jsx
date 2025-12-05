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
                    toast.success("E-Mail erfolgreich gesendet!");
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
                    toast.error("E-Mail konnte nicht gesendet werden. Bitte versuche es erneut.");
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
                    Erhalten Sie Ihr Lamellendach, Pergola, Markise, Sonnensegel oder Schließsystem in nur wenigen Schritten – perfekt auf Ihr Projekt in Wien & Niederösterreich abgestimmt.
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
                        <h2 className="text-xl font-semibold mb-4">Wofür planen Sie den Sonnenschutz zu verwenden?</h2>
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
                                        <strong>{type === "private" ? "Private Terrasse / Garten" : type === "balkon" ? "Balkon / Loggia" : type === "gastro" ? "Gastronomie / Hotelgewerbe" : "Anderes Projekt"}</strong>
                                        <small className="text-gray-500">{type === "private" ? "Zuhause, Familie, Rückzugsort" : type === "balkon" ? "Wohnung, begrenzter Raum" : type === "gastro" ? "Außengastronomie, Biergarten, Dachterrasse" : "Büro, Business, Sonderlösung"}</small>
                                    </div>
                                </label>
                            ))}
                        </div>
                        <div className="flex justify-between">
                            <button type="button" className="text-teal-600" onClick={nextStep}>
                                Weiter
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: Area Type */}
                {step === 2 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Welches Gebiet möchten Sie abdecken?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                            {[{
                                value: "terrace",
                                label: "Terrasse zu Hause"
                            },
                            {
                                value: "garden",
                                label: "Freistehender Gartenbereich"
                            },
                            {
                                value: "balcony",
                                label: "Balkon / Loggia"
                            },
                            {
                                value: "rooftop",
                                label: "Dachterrasse / Dachterrasse"
                            },
                            {
                                value: "wintergarden",
                                label: "Wintergarten / Glasdach"
                            },
                            {
                                value: "gastgarten",
                                label: "Gastgarten / Biergarten"
                            }].map((area) => (
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
                                Zurück
                            </button>
                            <button type="button" className="text-teal-600" onClick={nextStep}>
                                Weiter
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Area Dimensions */}
                {step === 3 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Wie sieht Ihr Bereich aus?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                            <div className="flex flex-col">
                                <label>Breite (in Metern)</label>
                                <input
                                    type="text"
                                    name="width"
                                    value={formData.width}
                                    onChange={handleChange}
                                    className="p-2 border rounded"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label>Tiefe (in Metern)</label>
                                <input
                                    type="text"
                                    name="depth"
                                    value={formData.depth}
                                    onChange={handleChange}
                                    className="p-2 border rounded"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label>Höhe (optional)</label>
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
                                <label>Ausrichtung</label>
                                <select name="orientation" onChange={handleChange} className="p-2 border rounded">
                                    <option value="">Bitte wählen</option>
                                    <option value="south">Süd</option>
                                    <option value="east">Ost</option>
                                    <option value="west">West</option>
                                    <option value="north">Nord</option>
                                </select>
                            </div>
                            <div>
                                <label>Windverhältnisse</label>
                                <select name="wind" onChange={handleChange} className="p-2 border rounded">
                                    <option value="">Bitte wählen</option>
                                    <option value="normal">Normal</option>
                                    <option value="windy">Windig</option>
                                    <option value="strongwind">Starker Wind</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button type="button" className="text-teal-600" onClick={prevStep}>
                                Zurück
                            </button>
                            <button type="button" className="text-teal-600" onClick={nextStep}>
                                Weiter
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 4: Recommendations */}
                {step === 4 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Unsere Empfehlungen für Ihr Projekt</h2>
                        <p>Basierend auf Ihren Angaben empfehlen wir die folgenden Systeme. Alles Weitere können Sie später mit Temel besprechen.</p>
                        {/* Render recommended products here */}
                        <div className="flex justify-between">
                            <button type="button" className="text-teal-600" onClick={prevStep}>
                                Zurück
                            </button>
                            <button type="button" className="text-teal-600" onClick={nextStep}>
                                Weiter
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 5: Additional Features */}
                {step === 5 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Welche zusätzlichen Funktionen sind für Sie interessant?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                            {["Insektenschutz", "Beleuchtung", "Heizstrahler", "Windschutz"].map((addon) => (
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
                            <label>Bemerkungen (optional)</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="p-2 border rounded w-full"
                            ></textarea>
                        </div>
                        <div className="flex justify-between">
                            <button type="button" className="text-teal-600" onClick={prevStep}>
                                Zurück
                            </button>
                            <button type="button" className="text-teal-600" onClick={nextStep}>
                                Weiter
                            </button>
                        </div>
                    </div>
                )}

                {/* Final Step: Contact Information */}
                {step === 6 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Fast geschafft – wie können wir Sie kontaktieren?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col">
                                <label>Ihr Name*</label>
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
                                <label>Ihre E-Mail*</label>
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
                                <label>Ihr Telefon*</label>
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
                                <label>Ihr ZIP-Code / Stadt*</label>
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
                                Zurück
                            </button>
                            <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded-full">
                                Absenden
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default TemelSonnenschutzConfigurator;
