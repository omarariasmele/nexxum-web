import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════
   TRANSLATIONS  ES · EN · FR · PT
═══════════════════════════════════════════════ */
const T = {
  es: {
    // NAV
    nav_home:"Inicio", nav_projects:"Proyectos", nav_simulator:"Simulador",
    nav_education:"Educación", nav_institutional:"Institucional",
    nav_login:"Iniciar sesión", nav_register:"Crear cuenta",
    nav_myaccount:"Mi cuenta", nav_logout:"Salir",
    // HERO
    hero_badge:"Plataforma de activos tokenizados · Est. 2024",
    hero_h1a:"Invierte en activos", hero_h1b:"reales", hero_h1c:"desde cualquier parte del mundo.",
    hero_p:"Transformamos propiedades, flotas vehiculares y parques solares en tokens accesibles. Rendimientos reales, respaldo legal, trazabilidad blockchain.",
    hero_cta1:"Ver Oportunidades →", hero_cta2:"Simular mi inversión",
    hero_s1:"Capital gestionado", hero_s2:"Inversores activos", hero_s3:"TIR promedio anual",
    hero_fc1:"Portafolio activo", hero_fc2:"Rendimiento acum.", hero_fc3:"Este mes",
    hero_fc4:"Próx. pago: 05 Jun", hero_fc5:"Tokens activos",
    // TRUST
    trust_label:"Respaldo institucional",
    // METRICS
    m1:"Capital tokenizado", m2:"Inversores · 18 países", m3:"Tipos de activos", m4:"Trazabilidad blockchain", m5:"TIR promedio histórica",
    // HOW
    how_tag:"Proceso simple", how_title:"Tu camino en 3 pasos",
    how_sub:"Sin burocracia ni fronteras. Elegí, invertí, cobrá.",
    how_s1t:"Creá tu cuenta", how_s1d:"Proceso KYC 100% digital en minutos. Identidad verificada, acceso inmediato al catálogo.",
    how_s2t:"Elegí y tokenizá", how_s2d:"Seleccioná el fideicomiso. Invertí via transferencia bancaria, SWIFT o stablecoins USDT/USDC.",
    how_s3t:"Recibí ganancias", how_s3d:"Monitoreá rendimientos en tiempo real desde tu dashboard. Retirá según las condiciones del fideicomiso.",
    how_cta:"Comenzar ahora →",
    // SHOWCASE
    showcase_tag:"Activos disponibles", showcase_title:"Invertí en lo que podés ver y tocar",
    showcase_sub:"Cada fideicomiso está respaldado por activos tangibles, auditados y tokenizados en blockchain.",
    // PROJECTS
    proj_tag:"Portafolio", proj_title:"Diversificá tu capital en activos reales",
    proj_sub:"Activos tangibles, rendimientos verificables, contratos en blockchain.",
    proj_seeall:"Ver todos →", proj_viewdetail:"Ver detalle",
    proj_tir:"TIR Est.", proj_plazo:"Plazo", proj_captacion:"Captación", proj_riesgo:"Riesgo",
    proj_invest:"Invertir",
    // TESTIMONIALS
    test_tag:"Comunidad", test_title:"Lo que dicen nuestros inversores",
    // FAQ
    faq_tag:"FAQ", faq_title:"Todo lo que necesitás saber",
    // CTA BAND
    cta_title:"¿Listo para hacer trabajar tu capital en activos reales?",
    cta_sub:"Creá tu cuenta gratis. Sin mínimos elevados, sin burocracia, con total trazabilidad.",
    cta_btn1:"Crear Cuenta Gratis →", cta_btn2:"Hablar con un asesor",
    // FOOTER
    footer_desc:"Plataforma de tokenización de activos reales. Conectamos la economía real con blockchain para inversores de todo el mundo.",
    footer_legal:"Nexxum S.A. opera bajo las estructuras legales de fideicomisos ordinarios. Los activos digitales están respaldados por contratos inteligentes en la red Polygon. Los valores mostrados son estimaciones y no constituyen garantía de retorno futuro.",
    // SIMULATOR
    sim_tag:"Herramienta interactiva", sim_title:"Simulador de inversión",
    sim_sub:"Calculá el retorno estimado de tu inversión según el fideicomiso y el monto que elijas.",
    sim_howmuch:"¿Cuánto deseás invertir?", sim_select:"Seleccioná el fideicomiso",
    sim_annual:"Retorno proyectado anual", sim_permonth:"por mes",
    sim_capital:"Capital inicial", sim_tir:"TIR estimada", sim_risk:"Nivel de riesgo",
    sim_term:"Plazo sugerido", sim_total:"Total proyectado (1 año)",
    sim_invest:"Invertir en", sim_compare:"Comparativa de fideicomisos",
    sim_disclaimer:"Los valores son simulaciones basadas en rendimientos históricos estimados. No constituyen garantía de retorno futuro.",
    sim_annual_ret:"Retorno anual",
    // AUTH
    reg_title:"Crear cuenta", reg_step1:"Paso 1 de 3 · Tus datos personales",
    reg_name:"Nombre", reg_lastname:"Apellido", reg_email:"Email",
    reg_country:"País de residencia", reg_next:"Continuar →", reg_back:"← Atrás",
    reg_already:"¿Ya tenés cuenta?", reg_signin:"Iniciá sesión",
    reg_photo:"Subí tu foto de perfil (opcional)",
    log_title:"Iniciá sesión", log_sub:"Accedé a tu panel de inversiones",
    log_pass:"Contraseña", log_forgot:"¿Olvidaste tu contraseña?",
    log_enter:"Ingresar →", log_no_account:"¿No tenés cuenta?", log_signup:"Registrate gratis",
    // EDUCATION
    edu_tag:"Centro de aprendizaje", edu_title:"Entendé el modelo antes de invertir",
    edu_sub:"La transparencia empieza por la educación.",
    edu_readmore:"Leer más →", edu_close:"Cerrar ↑",
    // INSTITUTIONAL
    inst_tag:"Quiénes somos",
    // DASHBOARD
    dash_hello:"Buenos días",
    dash_nextpay:"Próximo pago de rendimientos",
    // RISK LABELS
    risk_bajo:"Bajo", risk_mod:"Moderado", risk_com:"Comercial",
  },
  en: {
    nav_home:"Home", nav_projects:"Projects", nav_simulator:"Simulator",
    nav_education:"Education", nav_institutional:"About Us",
    nav_login:"Sign in", nav_register:"Create account",
    nav_myaccount:"My account", nav_logout:"Sign out",
    hero_badge:"Real asset tokenization platform · Est. 2024",
    hero_h1a:"Invest in", hero_h1b:"real", hero_h1c:"assets from anywhere in the world.",
    hero_p:"We transform properties, vehicle fleets and solar parks into accessible tokens. Real returns, legal backing, blockchain traceability.",
    hero_cta1:"View Opportunities →", hero_cta2:"Simulate my investment",
    hero_s1:"Assets under management", hero_s2:"Active investors", hero_s3:"Average annual IRR",
    hero_fc1:"Active portfolio", hero_fc2:"Cumulative return", hero_fc3:"This month",
    hero_fc4:"Next payment: Jun 05", hero_fc5:"Active tokens",
    trust_label:"Institutional backing",
    m1:"Tokenized capital", m2:"Investors · 18 countries", m3:"Asset types", m4:"Blockchain traceability", m5:"Historical avg. IRR",
    how_tag:"Simple process", how_title:"Your journey in 3 steps",
    how_sub:"No bureaucracy, no borders. Choose, invest, earn.",
    how_s1t:"Create your account", how_s1d:"100% digital KYC process in minutes. Verified identity, immediate access to the catalog.",
    how_s2t:"Choose and tokenize", how_s2d:"Select your preferred trust fund. Invest via bank transfer, SWIFT or stablecoins USDT/USDC.",
    how_s3t:"Receive your returns", how_s3d:"Monitor your returns in real time from your dashboard. Withdraw according to the trust fund conditions.",
    how_cta:"Get started →",
    showcase_tag:"Available assets", showcase_title:"Invest in what you can see and touch",
    showcase_sub:"Each trust fund is backed by tangible, audited assets tokenized on blockchain.",
    proj_tag:"Portfolio", proj_title:"Diversify your capital in real assets",
    proj_sub:"Tangible assets, verifiable returns, blockchain contracts.",
    proj_seeall:"See all →", proj_viewdetail:"View detail",
    proj_tir:"Est. IRR", proj_plazo:"Term", proj_captacion:"Fundraising", proj_riesgo:"Risk",
    proj_invest:"Invest",
    test_tag:"Community", test_title:"What our investors say",
    faq_tag:"FAQ", faq_title:"Everything you need to know",
    cta_title:"Ready to put your capital to work in real assets?",
    cta_sub:"Create your free account. No high minimums, no bureaucracy, full traceability.",
    cta_btn1:"Create Free Account →", cta_btn2:"Talk to an advisor",
    footer_desc:"Real asset tokenization platform. We connect the real economy with blockchain for investors worldwide.",
    footer_legal:"Nexxum S.A. operates under ordinary trust fund legal structures. Digital assets are backed by smart contracts on the Polygon network. Values shown are estimates and do not guarantee future returns.",
    sim_tag:"Interactive tool", sim_title:"Investment simulator",
    sim_sub:"Calculate your estimated return based on the trust fund and amount you choose.",
    sim_howmuch:"How much do you want to invest?", sim_select:"Select trust fund",
    sim_annual:"Projected annual return", sim_permonth:"per month",
    sim_capital:"Initial capital", sim_tir:"Estimated IRR", sim_risk:"Risk level",
    sim_term:"Suggested term", sim_total:"Projected total (1 year)",
    sim_invest:"Invest in", sim_compare:"Trust fund comparison",
    sim_disclaimer:"Values are simulations based on estimated historical returns. They do not constitute a guarantee of future return.",
    sim_annual_ret:"Annual return",
    reg_title:"Create account", reg_step1:"Step 1 of 3 · Your personal details",
    reg_name:"First name", reg_lastname:"Last name", reg_email:"Email",
    reg_country:"Country of residence", reg_next:"Continue →", reg_back:"← Back",
    reg_already:"Already have an account?", reg_signin:"Sign in",
    reg_photo:"Upload your profile photo (optional)",
    log_title:"Sign in", log_sub:"Access your investment dashboard",
    log_pass:"Password", log_forgot:"Forgot your password?",
    log_enter:"Sign in →", log_no_account:"Don't have an account?", log_signup:"Sign up free",
    edu_tag:"Learning center", edu_title:"Understand the model before investing",
    edu_sub:"Transparency starts with education.",
    edu_readmore:"Read more →", edu_close:"Close ↑",
    inst_tag:"About us",
    dash_hello:"Good morning",
    dash_nextpay:"Next return payment",
    risk_bajo:"Low", risk_mod:"Moderate", risk_com:"Commercial",
  },
  fr: {
    nav_home:"Accueil", nav_projects:"Projets", nav_simulator:"Simulateur",
    nav_education:"Éducation", nav_institutional:"À propos",
    nav_login:"Se connecter", nav_register:"Créer un compte",
    nav_myaccount:"Mon compte", nav_logout:"Se déconnecter",
    hero_badge:"Plateforme de tokenisation d'actifs réels · Est. 2024",
    hero_h1a:"Investissez dans des actifs", hero_h1b:"réels", hero_h1c:"depuis n'importe où dans le monde.",
    hero_p:"Nous transformons des propriétés, des flottes de véhicules et des parcs solaires en tokens accessibles. Rendements réels, cadre juridique solide, traçabilité blockchain.",
    hero_cta1:"Voir les opportunités →", hero_cta2:"Simuler mon investissement",
    hero_s1:"Actifs sous gestion", hero_s2:"Investisseurs actifs", hero_s3:"TRI moyen annuel",
    hero_fc1:"Portefeuille actif", hero_fc2:"Rendement cumulé", hero_fc3:"Ce mois",
    hero_fc4:"Prochain paiement: 05 Jun", hero_fc5:"Tokens actifs",
    trust_label:"Soutien institutionnel",
    m1:"Capital tokenisé", m2:"Investisseurs · 18 pays", m3:"Types d'actifs", m4:"Traçabilité blockchain", m5:"TRI historique moyen",
    how_tag:"Processus simple", how_title:"Votre parcours en 3 étapes",
    how_sub:"Sans bureaucratie ni frontières. Choisissez, investissez, encaissez.",
    how_s1t:"Créez votre compte", how_s1d:"Processus KYC 100% numérique en quelques minutes. Identité vérifiée, accès immédiat au catalogue.",
    how_s2t:"Choisissez et tokenisez", how_s2d:"Sélectionnez le fonds fiduciaire de votre choix. Investissez par virement bancaire, SWIFT ou stablecoins USDT/USDC.",
    how_s3t:"Recevez vos rendements", how_s3d:"Suivez vos rendements en temps réel depuis votre tableau de bord. Retirez selon les conditions du fonds.",
    how_cta:"Commencer maintenant →",
    showcase_tag:"Actifs disponibles", showcase_title:"Investissez dans ce que vous pouvez voir et toucher",
    showcase_sub:"Chaque fonds fiduciaire est adossé à des actifs tangibles, audités et tokenisés sur blockchain.",
    proj_tag:"Portefeuille", proj_title:"Diversifiez votre capital dans des actifs réels",
    proj_sub:"Actifs tangibles, rendements vérifiables, contrats sur blockchain.",
    proj_seeall:"Voir tout →", proj_viewdetail:"Voir le détail",
    proj_tir:"TRI Est.", proj_plazo:"Durée", proj_captacion:"Collecte", proj_riesgo:"Risque",
    proj_invest:"Investir",
    test_tag:"Communauté", test_title:"Ce que disent nos investisseurs",
    faq_tag:"FAQ", faq_title:"Tout ce que vous devez savoir",
    cta_title:"Prêt à faire travailler votre capital dans des actifs réels?",
    cta_sub:"Créez votre compte gratuit. Sans minimums élevés, sans bureaucratie, avec une traçabilité totale.",
    cta_btn1:"Créer un compte gratuit →", cta_btn2:"Parler à un conseiller",
    footer_desc:"Plateforme de tokenisation d'actifs réels. Nous connectons l'économie réelle avec la blockchain pour les investisseurs du monde entier.",
    footer_legal:"Nexxum S.A. opère sous des structures juridiques de fiducies ordinaires. Les actifs numériques sont adossés à des contrats intelligents sur le réseau Polygon. Les valeurs affichées sont des estimations et ne constituent pas une garantie de rendement futur.",
    sim_tag:"Outil interactif", sim_title:"Simulateur d'investissement",
    sim_sub:"Calculez le rendement estimé de votre investissement selon le fonds et le montant choisis.",
    sim_howmuch:"Combien souhaitez-vous investir?", sim_select:"Sélectionnez le fonds fiduciaire",
    sim_annual:"Rendement annuel projeté", sim_permonth:"par mois",
    sim_capital:"Capital initial", sim_tir:"TRI estimé", sim_risk:"Niveau de risque",
    sim_term:"Durée suggérée", sim_total:"Total projeté (1 an)",
    sim_invest:"Investir dans", sim_compare:"Comparaison des fonds",
    sim_disclaimer:"Les valeurs sont des simulations basées sur des rendements historiques estimés. Elles ne constituent pas une garantie de rendement futur.",
    sim_annual_ret:"Rendement annuel",
    reg_title:"Créer un compte", reg_step1:"Étape 1 sur 3 · Vos données personnelles",
    reg_name:"Prénom", reg_lastname:"Nom", reg_email:"Email",
    reg_country:"Pays de résidence", reg_next:"Continuer →", reg_back:"← Retour",
    reg_already:"Vous avez déjà un compte?", reg_signin:"Se connecter",
    reg_photo:"Téléchargez votre photo de profil (optionnel)",
    log_title:"Se connecter", log_sub:"Accédez à votre tableau de bord",
    log_pass:"Mot de passe", log_forgot:"Mot de passe oublié?",
    log_enter:"Se connecter →", log_no_account:"Pas encore de compte?", log_signup:"S'inscrire gratuitement",
    edu_tag:"Centre d'apprentissage", edu_title:"Comprenez le modèle avant d'investir",
    edu_sub:"La transparence commence par l'éducation.",
    edu_readmore:"Lire la suite →", edu_close:"Fermer ↑",
    inst_tag:"À propos de nous",
    dash_hello:"Bonjour",
    dash_nextpay:"Prochain paiement de rendement",
    risk_bajo:"Faible", risk_mod:"Modéré", risk_com:"Commercial",
  },
  pt: {
    nav_home:"Início", nav_projects:"Projetos", nav_simulator:"Simulador",
    nav_education:"Educação", nav_institutional:"Sobre nós",
    nav_login:"Entrar", nav_register:"Criar conta",
    nav_myaccount:"Minha conta", nav_logout:"Sair",
    hero_badge:"Plataforma de tokenização de ativos reais · Est. 2024",
    hero_h1a:"Invista em ativos", hero_h1b:"reais", hero_h1c:"de qualquer lugar do mundo.",
    hero_p:"Transformamos propriedades, frotas de veículos e parques solares em tokens acessíveis. Rendimentos reais, respaldo jurídico, rastreabilidade blockchain.",
    hero_cta1:"Ver Oportunidades →", hero_cta2:"Simular meu investimento",
    hero_s1:"Capital gerenciado", hero_s2:"Investidores ativos", hero_s3:"TIR médio anual",
    hero_fc1:"Portfólio ativo", hero_fc2:"Rendimento acum.", hero_fc3:"Este mês",
    hero_fc4:"Próx. pagamento: 05 Jun", hero_fc5:"Tokens ativos",
    trust_label:"Respaldo institucional",
    m1:"Capital tokenizado", m2:"Investidores · 18 países", m3:"Tipos de ativos", m4:"Rastreabilidade blockchain", m5:"TIR histórico médio",
    how_tag:"Processo simples", how_title:"Sua jornada em 3 passos",
    how_sub:"Sem burocracia nem fronteiras. Escolha, invista, receba.",
    how_s1t:"Crie sua conta", how_s1d:"Processo KYC 100% digital em minutos. Identidade verificada, acesso imediato ao catálogo.",
    how_s2t:"Escolha e tokenize", how_s2d:"Selecione o fundo fiduciário de sua preferência. Invista via transferência bancária, SWIFT ou stablecoins USDT/USDC.",
    how_s3t:"Receba seus rendimentos", how_s3d:"Monitore seus rendimentos em tempo real pelo seu dashboard. Retire conforme as condições do fundo.",
    how_cta:"Começar agora →",
    showcase_tag:"Ativos disponíveis", showcase_title:"Invista no que você pode ver e tocar",
    showcase_sub:"Cada fundo fiduciário é respaldado por ativos tangíveis, auditados e tokenizados em blockchain.",
    proj_tag:"Portfólio", proj_title:"Diversifique seu capital em ativos reais",
    proj_sub:"Ativos tangíveis, rendimentos verificáveis, contratos em blockchain.",
    proj_seeall:"Ver todos →", proj_viewdetail:"Ver detalhe",
    proj_tir:"TIR Est.", proj_plazo:"Prazo", proj_captacion:"Captação", proj_riesgo:"Risco",
    proj_invest:"Investir",
    test_tag:"Comunidade", test_title:"O que dizem nossos investidores",
    faq_tag:"FAQ", faq_title:"Tudo que você precisa saber",
    cta_title:"Pronto para fazer seu capital trabalhar em ativos reais?",
    cta_sub:"Crie sua conta grátis. Sem mínimos elevados, sem burocracia, com total rastreabilidade.",
    cta_btn1:"Criar Conta Grátis →", cta_btn2:"Falar com um consultor",
    footer_desc:"Plataforma de tokenização de ativos reais. Conectamos a economia real com blockchain para investidores de todo o mundo.",
    footer_legal:"Nexxum S.A. opera sob estruturas jurídicas de fundos fiduciários ordinários. Os ativos digitais são respaldados por contratos inteligentes na rede Polygon. Os valores mostrados são estimativas e não constituem garantia de retorno futuro.",
    sim_tag:"Ferramenta interativa", sim_title:"Simulador de investimento",
    sim_sub:"Calcule o retorno estimado do seu investimento conforme o fundo e o valor escolhidos.",
    sim_howmuch:"Quanto você deseja investir?", sim_select:"Selecione o fundo fiduciário",
    sim_annual:"Retorno anual projetado", sim_permonth:"por mês",
    sim_capital:"Capital inicial", sim_tir:"TIR estimado", sim_risk:"Nível de risco",
    sim_term:"Prazo sugerido", sim_total:"Total projetado (1 ano)",
    sim_invest:"Investir em", sim_compare:"Comparativo de fundos",
    sim_disclaimer:"Os valores são simulações baseadas em rendimentos históricos estimados. Não constituem garantia de retorno futuro.",
    sim_annual_ret:"Retorno anual",
    reg_title:"Criar conta", reg_step1:"Passo 1 de 3 · Seus dados pessoais",
    reg_name:"Nome", reg_lastname:"Sobrenome", reg_email:"Email",
    reg_country:"País de residência", reg_next:"Continuar →", reg_back:"← Voltar",
    reg_already:"Já tem uma conta?", reg_signin:"Entrar",
    reg_photo:"Envie sua foto de perfil (opcional)",
    log_title:"Entrar", log_sub:"Acesse seu painel de investimentos",
    log_pass:"Senha", log_forgot:"Esqueceu sua senha?",
    log_enter:"Entrar →", log_no_account:"Não tem uma conta?", log_signup:"Cadastre-se grátis",
    edu_tag:"Centro de aprendizado", edu_title:"Entenda o modelo antes de investir",
    edu_sub:"A transparência começa pela educação.",
    edu_readmore:"Ler mais →", edu_close:"Fechar ↑",
    inst_tag:"Sobre nós",
    dash_hello:"Bom dia",
    dash_nextpay:"Próximo pagamento de rendimentos",
    risk_bajo:"Baixo", risk_mod:"Moderado", risk_com:"Comercial",
  },
};

