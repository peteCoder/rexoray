"use client";

import Heading from "@/components/main/Heading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  subject: z.string().min(1, "Subject is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form Submitted:", data);
    // Add your form submission logic here
  };

  return (
    <div className="w-full">
      {/* Google Map */}
      <div className="w-full h-[400px]">
        <iframe
          title="Business Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.180841550746!2d-77.04524948464774!3d38.894714979570816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDUzJzQwLjkiTiA3N8KwMDInMzMuMCJX!5e0!3m2!1sen!2sus!4v1633649322341!5m2!1sen!2sus"
          className="w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Primary Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4 dark:text-white">CONTACT US</h2>
          <p className="font-semibold dark:text-gray-200">Rexoray Ace Ltd.</p>
          <p className="dark:text-gray-300">
            Number 6, Philip Shaibu, Wuye, Abuja, FCT.
          </p>
          <p className="dark:text-gray-300">Phone: +2347014270059</p>
          <p className="dark:text-gray-300">Email: Uku.raynald@rexoray.com</p>
          <p className="dark:text-gray-300">Website: www.rexoray.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4 dark:text-white">FOLLOW US</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Facebook
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-sky-500 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
            >
              Twitter
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-pink-500 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
            >
              Instagram
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-blue-700 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Let's Talk */}
        <div>
          <h2 className="text-xl font-bold mb-4 dark:text-white">
            LET&apos;S TALK
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Feel free to talk to our representative at any time. Use the contact
            form or any of our contact numbers. We&apos;re happy to help you
            build your future.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Heading
            title="SEND US A MESSAGE"
            text="We’re here to answer your questions and provide the support you need."
          />

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid md:grid-cols-2 gap-6 mt-8"
            >
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="rounded-none p-5 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        placeholder="Name*"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="dark:text-red-400" />
                  </FormItem>
                )}
              />

              {/* Subject */}
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="rounded-none p-5 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        placeholder="Subject*"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="dark:text-red-400" />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="rounded-none p-5 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        type="email"
                        placeholder="Email*"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="dark:text-red-400" />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormControl>
                      <Textarea
                        placeholder="Message*"
                        className="h-40 rounded-none p-5 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="dark:text-red-400" />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="text-white px-6 rounded-md md:col-span-2 py-4 md:py-6 transition"
              >
                SEND MESSAGE
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
