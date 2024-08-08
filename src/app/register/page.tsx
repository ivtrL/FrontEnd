import React from 'react';
import Image from 'next/image';

function RegisterPage() {
    return (
        <div className="flex min-h-screen items-center justify-center px-6 py-12 lg:px-8 bg-gray-900">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-md rounded-lg p-8 space-y-8">
                    <div className="flex justify-center mb-4">
                        <Image src="/logopreta.png" alt="Logo" width={200} height={200} />
                    </div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
                        Cadastre sua conta
                    </h2>

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
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Senha
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                                    Confirme a sua senha
                                </label>
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    autoComplete="new-password"
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
                                Registrar
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-sm text-gray-700">
                        Você já tem uma conta? Faça o {' '}
                        <a href="/login" className="font-medium text-indigo-400 hover:text-indigo-300">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;