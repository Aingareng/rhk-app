import LoginForm from "../features/login/components/LoginForm";

export default function LoginPage() {
  return (
    <div className=" bg-secondary flex items-center justify-center h-[100vh] ">
      <div className="card bg-base-100 w-max p-5 shadow-xl">
        <header className="flex flex-col items-center justify-center gap-2">
          <h1 className="card-title text-3xl ">Masuk ke Akun</h1>
          <p>Silakan masukkan email dan kata sandi Anda untuk melanjutkan</p>
        </header>
        <main className="card-body">
          <LoginForm />
        </main>
      </div>
    </div>
  );
}