/* ── EXTENDED TESTIMONIALS ── */
const TESTIMONIALS = [
  {
    stars:"★★★★★",
    name:"Martín Rodríguez",
    role:"Empresario PyME",
    location:"Buenos Aires, Argentina",
    avatar:"MR",
    flag:"🇦🇷",
    amount:"USD 15.000 invertidos",
    fund:"Flota de Autos",
    text_es:"Llevo 8 meses en el fideicomiso de autos y los pagos mensuales son exactamente lo que estimó el simulador. Lo que más valoro es la transparencia total: cada centavo que entra a mi cuenta está respaldado por un hash en la blockchain que yo mismo puedo verificar. No tengo que creerle a nadie, los números están ahí.",
    text_en:"I've been in the vehicle fleet trust fund for 8 months and the monthly payments are exactly what the simulator estimated. What I value most is total transparency: every cent that enters my account is backed by a blockchain hash I can verify myself. I don't have to trust anyone — the numbers are right there.",
    text_fr:"Je suis dans le fonds fiduciaire de flotte de véhicules depuis 8 mois et les paiements mensuels sont exactement ce que le simulateur a estimé. Ce que j'apprécie le plus, c'est la transparence totale : chaque centime qui entre dans mon compte est soutenu par un hash blockchain que je peux vérifier moi-même.",
    text_pt:"Estou no fundo fiduciário de frota de veículos há 8 meses e os pagamentos mensais são exatamente o que o simulador estimou. O que mais valorizo é a transparência total: cada centavo que entra na minha conta é respaldado por um hash na blockchain que eu mesmo posso verificar.",
  },
  {
    stars:"★★★★★",
    name:"Klaus Bauer",
    role:"Gestor de patrimônio privado",
    location:"Múnich, Alemania",
    avatar:"KB",
    flag:"🇩🇪",
    amount:"USD 40.000 invertidos",
    fund:"Real Estate + Energía Solar",
    text_es:"Como inversor europeo acostumbrado a plataformas de alta regulación, lo que me convenció de Nexxum fue poder auditar el contrato inteligente directamente en Polygon. El modelo de fideicomiso es sólido jurídicamente y la diversificación entre real estate y energía solar me da una estabilidad que pocas plataformas en Europa ofrecen.",
    text_en:"As a European investor used to highly regulated platforms, what convinced me about Nexxum was being able to audit the smart contract directly on Polygon. The trust fund model is legally solid and the diversification between real estate and solar energy gives me stability that few European platforms offer.",
    text_fr:"En tant qu'investisseur européen habitué aux plateformes très réglementées, ce qui m'a convaincu chez Nexxum, c'est de pouvoir auditer le contrat intelligent directement sur Polygon. Le modèle fiduciaire est juridiquement solide et la diversification entre immobilier et énergie solaire m'offre une stabilité rare.",
    text_pt:"Como investidor europeu acostumado a plataformas altamente reguladas, o que me convenceu na Nexxum foi poder auditar o contrato inteligente diretamente no Polygon. O modelo fiduciário é juridicamente sólido e a diversificação entre imóveis e energia solar me dá uma estabilidade que poucas plataformas europeias oferecem.",
  },
  {
    stars:"★★★★★",
    name:"Valentina Cruz",
    role:"Consultora financiera independiente",
    location:"Miami, EE.UU.",
    avatar:"VC",
    flag:"🇺🇸",
    amount:"USD 22.000 invertidos",
    fund:"Energía Solar",
    text_es:"El KYC fue ágil y el proceso de inversión con USDC desde Miami fue impecable. Pero lo que realmente me convenció fue el análisis previo: el simulador no promete retornos mágicos, muestra TIR reales históricas con auditoría. Eso habla de una plataforma que respeta la inteligencia del inversor.",
    text_en:"The KYC was quick and the investment process with USDC from Miami was flawless. But what really convinced me was the prior analysis: the simulator doesn't promise magic returns — it shows real historical IRRs with auditing. That speaks to a platform that respects investor intelligence.",
    text_fr:"Le KYC a été rapide et le processus d'investissement avec USDC depuis Miami était impeccable. Mais ce qui m'a vraiment convaincue, c'est l'analyse préalable : le simulateur ne promet pas des rendements magiques, il montre des TRI historiques réels avec audit. Cela montre une plateforme qui respecte l'intelligence des investisseurs.",
    text_pt:"O KYC foi ágil e o processo de investimento com USDC de Miami foi impecável. Mas o que realmente me convenceu foi a análise prévia: o simulador não promete retornos mágicos — mostra TIRs históricas reais com auditoria. Isso fala de uma plataforma que respeita a inteligência do investidor.",
  },
  {
    stars:"★★★★★",
    name:"Ricardo Oliveira",
    role:"Ejecutivo corporativo",
    location:"São Paulo, Brasil",
    avatar:"RO",
    flag:"🇧🇷",
    amount:"USD 30.000 invertidos",
    fund:"Flota de Autos + Real Estate",
    text_es:"Analicé muchas plataformas de inversión alternativa antes de elegir Nexxum. La diferencia clave es la claridad del modelo: en 20 minutos entendí exactamente cómo funciona el fideicomiso, qué pasa si la empresa quiebra (los activos están separados), y cómo verificar mi participación en blockchain. Esa claridad no la encontré en ningún otro lado.",
    text_en:"I analyzed many alternative investment platforms before choosing Nexxum. The key difference is the model's clarity: in 20 minutes I understood exactly how the trust fund works, what happens if the company fails (assets are ring-fenced), and how to verify my participation on blockchain. I didn't find that clarity anywhere else.",
    text_fr:"J'ai analysé de nombreuses plateformes d'investissement alternatif avant de choisir Nexxum. La différence clé est la clarté du modèle : en 20 minutes, j'ai compris exactement comment fonctionne le fonds fiduciaire, ce qui se passe si la société fait faillite et comment vérifier ma participation sur blockchain.",
    text_pt:"Analisei muitas plataformas de investimento alternativo antes de escolher a Nexxum. A diferença-chave é a clareza do modelo: em 20 minutos entendi exatamente como funciona o fundo fiduciário, o que acontece se a empresa falir (ativos são separados) e como verificar minha participação no blockchain.",
  },
  {
    stars:"★★★★★",
    name:"Sophie Lefebvre",
    role:"Inversora privada",
    location:"Lyon, Francia",
    avatar:"SL",
    flag:"🇫🇷",
    amount:"USD 18.000 invertidos",
    fund:"Energía Solar",
    text_es:"Me especializo en inversiones de impacto y el fideicomiso solar de Nexxum combina lo mejor de ambos mundos: retorno financiero real (12% TIR) con impacto ambiental certificado. El dashboard me permite ver en tiempo real la generación del parque y los flujos de caja. Es exactamente el nivel de transparencia que exijo.",
    text_en:"I specialize in impact investing and Nexxum's solar trust fund combines the best of both worlds: real financial return (12% IRR) with certified environmental impact. The dashboard lets me see the park's generation and cash flows in real time. That's exactly the level of transparency I demand.",
    text_fr:"Je suis spécialisée dans l'investissement à impact et le fonds solaire de Nexxum combine le meilleur des deux mondes : rendement financier réel (12% TRI) avec impact environnemental certifié. Le tableau de bord me permet de voir en temps réel la production du parc et les flux de trésorerie.",
    text_pt:"Sou especializada em investimentos de impacto e o fundo solar da Nexxum combina o melhor dos dois mundos: retorno financeiro real (12% TIR) com impacto ambiental certificado. O dashboard me permite ver em tempo real a geração do parque e os fluxos de caixa.",
  },
  {
    stars:"★★★★★",
    name:"Sebastián Morales",
    role:"Ingeniero / Inversor tech",
    location:"Ciudad de México, México",
    avatar:"SM",
    flag:"🇲🇽",
    amount:"USD 12.000 invertidos",
    fund:"Infraestructura Energética",
    text_es:"Lo primero que hice fue leer el contrato de fideicomiso completo y verificar el smart contract en Polygon. Todo coincidía al 100%. Para alguien con perfil técnico, eso es lo máximo. Además el equipo de soporte respondió mis dudas técnicas sobre los contratos inteligentes en menos de 2 horas. Profesionalismo total.",
    text_en:"The first thing I did was read the complete trust fund contract and verify the smart contract on Polygon. Everything matched 100%. For someone with a technical profile, that's the best you can ask for. The support team also answered my technical questions about smart contracts in under 2 hours. Total professionalism.",
    text_fr:"La première chose que j'ai faite a été de lire le contrat fiduciaire complet et de vérifier le contrat intelligent sur Polygon. Tout correspondait à 100%. Pour quelqu'un avec un profil technique, c'est le maximum. L'équipe de support a également répondu à mes questions techniques en moins de 2 heures.",
    text_pt:"A primeira coisa que fiz foi ler o contrato fiduciário completo e verificar o contrato inteligente no Polygon. Tudo coincidiu 100%. Para alguém com perfil técnico, isso é o máximo. A equipe de suporte também respondeu minhas dúvidas técnicas sobre contratos inteligentes em menos de 2 horas.",
  },
];


/* ═══════════════════════════════════════════════
   NEXXUM S.A. — Multi-page interactive mockup
   Pages: Home · Projects · Simulator · Education ·
          Institutional · Register · Login · Dashboard
          Project Detail · KYC · Portfolio · Transactions
═══════════════════════════════════════════════ */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
:root{
  --ink:#0A1628;--ink2:#2C3E55;--muted:#6B7FA3;
  --border:#E2E8F5;--bg:#F7F9FC;--white:#FFFFFF;
  --gold:#B8862A;--gold-lt:#F5E9C8;--gold-md:#D4A84B;
  --green:#16A06B;--green-lt:#E3F7EF;
  --blue:#2563EB;--blue-lt:#EEF4FF;
  --red:#D94F4F;--red-lt:#FFF0F0;
  --shadow-sm:0 1px 4px rgba(10,22,40,.06),0 4px 16px rgba(10,22,40,.05);
  --shadow-md:0 4px 24px rgba(10,22,40,.10);
  --shadow-lg:0 12px 48px rgba(10,22,40,.14);
}
html{scroll-behavior:smooth;}
body{font-family:'Outfit',sans-serif;background:var(--bg);color:var(--ink);line-height:1.6;font-size:15px;}
h1,h2,h3,h4{font-family:'Playfair Display',serif;line-height:1.15;}
a{text-decoration:none;color:inherit;}
input,select,textarea{font-family:'Outfit',sans-serif;}

