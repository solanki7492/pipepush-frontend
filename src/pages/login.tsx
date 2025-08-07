import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { AnimatePresence, motion } from "motion/react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import waves from "@/assets/waves.svg"

function Login() {
    const [authMode, setAuthMode] = useState("login");
    
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Toggle */}
            <div className="absolute top-4 right-4 z-10">
                <ModeToggle />
            </div>
  
            {/* Left Side */}
            <div className="w-full md:w-1/2 bg-primary/5 flex items-center justify-center p-10 relative md:rounded-r-lg overflow-hidden">
                <img
                    src={waves}
                    alt="Server"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative text-center">
                    <h1 className="text-4xl font-bold text-white">PipePush</h1>
                    <p className="mt-4 text-lg text-gray-200 max-w-md">
                        FTP-based CI/CD pipeline made simple. Push, deploy, done.
                    </p>
                </div>
            </div>
  
            {/* Right Side - Auth Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-10">
                <div className="w-full max-w-md space-y-6">

                    {/* ToggleGroup for Login/Register */}
                    <div className="flex justify-center mb-4 w-full">
                        <ToggleGroup
                            type="single"
                            variant="outline"
                            className="w-full"
                            value={authMode}
                            onValueChange={(value) => value && setAuthMode(value)}
                        >
                            <ToggleGroupItem value="login" aria-label="Login">
                                Login
                            </ToggleGroupItem>
                            <ToggleGroupItem value="register" aria-label="Register">
                                Register
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>

                    <AnimatePresence mode="wait">
                        {authMode === "login" ? (
                            <motion.div
                            key="login"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-3xl font-bold text-center mb-6">Login to your account</h2>
                                <form className="space-y-4">
                                    <Input id="email" type="email" placeholder="Email" required />
                                    <Input id="password" type="password" placeholder="Password" required />
                                    <div className="flex justify-end">
                                        <a href="#" className="text-sm underline-offset-4 hover:underline">
                                            Forgot your password?
                                        </a>
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Login
                                    </Button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                            key="register"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-3xl font-bold text-center mb-6">Create a new account</h2>
                                <form className="space-y-4">
                                    <Input id="name" type="text" placeholder="Name" required />
                                    <Input id="email" type="email" placeholder="Email" required />
                                    <Input id="password" type="password" placeholder="Password" required />
                                    <Button type="submit" className="w-full">
                                        Register
                                    </Button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    </ThemeProvider>
  );
}
  
  export default Login