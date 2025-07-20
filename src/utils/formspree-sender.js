// Отправка через Formspree (бесплатно до 50 писем/месяц)
export const sendViaFormspree = async (formData) => {
    try {
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email,
                name: formData.name,
                phone: formData.phone,
                message: formData.message,
                _replyto: formData.email,
                _subject: `Новая заявка с сайта ODDS от ${formData.name}`,
            }),
        });

        if (response.ok) {
            return { success: true };
        } else {
            return { success: false, error: 'Ошибка отправки' };
        }
    } catch (error) {
        return { success: false, error: error.message };
    }
};
