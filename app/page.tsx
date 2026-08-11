"use client";

import { useMemo, useState } from "react";

const questions = [
  { tag: "SUA OPERAÇÃO", title: "Hoje, como você constrói?", options: ["Uma obra por vez, com capital próprio", "Tenho algumas obras, mas tudo depende de mim", "Já tenho uma operação estruturada e quero escalar", "Ainda estou planejando minha primeira operação"] },
  { tag: "CAPITAL", title: "O que mais limita seu próximo passo?", options: ["O dinheiro fica preso em uma obra", "Não sei combinar capital próprio, crédito e parceiros", "Tenho capital, mas falta um modelo claro", "Ainda não sei qual é o meu principal gargalo"] },
  { tag: "GESTÃO", title: "Quanto da operação precisa passar por você?", options: ["Praticamente tudo", "As decisões mais importantes", "Só acompanho indicadores e decisões-chave", "Ainda não tenho uma equipe definida"] },
  { tag: "MÉTODO", title: "Como você analisa uma nova oportunidade?", options: ["Vou pela intuição e experiência", "Analiso alguns números, sem um processo fixo", "Tenho uma metodologia própria", "Ainda não encontrei uma forma segura de analisar"] },
  { tag: "PRÓXIMO NÍVEL", title: "O que você quer construir nos próximos anos?", options: ["Mais obras sem precisar colocar todo meu dinheiro", "Uma incorporadora com processos e equipe", "Um ecossistema com parceiros e investidores", "Ainda estou tentando entender por onde começar"] },
];

export default function Home() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const current = questions[step];
  const progress = step < 0 ? 0 : ((step + 1) / questions.length) * 100;
  const result = useMemo(() => answers.filter((a) => a === 0 || a === 1).length >= 3 ? "Você está no ciclo da obra única" : "Você já percebeu que precisa de um próximo modelo", [answers]);

  function choose(index: number) { setSelected(index); }
  function next() { if (selected === null) return; setAnswers([...answers, selected]); setSelected(null); setStep(step + 1); }
  function restart() { setStep(-1); setAnswers([]); setSelected(null); }

  return <main className="quiz-shell">
    <div className="quiz-top"><img src="/logo-light-jose.png" alt="Escola de Incorporadores" /><span>DIAGNÓSTICO GRATUITO</span></div>
    {step < 0 && <section className="quiz-intro"><div className="intro-copy"><span className="eyebrow">UM DIAGNÓSTICO RÁPIDO SOBRE SUA OPERAÇÃO</span><h1>Você está construindo<br /><em>uma obra</em> ou um negócio?</h1><p>Responda 5 perguntas e descubra o que pode estar por trás da sensação de que, para construir mais, você precisa sempre começar do zero.</p><button className="gold-button" onClick={() => setStep(0)}>COMEÇAR DIAGNÓSTICO <b>→</b></button><small>Leva menos de 2 minutos · sem respostas certas ou erradas</small></div><div className="intro-portrait"><img src="/jose-carlos.jpg" alt="José Carlos Cardoso" /><div className="portrait-card"><b>5/20</b><span>O método por trás<br />de um novo modelo</span></div></div></section>}
    {step >= 0 && step < questions.length && <section className="question-stage"><div className="progress-row"><span>PERGUNTA {String(step + 1).padStart(2, "0")} DE {String(questions.length).padStart(2, "0")}</span><span>{Math.round(progress)}%</span></div><div className="progress"><i style={{ width: `${progress}%` }} /></div><div className="question-card"><span className="eyebrow">{current.tag}</span><h2>{current.title}</h2><div className="options">{current.options.map((option, index) => <button key={option} className={selected === index ? "option selected" : "option"} onClick={() => choose(index)}><span>{String.fromCharCode(65 + index)}</span>{option}<b>→</b></button>)}</div><button className="next-button" disabled={selected === null} onClick={next}>{step === questions.length - 1 ? "VER MEU RESULTADO" : "CONTINUAR"}<b>→</b></button></div></section>}
    {step >= questions.length && <section className="result-stage"><span className="eyebrow">SEU DIAGNÓSTICO</span><div className="result-number">0{questions.length}</div><h2>{result}</h2><p>A obra única pode ser apenas o sintoma. Quando método, modelo de negócio, capital, gestão e ecossistema não estão conectados, cada nova operação parece começar do zero.</p><div className="result-insight"><span>O PRÓXIMO PASSO</span><strong>Conhecer a lógica do Método 5/20</strong><small>Uma forma de organizar as peças de uma incorporação sem depender apenas do seu próprio capital.</small></div><a className="gold-button link-button" href="#inscricao">QUERO CONHECER A AULA <b>→</b></a><button className="restart" onClick={restart}>Refazer diagnóstico</button></section>}
    {step >= 0 && step < questions.length && <div className="quiz-footer"><span>ESCOLA DE INCORPORADORES</span><span>JOSÉ CARLOS CARDOSO</span></div>}
    <section className="quiz-offer" id="inscricao"><div><span className="eyebrow">AULA ONLINE AO VIVO</span><h3>O problema da obra única.</h3><p>Descubra por que construtores competentes continuam presos a uma obra por vez, e o que precisa mudar para começar a pensar como incorporador.</p></div><div className="offer-price"><span>ACESSO À AULA</span><b>R$ 27</b><a href="#inscricao">GARANTIR MEU ACESSO →</a></div></section>
  </main>;
}
