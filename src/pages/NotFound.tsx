import { useNavigate } from "react-router-dom";
import { PageShell } from "./PageShell";
import { Button } from "@/components/ui/button";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <PageShell
      eyebrow="Error 404"
      title="Esta página no existe"
      intro="El enlace que seguiste no lleva a ningún lado. Volvamos a terreno seguro."
    >
      <Button size="lg" onClick={() => navigate("/")}>
        Ir al inicio
      </Button>
    </PageShell>
  );
}
