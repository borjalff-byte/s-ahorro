import { useState } from "react";

export default function Landing() {
  const [resultado, setResultado] = useState("");

  function calcular() {
    const v = parseFloat(document.getElementById("calcBill").value || 0);
    const tipo = parseFloat(document.getElementById("calcType").value || 0);
    const servicio = parseFloat(document.getElementById("calcService").value || 1);

    if (!v) {
      setResultado("Introduce un importe válido");
      return;
    }

    const min = Math.round(v * tipo * 12 * servicio);
    const max = Math.round(v * (tipo + 0.08) * 12 * servicio);

    setResultado(`Ahorro estimado entre ${min}€ y ${max}€ al año`);
  }

  const whatsapp = "https://wa.me/34655941658";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white p-6 md:p-10">

      <div className="max-w-5xl mx-auto grid gap-8 relative">

        {/* BOTON WHATSAPP */}
        <a
          href={whatsapp}
          className="fixed bottom-6 right-6 z-50 px-5 py-4 rounded-full bg-green-500 text-white font-bold shadow-2xl"
        >
          WhatsApp
        </a>

        {/* HEADER */}
        <section className="bg-white/10 backdrop-blur rounded-3xl shadow p-8 grid md:grid-cols-2 gap-8 items-center">
          <div>

            <img
              src="/mnt/data/a_landing_page_website_for_si_ahorro_is_segmente.png"
              alt="SI AHORRO logo"
              className="w-40 mb-4 rounded-2xl"
            />

            <div className="text-sm font-semibold uppercase tracking-widest text-green-300">
              Auditoría Energética Premium
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mt-3 leading-tight">
              Descubre si estás pagando de más en luz y gas
            </h1>

            <p className="mt-4 text-lg text-white/80">
              Estudio gratuito y sin compromiso. Te decimos si puedes ahorrar de verdad.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="#form" className="px-6 py-3 rounded-2xl bg-green-600 text-white font-semibold">
                Quiero mi estudio
              </a>
              <a href={whatsapp} className="px-6 py-3 rounded-2xl border border-white/30 font-semibold">
                WhatsApp directo
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-3xl p-6">
            <div className="text-2xl font-bold">Qué revisamos</div>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>✓ Precio kWh y potencia</li>
              <li>✓ Permanencias ocultas</li>
              <li>✓ Optimización luz + gas</li>
              <li>✓ Negocios y empresas</li>
              <li>✓ Comunidades</li>
            </ul>
          </div>
        </section>

        {/* CONTADOR */}
        <section className="bg-white/10 backdrop-blur rounded-3xl shadow p-6 text-center">
          <div className="text-sm uppercase tracking-widest text-green-300">
            Confianza demostrada
          </div>
          <div className="text-4xl md:text-6xl font-black mt-2">
            +1534 clientes ya están ahorrando
          </div>
          <p className="mt-2 text-white/80">
            Comprueba cuánto podrías ahorrar tú también.
          </p>
        </section>

        {/* PASOS */}
        <section className="grid md:grid-cols-3 gap-6">
          {["Envías tu factura", "Analizamos tu tarifa", "Te mostramos el ahorro"].map((t, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-3xl shadow p-6 font-semibold">
              {t}
            </div>
          ))}
        </section>

        {/* CALCULADORA */}
        <section className="bg-white/10 backdrop-blur rounded-3xl shadow p-8">
          <h2 className="text-3xl font-bold">Calculadora de ahorro real</h2>
          <p className="text-white/80 mt-2">
            Estimación según tu consumo y tipo de suministro
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-6 items-end">

            <div>
              <div className="text-sm mb-2">Factura mensual (€)</div>
              <input id="calcBill" type="number" className="rounded-2xl p-3 text-slate-900 w-full" />
            </div>

            <div>
              <div className="text-sm mb-2">Tipo</div>
              <select id="calcType" className="rounded-2xl p-3 text-slate-900 w-full">
                <option value="0.10">Hogar</option>
                <option value="0.14">Negocio</option>
                <option value="0.16">Comunidad</option>
              </select>
            </div>

            <div>
              <div className="text-sm mb-2">Servicio</div>
              <select id="calcService" className="rounded-2xl p-3 text-slate-900 w-full">
                <option value="1">Solo luz</option>
                <option value="1.25">Luz + gas</option>
              </select>
            </div>

            <div>
              <button
                onClick={calcular}
                className="px-6 py-4 rounded-2xl bg-green-600 text-white font-bold w-full"
              >
                Calcular
              </button>
            </div>

            <div className="md:col-span-4 text-xl font-bold">
              {resultado || "Introduce tus datos"}
            </div>
          </div>
        </section>

        {/* FORM */}
        <section id="form" className="bg-white/10 backdrop-blur rounded-3xl shadow p-8">
          <h2 className="text-3xl font-bold">Solicita tu estudio gratuito</h2>

          <form
            className="grid md:grid-cols-2 gap-4 mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.target);
              const m = `Hola, quiero estudio:%0ANombre:${f.get("nombre")} %0ATeléfono:${f.get("telefono")} %0AProvincia:${f.get("provincia")} %0ATipo:${f.get("tipo")} %0AFactura:${f.get("factura")} %0AComentarios:${f.get("comentarios")}`;
              window.open(whatsapp + "?text=" + m, "_blank");
            }}
          >
            <input name="nombre" placeholder="Nombre" className="rounded-2xl p-3 text-slate-900" />
            <input name="telefono" placeholder="Teléfono" className="rounded-2xl p-3 text-slate-900" />
            <input name="provincia" placeholder="Provincia" className="rounded-2xl p-3 text-slate-900" />
            <select name="tipo" className="rounded-2xl p-3 text-slate-900">
              <option>Hogar</option>
              <option>Negocio</option>
              <option>Comunidad</option>
            </select>
            <input name="factura" placeholder="Factura mensual" className="rounded-2xl p-3 text-slate-900" />
            <input name="comentarios" placeholder="Comentarios" className="rounded-2xl p-3 text-slate-900 md:col-span-2" />

            <button className="md:col-span-2 px-6 py-4 rounded-2xl bg-green-600 text-white font-bold">
              Enviar y recibir propuesta
            </button>
          </form>
        </section>

        {/* OPINIONES */}
        <section className="grid md:grid-cols-3 gap-6">
          {[
            ["María G.", "Murcia", "Me bajaron la factura en la primera revisión."],
            ["Pedro L.", "Lorca", "No sabía que estaba pagando tanto de más."],
            ["Ana R.", "Almería", "Rápido y efectivo por WhatsApp."]
          ].map((c, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-3xl p-6">
              <div className="font-bold">{c[0]}</div>
              <div className="text-sm text-white/70">{c[1]}</div>
              <p className="mt-3 text-white/80">{c[2]}</p>
            </div>
          ))}
        </section>

        <footer className="text-center text-sm text-white/60 py-6">
          © SI AHORRO · Optimización energética inteligente
        </footer>

      </div>
    </div>
  );
}
