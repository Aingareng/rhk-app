import Button from "../../../shared/components/Button";
import Form from "../../../shared/components/Form";
import Input from "../../../shared/components/Input";
import Label from "../../../shared/components/Label";

export default function LoginForm() {
  return (
    <Form className="grid grid-cols-1 gap-5">
      <Label labelType="form-control" leftLabel="Alamat Email">
        <Input
          className="input input-bordered w-full"
          placeholder="Cth: John@example.com"
        />
      </Label>
      <Label labelType="form-control" leftLabel="Kata Sandi">
        <Input
          className="input input-bordered w-full"
          placeholder="Kata sandi Min 6 digit"
        />
      </Label>

      <Button className="btn btn-outline btn-secondary w-full">Masuk</Button>
    </Form>
  );
}
