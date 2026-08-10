"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


export default function LoginPage(){

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function hadleLogin(
        e: React.FormEvent
    ){
        e.preventDefault();

        const response = await fetch(
            "api/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        );

        if (response.ok){
            router.push("/dashboard");
            return;
        }

        alert("Usuário ou senha inválidos");
    }
    
    return(
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-sm rounded-lg border p-6">
                <h1 className="text-2xl font-bold md-4">
                    Frutos de Goiás
                </h1>
                <p className="mb-6 text-gray-500">
                    Painel Administrativo
                </p>

                <form 
                    onSubmit={hadleLogin} 
                    className="space-y-4"
                >
                    <input
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        className="w-full border p-2"
                        placeholder="E-mail"
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className="w-full border p-2"
                        placeholder="Senha"
                    />

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white p-2 rounded">
                            Entrar
                        </button>
                </form>
                </div>
        </div>
    )
}