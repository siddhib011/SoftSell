import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Home />
    </TooltipProvider>
  );
}

export default App;
