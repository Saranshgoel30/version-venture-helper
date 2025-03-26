
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FindCreators from "./pages/FindCreators";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectId" element={<ProjectDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/find-creators" element={<FindCreators />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:userId" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
