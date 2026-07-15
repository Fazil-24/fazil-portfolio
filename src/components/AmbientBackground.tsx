export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden cinematic-base">
      <div className="aurora aurora-sapphire" style={{ width: 620, height: 620, top: "-12%", left: "-12%" }} />
      <div className="aurora aurora-violet" style={{ width: 560, height: 560, top: "8%", right: "-16%" }} />
      <div className="aurora aurora-teal" style={{ width: 480, height: 480, bottom: "-10%", left: "22%" }} />
      <div className="aurora aurora-amber" style={{ width: 500, height: 380, bottom: "10%", right: "8%" }} />

      <div className="absolute inset-0 cinematic-vignette" />
      <div className="absolute inset-0 grain-overlay" />
    </div>
  );
}
