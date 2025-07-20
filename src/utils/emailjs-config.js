import emailjs from '@emailjs/browser';

// Инициализация EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

export const sendEmail = async (formData) => {
    try {
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message || 'Не указано',
            to_email: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL, // ваш кастомный email
        };

        const result = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            templateParams
        );

        return { success: true, result };
    } catch (error) {
        console.error('EmailJS error:', error);
        return { success: false, error };
    }
};
