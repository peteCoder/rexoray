"use client";
import { companyInfo } from "@/lib/utils";
import Heading from "@/components/main/Heading";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
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
import { useState } from "react";

// Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  subject: z.string().min(1, "Subject is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | string>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setLoading(true);
      setStatus(null);

      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("✅ Message sent successfully!");
      toast("✅ Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Please try again.");
      toast("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Google Map */}
      <div className="w-full h-[400px]">
        <iframe
          title="Rexoray Ace Limited Business Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.075477496987!2d7.4347437723469145!3d9.056880091005567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e758c845d1a1b%3A0xd50f1e59a21eefa5!2s6%20Philip%20Shaibu%20Cres%2C%20Utako%2C%20Abuja%20900108%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1755271235978!5m2!1sen!2sng"
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
          <p className="dark:text-gray-300">{companyInfo.address}</p>
          <p className="dark:text-gray-300">Phone: {companyInfo.phoneNumber}</p>
          <p className="dark:text-gray-300">Email: {companyInfo.emails[0]}</p>
          <p className="dark:text-gray-300">Website: {companyInfo.website}</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4 dark:text-white">FOLLOW US</h2>
          <div className="flex space-x-4">
            <a
              href={companyInfo.socialMedia.facebook}
              className="text-blue-600 dark:text-blue-400"
            >
              Facebook
            </a>
            <a
              href={companyInfo.socialMedia.twitter}
              className="text-sky-500 dark:text-sky-400"
            >
              Twitter
            </a>
            <a
              href={companyInfo.socialMedia.instagram}
              className="text-pink-500 dark:text-pink-400"
            >
              Instagram
            </a>
            <a
              href={companyInfo.socialMedia.linkedin}
              className="text-blue-700 dark:text-blue-500"
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
                disabled={loading}
                className="text-white px-6 rounded-md md:col-span-2 py-4 md:py-6 transition"
              >
                {loading ? "Sending..." : "SEND MESSAGE"}
              </Button>

              {status && (
                <p className="md:col-span-2 text-center mt-4 text-sm">
                  {status}
                </p>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
