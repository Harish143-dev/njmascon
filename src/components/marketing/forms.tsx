import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const fieldClassName =
  "w-full rounded-sm border border-stone bg-transparent px-4 py-3 text-base font-light transition-colors placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}

export function FormField({ id, label, required, error, className, children }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm text-muted-foreground">
        {label}
        {required ? " *" : ""}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export function TextInput({ className, error, ...props }: TextInputProps) {
  return (
    <input
      {...props}
      className={cn(fieldClassName, error ? "border-destructive" : "", className)}
      aria-invalid={error ? "true" : "false"}
      aria-describedby={error && props.id ? `${props.id}-error` : undefined}
    />
  );
}

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
};

export function TextArea({ className, error, ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      className={cn(fieldClassName, "resize-none", error ? "border-destructive" : "", className)}
      aria-invalid={error ? "true" : "false"}
      aria-describedby={error && props.id ? `${props.id}-error` : undefined}
    />
  );
}

type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
};

export function SelectInput({ className, error, ...props }: SelectInputProps) {
  return (
    <select
      {...props}
      className={cn(fieldClassName, error ? "border-destructive" : "", className)}
      aria-invalid={error ? "true" : "false"}
      aria-describedby={error && props.id ? `${props.id}-error` : undefined}
    />
  );
}
