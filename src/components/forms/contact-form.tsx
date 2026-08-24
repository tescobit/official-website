import { contactSchema } from '../../lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { renderToStaticMarkup } from 'react-dom/server';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Send } from 'lucide-react';
import type z from 'zod';
import ContactEmail from '../emails/contact-email';
import { useState } from 'react';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      companyName: '',
      service: '',
      projectDetails: '',
    },
  });

  const handleSubmit = async (data: z.infer<typeof contactSchema>) => {
    setLoading(true);

    const emailHtml = renderToStaticMarkup(
      <ContactEmail
        name={data.name}
        email={data.email}
        service={data.service}
        projectDetails={data.projectDetails}
      />,
    );

    const templateParams = {
      user_name: data.name,
      user_email: data.email,
      message_html: emailHtml,
    };

    const env = (
      import.meta as ImportMeta & {
        env: Record<string, string | undefined>;
      }
    ).env;

    try {
      await emailjs.send(
        env.VITE_SERVICE_ID ?? '',
        env.VITE_TEMPLATE_ID ?? '',
        templateParams,
        env.VITE_PUBLIC_KEY ?? '',
      );

      alert('Email sent successfully!');
    } catch (error) {
      console.error('Failed to send:', error);
      alert('Failed to send email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form className='space-y-6' onSubmit={form.handleSubmit(handleSubmit)}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-medium text-gray-700'>
                  Full Name *
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='John Doe'
                    {...field}
                    className='w-full px-4 py-3 h-auto rounded-xl bg-gray-50! border border-gray-200! focus:border-blue-500! focus:ring-2! focus:ring-blue-200! outline-none transition-all'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-medium text-gray-700'>
                  Email Address *
                </FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='john@company.com'
                    {...field}
                    className='w-full px-4 py-3 h-auto rounded-xl bg-gray-50! border border-gray-200! focus:border-blue-500! focus:ring-2! focus:ring-blue-200! outline-none transition-all'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-medium text-gray-700'>
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    type='tel'
                    placeholder='+1 (555) 000-0000'
                    {...field}
                    className='w-full px-4 py-3 h-auto rounded-xl bg-gray-50! border border-gray-200! focus:border-blue-500! focus:ring-2! focus:ring-blue-200! outline-none transition-all'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='companyName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-medium text-gray-700'>
                  Company Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Your Company'
                    {...field}
                    className='w-full px-4 py-3 h-auto rounded-xl bg-gray-50! border border-gray-200! focus:border-blue-500! focus:ring-2! focus:ring-blue-200! outline-none transition-all'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='service'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm font-medium text-gray-700'>
                Service Interested In *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder='e.g., Web Development, Mobile App, Cloud Solutions'
                  {...field}
                  className='w-full px-4 py-3 h-auto rounded-xl bg-gray-50! border border-gray-200! focus:border-blue-500! focus:ring-2! focus:ring-blue-200! outline-none transition-all'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='projectDetails'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm font-medium text-gray-700'>
                Project Details *
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder='Tell us about your project requirements...'
                  {...field}
                  className='w-full px-4 py-3 h-auto rounded-xl bg-gray-50! border border-gray-200! focus:border-blue-500! focus:ring-2! focus:ring-blue-200! outline-none transition-all'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className='w-full py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center gap-2'
          size={'lg'}
          type='submit'
        >
          {loading ? (
            'Sending'
          ) : (
            <>
              Send Message <Send size={20} />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
