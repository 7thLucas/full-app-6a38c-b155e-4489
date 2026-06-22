import { useConfigurables } from "~/modules/configurables";

export default function IndexPage() {
  const { config, loading } = useConfigurables();

  const part1 = loading ? "" : (config?.headline?.part1 ?? "We Love");
  const part2 = loading ? "" : (config?.headline?.part2 ?? "Meepo");
  const part3 = loading ? "" : (config?.headline?.part3 ?? "x QuantumByte");
  const appName = loading ? "" : (config?.appName ?? "We Love Meepo x QuantumByte");

  return (
    <main
      className="flex min-h-screen w-full items-center justify-center bg-background"
      aria-label={appName}
    >
      <h1
        className="text-center font-heading font-black leading-tight tracking-tight px-4"
        style={{
          fontSize: "clamp(3rem, 10vw, 8rem)",
          opacity: loading ? 0 : 1,
          transition: "opacity 0.6s ease",
          fontFamily: "var(--font-heading, 'Space Grotesk', sans-serif)",
        }}
      >
        <span className="text-foreground">{part1} </span>
        <span className="text-primary">{part2}</span>
        <span className="text-muted-foreground"> {part3}</span>
      </h1>
    </main>
  );
}
