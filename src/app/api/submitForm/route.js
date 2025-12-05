// app/api/submitForm/route.js

import emailjs from 'emailjs-com';

export async function POST(request) {
    const formData = await request.json(); // Get form data from the request

    try {
        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );

        return new Response(JSON.stringify({ message: 'Your message has been sent successfully!' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'There was an issue sending your message.' }), { status: 500 });
    }
}
