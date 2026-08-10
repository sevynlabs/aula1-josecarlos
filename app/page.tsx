const pillars = [
  ["01", "Modelo de negócio", "Saber estruturar a operação inteira ao redor do imóvel."],
  ["02", "Capital", "Usar capital próprio, parceiros, investidores e crédito com função clara."],
  ["03", "Metodologia", "Analisar terreno, mercado, produto, viabilidade e risco antes de agir."],
  ["04", "Gestão", "Criar processos e responsáveis para a operação não depender de uma pessoa só."],
  ["05", "Ecossistema", "Conectar projeto, obra, jurídico, tributário, capital e comercialização."],
];

const learnings = [
  ["01", "Por que capital próprio pode virar um teto", "Ter dinheiro para uma obra não significa ter um modelo capaz de sustentar várias."],
  ["02", "O custo invisível de concentrar tudo", "Capital, risco, tempo, equipe e atenção esperando o resultado de uma única operação."],
  ["03", "Por que terreno não é analisado só pelo preço", "Mercado, produto e potencial de venda mudam completamente a análise."],
  ["04", "Como o incorporador pensa capital", "Capital próprio, parceiros, investidores e crédito cumprem papéis diferentes."],
  ["05", "Por que financiamento não resolve um modelo ruim", "Crédito sem viabilidade pode apenas aumentar o problema."],
  ["06", "Como sair da centralização", "Fazer mais obras sem gestão pode multiplicar seus problemas."],
];

function CTA({ children = "QUERO GARANTIR MEU ACESSO" }: { children?: React.ReactNode }) {
  return <a className="cta" href="#inscricao">{children} <span>↗</span></a>;
}

