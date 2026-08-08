export default function LoginPage(){
    return(
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-sm rounded-lg border p-6">
                <h1 className="text-2xl font-bold md-4">
                    Frutos de Goiás
                </h1>

                <form className="space-y-4">
                    <input
                        className="w-full border p-2"
                        placeholder="E-mail"
                    />

                    <input
                        type="password"
                        className="w-full border p-2"
                        placeholder="Senha"
                    />

                    <button
                        className="w-full bg-green-600 text-white p-2 rounded">
                            Entrar
                        </button>
                </form>
                </div>
        </div>
    )
}