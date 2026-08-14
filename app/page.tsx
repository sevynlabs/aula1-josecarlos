"use client";
import { useState } from "react";

const questions = [
  { tag: "SUA OPERAÇÃO", title: "Hoje, como você constrói?", options: ["Uma obra por vez, com capital próprio", "Tenho algumas obras, mas tudo depende de mim", "Já tenho uma operação estruturada e quero escalar", "Ainda estou planejando minha primeira operação"] },
  { tag: "CAPITAL", title: "O que mais limita seu próximo passo?", options: ["O dinheiro fica preso em uma obra", "Não sei combinar capital próprio, crédito e parceiros", "Tenho capital, mas falta um modelo claro", "Ainda não sei qual é o meu principal gargalo"] },
  { tag: "GESTÃO", title: "Quanto da operação precisa passar por você?", options: ["Praticamente tudo", "As decisões mais importantes", "Só acompanho indicadores e decisões-chave", "Ainda não tenho uma equipe definida"] },
  { tag: "MÉTODO", title: "Como você analisa uma nova oportunidade?", options: ["Vou pela intuição e experiência", "Analiso alguns números, sem um processo fixo", "Tenho uma metodologia própria", "Ainda não encontrei uma forma segura de analisar"] },
  { tag: "PRÓXIMO NÍVEL", title: "O que você quer construir nos próximos anos?", options: ["Mais obras sem precisar colocar todo meu dinheiro", "Uma incorporadora com processos e equipe", "Um ecossistema com parceiros e investidores", "Ainda estou tentando entender por onde começar"] },
];
const profiles = ["Construtor", "Arquiteto", "Engenheiro", "Corretor de imóveis", "Investidor"];
const captureLabels = ["Como podemos chamar você?", "Para onde enviamos seu resultado?", "Qual é o seu WhatsApp?", "Qual é o seu perfil no mercado?"];
const endpoint = "https://script.google.com/macros/s/AKfycbzcuoH2Sz-TosHnGRNUPAmyqeevEfBBpIKUIdZw6obzZVln6I0z5hTXS0Nc7yaq6toCSA/exec";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [captureStep, setCaptureStep] = useState(-1);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [lead, setLead] = useState({ nome: "", email: "", whatsapp: "", perfil: "" });
  const [result, setResult] = useState("");
  const current = questions[step];

  function start() { setStarted(true); setCaptureStep(0); }
  function changeLead(key: keyof typeof lead, value: string) { setLead({ ...lead, [key]: value }); }
  function finishCapture(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (captureStep < 3) setCaptureStep(captureStep + 1);
    else { setCaptureStep(-1); setStep(0); }
  }
  async function nextQuestion() {
    if (selected === null) return;
    const finalAnswers = [...answers, selected];
    if (step < questions.length - 1) { setAnswers(finalAnswers); setSelected(null); setStep(step + 1); return; }
    const diagnosis = finalAnswers.filter((answer) => answer === 0 || answer === 1).length >= 3 ? "Você está no ciclo da obra única" : "Você já percebeu que precisa de um próximo modelo";
    await fetch(endpoint, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ ...lead, diagnostico: diagnosis, respostas: finalAnswers.map((answer, index) => `${questions[index].title}: ${questions[index].options[answer]}`), concluido: "Sim" }) });
    setAnswers(finalAnswers); setResult(diagnosis); setSelected(null); setStep(questions.length);
  }
  function restart() { setStarted(false); setCaptureStep(-1); setStep(0); setAnswers([]); setSelected(null); setResult(""); setLead({ nome: "", email: "", whatsapp: "", perfil: "" }); }

  return <main className="quiz-shell">
    <div className="quiz-top"><img src="/logo-light-jose.png" alt="Escola de Incorporadores" /><span>{started ? "DIAGNÓSTICO EM ANDAMENTO" : "DIAGNÓSTICO GRATUITO"}</span></div>
    {!started && <section className="quiz-intro"><div className="intro-copy"><span className="eyebrow">UM DIAGNÓSTICO RÁPIDO SOBRE SUA OPERAÇÃO</span><h1>Você está construindo<br /><em>uma obra</em> ou um negócio?</h1><p>Responda algumas perguntas e descubra o que pode estar por trás da sensação de que, para construir mais, você precisa sempre começar do zero.</p><button className="gold-button" onClick={start}>COMEÇAR DIAGNÓSTICO <b>→</b></button><small>Leva menos de 2 minutos · sem respostas certas ou erradas</small></div><div className="intro-portrait"><img src="/jose-carlos.jpg" alt="José Carlos Cardoso" /><div className="portrait-card"><b>5/20</b><span>O método por trás<br />de um novo modelo</span></div></div></section>}
    {started && captureStep >= 0 && <section className="question-stage capture-stage"><div className="progress-row"><span>QUALIFICAÇÃO {captureStep + 1} DE 4</span><span>{Math.round(((captureStep + 1) / 4) * 100)}%</span></div><div className="progress"><i style={{ width: `${((captureStep + 1) / 4) * 100}%` }} /></div><div className="question-card"><span className="eyebrow">ANTES DO DIAGNÓSTICO</span><h2>{captureLabels[captureStep]}</h2><form className="capture-form" onSubmit={finishCapture}>{captureStep === 0 && <input autoFocus required value={lead.nome} onChange={(e) => changeLead("nome", e.target.value)} placeholder="Seu nome" />}{captureStep === 1 && <input autoFocus required type="email" value={lead.email} onChange={(e) => changeLead("email", e.target.value)} placeholder="Seu melhor e-mail" />}{captureStep === 2 && <input autoFocus required value={lead.whatsapp} onChange={(e) => changeLead("whatsapp", e.target.value)} placeholder="Seu WhatsApp" />}{captureStep === 3 && <select autoFocus required value={lead.perfil} onChange={(e) => changeLead("perfil", e.target.value)}><option value="">Selecione seu perfil</option>{profiles.map((profile) => <option key={profile}>{profile}</option>)}</select>}<button className="next-button" type="submit">{captureStep === 3 ? "INICIAR DIAGNÓSTICO" : "CONTINUAR"}<b>→</b></button></form><small className="capture-note">Seus dados serão usados para enviar o resultado e os avisos da aula.</small></div></section>}
    {started && captureStep < 0 && step < questions.length && <section className="question-stage"><div className="progress-row"><span>PERGUNTA {String(step + 1).padStart(2, "0")} DE {String(questions.length).padStart(2, "0")}</span><span>{Math.round(((step + 1) / questions.length) * 100)}%</span></div><div className="progress"><i style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div><div className="question-card"><span className="eyebrow">{current.tag}</span><h2>{current.title}</h2><div className="options">{current.options.map((option, index) => <button key={option} className={selected === index ? "option selected" : "option"} onClick={() => setSelected(index)}><span>{String.fromCharCode(65 + index)}</span>{option}<b>→</b></button>)}</div><button className="next-button" disabled={selected === null} onClick={nextQuestion}>{step === questions.length - 1 ? "VER MEU RESULTADO" : "CONTINUAR"}<b>→</b></button></div></section>}
    {started && captureStep < 0 && step >= questions.length && <section className="result-stage"><span className="eyebrow">SEU DIAGNÓSTICO</span><div className="result-number">05</div><h2>{result}</h2><p>A obra única pode ser apenas o sintoma. Quando método, modelo de negócio, capital, gestão e ecossistema não estão conectados, cada nova operação parece começar do zero.</p><div className="result-insight"><span>O PRÓXIMO PASSO</span><strong>Conhecer a lógica do Método 5/20</strong><small>Uma forma de organizar as peças de uma incorporação sem depender apenas do seu próprio capital.</small></div><a className="gold-button link-button" href="https://pay.hotmart.com/U107160255C?bid=1786714100510" target="_blank" rel="noreferrer">QUERO CONHECER A AULA <b>→</b></a><button className="restart" onClick={restart}>Refazer diagnóstico</button></section>}
    {started && captureStep < 0 && step < questions.length && <div className="quiz-footer"><span>ESCOLA DE INCORPORADORES</span><span>JOSÉ CARLOS CARDOSO</span></div>}
    <section className="quiz-offer" id="inscricao"><div><span className="eyebrow">AULA ONLINE AO VIVO</span><h3>O problema da obra única.</h3><p>Descubra por que construtores competentes continuam presos a uma obra por vez, e o que precisa mudar para começar a pensar como incorporador.</p></div><div className="offer-price"><span>ACESSO À AULA</span><b>R$ 27</b><a href="https://pay.hotmart.com/U107160255C?bid=1786714100510" target="_blank" rel="noreferrer">GARANTIR MEU ACESSO →</a></div></section>
  </main>;
}