export default function Home() {
  return <main>
    <section className="hero" id="aula"><div className="hero-grid" /><div className="hero-photo"><img src="/jose-carlos.jpg" alt="José Carlos Cardoso" /></div><div className="hero-content"><div className="eyebrow">AULA ONLINE AO VIVO <i /> QUINTA-FEIRA, 13 DE AGOSTO</div><h1>O PROBLEMA<br /><em>DA OBRA ÚNICA</em></h1><p className="hero-lead">Você sabe construir.<br /><strong>Mas talvez ainda não tenha construído o modelo que permite crescer.</strong></p><p className="hero-copy">Descubra por que tantos construtores competentes continuam presos a uma obra por vez, ao próprio capital e a uma operação que depende deles para tudo — e conheça o método que José Carlos desenvolveu para transformar construção em um verdadeiro negócio de incorporação.</p><div className="hero-bottom"><div><span className="price-label">ACESSO À AULA</span><span className="price">R$ 27</span></div><CTA /><div className="byline">COM JOSÉ CARLOS CARDOSO<br /><span>Criador do Método 5/20 · CEO do Grupo Haja · +10 anos de mercado</span></div></div></div></section>

    <section className="statement"><p className="eyebrow">A PERGUNTA QUE MUDA TUDO</p><h2>Talvez o problema não seja<br /><em>falta de capital.</em></h2><div className="statement-line" /><p>É falta de <b>método + modelo de negócio + capital estruturado + gestão + ecossistema.</b></p></section>

    <section className="cycle section"><div className="section-intro"><span className="kicker">02 / IDENTIFICAÇÃO</span><h2>Talvez você conheça muito bem <em>este ciclo.</em></h2></div><div className="cycle-card"><div className="cycle-steps"><span>Encontra uma oportunidade</span><span>Compra ou negocia o terreno</span><span>Coloca o próprio dinheiro</span><span>Começa e constrói</span><span>Espera vender</span><span>Recupera o capital</span></div><div className="cycle-result">UMA OBRA.<br /><em>DEPOIS OUTRA.</em><br />DEPOIS OUTRA.</div></div><p className="question">“Se eu tivesse mais dinheiro, conseguiria construir mais.”<br /><strong>Mas será que esse é realmente o problema?</strong></p></section>

    <section className="dark section"><div className="section-intro"><span className="kicker yellow">03 / QUEBRA DE CRENÇA</span><h2>Capital, sozinho,<br /><em>não cria escala.</em></h2></div><div className="dark-grid"><p>Você pode ter dinheiro e ainda escolher o terreno errado, construir o produto errado, trabalhar com margem insuficiente, não saber trazer investidores ou depender de você para cada decisão.</p><div className="callout">O verdadeiro problema<br />pode ser <strong>falta de um modelo.</strong></div></div></section>

    <section className="pillars section" id="metodo"><div className="section-intro"><span className="kicker">04 / O DIAGNÓSTICO</span><h2>A obra única é apenas<br /><em>o sintoma.</em></h2><p>Por trás dela normalmente existe uma empresa que ainda não estruturou cinco pilares essenciais.</p></div><div className="pillar-list">{pillars.map(([n,t,d]) => <div className="pillar" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><b>↗</b></div>)}</div></section>

    <section className="story section"><div className="story-photo"><img src="/jose-carlos.jpg" alt="José Carlos Cardoso em seu escritório" /></div><div><span className="kicker">05 / A HISTÓRIA</span><h2>José Carlos também<br />começou com <em>uma obra.</em></h2><p>Primeiro vieram os projetos. Depois, interiores. Depois, construção para clientes. Então ele decidiu desenvolver os próprios produtos imobiliários.</p><p className="quote">“Com que dinheiro eu vou fazer a próxima?”</p><p>O financiamento tradicional permitiu começar. Mas, quando vieram duas, três, quatro operações, outra estrutura se tornou necessária. Foi dessa necessidade — e dentro da operação — que nasceu o Método 5/20.</p></div></section>

    <section className="method section"><span className="kicker yellow">06 / O MECANISMO</span><h2>O Método 5/20 não nasceu<br />para virar curso.</h2><p>Nasceu para organizar as peças de uma incorporação e transformar um construtor em incorporador.</p><div className="orbit"><span>TERRENO</span><span>CAPITAL</span><span>INVESTIDORES</span><span>CRÉDITO</span><strong>5/20</strong><span>GESTÃO</span><span>VIABILIDADE</span><span>GOVERNANÇA</span><span>COMERCIALIZAÇÃO</span></div><p className="method-note"><b>O incorporador não precisa possuir todas as peças.</b><br />Precisa saber estruturá-las.</p></section>

    <section className="learnings section"><div className="section-intro"><span className="kicker">07 / O QUE VOCÊ VAI DESCOBRIR</span><h2>Uma nova forma de<br /><em>pensar a incorporação.</em></h2></div><div className="learning-grid">{learnings.map(([n,t,d]) => <div className="learning" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></section>

    <section className="shift section"><span className="kicker yellow">08 / A TRANSFORMAÇÃO</span><h2>De construtor<br />a <em>incorporador.</em></h2><div className="shifts"><p>DE: <b>“Quanto dinheiro eu tenho?”</b><strong>PARA: “Como essa operação será estruturada?”</strong></p><p>DE: <b>“Preciso comprar o terreno.”</b><strong>PARA: “Qual a melhor forma de estruturar esse terreno?”</strong></p><p>DE: <b>“Quando terminar essa, começo outra.”</b><strong>PARA: “Como construo um pipeline de novas operações?”</strong></p></div></section>

    <section className="authority section"><div><span className="kicker">09 / QUEM É JOSÉ CARLOS CARDOSO?</span><h2>Experiência prática<br />de quem construiu<br /><em>o ecossistema.</em></h2><p>Não é o que José pretende fazer. É o que ele precisou aprender para fazer o que faz hoje.</p></div><div className="stats"><strong>+10 <small>ANOS DE MERCADO</small></strong><strong>9 <small>OBRAS EM ANDAMENTO</small></strong><strong>R$ 2 bi <small>EM VGV EM PROJETOS</small></strong><strong>GRUPO HAJA <small>CEO E CRIADOR DO MÉTODO 5/20</small></strong></div></section>

    <section className="audience section"><span className="kicker">10 / ESTA AULA É PARA VOCÊ QUE</span><h2>Não quer passar os próximos<br /><em>10 anos fazendo uma casa por vez.</em></h2><div className="audience-list"><span>Já constrói imóveis</span><span>Tem uma obra ou terreno</span><span>É engenheiro, arquiteto ou investidor</span><span>Quer estruturar capital e parceiros</span><span>Sente que a empresa depende de você</span><span>Quer sair de obras isoladas</span></div></section>

    <section className="final-cta" id="inscricao"><div className="eyebrow">QUINTA-FEIRA, 13 DE AGOSTO · ONLINE AO VIVO</div><h2>A obra única não é<br />o verdadeiro problema.<br /><em>É a consequência.</em></h2><p>Capital é ferramenta. A obra é o produto.<br /><strong>O modelo é o que constrói a incorporadora.</strong></p><div className="final-price"><span>INVESTIMENTO</span><b>R$ 27</b></div><CTA>QUERO PARTICIPAR DA AULA</CTA><small>Com José Carlos Cardoso · Criador do Método 5/20 · CEO do Grupo Haja</small></section>

    <section className="faq section"><span className="kicker">PERGUNTAS FREQUENTES</span><h2>Antes de garantir<br /><em>seu acesso.</em></h2>{[["A aula será ao vivo?","Sim. A aula acontecerá online, na quinta-feira, 13 de agosto."],["Preciso já construir?","O conteúdo foi desenvolvido principalmente para construtores, engenheiros, arquitetos, investidores e empresários do mercado imobiliário."],["Vou conseguir financiamento participando?","Não existe garantia de financiamento. Crédito depende de análise, viabilidade, documentação e aprovação."],["Vou aprender o Método 5/20 completo?","Você conhecerá a lógica, os princípios e a forma de pensar por trás do método. A aplicação completa exige uma análise mais profunda da realidade de cada operação."]].map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</section>
    <footer><img src="/logo-jose.png" alt="Escola de Incorporadores" /><p>© 2026 Grupo Haja. Todos os direitos reservados.</p></footer>
  </main>;
}
