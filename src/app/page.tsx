import Image from "next/image";
import { 
  Users, 
  Target, 
  Lightbulb, 
  BarChart3, 
  Code2, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Circle,
  Square,
  Triangle,
  Grid,
  Hexagon,
  LineChart
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-cyan-500/15 to-fuchsia-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-20 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-fuchsia-500/15 to-cyan-500/10 rounded-full blur-[128px]" />
        <Grid className="absolute top-40 right-20 w-8 h-8 text-white/5 hidden sm:block" />
        <Circle className="absolute bottom-40 left-20 w-6 h-6 text-white/5 hidden sm:block" />
        <Square className="absolute top-1/2 left-1/3 w-4 h-4 text-white/5 hidden sm:block" />
        <Triangle className="absolute bottom-1/3 right-1/4 w-5 h-5 text-white/5 hidden sm:block" />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-black/70 backdrop-blur-sm border-b border-white/10 z-50">
        <div className="max-w-[1240px] mx-auto px-6 h-24 flex items-center">
          <span className="text-2xl font-extralight tracking-[0.25em] bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.25)]">
            LYS
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="min-h-[90vh] flex items-center pt-24 sm:pt-0">
          <div className="space-y-8 sm:space-y-12 w-full relative">
            {/* Elementos decorativos do Hero */}
            <div className="absolute -right-4 sm:-right-20 top-0 hidden lg:block">
              <div className="relative w-48 sm:w-64 h-48 sm:h-64">
                <LineChart className="w-full h-full text-white/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight leading-[1.08] tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
              Transformando pequenas<br />marcas em negócios<br className="hidden sm:block" /> escaláveis
            </h1>
            <p className="text-lg sm:text-xl text-gray-400/90 max-w-xl leading-relaxed">
              Consultoria estratégica especializada em lançamento e growth hacking de marcas.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base bg-white/[0.02] border border-white/15 hover:border-transparent hover:bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(168,85,247,0.20)] backdrop-blur-md transition-all">
              Iniciar projeto <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 sm:py-32 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-24">
            <div className="text-center sm:text-left relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 border border-white/10 rounded-full" />
              <span className="text-[4rem] sm:text-[7rem] font-extralight leading-none tracking-tighter relative bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">120k</span>
              <p className="mt-2 sm:mt-4 text-sm uppercase tracking-[0.2em] text-gray-500">Clientes</p>
            </div>
            <div className="text-center sm:text-left relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 border border-white/10 rotate-45" />
              <span className="text-[4rem] sm:text-[7rem] font-extralight leading-none tracking-tighter bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">59</span>
              <p className="mt-2 sm:mt-4 text-sm uppercase tracking-[0.2em] text-gray-500">Países</p>
            </div>
            <div className="text-center sm:text-left relative">
              <div className="absolute -top-6 -left-6">
                <Hexagon className="w-20 h-20 text-white/10" />
              </div>
              <span className="text-[4rem] sm:text-[7rem] font-extralight leading-none tracking-tighter bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">03</span>
              <p className="mt-2 sm:mt-4 text-sm uppercase tracking-[0.2em] text-gray-500">Línguas</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section id="services" className="py-20 sm:py-32 border-t border-white/10 relative">
          <div className="absolute inset-0 grid grid-cols-3 pointer-events-none">
            <div className="border-r border-white/5" />
            <div className="border-r border-white/5" />
          </div>
          <h2 className="text-3xl sm:text-4xl mb-12 sm:mb-20 tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Nossos serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="p-12 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:border-white/20 hover:shadow-[0_0_24px_rgba(168,85,247,0.15)] transition-all group">
              <Target className="w-10 h-10 mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl mb-6 tracking-tight">Consultoria Estratégica</h3>
              <p className="text-gray-400 leading-relaxed">
                Soluções personalizadas para escalar negócios de forma previsível e sustentável.
              </p>
            </div>
            <div className="p-12 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:border-white/20 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)] transition-all group">
              <BarChart3 className="w-10 h-10 mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl mb-6 tracking-tight">Growth Hacking</h3>
              <p className="text-gray-400 leading-relaxed">
                Estratégias de aquisição, conversão e retenção de clientes com tráfego pago.
              </p>
            </div>
            <div className="p-12 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:border-white/20 hover:shadow-[0_0_24px_rgba(236,72,153,0.15)] transition-all group">
              <Code2 className="w-10 h-10 mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl mb-6 tracking-tight">Desenvolvimento Tech</h3>
              <p className="text-gray-400 leading-relaxed">
                Soluções inovadoras integrando tecnologia, IA e automação.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 sm:py-32 border-t border-white/10 relative">
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4 pointer-events-none opacity-5">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full" />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20">
            <div>
              <h2 className="text-3xl sm:text-4xl mb-8 sm:mb-12 tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Nossa História</h2>
              <div className="space-y-6 sm:space-y-8 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Desde 2019, a LYS Metaverse tem se destacado como referência em estratégias 
                  digitais e de growth hacking. Nossa expertise abrange desde copywriting 
                  persuasivo até desenvolvimento de software sob demanda.
                </p>
                <p className="text-lg">
                  Hoje, não apenas transformamos ideias em marcas escaláveis, mas também 
                  ajudamos nossos clientes a estruturarem sistemas robustos, garantindo 
                  eficiência operacional, previsibilidade de receita e crescimento sustentável.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 content-start">
              <div className="p-10 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-colors">
                <Users className="w-8 h-8 mb-6" />
                <p className="text-gray-400 text-lg">Equipe especializada</p>
              </div>
              <div className="p-10 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-colors">
                <Lightbulb className="w-8 h-8 mb-6" />
                <p className="text-gray-400 text-lg">Soluções inovadoras</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 sm:py-32 border-t border-white/10 relative">
          <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <h2 className="text-3xl sm:text-4xl mb-12 sm:mb-20 tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Entre em contato</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20">
            <div className="space-y-8 sm:space-y-12">
              <div className="flex items-center gap-6">
                <Mail className="w-6 h-6" />
                <a href="mailto:contato@lysmetaverse.com" className="text-gray-300 hover:text-white text-lg">
                  contato@lysmetaverse.com
                </a>
              </div>
              <div className="flex items-center gap-6">
                <Phone className="w-6 h-6" />
                <a href="tel:+5511976638147" className="text-gray-300 hover:text-white text-lg">
                  +55 (11) 97663-8147
                </a>
              </div>
              <div className="flex items-center gap-6">
                <MapPin className="w-6 h-6" />
                <span className="text-gray-300 text-lg">São Paulo, SP</span>
              </div>
            </div>
            <form className="space-y-6 sm:space-y-8">
              <input 
                type="text" 
                placeholder="Nome"
                className="w-full bg-white/[0.02] backdrop-blur-sm border border-white/15 rounded-xl px-6 py-4 focus:outline-none focus:border-white text-lg"
              />
              <input 
                type="email" 
                placeholder="Email"
                className="w-full bg-white/[0.02] backdrop-blur-sm border border-white/15 rounded-xl px-6 py-4 focus:outline-none focus:border-white text-lg"
              />
              <textarea 
                placeholder="Mensagem"
                rows={4}
                className="w-full bg-white/[0.02] backdrop-blur-sm border border-white/15 rounded-xl px-6 py-4 focus:outline-none focus:border-white text-lg"
              />
              <button className="w-full px-8 py-4 rounded-xl bg-white/[0.03] border border-white/15 hover:border-transparent hover:bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all text-lg">
                Enviar mensagem
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="max-w-[1240px] mx-auto px-6 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} LYS Metaverse. Todos os direitos reservados.
            </p>
            
          </div>
        </div>
      </footer>
    </div>
  );
}
