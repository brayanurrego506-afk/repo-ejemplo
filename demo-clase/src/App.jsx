import { useState, useEffect } from 'react'

const STEPS = [
  {
    number: '01',
    title: 'Crear el proyecto',
    desc: 'Escribe tu código: HTML, CSS, JavaScript, React. Estructura limpia desde el inicio.',
    icon: '⌨️',
  },
  {
    number: '02',
    title: 'Subir a GitHub',
    desc: 'git init → git add . → git commit → git push. Tu código vive en la nube.',
    icon: '🐙',
  },
  {
    number: '03',
    title: 'Conectar con Vercel',
    desc: 'Importa el repositorio en vercel.com. Un clic y el deploy empieza automático.',
    icon: '▲',
  },
  {
    number: '04',
    title: '¡En producción!',
    desc: 'Tu web tiene URL pública. Cada push a GitHub redespliega automáticamente.',
    icon: '🌐',
  },
]

const CHECKLIST = [
  { id: 1, text: 'vercel.json en la raíz con outputDirectory: "dist"' },
  { id: 2, text: 'vite y @vitejs/plugin-react en "dependencies" (no devDependencies)' },
  { id: 3, text: 'npm run build pasa sin errores en local' },
  { id: 4, text: 'Variables de entorno con prefijo VITE_ en Vercel dashboard' },
  { id: 5, text: 'Archivos del proyecto en la raíz del repo, no en subcarpeta' },
]