/* ── UTILS ── */
.tag{display:inline-block;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);margin-bottom:10px;}
.section-title{font-size:clamp(24px,3vw,38px);margin-bottom:10px;}
.section-sub{font-size:15px;color:var(--muted);line-height:1.7;max-width:520px;}
.chip{display:inline-flex;align-items:center;gap:4px;font-size:11px;font-weight:700;padding:3px 10px;border-radius:99px;}
.chip-green{background:var(--green-lt);color:var(--green);}
.chip-gold{background:var(--gold-lt);color:var(--gold);}
.chip-blue{background:var(--blue-lt);color:var(--blue);}
.chip-red{background:var(--red-lt);color:var(--red);}
.chip-gray{background:#F1F3F8;color:var(--muted);}
.divider{height:1px;background:var(--border);margin:20px 0;}

/* ── BUTTONS ── */
.btn{font-family:'Outfit',sans-serif;font-weight:600;font-size:14px;border:none;cursor:pointer;border-radius:10px;transition:all .18s;display:inline-flex;align-items:center;gap:7px;}
.btn-gold{background:var(--gold);color:#fff;padding:10px 22px;}
.btn-gold:hover{background:#9C711F;transform:translateY(-1px);box-shadow:0 4px 14px rgba(184,134,42,.35);}
.btn-outline{background:transparent;border:1.5px solid var(--gold);color:var(--gold);padding:9px 21px;}
.btn-outline:hover{background:var(--gold-lt);}
.btn-ghost{background:transparent;border:1.5px solid var(--border);color:var(--muted);padding:9px 21px;}
.btn-ghost:hover{border-color:var(--ink2);color:var(--ink);}
.btn-blue{background:var(--blue);color:#fff;padding:10px 22px;}
.btn-blue:hover{background:#1d4ed8;transform:translateY(-1px);}
.btn-green{background:var(--green);color:#fff;padding:10px 22px;}
.btn-green:hover{background:#0f8a5b;}
.btn-danger{background:var(--red-lt);color:var(--red);border:1px solid rgba(217,79,79,.2);padding:9px 21px;}
.btn-lg{padding:13px 30px;font-size:15px;border-radius:12px;}
.btn-sm{padding:7px 14px;font-size:13px;border-radius:8px;}
.btn-block{width:100%;justify-content:center;}
.pill-btn{background:transparent;border:1.5px solid var(--border);color:var(--muted);padding:6px 14px;border-radius:99px;font-size:12px;font-weight:600;cursor:pointer;font-family:'Outfit',sans-serif;transition:all .15s;}
.pill-btn:hover{border-color:var(--ink2);color:var(--ink);}

/* ── NAV ── */
.nav{position:fixed;top:0;left:0;right:0;z-index:300;display:flex;align-items:center;justify-content:space-between;padding:0 52px;height:66px;background:rgba(247,249,252,.92);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);}
.logo{font-family:'Playfair Display',serif;font-size:21px;font-weight:800;cursor:pointer;color:var(--ink);}
.logo em{font-style:italic;color:var(--gold);}
.nav-links{display:flex;gap:6px;}
.nav-link{font-size:14px;font-weight:500;color:var(--muted);padding:7px 14px;border-radius:8px;cursor:pointer;transition:all .15s;border:none;background:none;font-family:'Outfit',sans-serif;}
.nav-link:hover{color:var(--ink);background:var(--bg);}
.nav-link.active{color:var(--gold);background:var(--gold-lt);font-weight:600;}
.nav-r{display:flex;gap:10px;align-items:center;}

/* ── PAGE WRAPPER ── */
.page{padding-top:66px;min-height:100vh;}

/* ── HERO ── */
.hero{min-height:calc(100vh - 66px);display:flex;align-items:center;padding:80px 52px;position:relative;overflow:hidden;}
.hero-bg{position:absolute;inset:0;background-image:url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80');background-size:cover;background-position:center;filter:brightness(.18);}
.hero-bg-overlay{position:absolute;inset:0;background:linear-gradient(110deg,rgba(10,22,40,.97) 0%,rgba(10,22,40,.82) 45%,rgba(10,22,40,.35) 100%);}
.hero-deco{position:absolute;top:0;right:0;width:50%;height:100%;background:radial-gradient(ellipse at 70% 40%,rgba(184,134,42,.12),transparent 60%);pointer-events:none;}
.hero-ring{position:absolute;border-radius:50%;border:1px solid rgba(184,134,42,.15);}
.hero-content{position:relative;max-width:640px;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);padding:6px 16px;border-radius:99px;margin-bottom:22px;font-size:12px;font-weight:600;color:rgba(255,255,255,.8);backdrop-filter:blur(8px);}
.live-dot{width:7px;height:7px;background:var(--green);border-radius:50%;animation:blink 2s infinite;}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
.hero h1{font-size:clamp(34px,4.5vw,62px);color:#fff;margin-bottom:16px;letter-spacing:-.5px;text-shadow:0 2px 20px rgba(0,0,0,.3);}
.hero h1 em{color:var(--gold-md);}
.hero-p{font-size:16px;color:rgba(255,255,255,.7);margin-bottom:34px;max-width:490px;line-height:1.8;}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:48px;}
.hero-stats{display:flex;gap:36px;flex-wrap:wrap;}
.hs-val{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:#fff;}
.hs-lbl{font-size:12px;color:rgba(255,255,255,.5);margin-top:2px;}
.hero-cards-area{position:absolute;right:52px;top:50%;transform:translateY(-50%);width:360px;height:340px;}
.fcard{position:absolute;background:var(--white);border:1px solid var(--border);border-radius:16px;padding:20px 22px;box-shadow:var(--shadow-md);}
.fcard.main{width:270px;top:10px;right:20px;}
.fcard.sm1{width:195px;bottom:20px;right:150px;animation:fl 4s ease-in-out infinite;}
.fcard.sm2{width:185px;top:90px;right:0;animation:fl 4s ease-in-out infinite .8s;}
@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.fc-lbl{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.7px;margin-bottom:5px;}
.fc-val{font-family:'Playfair Display',serif;font-size:21px;font-weight:700;}
.fc-val.green{color:var(--green);}
.fc-val.gold{color:var(--gold);}
.fc-row{display:flex;justify-content:space-between;align-items:center;margin-top:8px;}

/* ── TRUST BAR ── */
.trust{padding:22px 52px;background:var(--white);border-top:1px solid var(--border);border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:center;}
.trust-lbl{font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-right:6px;}
.tbadge{display:flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;border:1px solid var(--border);background:var(--bg);font-size:12px;font-weight:500;color:var(--ink2);}


/* ── PROJECT CARD IMAGE ── */
.pcard-img-wrap{position:relative;overflow:hidden;height:160px;}
.pcard-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .4s ease;}
.pcard:hover .pcard-img-wrap img{transform:scale(1.05);}
.pcard-img-badge{position:absolute;top:12px;right:12px;}

/* ── ASSET SHOWCASE ── */
/* ── ASSET SHOWCASE v2 ── */
.showcase-wrap{margin-top:48px;}
.showcase-hero{position:relative;border-radius:20px 20px 0 0;overflow:hidden;height:460px;cursor:pointer;}
.showcase-hero img{width:100%;height:100%;object-fit:cover;object-position:center 30%;transition:transform .6s ease;}
.showcase-hero:hover img{transform:scale(1.03);}
.showcase-hero-overlay{position:absolute;inset:0;background:linear-gradient(to right,rgba(10,22,40,.82) 0%,rgba(10,22,40,.3) 60%,rgba(10,22,40,.55) 100%);}
.showcase-hero-content{position:absolute;top:50%;transform:translateY(-50%);left:52px;max-width:480px;}
.showcase-hero-tag{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gold-md);margin-bottom:12px;}
.showcase-hero-title{font-family:'Playfair Display',serif;font-size:clamp(28px,3.5vw,44px);font-weight:800;color:#fff;line-height:1.15;margin-bottom:12px;}
.showcase-hero-desc{font-size:15px;color:rgba(255,255,255,.75);line-height:1.7;margin-bottom:22px;max-width:380px;}
.showcase-hero-badge{display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.12);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.2);padding:8px 18px;border-radius:99px;font-size:13px;font-weight:600;color:#fff;}
.showcase-hero-tir{color:var(--gold-md);font-size:16px;font-weight:800;font-family:'Playfair Display',serif;}
.showcase-hero-cta{position:absolute;bottom:28px;right:28px;display:flex;gap:10px;align-items:center;}
.showcase-sub-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
.showcase-sub-panel{position:relative;height:240px;cursor:pointer;overflow:hidden;}
.showcase-sub-panel:first-child{border-radius:0 0 0 20px;}
.showcase-sub-panel:last-child{border-radius:0 0 20px 0;}
.showcase-sub-panel img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease;}
.showcase-sub-panel:hover img{transform:scale(1.07);}
.showcase-sub-overlay{position:absolute;inset:0;background:linear-gradient(180deg,transparent 25%,rgba(10,22,40,.92) 100%);}
.showcase-sub-panel:hover .showcase-sub-overlay{background:linear-gradient(180deg,rgba(10,22,40,.1) 0%,rgba(10,22,40,.88) 100%);}
.showcase-sub-content{position:absolute;bottom:0;left:0;right:0;padding:18px 20px;}
.showcase-sub-title{font-family:'Playfair Display',serif;font-size:17px;font-weight:700;color:#fff;margin-bottom:4px;}
.showcase-sub-desc{font-size:12px;color:rgba(255,255,255,.65);margin-bottom:8px;}
.showcase-sub-row{display:flex;align-items:center;justify-content:space-between;}
.showcase-sub-tir{font-size:13px;font-weight:800;color:var(--gold-md);font-family:'Playfair Display',serif;}
.showcase-sub-arrow{width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.15);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;transition:all .2s;}
.showcase-sub-panel:hover .showcase-sub-arrow{background:var(--gold);border-color:var(--gold);}
@media(max-width:900px){
  .showcase-hero{height:320px;border-radius:16px 16px 0 0;}
  .showcase-hero-content{left:24px;right:24px;max-width:100%;}
  .showcase-hero-title{font-size:24px;}
  .showcase-hero-desc{display:none;}
  .showcase-sub-grid{grid-template-columns:1fr;}
  .showcase-sub-panel{height:180px;}
  .showcase-sub-panel:first-child{border-radius:0;}
  .showcase-sub-panel:last-child{border-radius:0 0 16px 16px;}
}

/* ── PROFILE PHOTO ── */
.avatar-upload{display:flex;flex-direction:column;align-items:center;gap:14px;margin-bottom:24px;}
.avatar-circle{width:96px;height:96px;border-radius:50%;overflow:hidden;border:3px solid var(--gold);box-shadow:0 0 0 4px var(--gold-lt);cursor:pointer;position:relative;display:flex;align-items:center;justify-content:center;background:var(--gold-lt);}
.avatar-circle img{width:100%;height:100%;object-fit:cover;}
.avatar-initials{font-family:"Playfair Display",serif;font-size:32px;font-weight:700;color:var(--gold);}
.avatar-overlay{position:absolute;inset:0;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s;}
.avatar-circle:hover .avatar-overlay{opacity:1;}
.avatar-overlay span{color:#fff;font-size:22px;}
.avatar-upload-hint{font-size:12px;color:var(--muted);text-align:center;}
.nav-avatar{width:32px;height:32px;border-radius:50%;overflow:hidden;border:2px solid var(--gold);cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--gold-lt);}
.nav-avatar img{width:100%;height:100%;object-fit:cover;}
.nav-avatar-txt{font-size:11px;font-weight:700;color:var(--gold);}
.sb-user-info{padding:12px 10px 16px;border-bottom:1px solid var(--border);margin-bottom:8px;display:flex;align-items:center;gap:10px;}
.sb-user-avatar{width:38px;height:38px;border-radius:50%;overflow:hidden;border:2px solid var(--gold-lt);display:flex;align-items:center;justify-content:center;background:var(--gold-lt);flex-shrink:0;}
.sb-user-avatar img{width:100%;height:100%;object-fit:cover;}
.sb-user-name{font-size:13px;font-weight:600;}
.sb-user-email{font-size:11px;color:var(--muted);}
/* ── METRICS BAND ── */
.metrics-band{background:linear-gradient(135deg,#0A1628,#1A3050);padding:60px 52px;display:flex;justify-content:space-around;flex-wrap:wrap;gap:32px;}
.mb-val{font-family:'Playfair Display',serif;font-size:38px;font-weight:700;color:#F5E9C8;}
.mb-lbl{font-size:13px;color:rgba(255,255,255,.45);margin-top:5px;}

/* ── SECTIONS ── */
.sec{padding:88px 52px;}
.sec-alt{background:var(--white);}
.sec-hdr{margin-bottom:48px;}
.sec-hdr-row{display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;margin-bottom:0;}

/* ── STEPS ── */
.steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:48px;position:relative;}
.steps-line{position:absolute;top:42px;left:calc(16.6% + 20px);right:calc(16.6% + 20px);height:1px;background:linear-gradient(90deg,transparent,var(--gold-md),transparent);opacity:.35;}
.step-box{display:flex;flex-direction:column;align-items:center;text-align:center;padding:32px 24px;background:var(--white);border:1px solid var(--border);border-radius:16px;margin:0 8px;box-shadow:var(--shadow-sm);}
.step-num{width:64px;height:64px;border-radius:50%;background:var(--gold-lt);border:2px solid var(--gold-md);display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:22px;font-weight:800;color:var(--gold);margin-bottom:18px;position:relative;z-index:1;box-shadow:0 0 0 6px rgba(212,168,75,.07);}
.step-ico{font-size:20px;margin-bottom:8px;}
.step-box h4{font-size:16px;margin-bottom:7px;}
.step-box p{font-size:13px;color:var(--muted);line-height:1.6;}

/* ── PROJECT CARDS ── */
.cards-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(256px,1fr));gap:18px;}
.pcard{background:var(--white);border:1px solid var(--border);border-radius:18px;overflow:hidden;cursor:pointer;transition:all .25s;box-shadow:var(--shadow-sm);}
.pcard:hover{box-shadow:var(--shadow-lg);transform:translateY(-4px);}
.pcard-stripe{height:5px;}
.pcard-stripe.autos{background:linear-gradient(90deg,#2563EB,#60A5FA);}
.pcard-stripe.solar{background:linear-gradient(90deg,#D97706,#FCD34D);}
.pcard-stripe.re{background:linear-gradient(90deg,#B8862A,#D4A84B);}
.pcard-stripe.infra{background:linear-gradient(90deg,#16A06B,#4ADE80);}
.pcard-body{padding:22px 24px;}
.pcard-ico{font-size:28px;margin-bottom:12px;}
.pcard h3{font-size:17px;margin-bottom:5px;}
.pcard-desc{font-size:13px;color:var(--muted);line-height:1.55;margin-bottom:18px;}
.pcard-metrics{display:flex;gap:20px;margin-bottom:16px;}
.pm-val{font-family:'Playfair Display',serif;font-size:21px;font-weight:700;}
.pm-val.green{color:var(--green);}
.pm-val.gold{color:var(--gold);}
.pm-key{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;margin-top:1px;}
.pcard-bar{height:5px;background:var(--border);border-radius:99px;overflow:hidden;margin-bottom:6px;}
.pcard-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,var(--gold),var(--gold-md));transition:width 1.2s ease;}
.pcard-barlbl{display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-bottom:3px;}
.pcard-foot{display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid var(--border);margin-top:4px;}

/* ── SIMULATOR ── */
.sim-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:start;margin-top:44px;}
.sim-box{background:var(--white);border:1px solid var(--border);border-radius:20px;padding:32px;box-shadow:var(--shadow-sm);}
.sim-lbl{font-size:13px;font-weight:600;color:var(--ink2);margin-bottom:8px;}
.sim-big{font-family:'Playfair Display',serif;font-size:36px;font-weight:700;color:var(--gold);margin-bottom:10px;}
input[type=range]{width:100%;-webkit-appearance:none;height:5px;background:var(--border);border-radius:99px;outline:none;margin-bottom:26px;}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;background:var(--gold);border-radius:50%;cursor:pointer;border:3px solid #fff;box-shadow:0 2px 8px rgba(184,134,42,.4);}
.sim-opts{display:flex;flex-direction:column;gap:9px;}
.sim-opt{display:flex;align-items:center;justify-content:space-between;padding:13px 16px;border-radius:12px;border:1.5px solid var(--border);cursor:pointer;transition:all .15s;background:var(--bg);}
.sim-opt:hover,.sim-opt.on{border-color:var(--gold);background:var(--gold-lt);}
.sim-opt-name{font-size:14px;font-weight:600;}
.sim-opt-sub{font-size:11px;color:var(--muted);}
.sim-tir{font-size:14px;font-weight:700;color:var(--green);}
.result-box{background:linear-gradient(135deg,#FFFBF3,#FFF5E0);border:1.5px solid rgba(184,134,42,.2);border-radius:20px;padding:32px;box-shadow:var(--shadow-sm);}
.res-lbl{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:6px;}
.res-big{font-family:'Playfair Display',serif;font-size:50px;font-weight:700;color:var(--green);line-height:1;}
.res-period{font-size:14px;color:var(--muted);margin-top:5px;margin-bottom:22px;}
.res-row{display:flex;justify-content:space-between;font-size:14px;margin-bottom:10px;}
.res-row span:first-child{color:var(--muted);}
.res-row span:last-child{font-weight:600;}
.res-note{font-size:11px;color:var(--muted);line-height:1.6;padding:12px;border-radius:8px;background:rgba(0,0,0,.03);border:1px solid var(--border);margin-top:16px;}

/* ── EDU GRID ── */
.edu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:44px;}
.edu-card{background:var(--bg);border:1px solid var(--border);border-radius:16px;padding:26px;transition:all .2s;cursor:pointer;}
.edu-card:hover{background:var(--white);box-shadow:var(--shadow-md);transform:translateY(-2px);}
.edu-ico{font-size:26px;margin-bottom:12px;}
.edu-card h4{font-size:16px;margin-bottom:6px;}
.edu-card p{font-size:13px;color:var(--muted);line-height:1.6;}
.edu-link{display:inline-flex;align-items:center;gap:5px;margin-top:14px;font-size:13px;font-weight:600;color:var(--gold);}

/* ── FAQ ── */
.faq-list{max-width:700px;margin:44px auto 0;display:flex;flex-direction:column;gap:10px;}
.faq-item{background:var(--white);border:1px solid var(--border);border-radius:13px;overflow:hidden;box-shadow:var(--shadow-sm);}
.faq-q{display:flex;justify-content:space-between;align-items:center;padding:18px 22px;cursor:pointer;font-weight:600;font-size:15px;transition:background .15s;}
.faq-q:hover{background:var(--bg);}
.faq-arr{font-size:16px;color:var(--gold);transition:transform .2s;}
.faq-arr.open{transform:rotate(180deg);}
.faq-a{padding:0 22px 18px;font-size:14px;color:var(--muted);line-height:1.7;border-top:1px solid var(--border);}

/* ── TESTIMONIALS ── */
.test-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:44px;}
.tcard{background:var(--white);border:1px solid var(--border);border-radius:16px;padding:26px;box-shadow:var(--shadow-sm);}
.tcard-stars{color:var(--gold);font-size:13px;margin-bottom:10px;letter-spacing:2px;}
.tcard-text{font-size:14px;color:var(--ink2);line-height:1.7;margin-bottom:14px;font-style:italic;}
.tcard-avatar{width:36px;height:36px;border-radius:50%;background:var(--gold-lt);display:flex;align-items:center;justify-content:center;font-size:15px;}
.tcard-name{font-size:14px;font-weight:600;}
.tcard-loc{font-size:11px;color:var(--muted);}

/* ── CTA BAND ── */
.cta-band{background:linear-gradient(135deg,#FFFBF3,#FFF0D4);border:1px solid rgba(184,134,42,.2);border-radius:22px;margin:0 52px 88px;padding:58px 66px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:28px;box-shadow:var(--shadow-md);}
.cta-band h2{font-size:clamp(22px,3vw,34px);max-width:440px;}
.cta-band p{font-size:15px;color:var(--muted);margin-top:8px;max-width:400px;}
.cta-btns{display:flex;gap:12px;flex-wrap:wrap;}

/* ── FOOTER ── */
footer{background:var(--ink);padding:60px 52px 30px;}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:36px;margin-bottom:44px;}
.footer-desc{font-size:13px;color:rgba(255,255,255,.4);line-height:1.7;margin-top:12px;max-width:240px;}
.footer-col h5{font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,.3);margin-bottom:16px;font-weight:600;}
.footer-col a{display:block;font-size:13px;color:rgba(255,255,255,.45);margin-bottom:9px;cursor:pointer;transition:color .15s;}
.footer-col a:hover{color:#fff;}
.footer-divider{border:none;border-top:1px solid rgba(255,255,255,.08);margin-bottom:22px;}
.footer-bottom{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:14px;}
.footer-legal{font-size:11px;color:rgba(255,255,255,.3);line-height:1.7;max-width:580px;}
.footer-copy{font-size:12px;color:rgba(255,255,255,.25);}

/* ── FORMS (Login / Register / KYC) ── */
.auth-page{min-height:100vh;padding-top:66px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#FFFBF4,#F0F5FF);}
.auth-card{background:var(--white);border:1px solid var(--border);border-radius:24px;padding:48px;width:100%;max-width:460px;box-shadow:var(--shadow-lg);}
.auth-card h2{font-size:26px;margin-bottom:6px;}
.auth-card p{font-size:14px;color:var(--muted);margin-bottom:28px;}
.form-group{margin-bottom:18px;}
.form-group label{display:block;font-size:13px;font-weight:600;color:var(--ink2);margin-bottom:6px;}
.form-input{width:100%;padding:11px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:14px;font-family:'Outfit',sans-serif;color:var(--ink);background:var(--bg);transition:border .15s;outline:none;}
.form-input:focus{border-color:var(--gold);background:var(--white);}
.form-select{width:100%;padding:11px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:14px;font-family:'Outfit',sans-serif;color:var(--ink);background:var(--bg);outline:none;cursor:pointer;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.form-note{font-size:12px;color:var(--muted);line-height:1.6;margin-top:4px;}
.auth-divider{text-align:center;font-size:13px;color:var(--muted);margin:18px 0;}
.auth-link{color:var(--gold);font-weight:600;cursor:pointer;}
.form-check{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--muted);}
.form-check input{margin-top:3px;accent-color:var(--gold);}
.step-progress{display:flex;gap:8px;margin-bottom:28px;}
.sp-dot{height:4px;flex:1;border-radius:99px;background:var(--border);}
.sp-dot.done{background:var(--gold);}
.sp-dot.active{background:var(--gold-md);}
.success-icon{text-align:center;font-size:56px;margin-bottom:16px;}

/* ── INNER PAGE HEADER ── */
.inner-hero{background:linear-gradient(135deg,#FFFBF4,#F0F5FF);padding:60px 52px 48px;border-bottom:1px solid var(--border);}
.inner-hero h1{font-size:clamp(28px,4vw,44px);margin-bottom:10px;}
.inner-hero p{font-size:16px;color:var(--muted);max-width:560px;}
.breadcrumb{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--muted);margin-bottom:16px;}
.breadcrumb span{cursor:pointer;transition:color .15s;}
.breadcrumb span:hover{color:var(--gold);}

/* ── PROJECT DETAIL ── */
.proj-detail-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:36px;align-items:start;}
.proj-main{background:var(--white);border:1px solid var(--border);border-radius:20px;padding:36px;box-shadow:var(--shadow-sm);}
.proj-sidebar{display:flex;flex-direction:column;gap:18px;}
.proj-invest-box{background:linear-gradient(135deg,#FFFBF3,#FFF5E0);border:1.5px solid rgba(184,134,42,.2);border-radius:20px;padding:28px;box-shadow:var(--shadow-sm);}
.proj-doc-box{background:var(--white);border:1px solid var(--border);border-radius:16px;padding:22px;box-shadow:var(--shadow-sm);}
.doc-item{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);font-size:14px;cursor:pointer;transition:color .15s;}
.doc-item:last-child{border-bottom:none;}
.doc-item:hover{color:var(--gold);}
.proj-metric-row{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:20px 0;}
.proj-metric{background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:16px;text-align:center;}
.proj-metric-val{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;}
.proj-metric-lbl{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-top:3px;}

/* ── DASHBOARD ── */
.dash-layout{display:flex;min-height:100vh;padding-top:66px;}
.sidebar{width:244px;background:var(--white);border-right:1px solid var(--border);padding:24px 14px;display:flex;flex-direction:column;position:sticky;top:66px;height:calc(100vh - 66px);overflow-y:auto;flex-shrink:0;}
.sb-sec{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);padding:0 10px;margin:14px 0 5px;}
.sb-item{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:10px;cursor:pointer;font-size:14px;font-weight:500;color:var(--muted);transition:all .15s;margin-bottom:2px;border:none;background:none;font-family:'Outfit',sans-serif;width:100%;text-align:left;}
.sb-item:hover{background:var(--bg);color:var(--ink);}
.sb-item.on{background:var(--gold-lt);color:var(--gold);font-weight:600;}
.sb-ico{font-size:16px;width:20px;text-align:center;}
.sb-badge{margin-left:auto;font-size:10px;font-weight:700;background:var(--green);color:#fff;padding:1px 7px;border-radius:99px;}
.dash-main{flex:1;padding:32px 38px;overflow-y:auto;background:var(--bg);}
.dash-topbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-wrap:wrap;gap:14px;}
.dash-hello h2{font-size:22px;}
.dash-hello p{font-size:13px;color:var(--muted);margin-top:2px;}
.kpi-row{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:22px;}
.kcard{background:var(--white);border:1px solid var(--border);border-radius:14px;padding:20px;box-shadow:var(--shadow-sm);}
.kcard-ico{font-size:20px;margin-bottom:9px;}
.kcard-lbl{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);margin-bottom:4px;}
.kcard-val{font-family:'Playfair Display',serif;font-size:24px;font-weight:700;}
.kcard-chg{font-size:12px;font-weight:600;color:var(--green);margin-top:4px;}
.charts-row{display:grid;grid-template-columns:1fr 1.6fr;gap:18px;margin-bottom:22px;}
.chart-box{background:var(--white);border:1px solid var(--border);border-radius:14px;padding:22px;box-shadow:var(--shadow-sm);}
.cbox-title{font-size:16px;font-family:'Playfair Display',serif;margin-bottom:3px;}
.cbox-sub{font-size:12px;color:var(--muted);margin-bottom:18px;}
.donut-wrap{display:flex;justify-content:center;}
.legend{margin-top:16px;display:flex;flex-direction:column;gap:8px;}
.leg-row{display:flex;align-items:center;gap:8px;font-size:13px;}
.leg-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
.leg-name{flex:1;color:var(--muted);}
.leg-pct{font-weight:700;}
.leg-val{font-size:11px;color:var(--muted);margin-left:3px;}
.bar-chart{display:flex;align-items:flex-end;gap:10px;height:150px;}
.bar-col{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;}
.bar-v{font-size:10px;font-weight:700;color:var(--gold);}
.bar{width:100%;border-radius:5px 5px 0 0;background:linear-gradient(180deg,var(--gold),rgba(212,168,75,.3));}
.bar-m{font-size:10px;color:var(--muted);}
.pos-box{background:var(--white);border:1px solid var(--border);border-radius:14px;padding:22px;box-shadow:var(--shadow-sm);margin-bottom:20px;}
.pos-hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px;}
table{width:100%;border-collapse:collapse;}
th{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.4px;color:var(--muted);padding:9px 12px;text-align:left;border-bottom:1px solid var(--border);}
td{padding:13px 12px;font-size:14px;border-bottom:1px solid rgba(0,0,0,.03);}
tr:last-child td{border-bottom:none;}
tr:hover td{background:var(--bg);}
.pos-nm{font-weight:600;}
.pos-tkr{font-size:11px;color:var(--muted);}
.hash-btn{font-size:11px;color:var(--blue);background:var(--blue-lt);border:1px solid rgba(37,99,235,.2);padding:4px 10px;border-radius:6px;cursor:pointer;font-family:'Outfit',sans-serif;transition:all .15s;}
.hash-btn:hover{background:rgba(37,99,235,.2);}
.tx-row{display:flex;align-items:center;justify-content:space-between;padding:13px 0;border-bottom:1px solid var(--border);font-size:14px;}
.tx-row:last-child{border-bottom:none;}
.tx-badge{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;}
.tx-badge.dep{background:var(--green-lt);}
.tx-badge.ret{background:var(--blue-lt);}
.tx-title{font-weight:600;}
.tx-date{font-size:11px;color:var(--muted);}
.tx-amt.pos{color:var(--green);font-family:'Playfair Display',serif;font-size:15px;font-weight:700;}
.tx-amt.neg{color:var(--ink);font-family:'Playfair Display',serif;font-size:15px;font-weight:700;}
.notify-banner{display:flex;align-items:center;justify-content:space-between;background:var(--gold-lt);border:1.5px solid rgba(184,134,42,.25);border-radius:13px;padding:16px 22px;margin-bottom:20px;flex-wrap:wrap;gap:10px;}
.kyc-banner{display:flex;align-items:center;justify-content:space-between;background:var(--blue-lt);border:1px solid rgba(37,99,235,.2);border-radius:12px;padding:14px 22px;margin-bottom:18px;flex-wrap:wrap;gap:10px;}
.profile-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
.profile-card{background:var(--white);border:1px solid var(--border);border-radius:14px;padding:24px;box-shadow:var(--shadow-sm);}
.profile-card h4{font-size:15px;margin-bottom:16px;padding-bottom:10px;border-bottom:1px solid var(--border);}
.profile-row{display:flex;justify-content:space-between;font-size:14px;padding:8px 0;border-bottom:1px solid rgba(0,0,0,.04);}
.profile-row:last-child{border-bottom:none;}
.profile-row span:first-child{color:var(--muted);}
.profile-row span:last-child{font-weight:500;}

/* ── INSTITUTIONAL ── */
.inst-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:start;}
.inst-box{background:var(--white);border:1px solid var(--border);border-radius:18px;padding:32px;box-shadow:var(--shadow-sm);}
.team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:44px;}
.team-card{background:var(--white);border:1px solid var(--border);border-radius:16px;padding:26px;text-align:center;box-shadow:var(--shadow-sm);}
.team-avatar{width:60px;height:60px;border-radius:50%;background:var(--gold-lt);display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto 12px;}
.team-name{font-size:16px;font-weight:700;font-family:'Playfair Display',serif;}
.team-role{font-size:13px;color:var(--muted);margin-top:3px;}
.timeline{display:flex;flex-direction:column;gap:0;margin-top:32px;}
.tl-item{display:flex;gap:20px;padding-bottom:28px;position:relative;}
.tl-item::before{content:'';position:absolute;left:11px;top:24px;bottom:0;width:1px;background:var(--border);}
.tl-item:last-child::before{display:none;}
.tl-dot{width:24px;height:24px;border-radius:50%;background:var(--gold-lt);border:2px solid var(--gold);flex-shrink:0;margin-top:2px;}
.tl-year{font-size:12px;font-weight:700;color:var(--gold);margin-bottom:4px;}
.tl-text{font-size:14px;color:var(--muted);}

/* ── TOAST ── */
.toast{position:fixed;bottom:30px;right:30px;background:var(--ink);color:#fff;padding:14px 22px;border-radius:12px;font-size:14px;font-weight:500;z-index:999;box-shadow:var(--shadow-lg);display:flex;align-items:center;gap:10px;animation:slideup .3s ease;}
@keyframes slideup{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}

/* ── MODAL ── */
.modal-bg{position:fixed;inset:0;background:rgba(10,22,40,.45);z-index:400;display:flex;align-items:center;justify-content:center;padding:20px;}
.modal{background:var(--white);border-radius:22px;padding:40px;width:100%;max-width:500px;box-shadow:var(--shadow-lg);position:relative;}
.modal-close{position:absolute;top:16px;right:16px;width:32px;height:32px;border-radius:50%;border:1px solid var(--border);background:var(--bg);cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;}

@media(max-width:900px){
  .nav{padding:0 18px;}
  .nav-links{display:none;}
  .hero,.sec,.inner-hero{padding:50px 20px;}
  .hero-cards-area,.hero-ring{display:none;}
  .sim-grid,.charts-row,.edu-grid,.test-grid,.proj-detail-grid,.inst-grid,.team-grid,.profile-grid,.footer-grid{grid-template-columns:1fr;}
  .steps-grid{grid-template-columns:1fr;gap:10px;}
  .steps-line{display:none;}
  .kpi-row{grid-template-columns:repeat(2,1fr);}
  .cta-band{margin:0 16px 64px;padding:36px 24px;}
  .metrics-band{padding:44px 20px;}
  footer{padding:44px 20px 24px;}
  .sidebar{display:none;}
  .dash-main{padding:20px;}
  .trust{padding:18px 20px;}
}
`;

/* ─── DATA ─── */
const PROJECTS = [
  { id: "autos", stripe: "autos", ico: "🚗", name: "Flota de Autos", shortDesc: "Fideicomiso vehicular con retornos mensuales por alquiler y leasing corporativo.", fullDesc: "El Fideicomiso de Flota Vehicular de Nexxum S.A. invierte en la adquisición y gestión de vehículos destinados al alquiler corporativo y leasing de largo plazo. Los activos son valuados trimestralmente por tasadores independientes. Los contratos de arrendamiento con empresas ancla garantizan flujos de caja predecibles y verificables.", tir: 15, plazo: "Corto", riskLabel: "Bajo", riskChip: "chip-green", minInv: 500, captacion: 72, tokens: "72,000 / 100,000", fechaCierre: "31 Dic 2025", docs: ["Contrato de fideicomiso", "Informe de tasación vehicular", "Estados financieros Q1 2025", "Whitepaper técnico"] },
  { id: "solar", stripe: "solar", ico: "☀️", name: "Energía Solar", shortDesc: "Parques fotovoltaicos con flujos de caja predecibles e impacto ambiental certificado.", fullDesc: "El Fideicomiso Solar Nexxum financia la construcción y operación de parques fotovoltaicos conectados a la red. Los contratos PPA (Power Purchase Agreement) de 10-15 años con distribuidoras eléctricas aseguran ingresos estables. El proyecto cuenta con certificado de impacto ambiental clase A y genera créditos de carbono comercializables.", tir: 12, plazo: "Mediano", riskLabel: "Moderado", riskChip: "chip-gold", minInv: 1000, captacion: 45, tokens: "45,000 / 100,000", fechaCierre: "30 Jun 2026", docs: ["Contrato PPA solar", "Evaluación de impacto ambiental", "Informe técnico ingeniería", "Proyección financiera 15 años"] },
  { id: "re", stripe: "re", ico: "🏢", name: "Real Estate Alquiler", shortDesc: "Tokens sobre unidades residenciales y comerciales premium con distribución de rentas.", fullDesc: "Participación en un portfolio de inmuebles residenciales y comerciales de primer nivel en zonas premium. Los alquileres se actualizan según índices oficiales y el portfolio está asegurado contra vacancia. La administración profesional incluye gestión de inquilinos, mantenimiento y cobranza.", tir: 18, plazo: "Mediano", riskLabel: "Comercial", riskChip: "chip-gold", minInv: 1000, captacion: 88, tokens: "88,000 / 100,000", fechaCierre: "15 Mar 2026", docs: ["Escritura fideicomiso inmobiliario", "Tasación portfolio", "Due diligence jurídico", "Histórico de rentas"] },
  { id: "infra", stripe: "infra", ico: "⚡", name: "Infraestructura Energética", shortDesc: "Generación distribuida con contratos de largo plazo con empresas ancla.", fullDesc: "Inversión en infraestructura de generación energética distribuida: plantas de cogeneración, subestaciones y redes de distribución privadas. Los contratos de suministro de largo plazo con empresas industriales de primera línea garantizan demanda asegurada durante toda la vida del proyecto.", tir: 14, plazo: "Largo", riskLabel: "Bajo", riskChip: "chip-green", minInv: 2000, captacion: 31, tokens: "31,000 / 100,000", fechaCierre: "31 Mar 2027", docs: ["Marco regulatorio energético", "Contratos de suministro", "Certificación técnica", "Plan de mantenimiento"] },
];

const FAQS = [
  { q: "¿Qué es un fideicomiso y cómo protege mi inversión?", a: "Es una estructura legal que separa patrimonialmente los activos de Nexxum S.A., protegiéndolos para los inversores. Tu capital queda blindado ante contingencias de la empresa." },
  { q: "¿Desde qué monto puedo comenzar a invertir?", a: "El mínimo varía por fideicomiso: desde USD 500 para Flota de Autos hasta USD 2.000 para Infraestructura. El simulador te permite explorar cada opción." },
  { q: "¿Cómo se acreditan mis rendimientos?", a: "Mensual o al vencimiento según el fideicomiso, directamente en tu cuenta registrada. Podés elegir USD, stablecoins USDT/USDC o reinversión automática." },
  { q: "¿Está regulado Nexxum S.A.?", a: "Sí. Operamos bajo marcos legales de fideicomisos ordinarios. Cada token tiene un hash verificable en la red Polygon. Desde tu dashboard podés ver y auditar tu contrato en tiempo real." },
  { q: "¿Qué pasa si quiero salir antes del vencimiento?", a: "Algunos fideicomisos contemplan mercado secundario para transferir tokens. Otros tienen período de lock-up. Revisá la ficha de cada proyecto antes de invertir." },
];

/* ─── HELPERS ─── */
const fmt = (n, d = 2) => n.toLocaleString("es-AR", { minimumFractionDigits: d, maximumFractionDigits: d });

const Donut = ({ data }) => {
  const R = 54, cx = 70, cy = 70, sw = 18, circ = 2 * Math.PI * R;
  let off = 0;
  return (
    <div className="donut-wrap">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx={cx} cy={cy} r={R} fill="none" stroke="#EEF0F5" strokeWidth={sw} />
        {data.map((d, i) => { const dash = (d.pct / 100) * circ; const el = <circle key={i} cx={cx} cy={cy} r={R} fill="none" stroke={d.color} strokeWidth={sw} strokeDasharray={`${dash} ${circ - dash}`} strokeDashoffset={-off} style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }} />; off += dash; return el; })}
        <text x={cx} y={cy - 6} textAnchor="middle" fill="#6B7FA3" fontSize="10" fontFamily="Outfit">Total</text>
        <text x={cx} y={cy + 13} textAnchor="middle" fill="#B8862A" fontSize="15" fontWeight="bold" fontFamily="Playfair Display">$42.5K</text>
      </svg>
    </div>
  );
};

const BarChart = ({ bars }) => {
  const max = Math.max(...bars.map(b => b.v));
  return (
    <div className="bar-chart">
      {bars.map((b, i) => (
        <div key={i} className="bar-col">
          <span className="bar-v">${b.v}</span>
          <div className="bar" style={{ height: `${(b.v / max) * 125}px` }} />
          <span className="bar-m">{b.m}</span>
        </div>
      ))}
    </div>
  );
};

const Toast = ({ msg }) => msg ? <div className="toast">✅ {msg}</div> : null;

/* ─── NAVBAR ─── */
function Nav({ page, setPage, loggedIn, setLoggedIn, lang, setLang, t }) {
  const links = [
    { id: "home", label: t("nav_home") },
    { id: "projects", label: t("nav_projects") },
    { id: "simulator", label: t("nav_simulator") },
    { id: "education", label: t("nav_education") },
    { id: "institutional", label: t("nav_institutional") },
  ];
  return (
    <nav className="nav">
      <div className="logo" onClick={() => setPage("home")}>Nex<em>xum</em></div>
      <div className="nav-links">
        {links.map(l => (
          <button key={l.id} className={`nav-link ${page === l.id ? "active" : ""}`} onClick={() => setPage(l.id)}>{l.label}</button>
        ))}
      </div>
      <div className="nav-r">
        <div style={{position:"relative",display:"inline-block"}}>
          <select value={lang} onChange={e=>setLang(e.target.value)}
            style={{appearance:"none",background:"transparent",border:"1.5px solid var(--border)",
              borderRadius:"99px",padding:"6px 28px 6px 12px",fontSize:12,fontWeight:600,
              color:"var(--muted)",cursor:"pointer",fontFamily:"'Outfit',sans-serif",
              backgroundRepeat:"no-repeat",backgroundPosition:"right 8px center",outline:"none"}}>
            <option value="es">🇦🇷 ES</option>
            <option value="en">🇺🇸 EN</option>
            <option value="fr">🇫🇷 FR</option>
            <option value="pt">🇧🇷 PT</option>
          </select>
        </div>
        {loggedIn
          ? <>
              <button className={`btn btn-ghost btn-sm ${page === "dashboard" ? "" : ""}`} onClick={() => setPage("dashboard")}>Mi cuenta</button>
              <button className="btn btn-ghost btn-sm" onClick={() => { setLoggedIn(false); setPage("home"); }}>Salir</button>
            </>
          : <>
              <button className="btn btn-ghost btn-sm" onClick={() => setPage("login")}>Iniciar sesión</button>
              <button className="btn btn-gold btn-sm" onClick={() => setPage("register")}>Crear cuenta →</button>
            </>
        }
      </div>
    </nav>
  );
}

/* ─── FOOTER ─── */
function Footer({ setPage }) {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div style={{ color: "#F5E9C8", fontFamily: "'Playfair Display',serif", fontSize: 21, fontWeight: 800 }}>Nex<span style={{ color: "#D4A84B" }}>xum</span></div>
          <p className="footer-desc">Plataforma de tokenización de activos reales. Conectamos la economía real con blockchain para inversores de todo el mundo.</p>
        </div>
        {[
          { h: "Plataforma", ls: [["projects","Proyectos"],["simulator","Simulador"],["register","Crear cuenta"],["login","Acceder"]] },
          { h: "Institucional", ls: [["institutional","Quiénes somos"],["education","Educación"],["institutional","Whitepaper"],["institutional","Auditorías"]] },
          { h: "Soporte", ls: [["education","FAQs"],["institutional","Términos y condiciones"],["institutional","Privacidad"],["institutional","Contacto"]] },
        ].map((c, i) => (
          <div key={i} className="footer-col">
            <h5>{c.h}</h5>
            {c.ls.map(([pg, lbl], j) => <a key={j} onClick={() => setPage(pg)}>{lbl}</a>)}
          </div>
        ))}
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p className="footer-legal">Nexxum S.A. opera bajo las estructuras legales de fideicomisos ordinarios. Los activos digitales están respaldados por contratos inteligentes en la red Polygon. Los valores mostrados son estimaciones y no constituyen garantía de retorno futuro.</p>
        <span className="footer-copy">© 2025 Nexxum S.A.</span>
      </div>
    </footer>
  );
}

/* ══════════════════════════════
   PAGE: HOME
══════════════════════════════ */
function HomePage({ setPage, fills, t, lang }) {
  const [faq, setFaq] = useState(null);
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-bg-overlay" />
        <div className="hero-deco" />
        <div className="hero-content">
          <div className="hero-badge"><span className="live-dot" />{t("hero_badge")}</div>
          <h1>{t("hero_h1a")} <em>{t("hero_h1b")}</em> {t("hero_h1c")}</h1>
          <p className="hero-p">{t("hero_p")}</p>
          <div className="hero-cta">
            <button className="btn btn-gold btn-lg" onClick={() => setPage("projects")}>{t("hero_cta1")}</button>
            <button className="btn btn-outline btn-lg" style={{borderColor:"rgba(255,255,255,.4)",color:"#fff"}} onClick={() => setPage("simulator")}>{t("hero_cta2")}</button>
          </div>
          <div className="hero-stats">
            {[["$12.4M",t("hero_s1")],["847",t("hero_s2")],["15%",t("hero_s3")]].map(([v,l],i) => (
              <div key={i}><div className="hs-val">{v}</div><div className="hs-lbl">{l}</div></div>
            ))}
          </div>
        </div>
        <div className="hero-cards-area">
          <div className="fcard main"><div className="fc-lbl">Portafolio activo</div><div className="fc-val gold">$24,750.00</div><div className="fc-row"><span style={{fontSize:12,color:"var(--muted)"}}>Rendimiento acum.</span><span className="chip chip-green">+18.3%</span></div></div>
          <div className="fcard sm1"><div className="fc-lbl">Este mes</div><div className="fc-val green">+$390.12</div><div style={{fontSize:11,color:"var(--muted)",marginTop:6}}>Próx. pago: 05 Jun</div></div>
          <div className="fcard sm2"><div className="fc-lbl">Tokens activos</div><div className="fc-val" style={{fontSize:22}}>3</div><span className="chip chip-gold" style={{marginTop:8}}>Diversificado</span></div>
        </div>
      </section>

      {/* TRUST */}
      <div className="trust">
        <span className="trust-lbl">{t("trust_label")}</span>
        {[["⬡","Red Polygon"],["🛡️","KYC Verificado"],["⚖️","Fideicomiso legal"],["🔍","Auditoría independiente"],["💱","USDT / USDC"],["🌐","SWIFT / ACH"]].map(([ico,lbl],i) => (
          <div key={i} className="tbadge"><span>{ico}</span>{lbl}</div>
        ))}
      </div>

      {/* METRICS */}
      <div className="metrics-band">
        {[["$12.4M+","Capital tokenizado"],["847","Inversores · 18 países"],["3","Tipos de activos"],["100%","Trazabilidad blockchain"],["15%","TIR promedio histórica"]].map(([v,l],i) => (
          <div key={i} style={{textAlign:"center"}}><div className="mb-val">{v}</div><div className="mb-lbl">{l}</div></div>
        ))}
      </div>

      {/* HOW */}
      <section className="sec sec-alt">
        <div className="sec-hdr" style={{textAlign:"center"}}>
          <div className="tag">{t("how_tag")}</div>
          <h2 className="section-title">{t("how_title")}</h2>
          <p className="section-sub" style={{margin:"0 auto"}}>{t("how_sub")}</p>
        </div>
        <div className="steps-grid"><div className="steps-line" />
          {[
            {n:"01",ico:"👤",t:"Creá tu cuenta",d:"Proceso KYC 100% digital en minutos. Identidad verificada, acceso inmediato al catálogo."},
            {n:"02",ico:"🔑",t:"Elegí y tokenizá",d:"Seleccioná el fideicomiso. Invertí via transferencia bancaria, SWIFT o stablecoins USDT/USDC."},
            {n:"03",ico:"💸",t:"Recibí ganancias",d:"Monitoreá rendimientos en tiempo real desde tu dashboard. Retirá según las condiciones del fideicomiso."},
          ].map((s,i) => (
            <div key={i} className="step-box"><div className="step-num">{s.n}</div><div className="step-ico">{s.ico}</div><h4>{s.t}</h4><p>{s.d}</p></div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:40}}>
          <button className="btn btn-gold btn-lg" onClick={() => setPage("register")}>{t("how_cta")}</button>
        </div>
      </section>

      {/* ASSET SHOWCASE v2 */}
      <section className="sec sec-alt">
        <div className="sec-hdr" style={{textAlign:"center"}}>
          <div className="tag">{t("showcase_tag")}</div>
          <h2 className="section-title">{t("showcase_title")}</h2>
          <p className="section-sub" style={{margin:"0 auto"}}>{t("showcase_sub")}</p>
        </div>
        <div className="showcase-wrap">

          {/* HERO PANEL — Real Estate (bigger, most impactful) */}
          <div className="showcase-hero" onClick={() => setPage("project-re")}>
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=90"
              alt="Real Estate"
              loading="lazy"
            />
            <div className="showcase-hero-overlay" />
            <div className="showcase-hero-content">
              <div className="showcase-hero-tag">🏢 Real Estate Alquiler</div>
              <h2 className="showcase-hero-title">Propiedades premium que trabajan para vos</h2>
              <p className="showcase-hero-desc">Participá en un portfolio de inmuebles residenciales y comerciales de primer nivel. Rentas actualizadas, administración profesional, token verificable en blockchain.</p>
              <div className="showcase-hero-badge">
                <span>TIR estimada</span>
                <span className="showcase-hero-tir">18% anual</span>
                <span style={{color:"rgba(255,255,255,.4)"}}>·</span>
                <span>Riesgo Comercial</span>
              </div>
            </div>
            <div className="showcase-hero-cta">
              <button className="btn btn-gold btn-sm" onClick={e=>{e.stopPropagation();setPage("project-re");}}>
                Ver proyecto →
              </button>
              <button className="btn btn-sm" style={{background:"rgba(255,255,255,.12)",color:"#fff",border:"1px solid rgba(255,255,255,.25)",backdropFilter:"blur(6px)"}} onClick={e=>{e.stopPropagation();setPage("simulator");}}>
                Simular inversión
              </button>
            </div>
          </div>

          {/* SUB GRID — 3 panels */}
          <div className="showcase-sub-grid">

            {/* Flota de Autos */}
            <div className="showcase-sub-panel" onClick={() => setPage("project-autos")}>
              <img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=88"
                alt="Flota de Autos"
                loading="lazy"
                style={{objectPosition:"center 60%"}}
              />
              <div className="showcase-sub-overlay" />
              <div className="showcase-sub-content">
                <div className="showcase-sub-title">🚗 Flota de Autos</div>
                <div className="showcase-sub-desc">Retornos mensuales por leasing corporativo</div>
                <div className="showcase-sub-row">
                  <span className="showcase-sub-tir">15% TIR anual</span>
                  <div className="showcase-sub-arrow">→</div>
                </div>
              </div>
            </div>

            {/* Energía Solar */}
            <div className="showcase-sub-panel" onClick={() => setPage("project-solar")}>
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=900&q=88"
                alt="Energía Solar"
                loading="lazy"
                style={{objectPosition:"center 40%"}}
              />
              <div className="showcase-sub-overlay" />
              <div className="showcase-sub-content">
                <div className="showcase-sub-title">☀️ Energía Solar</div>
                <div className="showcase-sub-desc">Parques fotovoltaicos con impacto ambiental certificado</div>
                <div className="showcase-sub-row">
                  <span className="showcase-sub-tir">12% TIR anual</span>
                  <div className="showcase-sub-arrow">→</div>
                </div>
              </div>
            </div>

            {/* Infraestructura Energética */}
            <div className="showcase-sub-panel" onClick={() => setPage("project-infra")}>
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900&q=88"
                alt="Infraestructura Energética"
                loading="lazy"
                style={{objectPosition:"center 50%"}}
              />
              <div className="showcase-sub-overlay" />
              <div className="showcase-sub-content">
                <div className="showcase-sub-title">⚡ Infraestructura Energética</div>
                <div className="showcase-sub-desc">Contratos PPA de largo plazo con empresas ancla</div>
                <div className="showcase-sub-row">
                  <span className="showcase-sub-tir">14% TIR anual</span>
                  <div className="showcase-sub-arrow">→</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="sec">
        <div className="sec-hdr sec-hdr-row">
          <div><div className="tag">{t("proj_tag")}</div><h2 className="section-title">{t("proj_title")}</h2><p className="section-sub">{t("proj_sub")}</p></div>
          <button className="btn btn-outline" onClick={() => setPage("projects")}>{t("proj_seeall")}</button>
        </div>
        <div className="cards-grid">
          {PROJECTS.map((p,i) => (
            <div key={i} className="pcard" onClick={() => setPage("project-"+p.id)}>
              <div className={`pcard-stripe ${p.stripe}`} />
              <div className="pcard-body">
                <div className="pcard-ico">{p.ico}</div>
                <h3>{p.name}</h3>
                <p className="pcard-desc">{p.shortDesc}</p>
                <div className="pcard-metrics">
                  <div><div className="pm-val green">{p.tir}%</div><div className="pm-key">TIR Est.</div></div>
                  <div><div className="pm-val gold">{p.plazo}</div><div className="pm-key">Plazo</div></div>
                </div>
                <div className="pcard-barlbl"><span>Captación</span><span style={{color:"var(--gold)",fontWeight:700}}>{fills[i]}%</span></div>
                <div className="pcard-bar"><div className="pcard-fill" style={{width:`${fills[i]}%`}} /></div>
                <div className="pcard-foot"><span className={`chip ${p.riskChip}`}>Riesgo {p.riskLabel}</span><button className="btn btn-gold btn-sm" onClick={e => { e.stopPropagation(); setPage("project-"+p.id); }}>Ver detalle</button></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec sec-alt">
        <div className="sec-hdr" style={{textAlign:"center"}}><div className="tag">{t("test_tag")}</div><h2 className="section-title">{t("test_title")}</h2></div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:20,marginTop:44}}>
          {TESTIMONIALS.map((t,i) => {
            const txt = t["text_"+lang] || t.text_es;
            return (
              <div key={i} className="tcard" style={{position:"relative"}}>
                <div style={{position:"absolute",top:20,right:20,fontSize:22,opacity:.15,fontFamily:"Georgia",lineHeight:1}}>"</div>
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
                  <div className="tcard-avatar" style={{width:46,height:46,fontSize:16,fontFamily:"'Playfair Display',serif",fontWeight:700,color:"var(--gold)",background:"var(--gold-lt)",border:"2px solid var(--gold-md)"}}>{t.avatar}</div>
                  <div>
                    <div className="tcard-name">{t.flag} {t.name}</div>
                    <div className="tcard-loc">{t.role} · {t.location}</div>
                  </div>
                </div>
                <div className="tcard-stars">{t.stars}</div>
                <p className="tcard-text" style={{fontStyle:"normal",color:"var(--ink2)",lineHeight:1.75}}>"{txt}"</p>
                <div style={{marginTop:14,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",justifyContent:"space-between",fontSize:12}}>
                  <span style={{color:"var(--muted)"}}>{t.fund}</span>
                  <span style={{fontWeight:700,color:"var(--green)"}}>{t.amount}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="sec">
        <div className="sec-hdr" style={{textAlign:"center"}}><div className="tag">{t("faq_tag")}</div><h2 className="section-title">{t("faq_title")}</h2></div>
        <div className="faq-list">
          {FAQS.map((f,i) => (
            <div key={i} className="faq-item">
              <div className="faq-q" onClick={() => setFaq(faq===i?null:i)}><span>{f.q}</span><span className={`faq-arr ${faq===i?"open":""}`}>▾</span></div>
              {faq===i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div><h2>{t("cta_title")}</h2><p>{t("cta_sub")}</p></div>
        <div className="cta-btns">
          <button className="btn btn-gold btn-lg" onClick={() => setPage("register")}>{t("cta_btn1")}</button>
          <button className="btn btn-outline btn-lg" onClick={() => setPage("institutional")}>{t("cta_btn2")}</button>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}

/* ══════════════════════════════
   PAGE: PROJECTS
══════════════════════════════ */
function ProjectsPage({ setPage, fills }) {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.riskLabel.toLowerCase() === filter);
  return (
    <div className="page">
      <div className="inner-hero">
        <div className="breadcrumb"><span onClick={() => setPage("home")}>Inicio</span>›<span>Proyectos</span></div>
        <div className="tag">Portafolio disponible</div>
        <h1>Oportunidades de inversión</h1>
        <p>Elegí el fideicomiso que mejor se ajuste a tu perfil. Todos los proyectos tienen auditoría independiente y trazabilidad blockchain.</p>
      </div>
      <section className="sec">
        <div style={{display:"flex",gap:10,marginBottom:32,flexWrap:"wrap"}}>
          {[["all","Todos"],["bajo","Riesgo Bajo"],["moderado","Riesgo Moderado"],["comercial","Riesgo Comercial"]].map(([v,l]) => (
            <button key={v} className={filter===v?"btn btn-gold btn-sm":"btn btn-ghost btn-sm"} onClick={() => setFilter(v)}>{l}</button>
          ))}
        </div>
        <div className="cards-grid">
          {filtered.map((p,i) => (
            <div key={i} className="pcard" onClick={() => setPage("project-"+p.id)}>
              <div className={`pcard-stripe ${p.stripe}`} />
              <div className="pcard-body">
                <div className="pcard-ico">{p.ico}</div>
                <h3>{p.name}</h3>
                <p className="pcard-desc">{p.shortDesc}</p>
                <div className="pcard-metrics">
                  <div><div className="pm-val green">{p.tir}%</div><div className="pm-key">TIR Est.</div></div>
                  <div><div className="pm-val gold">{p.plazo}</div><div className="pm-key">Plazo</div></div>
                  <div><div className="pm-val" style={{color:"var(--blue)",fontSize:16}}>USD {p.minInv.toLocaleString()}</div><div className="pm-key">Mín.</div></div>
                </div>
                <div className="pcard-barlbl"><span>Captación</span><span style={{color:"var(--gold)",fontWeight:700}}>{fills[PROJECTS.indexOf(p)]}%</span></div>
                <div className="pcard-bar"><div className="pcard-fill" style={{width:`${fills[PROJECTS.indexOf(p)]}%`}} /></div>
                <div className="pcard-foot"><span className={`chip ${p.riskChip}`}>Riesgo {p.riskLabel}</span><button className="btn btn-gold btn-sm" onClick={e=>{e.stopPropagation();setPage("project-"+p.id);}}>Ver detalle →</button></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer setPage={setPage} />
    </div>
  );
}

/* ══════════════════════════════
   PAGE: PROJECT DETAIL
══════════════════════════════ */
function ProjectDetailPage({ projectId, setPage, loggedIn, fills, showToast }) {
  const proj = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
  const idx = PROJECTS.indexOf(proj);
  const [inv, setInv] = useState(proj.minInv);
  const annual = inv * proj.tir / 100;

  return (
    <div className="page">
      <div className="inner-hero">
        <div className="breadcrumb">
          <span onClick={() => setPage("home")}>Inicio</span>›
          <span onClick={() => setPage("projects")}>Proyectos</span>›
          <span>{proj.name}</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:14}}>
          <span style={{fontSize:40}}>{proj.ico}</span>
          <div><div className="tag">Fideicomiso activo</div><h1 style={{marginBottom:0}}>{proj.name}</h1></div>
        </div>
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
          <span className={`chip ${proj.riskChip}`}>Riesgo {proj.riskLabel}</span>
          <span className="chip chip-blue">TIR {proj.tir}% anual</span>
          <span className="chip chip-gray">Plazo {proj.plazo}</span>
          <span className="chip chip-green">Activo</span>
        </div>
      </div>
      <section className="sec">
        <div className="proj-detail-grid">
          <div>
            <div className="proj-main">
              <h3 style={{marginBottom:14}}>Descripción del proyecto</h3>
              <p style={{color:"var(--muted)",lineHeight:1.8,marginBottom:24}}>{proj.fullDesc}</p>
              <div className="proj-metric-row">
                <div className="proj-metric"><div className="proj-metric-val green">{proj.tir}%</div><div className="proj-metric-lbl">TIR Est. Anual</div></div>
                <div className="proj-metric"><div className="proj-metric-val gold">{proj.plazo}</div><div className="proj-metric-lbl">Plazo</div></div>
                <div className="proj-metric"><div className="proj-metric-val" style={{color:"var(--blue)",fontSize:16}}>USD {proj.minInv.toLocaleString()}</div><div className="proj-metric-lbl">Inversión mín.</div></div>
              </div>
              <div className="divider" />
              <h4 style={{marginBottom:12}}>Estado de captación</h4>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:14,marginBottom:8}}>
                <span style={{color:"var(--muted)"}}>Tokens emitidos</span><span style={{fontWeight:600}}>{proj.tokens}</span>
              </div>
              <div className="pcard-bar" style={{height:8,marginBottom:6}}><div className="pcard-fill" style={{width:`${fills[idx]}%`}} /></div>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"var(--muted)"}}>
                <span>{fills[idx]}% captado</span><span>Cierre: {proj.fechaCierre}</span>
              </div>
            </div>
          </div>

          <div className="proj-sidebar">
            <div className="proj-invest-box">
              <h3 style={{marginBottom:6}}>Calculá tu retorno</h3>
              <p style={{fontSize:13,color:"var(--muted)",marginBottom:20}}>Ingresá tu monto y mirá el retorno estimado</p>
              <div className="sim-lbl">Monto a invertir</div>
              <div className="sim-big">USD {inv.toLocaleString()}</div>
              <input type="range" min={proj.minInv} max={50000} step={100} value={inv} onChange={e => setInv(+e.target.value)} />
              <div style={{background:"var(--white)",borderRadius:12,padding:16,marginBottom:16}}>
                <div className="res-row"><span>Retorno anual est.</span><span style={{color:"var(--green)",fontWeight:700}}>+USD {fmt(annual)}</span></div>
                <div className="res-row"><span>Retorno mensual</span><span style={{color:"var(--gold)",fontWeight:600}}>+USD {fmt(annual/12)}</span></div>
                <div className="res-row" style={{marginBottom:0}}><span>Total proyectado</span><span style={{fontWeight:700}}>USD {fmt(inv+annual)}</span></div>
              </div>
              {loggedIn
                ? <button className="btn btn-gold btn-block btn-lg" onClick={() => showToast("Inversión iniciada correctamente")}>Invertir ahora →</button>
                : <><button className="btn btn-gold btn-block btn-lg" style={{marginBottom:10}} onClick={() => setPage("register")}>Crear cuenta e invertir →</button><button className="btn btn-ghost btn-block" onClick={() => setPage("login")}>Ya tengo cuenta</button></>
              }
              <p style={{fontSize:11,color:"var(--muted)",marginTop:12,lineHeight:1.6}}>Los valores son estimaciones. No garantizan retorno futuro.</p>
            </div>

            <div className="proj-doc-box">
              <h4 style={{fontSize:15,marginBottom:14}}>📁 Documentación</h4>
              {proj.docs.map((d,i) => (
                <div key={i} className="doc-item">
                  <span>📄</span><span style={{flex:1}}>{d}</span><span style={{color:"var(--gold)",fontSize:13}}>↓</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer setPage={setPage} />
    </div>
  );
}

/* ══════════════════════════════
   PAGE: SIMULATOR
══════════════════════════════ */
function SimulatorPage({ setPage, loggedIn, t=k=>k }) {
  const [inv, setInv] = useState(5000);
  const [fund, setFund] = useState(0);
  const sf = PROJECTS[fund];
  const annual = inv * sf.tir / 100;

  return (
    <div className="page">
      <div className="inner-hero">
        <div className="breadcrumb"><span onClick={() => setPage("home")}>Inicio</span>›<span>Simulador</span></div>
        <div className="tag">{t("sim_tag")}</div>
        <h1>{t("sim_title")}</h1>
        <p>{t("sim_sub")}</p>
      </div>
      <section className="sec">
        <div className="sim-grid">
          <div className="sim-box">
            <div className="sim-lbl">¿Cuánto deseás invertir?</div>
            <div className="sim-big">USD {inv.toLocaleString()}</div>
            <input type="range" min={500} max={100000} step={500} value={inv} onChange={e => setInv(+e.target.value)} />
            <div style={{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--muted)",marginTop:-18,marginBottom:22}}><span>USD 500</span><span>USD 100.000</span></div>
            <div className="sim-lbl" style={{marginBottom:12}}>Seleccioná el fideicomiso</div>
            <div className="sim-opts">
              {PROJECTS.map((p,i) => (
                <div key={i} className={`sim-opt ${fund===i?"on":""}`} onClick={() => setFund(i)}>
                  <div><div className="sim-opt-name">{p.ico} {p.name}</div><div className="sim-opt-sub">Riesgo {p.riskLabel} · Mín. USD {p.minInv.toLocaleString()}</div></div>
                  <span className="sim-tir">TIR {p.tir}%</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="result-box" style={{marginBottom:20}}>
              <div className="res-lbl">{t("sim_annual")}</div>
              <div className="res-big">+${fmt(annual)}</div>
              <div className="res-period">≈ USD {fmt(annual/12)} {t("sim_permonth")}</div>
              <div className="divider" style={{margin:"16px 0"}} />
              <div className="res-row"><span>Capital inicial</span><span>USD {inv.toLocaleString()}</span></div>
              <div className="res-row"><span>TIR estimada</span><span style={{color:"var(--green)"}}>{sf.tir}% anual</span></div>
              <div className="res-row"><span>Nivel de riesgo</span><span>{sf.riskLabel}</span></div>
              <div className="res-row"><span>Plazo sugerido</span><span>{sf.plazo}</span></div>
              <div className="res-row"><span style={{fontWeight:700,color:"var(--ink)"}}>Total proyectado (1 año)</span><span style={{color:"var(--gold)",fontFamily:"'Playfair Display',serif",fontSize:17}}>USD {fmt(inv+annual)}</span></div>
              <div className="divider" style={{margin:"16px 0"}} />
              {loggedIn
                ? <button className="btn btn-gold btn-block btn-lg" onClick={() => setPage("project-"+sf.id)}>Invertir en {sf.name} →</button>
                : <><button className="btn btn-gold btn-block btn-lg" style={{marginBottom:10}} onClick={() => setPage("register")}>Crear cuenta e invertir →</button><button className="btn btn-outline btn-block" onClick={() => setPage("project-"+sf.id)}>Ver detalle del proyecto</button></>
              }
              <div className="res-note">⚠️ Los valores son simulaciones basadas en rendimientos históricos estimados. No constituyen garantía de retorno futuro.</div>
            </div>

            {/* Comparison table */}
            <div className="sim-box">
              <h4 style={{marginBottom:14,fontSize:16}}>Comparativa de fideicomisos</h4>
              <table>
                <thead><tr><th>Fideicomiso</th><th>TIR</th><th>Retorno anual</th><th>Riesgo</th></tr></thead>
                <tbody>
                  {PROJECTS.map((p,i) => {
                    const a = inv * p.tir / 100;
                    return (
                      <tr key={i} style={{cursor:"pointer"}} onClick={() => setFund(i)}>
                        <td style={{fontWeight:600}}>{p.ico} {p.name}</td>
                        <td style={{color:"var(--green)",fontWeight:700}}>{p.tir}%</td>
                        <td style={{color:"var(--gold)",fontWeight:600}}>+${fmt(a)}</td>
                        <td><span className={`chip ${p.riskChip}`}>{p.riskLabel}</span></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Footer setPage={setPage} />
    </div>
  );
}

/* ══════════════════════════════
   PAGE: EDUCATION
══════════════════════════════ */
function EducationPage({ setPage }) {
  const [faq, setFaq] = useState(null);
  const arts = [
    {ico:"🔐",t:"¿Qué es un fideicomiso?",d:"Estructura legal que separa el patrimonio de los activos de la empresa, protegiéndolos para los inversores. Tu capital queda blindado ante cualquier contingencia de Nexxum S.A.",extra:"El fiduciario actúa como administrador independiente, velando exclusivamente por los intereses de los beneficiarios (inversores). La separación patrimonial es automática e irrevocable una vez constituido el fideicomiso."},
    {ico:"⛓️",t:"¿Qué es la tokenización?",d:"Convertir un activo real en tokens digitales permite fraccionar la propiedad y hacer accesible la inversión desde cualquier monto y parte del mundo.",extra:"Cada token representa una participación proporcional en el activo subyacente. Los tokens se emiten en la red Polygon, son transferibles y su existencia es verificable públicamente en el explorador de bloques."},
    {ico:"📊",t:"¿Cómo se calcula la TIR?",d:"La Tasa Interna de Retorno mide la rentabilidad real considerando el flujo de fondos a lo largo del tiempo.",extra:"Publicamos las TIR históricas de cada fideicomiso con auditoría independiente. La TIR estimada se calcula sobre datos históricos del activo subyacente y contratos existentes, no es una proyección especulativa."},
    {ico:"🌍",t:"Inversión internacional",d:"Aceptamos SWIFT/ACH desde cualquier país y stablecoins USDT/USDC para eliminar barreras de entrada.",extra:"Los valores de todos los fideicomisos se expresan en USD. No existe conversión forzosa ni exposición cambiaria. Los retornos se acreditan en la misma moneda en que se invirtió."},
    {ico:"⚖️",t:"Marco legal y regulatorio",d:"Cada fideicomiso está constituido bajo la ley aplicable con escritura notarial y representación fiduciaria independiente.",extra:"Nexxum S.A. opera bajo las regulaciones vigentes en cada jurisdicción. Los contratos de fideicomiso son de acceso público para los inversores registrados y están disponibles para descarga desde el dashboard."},
    {ico:"🔎",t:"Trazabilidad blockchain",d:"Cada token tiene un hash único verificable en la red Polygon. Cualquier inversor puede auditar su posición sin depender de Nexxum.",extra:"Al ingresar a tu dashboard, podés ver el hash de tu transacción, la dirección del contrato inteligente y la cantidad de tokens en tu billetera. El explorador de bloques es público y no requiere cuenta en Nexxum."},
  ];
  const [open, setOpen] = useState(null);

  return (
    <div className="page">
      <div className="inner-hero">
        <div className="breadcrumb"><span onClick={() => setPage("home")}>Inicio</span>›<span>Educación</span></div>
        <div className="tag">Centro de aprendizaje</div>
        <h1>Entendé el modelo antes de invertir</h1>
        <p>La transparencia empieza por la educación. Aquí encontrás todo lo que necesitás saber sobre cómo funciona Nexxum S.A.</p>
      </div>

      <section className="sec">
        <div className="edu-grid">
          {arts.map((a,i) => (
            <div key={i} className="edu-card" onClick={() => setOpen(open===i?null:i)}>
              <div className="edu-ico">{a.ico}</div>
              <h4>{a.t}</h4>
              <p>{a.d}</p>
              {open===i && <p style={{marginTop:12,fontSize:13,color:"var(--ink2)",lineHeight:1.7,borderTop:"1px solid var(--border)",paddingTop:12}}>{a.extra}</p>}
              <div className="edu-link">{open===i?"Cerrar ↑":"Leer más →"}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="sec-hdr" style={{textAlign:"center"}}><div className="tag">Preguntas frecuentes</div><h2 className="section-title">FAQ detallado</h2></div>
        <div className="faq-list">
          {FAQS.map((f,i) => (
            <div key={i} className="faq-item">
              <div className="faq-q" onClick={() => setFaq(faq===i?null:i)}><span>{f.q}</span><span className={`faq-arr ${faq===i?"open":""}`}>▾</span></div>
              {faq===i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <div className="cta-band">
        <div><h2>¿Estás listo para dar el primer paso?</h2><p>Creá tu cuenta gratis y empezá a explorar las oportunidades disponibles.</p></div>
        <div className="cta-btns">
          <button className="btn btn-gold btn-lg" onClick={() => setPage("register")}>Crear cuenta →</button>
          <button className="btn btn-outline btn-lg" onClick={() => setPage("simulator")}>Ir al simulador</button>
        </div>
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}

/* ══════════════════════════════
   PAGE: INSTITUTIONAL
══════════════════════════════ */
function InstitutionalPage({ setPage }) {
  return (
    <div className="page">
      <div className="inner-hero">
        <div className="breadcrumb"><span onClick={() => setPage("home")}>Inicio</span>›<span>Institucional</span></div>
        <div className="tag">Quiénes somos</div>
        <h1>Nexxum S.A.</h1>
        <p>Somos una empresa de tecnología financiera especializada en la tokenización de activos reales, conectando la economía tangible con la infraestructura blockchain.</p>
      </div>
      <section className="sec">
        <div className="inst-grid">
          <div>
            <div className="inst-box" style={{marginBottom:20}}>
              <h3 style={{marginBottom:14}}>Nuestra misión</h3>
              <p style={{color:"var(--muted)",lineHeight:1.8}}>Democratizar el acceso a inversiones en activos reales, históricamente reservadas para grandes capitales, mediante la tecnología de tokenización y los fideicomisos como vehículo legal de protección patrimonial.</p>
            </div>
            <div className="inst-box">
              <h3 style={{marginBottom:20}}>Nuestra historia</h3>
              <div className="timeline">
                {[
                  {y:"2022",t:"Fundación de Nexxum S.A. con foco en el mercado argentino de fideicomisos tradicionales."},
                  {y:"2023",t:"Primera emisión de tokens sobre flota vehicular. 150 inversores en el primer mes."},
                  {y:"2024",t:"Expansión a energía solar y real estate. Apertura al mercado internacional con USDT/USDC."},
                  {y:"2025",t:"$12.4M en activos tokenizados. 847 inversores en 18 países. Infraestructura energética como cuarto vertical."},
                ].map((e,i) => (
                  <div key={i} className="tl-item">
                    <div className="tl-dot" />
                    <div><div className="tl-year">{e.y}</div><div className="tl-text">{e.t}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="inst-box" style={{marginBottom:20}}>
              <h3 style={{marginBottom:14}}>Marco legal</h3>
              {[
                ["Estructura legal","Fideicomisos ordinarios privados/públicos"],
                ["Red blockchain","Polygon (MATIC)"],
                ["Auditor externo","Grant & Torres Auditores S.A."],
                ["Fiduciario","Banco Independencia S.A."],
                ["KYC Provider","Veriff Inc."],
                ["Jurisdicción","Argentina · Uruguay · España"],
              ].map(([k,v],i) => (
                <div key={i} style={{display:"flex",justifyContent:"space-between",fontSize:14,padding:"10px 0",borderBottom:"1px solid var(--border)"}}>
                  <span style={{color:"var(--muted)"}}>{k}</span><span style={{fontWeight:600,textAlign:"right",maxWidth:200}}>{v}</span>
                </div>
              ))}
            </div>
            <div className="inst-box">
              <h3 style={{marginBottom:14}}>Contacto institucional</h3>
              <p style={{fontSize:14,color:"var(--muted)",marginBottom:16,lineHeight:1.7}}>¿Sos un inversor institucional, family office o querés ser un partner distribuidor? Contactanos directamente.</p>
              {[["📧","institucional@nexxum.com"],["📞","+54 11 4000-0000"],["📍","Av. Corrientes 1234, CABA, Argentina"]].map(([i,t],j) => (
                <div key={j} style={{display:"flex",gap:10,marginBottom:10,fontSize:14}}><span>{i}</span><span style={{color:"var(--ink2)"}}>{t}</span></div>
              ))}
              <div className="divider" />
              <button className="btn btn-gold btn-block" style={{marginTop:8}} onClick={() => alert("Formulario de contacto institucional")}>Enviar consulta institucional</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="sec-hdr" style={{textAlign:"center"}}><div className="tag">Equipo</div><h2 className="section-title">Quiénes están detrás de Nexxum</h2></div>
        <div className="team-grid">
          {[
            {a:"👨‍💼",n:"Alejandro Vega",r:"CEO & Co-Founder",d:"15 años en banca privada y estructuración de fideicomisos en Argentina y Uruguay."},
            {a:"👩‍💻",n:"Luciana Torres",r:"CTO & Co-Founder",d:"Ex-ingeniera blockchain en Ethereum Foundation. Especialista en smart contracts y DeFi."},
            {a:"👨‍⚖️",n:"Dr. Marcos Prieto",r:"Director Legal",d:"Abogado especializado en derecho financiero y regulación de activos digitales en LATAM."},
          ].map((t,i) => (
            <div key={i} className="team-card">
              <div className="team-avatar">{t.a}</div>
              <div className="team-name">{t.n}</div>
              <div className="team-role">{t.r}</div>
              <p style={{fontSize:13,color:"var(--muted)",marginTop:10,lineHeight:1.6}}>{t.d}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer setPage={setPage} />
    </div>
  );
}

/* ══════════════════════════════
   PAGE: REGISTER
══════════════════════════════ */
function RegisterPage({ setPage, setLoggedIn, showToast, t=k=>k }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ nombre: "", apellido: "", email: "", pais: "", pass: "", pass2: "", terms: false, photoUrl: null });
  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const next = () => {
    if (step === 1 && (!form.nombre || !form.apellido || !form.email)) { showToast("Por favor completá todos los campos"); return; }
    if (step === 2 && form.pass !== form.pass2) { showToast("Las contraseñas no coinciden"); return; }
    if (step === 3 && !form.terms) { showToast("Debés aceptar los términos para continuar"); return; }
    if (step < 3) setStep(s => s + 1);
    else { setLoggedIn(true); setPage("kyc"); showToast("¡Cuenta creada! Ahora completá tu verificación KYC"); }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div style={{textAlign:"center",marginBottom:6}}>
          <div className="logo" style={{cursor:"default",fontSize:24,marginBottom:16}}>Nex<em style={{color:"var(--gold)"}}>xum</em></div>
        </div>
        <div className="step-progress">
          {[1,2,3].map(i => <div key={i} className={`sp-dot ${i<step?"done":i===step?"active":""}`} />)}
        </div>
        {step===1 && <>
          <h2>{t("reg_title")}</h2>
          <p>{t("reg_step1")}</p>
          <div className="avatar-upload">
            <div className="avatar-circle" onClick={() => document.getElementById('avatar-input').click()}>
              {form.photoUrl
                ? <img src={form.photoUrl} alt="perfil" />
                : <span className="avatar-initials">{(form.nombre?.[0]||"?").toUpperCase()}{(form.apellido?.[0]||"").toUpperCase()}</span>
              }
              <div className="avatar-overlay"><span>📷</span></div>
            </div>
            <input id="avatar-input" type="file" accept="image/*" style={{display:"none"}} onChange={e=>{
              const file = e.target.files[0];
              if(file){ const url = URL.createObjectURL(file); upd("photoUrl", url); }
            }} />
            <div className="avatar-upload-hint">Subí tu foto de perfil (opcional)<br/>Hacé click en el círculo para elegir una imagen</div>
          </div>
          <div className="form-row">
            <div className="form-group"><label>{t("reg_name")}</label><input className="form-input" value={form.nombre} onChange={e=>upd("nombre",e.target.value)} placeholder="Juan" /></div>
            <div className="form-group"><label>{t("reg_lastname")}</label><input className="form-input" value={form.apellido} onChange={e=>upd("apellido",e.target.value)} placeholder="García" /></div>
          </div>
          <div className="form-group"><label>Email</label><input className="form-input" type="email" value={form.email} onChange={e=>upd("email",e.target.value)} placeholder="tu@email.com" /></div>
          <div className="form-group"><label>País de residencia</label>
            <select className="form-select" value={form.pais} onChange={e=>upd("pais",e.target.value)}>
              <option value="">Seleccioná tu país</option>
              {["Argentina","Uruguay","España","México","Colombia","Chile","Alemania","Estados Unidos","Otro"].map(p => <option key={p}>{p}</option>)}
            </select>
          </div>
        </>}
        {step===2 && <>
          <h2>Crear contraseña</h2>
          <p>Paso 2 de 3 · Seguridad de tu cuenta</p>
          <div className="form-group"><label>Contraseña</label><input className="form-input" type="password" value={form.pass} onChange={e=>upd("pass",e.target.value)} placeholder="Mínimo 8 caracteres" /></div>
          <div className="form-group"><label>Repetir contraseña</label><input className="form-input" type="password" value={form.pass2} onChange={e=>upd("pass2",e.target.value)} placeholder="Repetí tu contraseña" /></div>
          <p className="form-note">Tu contraseña debe tener al menos 8 caracteres, una mayúscula y un número.</p>
        </>}
        {step===3 && <>
          <h2>Últimos detalles</h2>
          <p>Paso 3 de 3 · Aceptación de términos</p>
          <div style={{background:"var(--bg)",borderRadius:12,padding:16,marginBottom:18}}>
            {[["Nombre completo",`${form.nombre} ${form.apellido}`],["Email",form.email],["País",form.pais||"—"]].map(([k,v]) => (
              <div key={k} className="res-row" style={{marginBottom:8}}><span>{k}</span><span>{v}</span></div>
            ))}
          </div>
          <div className="form-check" style={{marginBottom:16}}>
            <input type="checkbox" checked={form.terms} onChange={e=>upd("terms",e.target.checked)} />
            <span>Acepto los <span className="auth-link" onClick={() => setPage("institutional")}>Términos y Condiciones</span> y la <span className="auth-link">Política de Privacidad</span> de Nexxum S.A.</span>
          </div>
          <div className="form-check">
            <input type="checkbox" />
            <span>Acepto recibir comunicaciones sobre nuevas oportunidades de inversión (opcional)</span>
          </div>
        </>}
        <button className="btn btn-gold btn-block btn-lg" style={{marginTop:24}} onClick={next}>
          {step<3?"Continuar →":"Crear mi cuenta →"}
        </button>
        {step>1 && <button className="btn btn-ghost btn-block" style={{marginTop:10}} onClick={() => setStep(s=>s-1)}>← Atrás</button>}
        <div className="auth-divider">¿Ya tenés cuenta? <span className="auth-link" onClick={() => setPage("login")}>Iniciá sesión</span></div>
      </div>
    </div>
  );
}

/* ══════════════════════════════
   PAGE: LOGIN
══════════════════════════════ */
function LoginPage({ setPage, setLoggedIn, showToast, t=k=>k }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    if (!email || !pass) { showToast("Completá email y contraseña"); return; }
    setLoggedIn(true);
    showToast("Bienvenido de vuelta, Carlos");
    setPage("dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div style={{textAlign:"center",marginBottom:20}}>
          <div className="logo" style={{cursor:"default",fontSize:24,marginBottom:4}}>Nex<em style={{color:"var(--gold)"}}>xum</em></div>
        </div>
        <h2>{t("log_title")}</h2>
        <p>{t("log_sub")}</p>
        <div className="form-group"><label>Email</label><input className="form-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="tu@email.com" /></div>
        <div className="form-group"><label>Contraseña</label><input className="form-input" type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Tu contraseña" /></div>
        <div style={{textAlign:"right",marginBottom:20}}><span className="auth-link" style={{fontSize:13}}>{t("log_forgot")}</span></div>
        <button className="btn btn-gold btn-block btn-lg" onClick={login}>{t("log_enter")}</button>
        <div className="auth-divider">{t("log_no_account")} <span className="auth-link" onClick={() => setPage("register")}>{t("log_signup")}</span></div>
        <div style={{background:"var(--bg)",borderRadius:10,padding:12,fontSize:12,color:"var(--muted)",textAlign:"center",border:"1px solid var(--border)"}}>
          🔒 Conexión segura SSL · Datos cifrados con AES-256
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════
   PAGE: KYC
══════════════════════════════ */
function KYCPage({ setPage, showToast }) {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const finish = () => {
    if (step < 3) setStep(s => s + 1);
    else { setDone(true); showToast("KYC enviado. Revisión en 24-48 horas."); }
  };

  if (done) return (
    <div className="auth-page">
      <div className="auth-card" style={{textAlign:"center"}}>
        <div className="success-icon">✅</div>
        <h2>Verificación enviada</h2>
        <p style={{marginBottom:24}}>Revisaremos tu documentación en las próximas 24-48 horas. Te notificaremos por email cuando tu cuenta esté aprobada.</p>
        <button className="btn btn-gold btn-block btn-lg" onClick={() => setPage("dashboard")}>Ir a mi dashboard →</button>
      </div>
    </div>
  );

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Verificación de identidad</h2>
        <p>Paso {step} de 3 · Necesitamos verificar tu identidad para cumplir con las regulaciones internacionales (KYC/AML)</p>
        <div className="step-progress">
          {[1,2,3].map(i => <div key={i} className={`sp-dot ${i<step?"done":i===step?"active":""}`} />)}
        </div>
        {step===1 && <>
          <h4 style={{marginBottom:16,fontSize:15}}>📋 Información personal</h4>
          <div className="form-group"><label>Fecha de nacimiento</label><input className="form-input" type="date" /></div>
          <div className="form-group"><label>Tipo de documento</label>
            <select className="form-select"><option>DNI / Cédula</option><option>Pasaporte</option><option>Permiso de conducir</option></select>
          </div>
          <div className="form-group"><label>Número de documento</label><input className="form-input" placeholder="Ej: 30.123.456" /></div>
          <div className="form-group"><label>Domicilio completo</label><input className="form-input" placeholder="Calle, número, ciudad, país" /></div>
        </>}
        {step===2 && <>
          <h4 style={{marginBottom:14,fontSize:15}}>📸 Documentación fotográfica</h4>
          {[["Frente del documento","📄"],["Dorso del documento","📄"],["Selfie sosteniendo documento","🤳"]].map(([l,ico],i) => (
            <div key={i} style={{border:"2px dashed var(--border)",borderRadius:12,padding:20,textAlign:"center",marginBottom:14,cursor:"pointer",transition:"all .15s"}}
              onMouseOver={e=>e.currentTarget.style.borderColor="var(--gold)"}
              onMouseOut={e=>e.currentTarget.style.borderColor="var(--border)"}>
              <div style={{fontSize:28,marginBottom:6}}>{ico}</div>
              <div style={{fontWeight:600,marginBottom:4}}>{l}</div>
              <div style={{fontSize:12,color:"var(--muted)"}}>Hacé clic para subir · JPG, PNG · Máx. 5MB</div>
            </div>
          ))}
        </>}
        {step===3 && <>
          <h4 style={{marginBottom:14,fontSize:15}}>💰 Perfil de inversor</h4>
          <div className="form-group"><label>Fuente de fondos</label>
            <select className="form-select"><option>Salario / Trabajo en relación de dependencia</option><option>Actividad independiente / Freelance</option><option>Negocios propios</option><option>Inversiones previas</option><option>Herencia / Donación</option></select>
          </div>
          <div className="form-group"><label>Rango de inversión estimado (USD)</label>
            <select className="form-select"><option>500 - 5.000</option><option>5.000 - 25.000</option><option>25.000 - 100.000</option><option>Más de 100.000</option></select>
          </div>
          <div className="form-group"><label>¿Sos una Persona Políticamente Expuesta (PEP)?</label>
            <select className="form-select"><option>No</option><option>Sí</option></select>
          </div>
          <div className="form-check"><input type="checkbox" /><span style={{fontSize:13,color:"var(--muted)"}}>Declaro que la información proporcionada es verdadera y me comprometo a actualizar cualquier cambio.</span></div>
        </>}
        <button className="btn btn-gold btn-block btn-lg" style={{marginTop:22}} onClick={finish}>
          {step<3?"Continuar →":"Enviar verificación →"}
        </button>
        {step>1 && <button className="btn btn-ghost btn-block" style={{marginTop:10}} onClick={() => setStep(s=>s-1)}>← Atrás</button>}
      </div>
    </div>
  );
}

/* ══════════════════════════════
   DASHBOARD PAGES
══════════════════════════════ */
const donutData = [
  {pct:40,color:"#2563EB",label:"Flota de Autos",val:"$17,000"},
  {pct:30,color:"#D97706",label:"Energía Solar",val:"$12,750"},
  {pct:30,color:"#B8862A",label:"Real Estate",val:"$12,750"},
];
const barData = [{m:"Ene",v:280},{m:"Feb",v:315},{m:"Mar",v:298},{m:"Abr",v:340},{m:"May",v:365},{m:"Jun",v:392}];

function DashLayout({ children, dashPage, setDashPage, setPage, setLoggedIn }) {
  return (
    <div className="dash-layout">
      <div className="sidebar">
        <div className="sb-user-info">
          <div className="sb-user-avatar">
            <span style={{fontFamily:"'Playfair Display',serif",fontSize:14,fontWeight:700,color:"var(--gold)"}}>CR</span>
          </div>
          <div>
            <div className="sb-user-name">Carlos Rodríguez</div>
            <div className="sb-user-email">carlos@email.com</div>
          </div>
        </div>
        <div className="sb-sec">Principal</div>
        {[["overview","📊","Dashboard"],["portfolio","💼","Mi Portafolio"],["transactions","🔄","Transacciones",3]].map(([id,ico,lbl,badge]) => (
          <button key={id} className={`sb-item ${dashPage===id?"on":""}`} onClick={() => setDashPage(id)}>
            <span className="sb-ico">{ico}</span>{lbl}{badge && <span className="sb-badge">{badge}</span>}
          </button>
        ))}
        <div className="sb-sec">Inversiones</div>
        {PROJECTS.map(p => (
          <button key={p.id} className="sb-item" onClick={() => setPage("project-"+p.id)}>
            <span className="sb-ico">{p.ico}</span>{p.name}
          </button>
        ))}
        <button className="sb-item" onClick={() => setPage("projects")}><span className="sb-ico">🔍</span>Explorar nuevos</button>
        <div className="sb-sec">Cuenta</div>
        {[["profile","👤","Perfil y KYC"],["settings","⚙️","Configuración"]].map(([id,ico,lbl]) => (
          <button key={id} className={`sb-item ${dashPage===id?"on":""}`} onClick={() => setDashPage(id)}>
            <span className="sb-ico">{ico}</span>{lbl}
          </button>
        ))}
        <div style={{marginTop:"auto",padding:"16px 10px 0"}}>
          <button className="btn btn-danger btn-sm btn-block" onClick={() => { setLoggedIn(false); setPage("home"); }}>Cerrar sesión</button>
        </div>
      </div>
      <div className="dash-main">{children}</div>
    </div>
  );
}

function DashOverview({ setPage, setDashPage, showToast }) {
  return (
    <>
      <div className="dash-topbar">
        <div className="dash-hello"><h2>Buenos días, Carlos 👋</h2><p>Última actualización: hoy 09:42 hs · Red Polygon · 3 posiciones activas</p></div>
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
          <button className="btn btn-ghost btn-sm" onClick={() => showToast("Informe generado correctamente")}>📄 Descargar informe</button>
          <button className="btn btn-gold btn-sm" onClick={() => setPage("projects")}>+ Nueva inversión</button>
        </div>
      </div>
      <div className="kyc-banner">
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <span style={{fontSize:22}}>✅</span>
          <div><div style={{fontWeight:600,color:"var(--blue)"}}>Identidad verificada · Nivel 2</div><div style={{fontSize:12,color:"var(--muted)"}}>Tu cuenta tiene acceso completo a todos los fideicomisos.</div></div>
        </div>
        <span className="chip chip-blue">KYC Aprobado</span>
      </div>
      <div className="notify-banner">
        <div><div style={{fontWeight:700,color:"var(--gold)",fontFamily:"'Playfair Display',serif",fontSize:16}}>💰 Próximo pago de rendimientos</div><div style={{fontSize:13,color:"var(--muted)"}}>05 de junio · Flota de Autos + Energía Solar</div></div>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:28,fontWeight:700,color:"var(--green)"}}>+$362.50</div>
      </div>
      <div className="kpi-row">
        {[["💵","Capital total","$42,500","+18.3% desde inicio"],["📈","Rendimiento acum.","$7,812","+22.5% total"],["🗓️","Este mes","$362.50","+5.8% vs anterior"],["🏦","Tokens activos","3","Diversificado"]].map(([ico,lbl,val,chg],i) => (
          <div key={i} className="kcard"><div className="kcard-ico">{ico}</div><div className="kcard-lbl">{lbl}</div><div className="kcard-val">{val}</div><div className="kcard-chg">↑ {chg}</div></div>
        ))}
      </div>
      <div className="charts-row">
        <div className="chart-box">
          <div className="cbox-title">Distribución</div><div className="cbox-sub">Portafolio actual</div>
          <Donut data={donutData} />
          <div className="legend">{donutData.map((d,i) => <div key={i} className="leg-row"><div className="leg-dot" style={{background:d.color}} /><span className="leg-name">{d.label}</span><span className="leg-pct">{d.pct}%</span><span className="leg-val">{d.val}</span></div>)}</div>
        </div>
        <div className="chart-box">
          <div className="cbox-title">Rendimientos mensuales</div><div className="cbox-sub">Ganancias líquidas 2025</div>
          <BarChart bars={barData} />
          <div style={{display:"flex",justifyContent:"space-between",marginTop:14,fontSize:13}}>
            <span style={{color:"var(--muted)"}}>Total acumulado 2025</span>
            <span style={{fontFamily:"'Playfair Display',serif",fontWeight:700,color:"var(--gold)"}}>$1,890.00</span>
          </div>
        </div>
      </div>
      <div className="pos-box">
        <div className="pos-hdr"><div><div className="cbox-title">Posiciones activas</div><div className="cbox-sub">Contratos y trazabilidad blockchain</div></div>
          <button className="btn btn-ghost btn-sm" onClick={() => setDashPage("portfolio")}>Ver portafolio →</button>
        </div>
        <table>
          <thead><tr><th>Activo</th><th>Capital</th><th>TIR Real</th><th>Ganancia</th><th>Próx. pago</th><th>Estado</th><th>Blockchain</th></tr></thead>
          <tbody>
            {[
              {ico:"🚗",nm:"Flota de Autos",tkr:"NXM-AUTO-003",cap:"$17,000",tir:"15.2%",gain:"+$3,120",pay:"05 Jun"},
              {ico:"☀️",nm:"Energía Solar",tkr:"NXM-SOLAR-01",cap:"$12,750",tir:"12.8%",gain:"+$2,890",pay:"05 Jun"},
              {ico:"🏢",nm:"Real Estate",tkr:"NXM-RE-007",cap:"$12,750",tir:"18.1%",gain:"+$1,802",pay:"Al venc."},
            ].map((p,i) => (
              <tr key={i}>
                <td><div style={{display:"flex",alignItems:"center",gap:10}}><span style={{fontSize:18}}>{p.ico}</span><div><div className="pos-nm">{p.nm}</div><div className="pos-tkr">{p.tkr}</div></div></div></td>
                <td style={{fontWeight:600}}>{p.cap}</td>
                <td style={{color:"var(--green)",fontWeight:700}}>{p.tir}</td>
                <td style={{color:"var(--gold)",fontWeight:700,fontFamily:"'Playfair Display',serif"}}>{p.gain}</td>
                <td style={{color:"var(--muted)",fontSize:13}}>{p.pay}</td>
                <td><span className="chip chip-green">Activo</span></td>
                <td><button className="hash-btn" onClick={() => alert("Hash: 0x3f4a...91bc\nRed: Polygon\nContrato: 0xNEX...")}>🔗 Ver tx</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function DashPortfolio({ setPage }) {
  return (
    <>
      <div className="dash-topbar"><div className="dash-hello"><h2>Mi Portafolio</h2><p>Detalle completo de todas tus posiciones</p></div>
        <button className="btn btn-gold btn-sm" onClick={() => setPage("projects")}>+ Agregar activo</button>
      </div>
      <div className="kpi-row">
        {[["💵","Valor total","$42,500"],["📈","Ganancia total","$7,812"],["📊","Retorno global","18.3%"],["🔢","Nº de tokens","3"]].map(([ico,lbl,val],i) => (
          <div key={i} className="kcard"><div className="kcard-ico">{ico}</div><div className="kcard-lbl">{lbl}</div><div className="kcard-val">{val}</div></div>
        ))}
      </div>
      {[
        {ico:"🚗",nm:"Flota de Autos",tkr:"NXM-AUTO-003",stripe:"autos",cap:17000,tir:15.2,gain:3120.5,tokens:170,captacion:72,pay:"05 Jun 2025"},
        {ico:"☀️",nm:"Energía Solar",tkr:"NXM-SOLAR-01",stripe:"solar",cap:12750,tir:12.8,gain:2890,tokens:127,captacion:45,pay:"05 Jun 2025"},
        {ico:"🏢",nm:"Real Estate",tkr:"NXM-RE-007",stripe:"re",cap:12750,tir:18.1,gain:1802,tokens:127,captacion:88,pay:"Al vencimiento"},
      ].map((p,i) => (
        <div key={i} className="pos-box" style={{marginBottom:16}}>
          <div style={{height:4,borderRadius:"14px 14px 0 0",background:"linear-gradient(90deg,var(--gold),var(--gold-md))",margin:"-22px -22px 18px"}} />
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <span style={{fontSize:32}}>{p.ico}</span>
              <div><div style={{fontSize:18,fontFamily:"'Playfair Display',serif",fontWeight:700}}>{p.nm}</div><div style={{fontSize:12,color:"var(--muted)"}}>{p.tkr}</div></div>
            </div>
            <div style={{display:"flex",gap:10}}>
              <button className="hash-btn" onClick={() => alert(`Hash: 0x3f4a...91bc\nContrato: ${p.tkr}\nRed: Polygon`)}>🔗 Ver en blockchain</button>
              <button className="btn btn-outline btn-sm" onClick={() => setPage("project-"+["autos","solar","re"][i])}>Ver proyecto</button>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:14}}>
            {[["Capital","USD "+p.cap.toLocaleString()],["TIR real",p.tir+"%"],["Ganancia total","+USD "+fmt(p.gain)],["Tokens",p.tokens+" tokens"],["Próx. pago",p.pay]].map(([k,v],j) => (
              <div key={j} className="proj-metric"><div className="proj-metric-val" style={{fontSize:16,color:j===2?"var(--green)":j===1?"var(--green)":"var(--ink)"}}>{v}</div><div className="proj-metric-lbl">{k}</div></div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function DashTransactions() {
  const txs = [
    {type:"dep",ico:"💰",t:"Pago de rendimiento — Flota de Autos",d:"01 Jun 2025",a:"+$280.00",pos:true,hash:"0x3f4a...91bc"},
    {type:"dep",ico:"💰",t:"Pago de rendimiento — Energía Solar",d:"01 Jun 2025",a:"+$210.50",pos:true,hash:"0x7c2e...44fa"},
    {type:"ret",ico:"🔵",t:"Inversión — Real Estate Alquiler",d:"15 May 2025",a:"-$12,750.00",pos:false,hash:"0x9a1b...f3cc"},
    {type:"dep",ico:"💰",t:"Pago de rendimiento — Flota de Autos",d:"01 May 2025",a:"+$265.00",pos:true,hash:"0x2d8e...a71f"},
    {type:"dep",ico:"💰",t:"Pago de rendimiento — Energía Solar",d:"01 May 2025",a:"+$198.00",pos:true,hash:"0x5f3a...b29d"},
    {type:"ret",ico:"🔵",t:"Inversión — Energía Solar",d:"01 Mar 2025",a:"-$12,750.00",pos:false,hash:"0x1e9c...d55a"},
    {type:"ret",ico:"🔵",t:"Inversión — Flota de Autos",d:"01 Ene 2025",a:"-$17,000.00",pos:false,hash:"0x8b4f...c12e"},
  ];
  return (
    <>
      <div className="dash-topbar"><div className="dash-hello"><h2>Historial de transacciones</h2><p>Todos los movimientos de tu cuenta</p></div></div>
      <div className="pos-box">
        <div className="pos-hdr">
          <div><div className="cbox-title">Movimientos</div><div className="cbox-sub">{txs.length} transacciones registradas</div></div>
          <div style={{display:"flex",gap:8}}>
            <button className="btn btn-ghost btn-sm">Filtrar</button>
            <button className="btn btn-ghost btn-sm">Exportar CSV</button>
          </div>
        </div>
        {txs.map((t,i) => (
          <div key={i} className="tx-row">
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div className={`tx-badge ${t.type}`}>{t.ico}</div>
              <div><div className="tx-title">{t.t}</div><div className="tx-date">{t.d} · Hash: {t.hash}</div></div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <span className={`tx-amt ${t.pos?"pos":"neg"}`}>{t.a}</span>
              <button className="hash-btn" onClick={() => alert(`Transacción: ${t.hash}\nRed: Polygon\nEstado: Confirmada`)}>🔗</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function DashProfile({ showToast }) {
  return (
    <>
      <div className="dash-topbar"><div className="dash-hello"><h2>Perfil y KYC</h2><p>Administrá tu cuenta e información personal</p></div></div>
      <div style={{background:"var(--white)",border:"1px solid var(--border)",borderRadius:14,padding:28,marginBottom:20,boxShadow:"var(--shadow-sm)",display:"flex",alignItems:"center",gap:28,flexWrap:"wrap"}}>
        <div className="avatar-upload" style={{margin:0}}>
          <div className="avatar-circle" style={{width:80,height:80}} onClick={() => document.getElementById('profile-photo-input').click()}>
            <span className="avatar-initials" style={{fontSize:26}}>CR</span>
            <div className="avatar-overlay"><span>📷</span></div>
          </div>
          <input id="profile-photo-input" type="file" accept="image/*" style={{display:"none"}} onChange={e => {
            const file = e.target.files[0];
            if(file){ showToast("Foto de perfil actualizada"); }
          }} />
        </div>
        <div>
          <h3 style={{marginBottom:4}}>Carlos Rodríguez</h3>
          <p style={{fontSize:13,color:"var(--muted)",marginBottom:12}}>carlos.rodriguez@email.com · Inversor desde Enero 2025</p>
          <div style={{display:"flex",gap:10}}>
            <span className="chip chip-green">KYC Verificado</span>
            <span className="chip chip-gold">Nivel Premium</span>
            <span className="chip chip-blue">18 países elegibles</span>
          </div>
        </div>
        <div style={{marginLeft:"auto"}}>
          <button className="btn btn-outline btn-sm" onClick={() => document.getElementById('profile-photo-input').click()}>📷 Cambiar foto</button>
        </div>
      </div>
      <div className="profile-grid">
        <div className="profile-card">
          <h4>Información personal</h4>
          {[["Nombre completo","Carlos Rodríguez"],["Email","carlos.rodriguez@email.com"],["País","Argentina"],["Fecha de registro","15 Enero 2025"],["Nivel de cuenta","Premium"]].map(([k,v]) => (
            <div key={k} className="profile-row"><span>{k}</span><span>{v}</span></div>
          ))}
          <button className="btn btn-ghost btn-sm" style={{marginTop:16,width:"100%"}} onClick={() => showToast("Funcionalidad disponible próximamente")}>Editar datos</button>
        </div>
        <div className="profile-card">
          <h4>Estado KYC</h4>
          <div style={{textAlign:"center",padding:"16px 0"}}>
            <div style={{fontSize:48,marginBottom:10}}>✅</div>
            <span className="chip chip-green" style={{fontSize:14,padding:"6px 18px"}}>Verificado · Nivel 2</span>
            <p style={{fontSize:13,color:"var(--muted)",marginTop:12,lineHeight:1.6}}>Tu identidad fue verificada el 16 Ene 2025. Tenés acceso completo a todos los fideicomisos disponibles.</p>
          </div>
          {[["Documento","DNI Verificado ✓"],["Selfie","Aprobada ✓"],["Domicilio","Verificado ✓"],["Perfil inversor","Completado ✓"]].map(([k,v]) => (
            <div key={k} className="profile-row"><span>{k}</span><span style={{color:"var(--green)"}}>{v}</span></div>
          ))}
        </div>
        <div className="profile-card">
          <h4>Métodos de pago</h4>
          {[["🏦","Transferencia bancaria","CBU ****4521","Verificada"],["💱","USDC Wallet","0x3f4a...91bc","Activa"]].map(([ico,n,d,s],i) => (
            <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 0",borderBottom:"1px solid var(--border)"}}>
              <span style={{fontSize:22}}>{ico}</span>
              <div style={{flex:1}}><div style={{fontWeight:600,fontSize:14}}>{n}</div><div style={{fontSize:12,color:"var(--muted)"}}>{d}</div></div>
              <span className="chip chip-green">{s}</span>
            </div>
          ))}
          <button className="btn btn-outline btn-sm" style={{marginTop:14,width:"100%"}} onClick={() => showToast("Agregá un nuevo método de pago")}>+ Agregar método</button>
        </div>
        <div className="profile-card">
          <h4>Seguridad</h4>
          {[["Contraseña","Actualizada hace 45 días"],["2FA","Activado (Authenticator)"],["Sesiones activas","1 dispositivo"],["Último acceso","Hoy 09:42 hs"]].map(([k,v]) => (
            <div key={k} className="profile-row"><span>{k}</span><span style={{fontSize:13}}>{v}</span></div>
          ))}
          <button className="btn btn-ghost btn-sm" style={{marginTop:16,width:"100%"}} onClick={() => showToast("Configuración de seguridad")}>Gestionar seguridad</button>
        </div>
      </div>
    </>
  );
}

function DashboardPage({ setPage, setLoggedIn, showToast }) {
  const [dashPage, setDashPage] = useState("overview");
  const content = {
    overview: <DashOverview setPage={setPage} setDashPage={setDashPage} showToast={showToast} />,
    portfolio: <DashPortfolio setPage={setPage} />,
    transactions: <DashTransactions />,
    profile: <DashProfile showToast={showToast} />,
    settings: <DashProfile showToast={showToast} />,
  };
  return (
    <div className="page">
      <DashLayout dashPage={dashPage} setDashPage={setDashPage} setPage={setPage} setLoggedIn={setLoggedIn}>
        {content[dashPage] || content.overview}
      </DashLayout>
    </div>
  );
}

/* ══════════════════════════════
   ROOT APP
══════════════════════════════ */
export default function App() {
  const [page, setPage] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);
  const [fills, setFills] = useState([0, 0, 0, 0]);
  const [lang, setLang] = useState('es');
  const t = (k) => (T[lang] && T[lang][k]) ? T[lang][k] : (T['es'][k] || k);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profileName, setProfileName] = useState("Carlos Rodríguez");
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  useEffect(() => { setTimeout(() => setFills([72, 45, 88, 31]), 600); }, []);

  const showToast = (msg) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  };

  const navigate = (p) => { setPage(p); window.scrollTo(0, 0); };

  const projectId = page.startsWith("project-") ? page.replace("project-", "") : null;

  const renderPage = () => {
    if (projectId) return <ProjectDetailPage projectId={projectId} setPage={navigate} loggedIn={loggedIn} fills={fills} showToast={showToast} />;
    switch (page) {
      case "home": return <HomePage setPage={navigate} fills={fills} t={t} lang={lang} />;
      case "projects": return <ProjectsPage setPage={navigate} fills={fills} />;
      case "simulator": return <SimulatorPage setPage={navigate} loggedIn={loggedIn} t={t} />;
      case "education": return <EducationPage setPage={navigate} />;
      case "institutional": return <InstitutionalPage setPage={navigate} />;
      case "register": return <RegisterPage setPage={navigate} setLoggedIn={setLoggedIn} showToast={showToast} t={t} />;
      case "login": return <LoginPage setPage={navigate} setLoggedIn={setLoggedIn} showToast={showToast} t={t} />;
      case "kyc": return <KYCPage setPage={navigate} showToast={showToast} />;
      case "dashboard": return <DashboardPage setPage={navigate} setLoggedIn={setLoggedIn} showToast={showToast} />;
      default: return <HomePage setPage={navigate} fills={fills} />;
    }
  };

  const showNav = !["register","login","kyc"].includes(page);

  return (
    <>
      <style>{CSS}</style>
      {showNav && <Nav page={page} setPage={navigate} loggedIn={loggedIn} setLoggedIn={setLoggedIn} lang={lang} setLang={setLang} t={t} />}
      {renderPage()}
      <Toast msg={toast} />
    </>
  );
}
