import { useState } from "react";
import { AlertCircle, Check } from "lucide-react";
import { z } from "zod";
import { business, contactMethods, projectTypes } from "@/content/site";
import { cn } from "@/lib/utils";

const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please tell us your name." })
    .max(100, { message: "Name must be under 100 characters." }),
  phone: z
    .string()
    .trim()
    .min(9, { message: "Enter a phone number we can reach you on." })
    .max(20, { message: "Phone number must be under 20 characters." })
    .regex(/^[0-9+()\-\s]+$/, { message: "Use digits, spaces or + only." }),
  email: z
    .string()
    .trim()
    .max(255, { message: "Email must be under 255 characters." })
    .email({ message: "Enter a valid email address." })
    .optional()
    .or(z.literal("")),
  projectType: z.string().trim().min(1, { message: "Choose the type of project." }),
  room: z.string().trim().max(120, { message: "Keep this under 120 characters." }).optional(),
  contactMethod: z.string().trim().min(1),
  details: z
    .string()
    .trim()
    .max(1000, { message: "Please keep details under 1000 characters." })
    .optional(),
});

type QuoteValues = z.infer<typeof quoteSchema>;
type Errors = Partial<Record<keyof QuoteValues, string>>;

const initialValues = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  room: "",
  contactMethod: contactMethods[0],
  details: "",
};

const labelClass = "rule-label text-foreground/70";

function fieldClass(hasError?: boolean, tall?: boolean) {
  return cn(
    "mt-2 w-full border bg-card text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none transition-colors",
    tall ? "p-4" : "h-12 px-4",
    hasError
      ? "border-destructive focus:border-destructive"
      : "border-input focus:border-olive",
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-2 flex items-center gap-1.5 text-xs text-destructive">
      <AlertCircle className="size-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
      {message}
    </p>
  );
}

function Fieldset({
  step,
  legend,
  hint,
  children,
}: {
  step: string;
  legend: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="border-t border-border pt-8 first:border-t-0 first:pt-0">
      <legend className="sr-only">{legend}</legend>
      <div className="flex items-baseline gap-3">
        <span className="rule-label text-olive-deep">{step}</span>
        <h3 className="text-base tracking-tight">{legend}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{hint}</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export function QuoteForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<QuoteValues | null>(null);

  function update(field: keyof typeof initialValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validateField(field: keyof typeof initialValues) {
    const result = quoteSchema.safeParse(values);
    if (result.success) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      return;
    }
    const issue = result.error.issues.find((i) => i.path[0] === field);
    setErrors((prev) => ({ ...prev, [field]: issue?.message }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = quoteSchema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof QuoteValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      const first = document.getElementById(String(result.error.issues[0]?.path[0]));
      first?.focus();
      return;
    }
    // No backend is connected yet. The validated values are ready to be sent
    // to an email service or database when the business is ready.
    setSubmitted(result.data);
    setValues(initialValues);
    setErrors({});
  }

  if (submitted) {
    const summary = [
      `Hi Olive Oak, I'm ${submitted.name}.`,
      `Project: ${submitted.projectType}${submitted.room ? ` (${submitted.room})` : ""}.`,
      submitted.details ? `Details: ${submitted.details}` : "",
      `You can reach me on ${submitted.phone}.`,
    ]
      .filter(Boolean)
      .join(" ");
    const followUpLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(summary)}`;

    return (
      <div className="border border-border bg-card p-8 text-center sm:p-12">
        <span className="mx-auto inline-flex size-12 items-center justify-center rounded-full bg-olive-deep text-ivory">
          <Check className="size-5" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <h3 className="display-md mt-6">Thank you, {submitted.name.split(" ")[0]}.</h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your request has been noted and we'll come back to you within one working day. For the
          fastest response, continue the conversation on WhatsApp — your details are already filled
          in.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={followUpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-olive w-full sm:w-auto"
          >
            Continue on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(null)}
            className="btn-outline-dark w-full sm:w-auto"
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-8 border border-border bg-card p-6 sm:p-10"
    >
      <Fieldset step="01" legend="Your details" hint="So we know who to come back to.">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => validateField("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass(Boolean(errors.name))}
          />
          <span id="name-error">
            <FieldError message={errors.name} />
          </span>
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="0722 270 517"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            onBlur={() => validateField("phone")}
            aria-invalid={Boolean(errors.phone)}
            className={fieldClass(Boolean(errors.phone))}
          />
          <FieldError message={errors.phone} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email <span className="text-muted-foreground/70">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => validateField("email")}
            aria-invalid={Boolean(errors.email)}
            className={fieldClass(Boolean(errors.email))}
          />
          <FieldError message={errors.email} />
        </div>
        <div>
          <label className={labelClass} htmlFor="contactMethod">
            Preferred contact method
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            value={values.contactMethod}
            onChange={(e) => update("contactMethod", e.target.value)}
            className={fieldClass()}
          >
            {contactMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>
      </Fieldset>

      <Fieldset
        step="02"
        legend="Your space"
        hint="Tell us what we're dressing and where it is in the home."
      >
        <div>
          <label className={labelClass} htmlFor="projectType">
            Type of project
          </label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(e) => update("projectType", e.target.value)}
            onBlur={() => validateField("projectType")}
            aria-invalid={Boolean(errors.projectType)}
            className={fieldClass(Boolean(errors.projectType))}
          >
            <option value="">Select an option</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <FieldError message={errors.projectType} />
        </div>
        <div>
          <label className={labelClass} htmlFor="room">
            Room / space <span className="text-muted-foreground/70">(optional)</span>
          </label>
          <input
            id="room"
            name="room"
            placeholder="e.g. living room, bedroom, office"
            value={values.room}
            onChange={(e) => update("room", e.target.value)}
            onBlur={() => validateField("room")}
            aria-invalid={Boolean(errors.room)}
            className={fieldClass(Boolean(errors.room))}
          />
          <FieldError message={errors.room} />
        </div>
      </Fieldset>

      <Fieldset step="03" legend="The brief" hint="Optional, but the more we know the better.">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="details">
            What are you looking for?
          </label>
          <textarea
            id="details"
            name="details"
            rows={5}
            maxLength={1000}
            placeholder="Tell us about your windows, the light in the room and the look you have in mind."
            value={values.details}
            onChange={(e) => update("details", e.target.value)}
            onBlur={() => validateField("details")}
            aria-invalid={Boolean(errors.details)}
            className={fieldClass(Boolean(errors.details), true)}
          />
          <div className="mt-2 flex items-start justify-between gap-4">
            <FieldError message={errors.details} />
            <span className="ml-auto text-xs text-muted-foreground">
              {values.details.length}/1000
            </span>
          </div>
        </div>
      </Fieldset>

      <div className="flex flex-col items-start gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
        <button type="submit" className="btn-solid w-full sm:w-auto">
          Request a Quote
        </button>
        <p className="text-xs text-muted-foreground">
          We reply within one working day. No spam, ever.
        </p>
      </div>
    </form>
  );
}