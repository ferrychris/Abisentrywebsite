import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contactus = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (form.current) {
      emailjs.sendForm(
        'service_6cohjr8',  // Your EmailJS Service ID
        'template_v364agm', // Your EmailJS Template ID
        form.current,
        '6kO0awWz7xlAdFWlf'  // Your EmailJS Public Key
      )
        .then((result) => {
          console.log(result.text);
          setSubmitStatus('success');
          if (form.current) form.current.reset();
        })
        .catch((error) => {
          console.error(error.text);
          setSubmitStatus('error');
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <section id="contactus">
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Got any questions? We'd love to hear from you!
            </p>

            {submitStatus === 'success' && (
              <div className="mb-4 p-4 text-green-700 bg-green-100 rounded-lg">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
                Failed to send message. Please try again later.
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                <label
                  htmlFor="user_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Ray"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contactus;