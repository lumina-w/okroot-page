import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { EARLY_ACCESS_SPOTS } from "@/lib/utils";
import { insertWaitlist } from "@/lib/supabase";

const CONDITIONS = ["Celiaquía", "Diabetes", "Intolerancia a la lactosa", "Otra"];

type Status = "idle" | "loading" | "done" | "error";

export function Waitlist() {
  const ref = useReveal<HTMLDivElement>();
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const toggle = (c: string) =>
    setSelected((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
    );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");

    try {
      // Both a fresh insert and a duplicate email count as success in the UI.
      await insertWaitlist({ email: email.trim(), conditions: selected });
      setStatus("done");
    } catch (err) {
      console.error("[OKRoot] waitlist submit failed", err);
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="px-5 py-12 sm:px-6 lg:py-20">
      <div ref={ref} className="mx-auto w-full max-w-[760px]">
        <div
          className="reveal overflow-hidden rounded-[32px] border p-8 sm:p-12"
          style={{ background: "var(--root-violet-soft)", borderColor: "var(--root-violet-mist)" }}
        >
          {status === "done" ? (
            <div className="py-8 text-center">
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-3xl text-white"
                style={{ background: "var(--root-violet)" }}
                aria-hidden
              >
                ✓
              </div>
              <h2
                className="mt-6 font-display font-extrabold leading-tight tracking-[-0.035em]"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "var(--root-ink)" }}
              >
                Ya estás dentro.
              </h2>
              <p className="mt-3 text-[17px] leading-relaxed" style={{ color: "var(--root-mute)" }}>
                Te avisamos cuando abra acceso.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center">
                <h2
                  className="font-display font-extrabold leading-[1.05] tracking-[-0.04em]"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: "var(--root-ink)" }}
                >
                  Quiero acceso{" "}
                  <span style={{ fontStyle: "italic", color: "var(--root-violet)" }}>anticipado</span>
                </h2>
                <p
                  className="mx-auto mt-4 max-w-[460px] text-[17px] leading-relaxed"
                  style={{ color: "var(--root-mute)" }}
                >
                  Entra a la lista de espera. Te escribimos cuando abramos los primeros cupos.
                </p>

                {EARLY_ACCESS_SPOTS > 0 && (
                  <div
                    className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13.5px] font-semibold"
                    style={{ background: "#fff", color: "var(--root-purple)", border: "1px solid var(--root-violet-mist)" }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span
                        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                        style={{ background: "var(--root-violet)" }}
                      />
                      <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--root-violet)" }} />
                    </span>
                    Solo quedan {EARLY_ACCESS_SPOTS} cupos en early access
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="mx-auto mt-9 max-w-[460px]" noValidate>
                {/* Email */}
                <label
                  htmlFor="wl-email"
                  className="block text-sm font-semibold"
                  style={{ color: "var(--root-ink)" }}
                >
                  Email
                </label>
                <input
                  id="wl-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="mt-2 w-full rounded-2xl px-4 py-3.5 text-[15px] outline-none transition-colors focus:border-[var(--root-violet)]"
                  style={{
                    background: "#fff",
                    border: "2px solid var(--root-line)",
                    color: "var(--root-ink)",
                  }}
                />

                {/* Conditions */}
                <fieldset className="mt-6 border-0 p-0">
                  <legend className="text-sm font-semibold" style={{ color: "var(--root-ink)" }}>
                    ¿Cuál es tu restricción?{" "}
                    <span className="font-normal" style={{ color: "var(--root-faint)" }}>
                      (opcional)
                    </span>
                  </legend>
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {CONDITIONS.map((c) => {
                      const checked = selected.includes(c);
                      return (
                        <label
                          key={c}
                          className="flex cursor-pointer items-center gap-2.5 rounded-2xl px-4 py-3 text-[14.5px] transition-colors"
                          style={{
                            background: "#fff",
                            border: `2px solid ${checked ? "var(--root-violet)" : "var(--root-line)"}`,
                            color: "var(--root-ink-2)",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggle(c)}
                            className="h-4 w-4 shrink-0 accent-[var(--root-violet)]"
                          />
                          {c}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-7 flex w-full items-center justify-center rounded-full px-6 py-4 text-[16px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                  style={{
                    background: "var(--root-violet)",
                    boxShadow: "0 10px 24px -10px rgba(148,51,234,0.6)",
                  }}
                >
                  {status === "loading" ? "Enviando…" : "Quiero comer sin adivinar"}
                </button>

                {status === "error" && (
                  <p className="mt-3 text-center text-[13px]" style={{ color: "#c44a4a" }}>
                    Algo falló. Intenta de nuevo en un momento.
                  </p>
                )}

                <p
                  className="mt-4 text-center text-[12.5px] leading-relaxed"
                  style={{ color: "var(--root-faint)" }}
                >
                  Sin spam. Sin tarjeta. Solo te escribimos cuando hay algo que vale.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
