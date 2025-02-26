import { useActionState } from "react";
import Button from "../../../shared/components/Button";
import Form from "../../../shared/components/Form";
import Input from "../../../shared/components/Input";
import Label from "../../../shared/components/Label";
import useLogin from "../hooks/useLogin";

export default function LoginForm() {
  const { userLogin } = useLogin();
  function handleSubmit(prevState, formData) {
    const emailInput = formData.get("email");
    const passwordInput = formData.get("password");

    let errors = [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput || !emailRegex.test(emailInput)) {
      errors.push("Format email tidak valid!");
    }
    if (!passwordInput || passwordInput.length < 6) {
      errors.push("Kata sandi harus minimal 6 karakter!");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValue: {
          email: emailInput,
          password: passwordInput,
        },
      };
    }
    userLogin({
      email: emailInput,
      password: passwordInput,
    });
    return { errors: null };
  }

  const [formState, formAction] = useActionState(handleSubmit, { error: null });

  return (
    <Form action={formAction} className="grid grid-cols-1 gap-5">
      <Label labelType="form-control" leftLabel="Alamat Email">
        <Input
          type="email"
          name="email"
          className="input input-bordered w-full"
          placeholder="Cth: John@example.com"
          defaultValue={formState.enteredValue?.email}
        />
      </Label>
      <Label labelType="form-control" leftLabel="Kata Sandi">
        <Input
          type="password"
          name="password"
          className="input input-bordered w-full"
          placeholder="Kata sandi Min 6 digit"
          defaultValue={formState.enteredValue?.password}
        />
      </Label>

      {formState.errors && formState.errors.length > 0 && (
        <div>
          {formState.errors.map((err) => (
            <p key={err} className="text-error text-sm">
              {err}
            </p>
          ))}
        </div>
      )}

      <Button type="submit" className="btn btn-outline btn-secondary w-full">
        Masuk
      </Button>
    </Form>
  );
}
