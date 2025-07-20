import emailjs from '@emailjs/browser';

// Инициализация EmailJS
const initEmailJS = () => {
    if (typeof window !== 'undefined') {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
};

export const sendEmailViaEmailJS = async (formData) => {
    try {
        initEmailJS();

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone || 'Не указан',
            message: formData.message || 'Не указано',
            to_email: 'community@odds.eco',
            reply_to: formData.email,
        };

        const result = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            templateParams
        );

        return { success: true, result };
    } catch (error) {
        console.error('EmailJS error:', error);
        return { success: false, error: error.text || error.message };
    }
};