export default function App() {
  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState({})
  const [typed, setTyped] = useState('')
  const [activeStep, setActiveStep] = useState(null)

  const fullText = '$ npm run build → git push → deploy ✓'

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!show) return
    let i = 0
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i + 1))
      i++
      if (i >= fullText.length) clearInterval(interval)
    }, 45)
    return () => clearInterval(interval)
  }, [show])

  const toggleCheck = (id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const allChecked = CHECKLIST.every(item => checked[item.id])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#080808',
      color: '#e0e0e0',
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      padding: '0',
      margin: '0',
      overflowX: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Space+Grotesk:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: #00ff88; border-radius: 2px; }
        ::selection { background: #00ff8833; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 #00ff8830; }
          50% { box-shadow: 0 0 0 8px #00ff8800; }
        }
        .step-card {
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .step-card:hover {
          transform: translateY(-4px);
          border-color: #00ff88 !important;
          box-shadow: 0 8px 32px #00ff8820 !important;
        }
        .check-row {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .check-row:hover {
          background: #00ff8808 !important;
        }
        .badge-done {
          animation: pulse-green 2s infinite;
        }
      `}</style>

      {/* Scanline effect */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        pointerEvents: 'none', zIndex: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00000008 2px, #00000008 4px)',
      }} />

      {/* Grid background */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        pointerEvents: 'none', zIndex: 0,
        backgroundImage: `
          linear-gradient(#00ff8806 1px, transparent 1px),
          linear-gradient(90deg, #00ff8806 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* HEADER */}
        <header style={{
          borderBottom: '1px solid #1a1a1a',
          padding: '20px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: 'blur(10px)',
          background: '#08080890',
          position: 'sticky', top: 0, zIndex: 100,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '10px', height: '10px', borderRadius: '50%',
              background: '#00ff88',
              boxShadow: '0 0 12px #00ff88',
              animation: 'pulse-green 2s infinite',
            }} />
            <span style={{ color: '#00ff88', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em' }}>
              DEMO CLASE
            </span>
          </div>
          <span style={{ color: '#444', fontSize: '12px' }}>GitHub → Vercel</span>
        </header>

        {/* HERO */}
        <section style={{
          padding: '100px 48px 80px',
          maxWidth: '900px',
          margin: '0 auto',
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.34, 1.2, 0.64, 1)',
        }}>
          <div style={{
            display: 'inline-block',
            border: '1px solid #00ff8840',
            borderRadius: '4px',
            padding: '6px 14px',
            marginBottom: '32px',
            fontSize: '11px',
            color: '#00ff88',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            Clase práctica — Despliegue web
          </div>

          <h1 style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 'clamp(40px, 7vw, 80px)',
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: '24px',
            color: '#ffffff',
          }}>
            Tu código,<br />
            <span style={{ color: '#00ff88' }}>en internet.</span>
          </h1>

          <p style={{
            fontSize: '16px',
            color: '#666',
            lineHeight: 1.7,
            maxWidth: '520px',
            marginBottom: '48px',
          }}>
            Aprende el flujo completo: desde escribir código hasta tener una URL pública
            que cualquier persona en el mundo puede visitar.
          </p>

          {/* Terminal line */}
          <div style={{
            background: '#0d0d0d',
            border: '1px solid #1e1e1e',
            borderRadius: '8px',
            padding: '20px 24px',
            fontFamily: 'monospace',
            fontSize: '15px',
            color: '#00ff88',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{ color: '#444' }}>~/proyecto</span>
            <span>{typed}</span>
            <span style={{ animation: 'blink 1s infinite', color: '#00ff88' }}>▌</span>
          </div>
        </section>

        {/* PASOS */}
        <section style={{
          padding: '0 48px 100px',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          <h2 style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            color: '#444',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}>
            El flujo en 4 pasos
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
          }}>
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className="step-card"
                onClick={() => setActiveStep(activeStep === i ? null : i)}
                style={{
                  background: activeStep === i ? '#0d150e' : '#0d0d0d',
                  border: `1px solid ${activeStep === i ? '#00ff88' : '#1e1e1e'}`,
                  borderRadius: '10px',
                  padding: '28px 24px',
                  opacity: show ? 1 : 0,
                  animation: show ? `fadeUp 0.6s ease ${i * 0.12}s forwards` : 'none',
                  boxShadow: activeStep === i ? '0 0 24px #00ff8818' : 'none',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{step.icon}</div>
                <div style={{
                  fontSize: '11px',
                  color: '#00ff88',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  marginBottom: '8px',
                }}>
                  PASO {step.number}
                </div>
                <div style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#fff',
                  marginBottom: '12px',
                }}>
                  {step.title}
                </div>
                <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.6 }}>
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CHECKLIST */}
        <section style={{
          padding: '0 48px 120px',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          <div style={{
            background: '#0d0d0d',
            border: `1px solid ${allChecked ? '#00ff88' : '#1e1e1e'}`,
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'border-color 0.4s ease',
            boxShadow: allChecked ? '0 0 40px #00ff8820' : 'none',
          }}>
            <div style={{
              padding: '28px 32px',
              borderBottom: '1px solid #1a1a1a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div>
                <h2 style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#fff',
                  marginBottom: '4px',
                }}>
                  Checklist antes de hacer push
                </h2>
                <p style={{ fontSize: '13px', color: '#444' }}>
                  Si todos pasan → el deploy funciona. Garantizado.
                </p>
              </div>
              <div style={{
                fontSize: '13px',
                color: allChecked ? '#00ff88' : '#444',
                fontWeight: 600,
                transition: 'color 0.3s',
              }}>
                {Object.values(checked).filter(Boolean).length}/{CHECKLIST.length}
              </div>
            </div>

            {CHECKLIST.map((item, i) => (
              <div
                key={item.id}
                className="check-row"
                onClick={() => toggleCheck(item.id)}
                style={{
                  padding: '18px 32px',
                  borderBottom: i < CHECKLIST.length - 1 ? '1px solid #121212' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: checked[item.id] ? '#00ff8806' : 'transparent',
                  transition: 'background 0.2s',
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '4px',
                  border: `2px solid ${checked[item.id] ? '#00ff88' : '#2a2a2a'}`,
                  background: checked[item.id] ? '#00ff88' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.2s',
                }}>
                  {checked[item.id] && (
                    <span style={{ fontSize: '12px', color: '#080808', fontWeight: 700 }}>✓</span>
                  )}
                </div>
                <span style={{
                  fontSize: '13px',
                  color: checked[item.id] ? '#e0e0e0' : '#555',
                  textDecoration: checked[item.id] ? 'none' : 'none',
                  transition: 'color 0.2s',
                  fontFamily: 'monospace',
                }}>
                  {item.text}
                </span>
              </div>
            ))}

            {allChecked && (
              <div className="badge-done" style={{
                padding: '20px 32px',
                borderTop: '1px solid #00ff8840',
                background: '#00ff8808',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#00ff88',
                fontSize: '14px',
                fontWeight: 600,
              }}>
                <span>✓</span>
                <span>Todo listo — puedes hacer push con confianza.</span>
              </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{
          borderTop: '1px solid #111',
          padding: '32px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '100%',
        }}>
          <span style={{ fontSize: '12px', color: '#333' }}>
            Generado con React + Vite → Desplegado en Vercel
          </span>
          <span style={{ fontSize: '12px', color: '#00ff8860' }}>
            github → vercel ▲
          </span>
        </footer>

      </div>
    </div>
  )
}
