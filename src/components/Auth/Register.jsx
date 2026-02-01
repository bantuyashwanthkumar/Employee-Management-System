import React, { useState } from "react";

const Register = ({ handleRegister, setView }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');

    const SubmitHandler = (e) => {
        e.preventDefault();
        handleRegister(firstName, email, password);
        setFirstName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-indigo-800 via-purple-700 to-pink-700 relative overflow-hidden p-6 sm:p-10">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl animate-pulse" />
                <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Card */}
            <div className="relative z-10 w-full max-w-lg rounded-[2.5rem] border border-white/20 bg-white/10 backdrop-blur-2xl px-10 py-12 md:px-16 md:py-20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-white tracking-tight mb-4">Join Us</h1>
                    <p className="text-white/60 text-base font-medium">Create your management account</p>
                </div>

                {/* Form Section */}
                <form onSubmit={SubmitHandler} className="flex flex-col gap-8">
                    <div className="space-y-3">
                        <label className="text-white/80 text-sm font-bold ml-4 uppercase tracking-widest">First Name</label>
                        <input
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-8 py-4 rounded-3xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:bg-white/10 transition-all text-lg"
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-white/80 text-sm font-bold ml-4 uppercase tracking-widest">Email</label>
                        <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-8 py-4 rounded-3xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:bg-white/10 transition-all text-lg"
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-white/80 text-sm font-bold ml-4 uppercase tracking-widest">Password</label>
                        <input
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-8 py-4 rounded-3xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:bg-white/10 transition-all text-lg"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-6 w-full rounded-2xl bg-linear-to-r from-pink-500 to-indigo-500 py-5 text-xl font-black text-white shadow-xl hover:shadow-pink-500/40 transform hover:-translate-y-1 active:scale-95 transition-all cursor-pointer uppercase tracking-tighter"
                    >
                        Register
                    </button>
                </form>

                {/* Footer Section */}
                <div className="mt-12 text-center">
                    <p className="text-white/50 text-base flex flex-col sm:flex-row items-center justify-center gap-2">
                        Already have an account?
                        <button
                            onClick={() => setView('login')}
                            className="font-bold text-white hover:text-pink-400 border-b-2 border-pink-500/50 hover:border-pink-500 transition-all bg-transparent cursor-pointer"
                        >
                            Sign In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
