import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type NewsletterFormValues = z.infer<typeof emailSchema>;

const Newsletter = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterFormValues>({
    resolver: zodResolver(emailSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest('POST', '/api/newsletter-subscribe', { email });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        variant: "default",
      });
      reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was a problem subscribing you. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: NewsletterFormValues) => {
    mutate(data.email);
  };

  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Tech Tips</h2>
          <p className="text-white/90 text-lg mb-8">Join our newsletter for the latest tech advice, tips, and special offers.</p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow">
              <Input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-white/90">{errors.email.message}</p>
              )}
            </div>
            <Button
              type="submit"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3"
              disabled={isPending}
            >
              {isPending ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-white/80 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
