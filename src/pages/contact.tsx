import { PageLayout } from "@/components/PageLayout";
import {
  contactFormInputValidator,
  type ContactFormData,
} from "@/types/contact";
import { trpc } from "@/utils/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { type NextPage } from "next";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormInputValidator),
  });

  const sendContactFormData = trpc.contact.sendContactFormData.useMutation();

  const onSubmit = async (data: ContactFormData) => {
    sendContactFormData.mutate(data, {
      onSettled: (data, error) => {
        toast.custom(
          (t) => (
            <div
              className={clsx(
                "rounded-sm py-2 px-4 text-lg font-medium text-gray-50 backdrop-blur-sm lg:ml-[111px]",
                !error ? "bg-primary/90" : "bg-error/90",
                t.visible ? "animate-enter" : "animate-exit"
              )}
            >
              <p>
                {!error
                  ? `Thanks for your message, ${data?.name}! I'll get back to you shortly.`
                  : "Sorry, looks like something went wrong. Please try again later!"}
              </p>
            </div>
          ),
          { id: "contact-form-notification", position: "top-center" }
        );
      },
      onSuccess: () => {
        reset();
      },
    });
  };

  const getLabelClassName = (field: keyof ContactFormData) => {
    return clsx(
      "mb-2 block text-lg font-semibold",
      errors[field] && "text-error"
    );
  };

  const getInputClassName = (field: keyof ContactFormData) => {
    return clsx(
      "w-full rounded-sm border-[1px] border-content bg-background py-2 px-3 text-content focus:outline-content transition-[background-color, border-color]",
      errors[field] && "border-error focus:border-content"
    );
  };

  const getError = (field: keyof ContactFormData) => {
    if (errors[field]) {
      return <p className="mt-1.5 text-error">{errors[field]?.message}</p>;
    }

    return null;
  };

  return (
    <PageLayout title="Contact">
      <form
        noValidate
        className="grid w-full grid-cols-2 gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" {...register("url")} />
        <div className="col-span-2 w-full sm:col-span-1">
          <label className={getLabelClassName("name")} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className={getInputClassName("name")}
            type="text"
            {...register("name", { required: "Please enter your name." })}
          />
          {getError("name")}
        </div>
        <div className="col-span-2 w-full sm:col-span-1">
          <label className={getLabelClassName("email")} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className={getInputClassName("email")}
            type="email"
            {...register("email", {
              required: "Please enter your email address.",
            })}
          />
          {getError("email")}
        </div>
        <div className="col-span-2 w-full">
          <label className={getLabelClassName("subject")} htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            className={getInputClassName("subject")}
            type="text"
            {...register("subject", {
              required: "Please enter the subject of your message.",
            })}
          />
          {getError("subject")}
        </div>
        <div className="col-span-2 w-full">
          <label className={getLabelClassName("message")} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className={getInputClassName("message")}
            rows={10}
            {...register("message", { required: "Please enter your message." })}
          />
          {getError("message")}
        </div>
        <div className="col-span-2 w-full">
          <button
            type="submit"
            className="text-md w-full rounded-sm border-[1px] border-content bg-background p-2 uppercase tracking-widest text-content backdrop-blur-sm transition-[backgound-color,transform] hover:bg-content hover:text-background focus:outline-none
            active:scale-95 disabled:border-content/10 disabled:bg-content/50 disabled:text-background/60 disabled:hover:bg-content/10 disabled:hover:text-content/90 disabled:active:scale-100"
            disabled={sendContactFormData.isLoading || isSubmitting}
          >
            {sendContactFormData.isLoading || isSubmitting
              ? "Sending message..."
              : "Send message"}
          </button>
        </div>
      </form>
    </PageLayout>
  );
};

export default ContactPage;
