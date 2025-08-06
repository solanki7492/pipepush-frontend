import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import waves from "@/assets/waves.svg"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="absolute top-4 right-4 z-10">
          <ModeToggle />
        </div>

        <div className="w-full md:w-1/2 bg-primary/5 flex items-center justify-center p-10 relative md:rounded-r-lg overflow-hidden">
          <img
            src={waves}
            alt="Server"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative">
            <h1 className="text-4xl font-bold text-white">PipePush</h1>
            <p className="mt-4 text-lg text-gray-200 max-w-md">
              FTP-based CI/CD pipeline made simple. Push, deploy, done.
            </p>
          </div>
        </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center">Login to your account</h2>
          <form className="space-y-4">
            <div>
              <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                />
            </div>

            <div>
              <Input id="password" type="password" placeholder="Password" required />
            </div>

            <div className="flex items-center justify-between">
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App