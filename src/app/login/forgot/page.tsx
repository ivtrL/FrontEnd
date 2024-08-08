import React from 'react';
import Image from 'next/image';
const ForgotPasswordPage: React.FC = () => {
    return (
        <div className="flex min-h-screen items-center justify-center px-6 py-12 lg:px-8 bg-gray-900">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-md rounded-lg p-8 space-y-8">
                    <div className="flex justify-center mb-4">
                    <Image src="/logopreta.png" alt="Logo" width={180} height={180} />
                       
                    </div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-2">
                        Esqueceu sua senha?
                    </h2>
                    <p className="text-center text-sm text-gray-700">
                        Insira seu e-mail para resetar a senha.
                    </p>

                    <form className="space-y-6" action="#" method="POST">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Endereço de e-mail
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Enviar link de recuperação
                            </button>
                        </div>

                        <div className="text-sm text-center">
                            <a href="/login" className="font-medium text-indigo-400 hover:text-indigo-300">
                                Voltar para o login
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;