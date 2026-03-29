import { Button } from "@/shared/ui/button";
import { Field, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";

export const LoginForm = () => {
  return (
    <form>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="example@example.com" />
      </Field>
      <Field>
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <Input id="password" type="password" placeholder="********" />
      </Field>
      <Button type="submit">Login</Button>
    </form>
  );
};
