import { useState, useEffect, useRef } from "react";

const T = {
  es:{
    nav_home:"Inicio",nav_projects:"Proyectos",nav_simulator:"Simulador",nav_education:"Educación",nav_institutional:"Institucional",
    nav_login:"Iniciar sesión",nav_register:"Crear cuenta",nav_myaccount:"Mi cuenta",nav_logout:"Salir",
    hero_badge:"Plataforma de activos tokenizados · Est. 2024",
    hero_h1a:"Invierte en activos",hero_h1b:"reales",hero_h1c:"desde cualquier parte del mundo.",
    hero_p:"Transformamos propiedades, flotas vehiculares y parques solares en tokens accesibles. Rendimientos reales, respaldo legal, trazabilidad blockchain.",
    hero_cta1:"Ver Oportunidades →",hero_cta2:"Simular mi inversión",
    hero_s1:"Capital gestionado",hero_s2:"Inversores activos",hero_s3:"TIR promedio anual",
    trust_label:"Respaldo institucional",
    m1:"Capital tokenizado",m2:"Inversores · 18 países",m3:"Activos disponibles",m4:"Trazabilidad blockchain",m5:"TIR promedio histórica",
    how_tag:"Proceso simple",how_title:"Tu camino en 3 pasos",how_sub:"Sin burocracia ni fronteras. Elegí, invertí, cobrá.",
    how_s1t:"Creá tu cuenta",how_s1d:"Proceso KYC 100% digital en minutos. Identidad verificada, acceso inmediato al catálogo.",
    how_s2t:"Elegí y tokenizá",how_s2d:"Seleccioná el fideicomiso. Invertí via transferencia bancaria, SWIFT o stablecoins USDT/USDC.",
    how_s3t:"Recibí ganancias",how_s3d:"Monitoreá rendimientos en tiempo real desde tu dashboard. Retirá según las condiciones del fideicomiso.",
    how_cta:"Comenzar ahora →",
    showcase_tag:"Activos disponibles",showcase_title:"Invertí en lo que podés ver y tocar",showcase_sub:"Cada fideicomiso está respaldado por activos tangibles, auditados y tokenizados en blockchain.",
    proj_tag:"Portafolio",proj_title:"Diversificá tu capital en activos reales",proj_sub:"Activos tangibles, rendimientos verificables, contratos en blockchain.",
    proj_seeall:"Ver todos →",proj_viewdetail:"Ver detalle",proj_tir:"TIR Est.",proj_plazo:"Plazo",proj_captacion:"Captación",proj_riesgo:"Riesgo",proj_invest:"Invertir",proj_min:"Mín.",proj_active:"Activo",
    proj_filter_all:"Todos",proj_filter_re:"Real Estate",proj_filter_solar:"Energía Solar",proj_filter_autos:"Flota Autos",proj_filter_infra:"Infraestructura",
    test_tag:"Comunidad",test_title:"Lo que dicen nuestros inversores",
    faq_tag:"FAQ",faq_title:"Todo lo que necesitás saber",
    cta_title:"¿Listo para hacer trabajar tu capital?",cta_sub:"Creá tu cuenta gratis. Sin mínimos elevados, sin burocracia, con total trazabilidad.",
    cta_btn1:"Crear Cuenta Gratis →",cta_btn2:"Hablar con un asesor",
    footer_desc:"Plataforma de tokenización de activos reales. Conectamos la economía real con blockchain para inversores de todo el mundo.",
    footer_legal:"Nexxum S.A. opera bajo las estructuras legales de fideicomisos ordinarios. Los activos digitales están respaldados por contratos inteligentes en la red Polygon. Los valores mostrados son estimaciones y no constituyen garantía de retorno futuro.",
    footer_col1:"Plataforma",footer_col2:"Institucional",footer_col3:"Soporte",
    footer_l_projects:"Proyectos",footer_l_simulator:"Simulador",footer_l_register:"Crear cuenta",footer_l_login:"Acceder",
    footer_l_about:"Quiénes somos",footer_l_education:"Educación",footer_l_whitepaper:"Whitepaper",footer_l_audits:"Auditorías",
    footer_l_faqs:"FAQs",footer_l_terms:"Términos",footer_l_privacy:"Privacidad",footer_l_contact:"Contacto",
    sim_tag:"Herramienta interactiva",sim_title:"Simulador de inversión",sim_sub:"Calculá el retorno estimado según el fideicomiso y el monto que elijas.",
    sim_howmuch:"¿Cuánto deseás invertir?",sim_select:"Seleccioná el fideicomiso",
    sim_annual:"Retorno proyectado anual",sim_permonth:"por mes",
    sim_capital:"Capital inicial",sim_tir:"TIR estimada",sim_risk:"Nivel de riesgo",sim_term:"Plazo sugerido",sim_total:"Total proyectado (1 año)",
    sim_invest:"Invertir en",sim_compare:"Comparativa de fideicomisos",
    sim_disclaimer:"Los valores son simulaciones basadas en rendimientos históricos estimados. No constituyen garantía de retorno futuro.",
    sim_fund:"Fideicomiso",sim_tir_col:"TIR",sim_annual_col:"Retorno anual",sim_risk_col:"Riesgo",
    detail_tag:"Fideicomiso activo",detail_desc:"Descripción del proyecto",
    detail_captacion:"Estado de captación",detail_tokens:"Tokens emitidos",detail_cierre:"Cierre",detail_captado:"captado",
    detail_calc:"Calculá tu retorno",detail_calc_sub:"Ingresá tu monto y mirá el retorno estimado",
    detail_amount:"Monto a invertir",detail_annual:"Retorno anual est.",detail_monthly:"Retorno mensual",detail_total_proj:"Total proyectado",
    detail_invest_now:"Invertir ahora →",detail_create_invest:"Crear cuenta e invertir →",detail_have_acc:"Ya tengo cuenta",detail_docs:"Documentación",
    detail_disclaimer:"Los valores son estimaciones. No garantizan retorno futuro.",
    edu_tag:"Centro de aprendizaje",edu_title:"Entendé el modelo antes de invertir",edu_sub:"La transparencia empieza por la educación.",
    edu_readmore:"Leer más →",edu_close:"Cerrar ↑",
    edu_arts_t1:"¿Qué es un fideicomiso?",edu_arts_t2:"Tokenización de activos reales",edu_arts_t3:"TIR: Tasa Interna de Retorno",
    edu_arts_t4:"Medios de pago internacionales",edu_arts_t5:"Marco legal y regulatorio",edu_arts_t6:"Verificación blockchain",
    edu_cta_title:"¿Estás listo para dar el primer paso?",edu_cta_sub:"Creá tu cuenta gratis y empezá a explorar las oportunidades.",
    edu_cta_btn1:"Crear cuenta →",edu_cta_btn2:"Ir al simulador",
    inst_tag:"Quiénes somos",inst_title:"Nexxum S.A.",inst_sub:"Empresa de tecnología financiera especializada en tokenización de activos reales.",
    inst_mission_title:"Nuestra misión",inst_mission_text:"Democratizar el acceso a inversiones en activos reales mediante la tokenización y los fideicomisos como vehículo legal de protección patrimonial.",
    inst_history:"Nuestra historia",inst_legal:"Marco legal",inst_contact_title:"Contacto institucional",
    inst_contact_sub:"¿Sos un inversor institucional o querés ser partner distribuidor?",inst_contact_btn:"Enviar consulta institucional",
    inst_team_tag:"Equipo",inst_team_title:"Quiénes están detrás de Nexxum",
    reg_title:"Crear cuenta",reg_step1:"Paso 1 de 3 · Tus datos",reg_step2:"Paso 2 de 3 · Seguridad",reg_step3:"Paso 3 de 3 · Confirmación",
    reg_name:"Nombre",reg_lastname:"Apellido",reg_email:"Email",reg_country:"País de residencia",
    reg_pass:"Contraseña",reg_pass2:"Repetir contraseña",reg_pass_hint:"Mínimo 8 caracteres, una mayúscula y un número.",
    reg_terms:"Acepto los Términos y Condiciones y la Política de Privacidad de Nexxum S.A.",
    reg_news:"Acepto recibir comunicaciones sobre nuevas oportunidades (opcional)",
    reg_create:"Crear mi cuenta →",reg_next:"Continuar →",reg_back:"← Atrás",
    reg_already:"¿Ya tenés cuenta?",reg_signin:"Iniciá sesión",reg_photo:"Subí tu foto de perfil (opcional)",
    reg_name_ph:"Juan",reg_lastname_ph:"García",reg_email_ph:"tu@email.com",
    log_title:"Iniciá sesión",log_sub:"Accedé a tu panel de inversiones",
    log_pass:"Contraseña",log_forgot:"¿Olvidaste tu contraseña?",log_enter:"Ingresar →",
    log_no_account:"¿No tenés cuenta?",log_signup:"Registrate gratis",
    kyc_title:"Verificación de identidad",kyc_sub:"Necesitamos verificar tu identidad para cumplir con las regulaciones internacionales (KYC/AML)",
    kyc_step1:"Información personal",kyc_dob:"Fecha de nacimiento",kyc_doc_type:"Tipo de documento",kyc_doc_num:"Número de documento",kyc_address:"Domicilio completo",
    kyc_step2:"Documentación fotográfica",kyc_doc_front:"Frente del documento",kyc_doc_back:"Dorso del documento",kyc_selfie:"Selfie sosteniendo documento",kyc_upload_hint:"Click para subir · JPG, PNG · Máx. 5MB",
    kyc_step3:"Perfil de inversor",kyc_funds_source:"Fuente de fondos",kyc_inv_range:"Rango de inversión estimado (USD)",kyc_pep:"¿Sos una Persona Políticamente Expuesta?",kyc_declare:"Declaro que la información es verdadera.",
    kyc_send:"Enviar verificación →",kyc_sent_title:"Verificación enviada",kyc_sent_sub:"Revisaremos tu documentación en las próximas 24-48 horas. Te notificaremos por email.",kyc_go_dash:"Ir a mi dashboard →",kyc_continue:"Continuar →",kyc_back:"← Atrás",
    dash_hello:"Buenos días",dash_nextpay:"Próximo pago de rendimientos",dash_last_update:"Última actualización",
    dash_kyc_verified:"Identidad verificada · Nivel 2",dash_kyc_sub:"Tu cuenta tiene acceso completo a todos los fideicomisos.",dash_kyc_badge:"KYC Aprobado",
    dash_pay_info:"05 de junio · Flota de Autos + Energía Solar · Acredita en tu cuenta",
    dash_overview:"Dashboard",dash_portfolio:"Mi Portafolio",dash_transactions:"Transacciones",dash_explore:"Explorar",dash_profile:"Perfil y KYC",dash_settings:"Configuración",
    dash_kpi1:"Capital total",dash_kpi2:"Rendimiento acumulado",dash_kpi3:"Ganancias este mes",dash_kpi4:"Fondos activos",
    dash_kpi1_chg:"+18.3% desde inicio",dash_kpi2_chg:"+22.5% total",dash_kpi3_chg:"+5.8% vs anterior",dash_kpi4_chg:"Diversificado",
    dash_chart1_title:"Distribución",dash_chart1_sub:"Portafolio actual",dash_chart2_title:"Rendimientos mensuales",dash_chart2_sub:"Ganancias líquidas 2025",dash_chart2_total:"Total acumulado 2025",
    dash_positions_title:"Posiciones activas",dash_positions_sub:"Contratos y trazabilidad blockchain",
    dash_col_asset:"Activo",dash_col_capital:"Capital",dash_col_tir:"TIR Real",dash_col_gain:"Ganancia",dash_col_nextpay:"Próx. pago",dash_col_status:"Estado",dash_col_chain:"Blockchain",
    dash_btn_report:"Descargar informe",dash_btn_newinv:"+ Nueva inversión",dash_btn_portfolio:"Ver portafolio →",dash_status_active:"Activo",
    port_kpi1:"Valor total",port_kpi2:"Ganancia total",port_kpi3:"Retorno global",port_kpi4:"Fondos",
    risk_bajo:"Bajo",risk_mod:"Moderado",risk_com:"Comercial",
  },
  en:{
    nav_home:"Home",nav_projects:"Projects",nav_simulator:"Simulator",nav_education:"Education",nav_institutional:"About Us",
    nav_login:"Sign in",nav_register:"Create account",nav_myaccount:"My account",nav_logout:"Sign out",
    hero_badge:"Real asset tokenization platform · Est. 2024",
    hero_h1a:"Invest in",hero_h1b:"real",hero_h1c:"assets from anywhere in the world.",
    hero_p:"We transform properties, vehicle fleets and solar parks into accessible tokens. Real returns, legal backing, blockchain traceability.",
    hero_cta1:"View Opportunities →",hero_cta2:"Simulate my investment",
    hero_s1:"Assets under management",hero_s2:"Active investors",hero_s3:"Average annual IRR",
    trust_label:"Institutional backing",
    m1:"Tokenized capital",m2:"Investors · 18 countries",m3:"Available assets",m4:"Blockchain traceability",m5:"Historical avg. IRR",
    how_tag:"Simple process",how_title:"Your journey in 3 steps",how_sub:"No bureaucracy, no borders. Choose, invest, earn.",
    how_s1t:"Create your account",how_s1d:"100% digital KYC in minutes. Verified identity, immediate catalog access.",
    how_s2t:"Choose and tokenize",how_s2d:"Select your trust fund. Invest via bank transfer, SWIFT or stablecoins USDT/USDC.",
    how_s3t:"Receive your returns",how_s3d:"Monitor returns in real time from your dashboard.",
    how_cta:"Get started →",
    showcase_tag:"Available assets",showcase_title:"Invest in what you can see and touch",showcase_sub:"Each trust fund is backed by tangible, audited assets tokenized on blockchain.",
    proj_tag:"Portfolio",proj_title:"Diversify your capital in real assets",proj_sub:"Tangible assets, verifiable returns, blockchain contracts.",
    proj_seeall:"See all →",proj_viewdetail:"View detail",proj_tir:"Est. IRR",proj_plazo:"Term",proj_captacion:"Fundraising",proj_riesgo:"Risk",proj_invest:"Invest",proj_min:"Min.",proj_active:"Active",
    proj_filter_all:"All",proj_filter_re:"Real Estate",proj_filter_solar:"Solar Energy",proj_filter_autos:"Vehicle Fleet",proj_filter_infra:"Infrastructure",
    test_tag:"Community",test_title:"What our investors say",
    faq_tag:"FAQ",faq_title:"Everything you need to know",
    cta_title:"Ready to put your capital to work?",cta_sub:"Create your free account. No high minimums, no bureaucracy, full traceability.",
    cta_btn1:"Create Free Account →",cta_btn2:"Talk to an advisor",
    footer_desc:"Real asset tokenization platform connecting the real economy with blockchain for investors worldwide.",
    footer_legal:"Nexxum S.A. operates under ordinary trust fund legal structures. Digital assets are backed by smart contracts on the Polygon network. Values shown are estimates and do not guarantee future returns.",
    footer_col1:"Platform",footer_col2:"Institutional",footer_col3:"Support",
    footer_l_projects:"Projects",footer_l_simulator:"Simulator",footer_l_register:"Create account",footer_l_login:"Sign in",
    footer_l_about:"About us",footer_l_education:"Education",footer_l_whitepaper:"Whitepaper",footer_l_audits:"Audits",
    footer_l_faqs:"FAQs",footer_l_terms:"Terms",footer_l_privacy:"Privacy",footer_l_contact:"Contact",
    sim_tag:"Interactive tool",sim_title:"Investment simulator",sim_sub:"Calculate your estimated return based on the trust fund and amount you choose.",
    sim_howmuch:"How much do you want to invest?",sim_select:"Select trust fund",
    sim_annual:"Projected annual return",sim_permonth:"per month",
    sim_capital:"Initial capital",sim_tir:"Estimated IRR",sim_risk:"Risk level",sim_term:"Suggested term",sim_total:"Projected total (1 year)",
    sim_invest:"Invest in",sim_compare:"Trust fund comparison",
    sim_disclaimer:"Values are simulations based on estimated historical returns. They do not constitute a guarantee of future return.",
    sim_fund:"Trust fund",sim_tir_col:"IRR",sim_annual_col:"Annual return",sim_risk_col:"Risk",
    detail_tag:"Active trust fund",detail_desc:"Project description",
    detail_captacion:"Fundraising status",detail_tokens:"Tokens issued",detail_cierre:"Close",detail_captado:"raised",
    detail_calc:"Calculate your return",detail_calc_sub:"Enter your amount and see the estimated return",
    detail_amount:"Amount to invest",detail_annual:"Est. annual return",detail_monthly:"Monthly return",detail_total_proj:"Projected total",
    detail_invest_now:"Invest now →",detail_create_invest:"Create account & invest →",detail_have_acc:"I already have an account",detail_docs:"Documentation",
    detail_disclaimer:"Values are estimates. They do not guarantee future returns.",
    edu_tag:"Learning center",edu_title:"Understand the model before investing",edu_sub:"Transparency starts with education.",
    edu_readmore:"Read more →",edu_close:"Close ↑",
    edu_arts_t1:"What is a trust fund?",edu_arts_t2:"Real asset tokenization",edu_arts_t3:"IRR: Internal Rate of Return",
    edu_arts_t4:"International payment methods",edu_arts_t5:"Legal and regulatory framework",edu_arts_t6:"Blockchain verification",
    edu_cta_title:"Ready to take the first step?",edu_cta_sub:"Create your free account and start exploring opportunities.",
    edu_cta_btn1:"Create account →",edu_cta_btn2:"Go to simulator",
    inst_tag:"About us",inst_title:"Nexxum S.A.",inst_sub:"Fintech company specialized in real asset tokenization.",
    inst_mission_title:"Our mission",inst_mission_text:"Democratize access to real asset investments through tokenization and trust funds as a legal vehicle for asset protection.",
    inst_history:"Our history",inst_legal:"Legal framework",inst_contact_title:"Institutional contact",
    inst_contact_sub:"Are you an institutional investor or want to be a distribution partner?",inst_contact_btn:"Send institutional inquiry",
    inst_team_tag:"Team",inst_team_title:"The people behind Nexxum",
    reg_title:"Create account",reg_step1:"Step 1 of 3 · Your details",reg_step2:"Step 2 of 3 · Security",reg_step3:"Step 3 of 3 · Confirmation",
    reg_name:"First name",reg_lastname:"Last name",reg_email:"Email",reg_country:"Country of residence",
    reg_pass:"Password",reg_pass2:"Repeat password",reg_pass_hint:"Minimum 8 characters, one uppercase and one number.",
    reg_terms:"I accept the Terms and Conditions and Privacy Policy of Nexxum S.A.",
    reg_news:"I agree to receive communications about new investment opportunities (optional)",
    reg_create:"Create my account →",reg_next:"Continue →",reg_back:"← Back",
    reg_already:"Already have an account?",reg_signin:"Sign in",reg_photo:"Upload your profile photo (optional)",
    reg_name_ph:"John",reg_lastname_ph:"Smith",reg_email_ph:"your@email.com",
    log_title:"Sign in",log_sub:"Access your investment dashboard",
    log_pass:"Password",log_forgot:"Forgot your password?",log_enter:"Sign in →",
    log_no_account:"Don't have an account?",log_signup:"Sign up free",
    kyc_title:"Identity verification",kyc_sub:"We need to verify your identity to comply with international regulations (KYC/AML)",
    kyc_step1:"Personal information",kyc_dob:"Date of birth",kyc_doc_type:"Document type",kyc_doc_num:"Document number",kyc_address:"Full address",
    kyc_step2:"Photo documentation",kyc_doc_front:"Document front",kyc_doc_back:"Document back",kyc_selfie:"Selfie holding document",kyc_upload_hint:"Click to upload · JPG, PNG · Max 5MB",
    kyc_step3:"Investor profile",kyc_funds_source:"Source of funds",kyc_inv_range:"Estimated investment range (USD)",kyc_pep:"Are you a Politically Exposed Person?",kyc_declare:"I declare that the information provided is true.",
    kyc_send:"Submit verification →",kyc_sent_title:"Verification submitted",kyc_sent_sub:"We will review your documentation within 24-48 hours. We will notify you by email.",kyc_go_dash:"Go to my dashboard →",kyc_continue:"Continue →",kyc_back:"← Back",
    dash_hello:"Good morning",dash_nextpay:"Next return payment",dash_last_update:"Last update",
    dash_kyc_verified:"Identity verified · Level 2",dash_kyc_sub:"Your account has full access to all available trust funds.",dash_kyc_badge:"KYC Approved",
    dash_pay_info:"June 05 · Vehicle Fleet + Solar Energy · Credited to your account",
    dash_overview:"Dashboard",dash_portfolio:"My Portfolio",dash_transactions:"Transactions",dash_explore:"Explore",dash_profile:"Profile & KYC",dash_settings:"Settings",
    dash_kpi1:"Total capital",dash_kpi2:"Cumulative return",dash_kpi3:"Earnings this month",dash_kpi4:"Active funds",
    dash_kpi1_chg:"+18.3% since start",dash_kpi2_chg:"+22.5% total",dash_kpi3_chg:"+5.8% vs previous",dash_kpi4_chg:"Diversified",
    dash_chart1_title:"Distribution",dash_chart1_sub:"Current portfolio",dash_chart2_title:"Monthly returns",dash_chart2_sub:"Net earnings 2025",dash_chart2_total:"Total accumulated 2025",
    dash_positions_title:"Active positions",dash_positions_sub:"Contracts and blockchain traceability",
    dash_col_asset:"Asset",dash_col_capital:"Capital",dash_col_tir:"Real IRR",dash_col_gain:"Gain",dash_col_nextpay:"Next pay",dash_col_status:"Status",dash_col_chain:"Blockchain",
    dash_btn_report:"Download report",dash_btn_newinv:"+ New investment",dash_btn_portfolio:"View portfolio →",dash_status_active:"Active",
    port_kpi1:"Total value",port_kpi2:"Total gain",port_kpi3:"Global return",port_kpi4:"Funds",
    risk_bajo:"Low",risk_mod:"Moderate",risk_com:"Commercial",
  },
  fr:{
    nav_home:"Accueil",nav_projects:"Projets",nav_simulator:"Simulateur",nav_education:"Éducation",nav_institutional:"À propos",
    nav_login:"Se connecter",nav_register:"Créer un compte",nav_myaccount:"Mon compte",nav_logout:"Se déconnecter",
    hero_badge:"Plateforme de tokenisation d'actifs réels · Est. 2024",
    hero_h1a:"Investissez dans des actifs",hero_h1b:"réels",hero_h1c:"depuis n'importe où.",
    hero_p:"Nous transformons des propriétés, flottes et parcs solaires en tokens accessibles. Rendements réels, cadre juridique, traçabilité blockchain.",
    hero_cta1:"Voir les opportunités →",hero_cta2:"Simuler mon investissement",
    hero_s1:"Actifs sous gestion",hero_s2:"Investisseurs actifs",hero_s3:"TRI moyen annuel",
    trust_label:"Soutien institutionnel",
    m1:"Capital tokenisé",m2:"Investisseurs · 18 pays",m3:"Actifs disponibles",m4:"Traçabilité blockchain",m5:"TRI historique moyen",
    how_tag:"Processus simple",how_title:"Votre parcours en 3 étapes",how_sub:"Sans bureaucratie. Choisissez, investissez, encaissez.",
    how_s1t:"Créez votre compte",how_s1d:"KYC 100% numérique en quelques minutes.",
    how_s2t:"Choisissez et tokenisez",how_s2d:"Sélectionnez votre fonds. Investissez par virement ou stablecoins.",
    how_s3t:"Recevez vos rendements",how_s3d:"Suivez vos rendements en temps réel depuis votre tableau de bord.",
    how_cta:"Commencer →",
    showcase_tag:"Actifs disponibles",showcase_title:"Investissez dans ce que vous pouvez voir",showcase_sub:"Chaque fonds est adossé à des actifs tangibles, audités et tokenisés sur blockchain.",
    proj_tag:"Portefeuille",proj_title:"Diversifiez dans des actifs réels",proj_sub:"Actifs tangibles, rendements vérifiables, contrats blockchain.",
    proj_seeall:"Voir tout →",proj_viewdetail:"Voir le détail",proj_tir:"TRI Est.",proj_plazo:"Durée",proj_captacion:"Collecte",proj_riesgo:"Risque",proj_invest:"Investir",proj_min:"Min.",proj_active:"Actif",
    proj_filter_all:"Tous",proj_filter_re:"Immobilier",proj_filter_solar:"Énergie Solaire",proj_filter_autos:"Flotte",proj_filter_infra:"Infrastructure",
    test_tag:"Communauté",test_title:"Ce que disent nos investisseurs",
    faq_tag:"FAQ",faq_title:"Tout ce que vous devez savoir",
    cta_title:"Prêt à faire travailler votre capital?",cta_sub:"Créez votre compte gratuit.",
    cta_btn1:"Créer un compte →",cta_btn2:"Parler à un conseiller",
    footer_desc:"Plateforme de tokenisation d'actifs réels.",
    footer_legal:"Nexxum S.A. opère sous des structures juridiques de fiducies. Les actifs numériques sont adossés à des contrats intelligents sur Polygon.",
    footer_col1:"Plateforme",footer_col2:"Institutionnel",footer_col3:"Support",
    footer_l_projects:"Projets",footer_l_simulator:"Simulateur",footer_l_register:"Créer un compte",footer_l_login:"Se connecter",
    footer_l_about:"À propos",footer_l_education:"Éducation",footer_l_whitepaper:"Livre blanc",footer_l_audits:"Audits",
    footer_l_faqs:"FAQ",footer_l_terms:"Conditions",footer_l_privacy:"Confidentialité",footer_l_contact:"Contact",
    sim_tag:"Outil interactif",sim_title:"Simulateur d'investissement",sim_sub:"Calculez le rendement estimé.",
    sim_howmuch:"Combien souhaitez-vous investir?",sim_select:"Sélectionnez le fonds",
    sim_annual:"Rendement annuel projeté",sim_permonth:"par mois",
    sim_capital:"Capital initial",sim_tir:"TRI estimé",sim_risk:"Niveau de risque",sim_term:"Durée suggérée",sim_total:"Total projeté (1 an)",
    sim_invest:"Investir dans",sim_compare:"Comparaison des fonds",
    sim_disclaimer:"Simulations basées sur des rendements historiques estimés.",
    sim_fund:"Fonds",sim_tir_col:"TRI",sim_annual_col:"Rendement annuel",sim_risk_col:"Risque",
    detail_tag:"Fonds actif",detail_desc:"Description",detail_captacion:"État de la collecte",detail_tokens:"Tokens émis",detail_cierre:"Clôture",detail_captado:"collecté",
    detail_calc:"Calculez votre rendement",detail_calc_sub:"Entrez votre montant",
    detail_amount:"Montant",detail_annual:"Rendement annuel",detail_monthly:"Rendement mensuel",detail_total_proj:"Total projeté",
    detail_invest_now:"Investir →",detail_create_invest:"Créer un compte et investir →",detail_have_acc:"J'ai déjà un compte",detail_docs:"Documentation",
    detail_disclaimer:"Estimations uniquement.",
    edu_tag:"Centre d'apprentissage",edu_title:"Comprenez avant d'investir",edu_sub:"La transparence commence par l'éducation.",
    edu_readmore:"Lire →",edu_close:"Fermer ↑",
    edu_arts_t1:"Qu'est-ce qu'un fonds fiduciaire?",edu_arts_t2:"Tokenisation d'actifs réels",edu_arts_t3:"TRI: Taux de Rentabilité Interne",
    edu_arts_t4:"Moyens de paiement internationaux",edu_arts_t5:"Cadre légal et réglementaire",edu_arts_t6:"Vérification blockchain",
    edu_cta_title:"Prêt à franchir le premier pas?",edu_cta_sub:"Créez votre compte gratuit.",
    edu_cta_btn1:"Créer un compte →",edu_cta_btn2:"Aller au simulateur",
    inst_tag:"À propos",inst_title:"Nexxum S.A.",inst_sub:"Fintech spécialisée dans la tokenisation d'actifs réels.",
    inst_mission_title:"Notre mission",inst_mission_text:"Démocratiser l'accès aux investissements en actifs réels.",
    inst_history:"Notre histoire",inst_legal:"Cadre légal",inst_contact_title:"Contact institutionnel",
    inst_contact_sub:"Investisseur institutionnel ou partenaire?",inst_contact_btn:"Envoyer une demande",
    inst_team_tag:"Équipe",inst_team_title:"Les personnes derrière Nexxum",
    reg_title:"Créer un compte",reg_step1:"Étape 1/3",reg_step2:"Étape 2/3",reg_step3:"Étape 3/3",
    reg_name:"Prénom",reg_lastname:"Nom",reg_email:"Email",reg_country:"Pays",
    reg_pass:"Mot de passe",reg_pass2:"Confirmer",reg_pass_hint:"Min. 8 caractères, une majuscule et un chiffre.",
    reg_terms:"J'accepte les Conditions d'utilisation.",reg_news:"Recevoir des communications (optionnel)",
    reg_create:"Créer mon compte →",reg_next:"Continuer →",reg_back:"← Retour",
    reg_already:"Déjà un compte?",reg_signin:"Se connecter",reg_photo:"Photo de profil (optionnel)",
    reg_name_ph:"Jean",reg_lastname_ph:"Dupont",reg_email_ph:"votre@email.com",
    log_title:"Se connecter",log_sub:"Accédez à votre tableau de bord",
    log_pass:"Mot de passe",log_forgot:"Mot de passe oublié?",log_enter:"Se connecter →",
    log_no_account:"Pas de compte?",log_signup:"S'inscrire",
    kyc_title:"Vérification d'identité",kyc_sub:"KYC/AML requis",kyc_step1:"Informations personnelles",kyc_dob:"Date de naissance",kyc_doc_type:"Type de document",kyc_doc_num:"Numéro",kyc_address:"Adresse",
    kyc_step2:"Documentation",kyc_doc_front:"Recto",kyc_doc_back:"Verso",kyc_selfie:"Selfie",kyc_upload_hint:"Cliquez · JPG, PNG · Max 5Mo",
    kyc_step3:"Profil investisseur",kyc_funds_source:"Source des fonds",kyc_inv_range:"Fourchette (USD)",kyc_pep:"PPE?",kyc_declare:"Je déclare que les informations sont exactes.",
    kyc_send:"Soumettre →",kyc_sent_title:"Soumis",kyc_sent_sub:"Examen sous 24-48h.",kyc_go_dash:"Tableau de bord →",kyc_continue:"Continuer →",kyc_back:"← Retour",
    dash_hello:"Bonjour",dash_nextpay:"Prochain paiement",dash_last_update:"Mise à jour",
    dash_kyc_verified:"Vérifié · Niveau 2",dash_kyc_sub:"Accès complet.",dash_kyc_badge:"KYC Approuvé",
    dash_pay_info:"05 juin · Flotte + Solaire",
    dash_overview:"Tableau de bord",dash_portfolio:"Portefeuille",dash_transactions:"Transactions",dash_explore:"Explorer",dash_profile:"Profil",dash_settings:"Paramètres",
    dash_kpi1:"Capital total",dash_kpi2:"Rendement cumulé",dash_kpi3:"Gains ce mois",dash_kpi4:"Fonds actifs",
    dash_kpi1_chg:"+18.3%",dash_kpi2_chg:"+22.5%",dash_kpi3_chg:"+5.8%",dash_kpi4_chg:"Diversifié",
    dash_chart1_title:"Répartition",dash_chart1_sub:"Portefeuille actuel",dash_chart2_title:"Rendements mensuels",dash_chart2_sub:"Gains nets 2025",dash_chart2_total:"Total 2025",
    dash_positions_title:"Positions actives",dash_positions_sub:"Contrats blockchain",
    dash_col_asset:"Actif",dash_col_capital:"Capital",dash_col_tir:"TRI",dash_col_gain:"Gain",dash_col_nextpay:"Prochain",dash_col_status:"Statut",dash_col_chain:"Blockchain",
    dash_btn_report:"Télécharger",dash_btn_newinv:"+ Investir",dash_btn_portfolio:"Portefeuille →",dash_status_active:"Actif",
    port_kpi1:"Valeur totale",port_kpi2:"Gain total",port_kpi3:"Rendement",port_kpi4:"Fonds",
    risk_bajo:"Faible",risk_mod:"Modéré",risk_com:"Commercial",
  },
  pt:{
    nav_home:"Início",nav_projects:"Projetos",nav_simulator:"Simulador",nav_education:"Educação",nav_institutional:"Sobre nós",
    nav_login:"Entrar",nav_register:"Criar conta",nav_myaccount:"Minha conta",nav_logout:"Sair",
    hero_badge:"Plataforma de tokenização de ativos reais · Est. 2024",
    hero_h1a:"Invista em ativos",hero_h1b:"reais",hero_h1c:"de qualquer lugar do mundo.",
    hero_p:"Transformamos propriedades, frotas e parques solares em tokens acessíveis. Rendimentos reais, respaldo jurídico, rastreabilidade blockchain.",
    hero_cta1:"Ver Oportunidades →",hero_cta2:"Simular meu investimento",
    hero_s1:"Capital gerenciado",hero_s2:"Investidores ativos",hero_s3:"TIR médio anual",
    trust_label:"Respaldo institucional",
    m1:"Capital tokenizado",m2:"Investidores · 18 países",m3:"Ativos disponíveis",m4:"Rastreabilidade blockchain",m5:"TIR histórico médio",
    how_tag:"Processo simples",how_title:"Sua jornada em 3 passos",how_sub:"Sem burocracia. Escolha, invista, receba.",
    how_s1t:"Crie sua conta",how_s1d:"KYC 100% digital em minutos.",
    how_s2t:"Escolha e tokenize",how_s2d:"Selecione o fundo. Invista via transferência ou stablecoins.",
    how_s3t:"Receba seus rendimentos",how_s3d:"Monitore em tempo real pelo dashboard.",
    how_cta:"Começar →",
    showcase_tag:"Ativos disponíveis",showcase_title:"Invista no que você pode ver",showcase_sub:"Cada fundo é respaldado por ativos tangíveis, auditados e tokenizados em blockchain.",
    proj_tag:"Portfólio",proj_title:"Diversifique em ativos reais",proj_sub:"Ativos tangíveis, rendimentos verificáveis, contratos blockchain.",
    proj_seeall:"Ver todos →",proj_viewdetail:"Ver detalhe",proj_tir:"TIR Est.",proj_plazo:"Prazo",proj_captacion:"Captação",proj_riesgo:"Risco",proj_invest:"Investir",proj_min:"Mín.",proj_active:"Ativo",
    proj_filter_all:"Todos",proj_filter_re:"Imóveis",proj_filter_solar:"Energia Solar",proj_filter_autos:"Frota",proj_filter_infra:"Infraestrutura",
    test_tag:"Comunidade",test_title:"O que dizem nossos investidores",
    faq_tag:"FAQ",faq_title:"Tudo que você precisa saber",
    cta_title:"Pronto para fazer seu capital trabalhar?",cta_sub:"Crie sua conta grátis.",
    cta_btn1:"Criar Conta Grátis →",cta_btn2:"Falar com consultor",
    footer_desc:"Plataforma de tokenização de ativos reais.",
    footer_legal:"Nexxum S.A. opera sob estruturas jurídicas de fundos fiduciários. Os ativos digitais são respaldados por contratos inteligentes na rede Polygon.",
    footer_col1:"Plataforma",footer_col2:"Institucional",footer_col3:"Suporte",
    footer_l_projects:"Projetos",footer_l_simulator:"Simulador",footer_l_register:"Criar conta",footer_l_login:"Entrar",
    footer_l_about:"Sobre nós",footer_l_education:"Educação",footer_l_whitepaper:"Whitepaper",footer_l_audits:"Auditorias",
    footer_l_faqs:"FAQs",footer_l_terms:"Termos",footer_l_privacy:"Privacidade",footer_l_contact:"Contato",
    sim_tag:"Ferramenta interativa",sim_title:"Simulador de investimento",sim_sub:"Calcule o retorno estimado.",
    sim_howmuch:"Quanto você deseja investir?",sim_select:"Selecione o fundo",
    sim_annual:"Retorno anual projetado",sim_permonth:"por mês",
    sim_capital:"Capital inicial",sim_tir:"TIR estimado",sim_risk:"Nível de risco",sim_term:"Prazo sugerido",sim_total:"Total projetado (1 ano)",
    sim_invest:"Investir em",sim_compare:"Comparativo de fundos",
    sim_disclaimer:"Simulações baseadas em rendimentos históricos estimados.",
    sim_fund:"Fundo",sim_tir_col:"TIR",sim_annual_col:"Retorno anual",sim_risk_col:"Risco",
    detail_tag:"Fundo ativo",detail_desc:"Descrição",detail_captacion:"Captação",detail_tokens:"Tokens emitidos",detail_cierre:"Encerramento",detail_captado:"captado",
    detail_calc:"Calcule seu retorno",detail_calc_sub:"Insira seu valor",
    detail_amount:"Valor",detail_annual:"Retorno anual",detail_monthly:"Retorno mensal",detail_total_proj:"Total projetado",
    detail_invest_now:"Investir →",detail_create_invest:"Criar conta e investir →",detail_have_acc:"Já tenho conta",detail_docs:"Documentação",
    detail_disclaimer:"Apenas estimativas.",
    edu_tag:"Centro de aprendizado",edu_title:"Entenda antes de investir",edu_sub:"A transparência começa pela educação.",
    edu_readmore:"Ler →",edu_close:"Fechar ↑",
    edu_arts_t1:"O que é um fundo fiduciário?",edu_arts_t2:"Tokenização de ativos reais",edu_arts_t3:"TIR: Taxa Interna de Retorno",
    edu_arts_t4:"Meios de pagamento internacionais",edu_arts_t5:"Marco legal e regulatório",edu_arts_t6:"Verificação blockchain",
    edu_cta_title:"Pronto para o primeiro passo?",edu_cta_sub:"Crie sua conta grátis.",
    edu_cta_btn1:"Criar conta →",edu_cta_btn2:"Ir ao simulador",
    inst_tag:"Sobre nós",inst_title:"Nexxum S.A.",inst_sub:"Fintech especializada em tokenização de ativos reais.",
    inst_mission_title:"Nossa missão",inst_mission_text:"Democratizar o acesso a investimentos em ativos reais.",
    inst_history:"Nossa história",inst_legal:"Marco legal",inst_contact_title:"Contato institucional",
    inst_contact_sub:"Investidor institucional ou parceiro?",inst_contact_btn:"Enviar consulta",
    inst_team_tag:"Equipe",inst_team_title:"As pessoas por trás da Nexxum",
    reg_title:"Criar conta",reg_step1:"Passo 1/3",reg_step2:"Passo 2/3",reg_step3:"Passo 3/3",
    reg_name:"Nome",reg_lastname:"Sobrenome",reg_email:"Email",reg_country:"País",
    reg_pass:"Senha",reg_pass2:"Confirmar",reg_pass_hint:"Mín. 8 caracteres, uma maiúscula e um número.",
    reg_terms:"Aceito os Termos e Condições.",reg_news:"Receber comunicações (opcional)",
    reg_create:"Criar minha conta →",reg_next:"Continuar →",reg_back:"← Voltar",
    reg_already:"Já tem conta?",reg_signin:"Entrar",reg_photo:"Foto de perfil (opcional)",
    reg_name_ph:"João",reg_lastname_ph:"Silva",reg_email_ph:"seu@email.com",
    log_title:"Entrar",log_sub:"Acesse seu painel",
    log_pass:"Senha",log_forgot:"Esqueceu a senha?",log_enter:"Entrar →",
    log_no_account:"Sem conta?",log_signup:"Cadastre-se",
    kyc_title:"Verificação de identidade",kyc_sub:"KYC/AML obrigatório",kyc_step1:"Informações pessoais",kyc_dob:"Data de nascimento",kyc_doc_type:"Tipo de documento",kyc_doc_num:"Número",kyc_address:"Endereço",
    kyc_step2:"Documentação",kyc_doc_front:"Frente",kyc_doc_back:"Verso",kyc_selfie:"Selfie",kyc_upload_hint:"Clique · JPG, PNG · Máx 5MB",
    kyc_step3:"Perfil investidor",kyc_funds_source:"Fonte dos fundos",kyc_inv_range:"Faixa (USD)",kyc_pep:"PPE?",kyc_declare:"Declaro que as informações são verdadeiras.",
    kyc_send:"Enviar →",kyc_sent_title:"Enviado",kyc_sent_sub:"Revisão em 24-48h.",kyc_go_dash:"Ir para o painel →",kyc_continue:"Continuar →",kyc_back:"← Voltar",
    dash_hello:"Bom dia",dash_nextpay:"Próximo pagamento",dash_last_update:"Atualização",
    dash_kyc_verified:"Verificado · Nível 2",dash_kyc_sub:"Acesso completo.",dash_kyc_badge:"KYC Aprovado",
    dash_pay_info:"05 de junho · Frota + Solar",
    dash_overview:"Painel",dash_portfolio:"Portfólio",dash_transactions:"Transações",dash_explore:"Explorar",dash_profile:"Perfil",dash_settings:"Configurações",
    dash_kpi1:"Capital total",dash_kpi2:"Rendimento acumulado",dash_kpi3:"Ganhos este mês",dash_kpi4:"Fundos ativos",
    dash_kpi1_chg:"+18.3%",dash_kpi2_chg:"+22.5%",dash_kpi3_chg:"+5.8%",dash_kpi4_chg:"Diversificado",
    dash_chart1_title:"Distribuição",dash_chart1_sub:"Portfólio atual",dash_chart2_title:"Rendimentos mensais",dash_chart2_sub:"Ganhos líquidos 2025",dash_chart2_total:"Total 2025",
    dash_positions_title:"Posições ativas",dash_positions_sub:"Contratos blockchain",
    dash_col_asset:"Ativo",dash_col_capital:"Capital",dash_col_tir:"TIR Real",dash_col_gain:"Ganho",dash_col_nextpay:"Próx.",dash_col_status:"Status",dash_col_chain:"Blockchain",
    dash_btn_report:"Baixar relatório",dash_btn_newinv:"+ Investir",dash_btn_portfolio:"Portfólio →",dash_status_active:"Ativo",
    port_kpi1:"Valor total",port_kpi2:"Ganho total",port_kpi3:"Retorno global",port_kpi4:"Fundos",
    risk_bajo:"Baixo",risk_mod:"Moderado",risk_com:"Comercial",
  },
};
const PROJECTS = [
  {id:"re-alquiler",cat:"re",ico:"🏢",model:"Alquiler residencial",
   img:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85",
   heroImg:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800&q=90",
   name_es:"Torre Alquiler Premium",name_en:"Premium Rental Tower",name_fr:"Tour Location Premium",name_pt:"Torre Aluguel Premium",
   desc_es:"Portfolio de 48 unidades residenciales premium. Contratos de alquiler indexados con actualización trimestral. Administración profesional y seguro anti-vacancia incluidos. Rentas en dólares.",
   desc_en:"Portfolio of 48 premium residential units. Indexed rental contracts with quarterly updates. Professional management and vacancy insurance included. Dollar-denominated rents.",
   desc_fr:"Portefeuille de 48 unités résidentielles premium. Contrats indexés mis à jour trimestriellement. Gestion professionnelle incluse.",
   desc_pt:"Portfólio de 48 unidades residenciais premium. Contratos de aluguel indexados. Gestão profissional e seguro anti-vacância incluídos.",
   tir:16,plazo_es:"Mediano",plazo_en:"Medium",plazo_fr:"Moyen",plazo_pt:"Médio",
   riskLabel_es:"Comercial",riskLabel_en:"Commercial",riskLabel_fr:"Commercial",riskLabel_pt:"Comercial",
   riskChip:"chip-gold",minInv:1000,captacion:78,tokens:"78.000 / 100.000",fechaCierre:"30 Jun 2026",
   docs:["Contrato de fideicomiso","Tasación inmobiliaria","Due diligence jurídico","Histórico de rentas"],monthly:true},

  {id:"re-construccion",cat:"re",ico:"🏗️",model:"Construcción",
   img:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=85",
   heroImg:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=90",
   name_es:"Desarrollo Residencial Norte",name_en:"North Residential Development",name_fr:"Développement Résidentiel Nord",name_pt:"Desenvolvimento Residencial Norte",
   desc_es:"Fideicomiso de construcción de complejo de 120 unidades en corredor norte. Retorno al vencimiento con prima de construcción del 22% TIR. Empresa constructora con 25 años y garantía de obra.",
   desc_en:"Construction trust for a 120-unit complex. Return at maturity with 22% IRR construction premium. Builder with 25 years of track record and construction guarantee.",
   desc_fr:"Fonds de construction d'un complexe de 120 unités. Rendement à l'échéance avec prime de 22% TRI.",
   desc_pt:"Fundo de construção de complexo de 120 unidades. Retorno no vencimento com prêmio de 22% TIR.",
   tir:22,plazo_es:"Largo",plazo_en:"Long",plazo_fr:"Long",plazo_pt:"Longo",
   riskLabel_es:"Comercial",riskLabel_en:"Commercial",riskLabel_fr:"Commercial",riskLabel_pt:"Comercial",
   riskChip:"chip-gold",minInv:2000,captacion:44,tokens:"44.000 / 100.000",fechaCierre:"31 Dic 2027",
   docs:["Contrato de fideicomiso de construcción","Planos y permisos aprobados","Garantía de la constructora","Cronograma de obra"],monthly:false},

  {id:"re-comercial",cat:"re",ico:"🏬",model:"Alquiler comercial",
   img:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85",
   heroImg:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=90",
   name_es:"Portfolio Oficinas Corporativas",name_en:"Corporate Office Portfolio",name_fr:"Bureaux Corporatifs",name_pt:"Escritórios Corporativos",
   desc_es:"12 oficinas clase A en distrito financiero con contratos de 3 años firmados con multinacionales y empresas tech. Rentas en dólares, sin exposición cambiaria. Vacancia histórica 0%.",
   desc_en:"12 Class A offices in the financial district with 3-year contracts signed with multinationals and tech companies. Dollar rents, zero historical vacancy.",
   desc_fr:"12 bureaux de classe A dans le district financier. Contrats de 3 ans avec multinationales. Vacance historique 0%.",
   desc_pt:"12 escritórios classe A no distrito financeiro. Contratos de 3 anos com multinacionais. Vacância histórica 0%.",
   tir:18,plazo_es:"Mediano",plazo_en:"Medium",plazo_fr:"Moyen",plazo_pt:"Médio",
   riskLabel_es:"Comercial",riskLabel_en:"Commercial",riskLabel_fr:"Commercial",riskLabel_pt:"Comercial",
   riskChip:"chip-gold",minInv:1500,captacion:91,tokens:"91.000 / 100.000",fechaCierre:"15 Mar 2026",
   docs:["Contrato de fideicomiso","Contratos de arrendamiento","Tasación portfolio","Histórico 5 años"],monthly:true},

  {id:"solar-norte",cat:"solar",ico:"☀️",model:"Parque Solar",
   img:"https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=900&q=85",
   heroImg:"https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1800&q=90",
   name_es:"Parque Solar Atacama I",name_en:"Atacama Solar Park I",name_fr:"Parc Solaire Atacama I",name_pt:"Parque Solar Atacama I",
   desc_es:"Parque fotovoltaico de 8MW en zona de alta irradiación solar. Contrato PPA de 15 años con distribuidora regional. Impacto ambiental certificado clase A. Genera créditos de carbono comercializables.",
   desc_en:"8MW photovoltaic park in high solar irradiation zone. 15-year PPA contract with regional distributor. Class A certified environmental impact. Generates tradeable carbon credits.",
   desc_fr:"Parc photovoltaïque 8MW. Contrat PPA 15 ans avec distributeur régional. Impact certifié classe A.",
   desc_pt:"Parque fotovoltaico 8MW. Contrato PPA 15 anos com distribuidora. Impacto ambiental certificado classe A.",
   tir:13,plazo_es:"Largo",plazo_en:"Long",plazo_fr:"Long",plazo_pt:"Longo",
   riskLabel_es:"Bajo",riskLabel_en:"Low",riskLabel_fr:"Faible",riskLabel_pt:"Baixo",
   riskChip:"chip-green",minInv:1000,captacion:62,tokens:"62.000 / 100.000",fechaCierre:"30 Sep 2026",
   docs:["Contrato PPA solar","Evaluación ambiental","Informe técnico","Proyección financiera 15 años"],monthly:true},

  {id:"solar-sur",cat:"solar",ico:"🌞",model:"Parque Solar",
   img:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=85",
   heroImg:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&q=90",
   name_es:"Parque Solar Patagonia II",name_en:"Patagonia Solar Park II",name_fr:"Parc Solaire Patagonie II",name_pt:"Parque Solar Patagônia II",
   desc_es:"12MW de capacidad instalada con tecnología de última generación. Contrato PPA firmado con empresa minera. Retornos mensuales estables y garantizados durante todo el período.",
   desc_en:"12MW installed capacity with latest generation technology. PPA contract signed with mining company. Stable, guaranteed monthly returns throughout the entire period.",
   desc_fr:"12MW de capacité. Contrat PPA signé avec une société minière. Retours mensuels stables.",
   desc_pt:"12MW de capacidade. Contrato PPA com empresa de mineração. Retornos mensais estáveis.",
   tir:12,plazo_es:"Largo",plazo_en:"Long",plazo_fr:"Long",plazo_pt:"Longo",
   riskLabel_es:"Bajo",riskLabel_en:"Low",riskLabel_fr:"Faible",riskLabel_pt:"Baixo",
   riskChip:"chip-green",minInv:1000,captacion:38,tokens:"38.000 / 100.000",fechaCierre:"30 Jun 2027",
   docs:["Contrato PPA","Certificación técnica","Impacto ambiental","Plan mantenimiento 20 años"],monthly:true},

  {id:"solar-distribuida",cat:"solar",ico:"⚡",model:"Generación Distribuida",
   img:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900&q=85",
   heroImg:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1800&q=90",
   name_es:"Red Solar Distribuida Litoral",name_en:"Litoral Distributed Solar Network",name_fr:"Réseau Solaire Distribué",name_pt:"Rede Solar Distribuída",
   desc_es:"35 instalaciones solares en techos industriales y comerciales. Generación distribuida con múltiples contratos de baja volatilidad. Diversificación geográfica y sectorial que minimiza el riesgo.",
   desc_en:"35 solar installations on industrial and commercial rooftops. Distributed generation with multiple low-volatility contracts. Geographic and sectoral diversification minimizes risk.",
   desc_fr:"35 installations solaires sur toits industriels. Génération distribuée avec plusieurs contrats basse volatilité.",
   desc_pt:"35 instalações solares em telhados industriais. Geração distribuída com múltiplos contratos de baixa volatilidade.",
   tir:11,plazo_es:"Mediano",plazo_en:"Medium",plazo_fr:"Moyen",plazo_pt:"Médio",
   riskLabel_es:"Bajo",riskLabel_en:"Low",riskLabel_fr:"Faible",riskLabel_pt:"Baixo",
   riskChip:"chip-green",minInv:500,captacion:55,tokens:"55.000 / 100.000",fechaCierre:"31 Mar 2027",
   docs:["Marco técnico portfolio","Contratos individuales","Certificaciones","Informe de rendimiento"],monthly:true},

  {id:"autos-corporativo",cat:"autos",ico:"🚗",model:"Leasing Corporativo",
   img:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=85",
   heroImg:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1800&q=90",
   name_es:"Flota Ejecutiva Corporativa",name_en:"Corporate Executive Fleet",name_fr:"Flotte Exécutive Corporative",name_pt:"Frota Executiva Corporativa",
   desc_es:"180 vehículos ejecutivos en leasing a 14 empresas corporativas de primer nivel. Contratos de 2-3 años renovables. Seguro todo riesgo y mantenimiento preventivo incluidos.",
   desc_en:"180 executive vehicles on lease to 14 top-tier corporate companies. 2-3 year renewable contracts. Comprehensive insurance and preventive maintenance included.",
   desc_fr:"180 véhicules exécutifs en leasing à 14 entreprises. Contrats renouvelables. Assurance et entretien inclus.",
   desc_pt:"180 veículos executivos em leasing para 14 empresas corporativas. Contratos renováveis. Seguro e manutenção incluídos.",
   tir:15,plazo_es:"Corto",plazo_en:"Short",plazo_fr:"Court",plazo_pt:"Curto",
   riskLabel_es:"Bajo",riskLabel_en:"Low",riskLabel_fr:"Faible",riskLabel_pt:"Baixo",
   riskChip:"chip-green",minInv:500,captacion:83,tokens:"83.000 / 100.000",fechaCierre:"31 Dic 2025",
   docs:["Contrato de fideicomiso","Contratos de leasing","Valuación de flota","Póliza de seguro"],monthly:true},

  {id:"autos-logistica",cat:"autos",ico:"🚐",model:"Logística & Transporte",
   img:"https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=900&q=85",
   heroImg:"https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1800&q=90",
   name_es:"Flota Logística Industrial",name_en:"Industrial Logistics Fleet",name_fr:"Flotte Logistique Industrielle",name_pt:"Frota Logística Industrial",
   desc_es:"220 unidades de transporte de carga con contratos a empresas de distribución y retail. Alta demanda garantizada. Tasas de renovación históricas del 94% y retornos mensuales estables.",
   desc_en:"220 cargo transport units with contracts to distribution and retail companies. Guaranteed high demand. Historical renewal rates of 94% and stable monthly returns.",
   desc_fr:"220 unités de transport avec contrats de distribution. Taux de renouvellement historiques 94%.",
   desc_pt:"220 unidades de transporte com contratos de distribuição. Taxas de renovação históricas 94%.",
   tir:14,plazo_es:"Corto",plazo_en:"Short",plazo_fr:"Court",plazo_pt:"Curto",
   riskLabel_es:"Bajo",riskLabel_en:"Low",riskLabel_fr:"Faible",riskLabel_pt:"Baixo",
   riskChip:"chip-green",minInv:500,captacion:67,tokens:"67.000 / 100.000",fechaCierre:"30 Jun 2026",
   docs:["Contrato fideicomiso","Contratos operativos","Valuación flota","Histórico de pagos"],monthly:true},

  {id:"infra-cogeneracion",cat:"infra",ico:"🏭",model:"Cogeneración Eléctrica",
   img:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=85",
   heroImg:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&q=90",
   name_es:"Planta de Cogeneración Industrial",name_en:"Industrial Cogeneration Plant",name_fr:"Centrale de Cogénération",name_pt:"Planta de Cogeração Industrial",
   desc_es:"Planta de cogeneración de 20MW que provee electricidad y calor a parque industrial. Contrato de 20 años con empresa âncla AAA. Tecnología de alta eficiencia con vida útil de 30 años.",
   desc_en:"20MW cogeneration plant providing electricity and heat to an industrial park. 20-year contract with AAA anchor company. High efficiency technology with 30-year lifespan.",
   desc_fr:"Centrale 20MW pour parc industriel. Contrat 20 ans avec entreprise ancre AAA.",
   desc_pt:"Planta de cogeração 20MW para parque industrial. Contrato 20 anos com empresa âncora AAA.",
   tir:16,plazo_es:"Largo",plazo_en:"Long",plazo_fr:"Long",plazo_pt:"Longo",
   riskLabel_es:"Bajo",riskLabel_en:"Low",riskLabel_fr:"Faible",riskLabel_pt:"Baixo",
   riskChip:"chip-green",minInv:2000,captacion:29,tokens:"29.000 / 100.000",fechaCierre:"31 Mar 2027",
   docs:["Marco regulatorio","Contrato de suministro","Certificación técnica","Plan de mantenimiento"],monthly:true},

  {id:"infra-subestacion",cat:"infra",ico:"🔌",model:"Red de Distribución",
   img:"https://images.unsplash.com/photo-1548407260-da850faa41e3?w=900&q=85",
   heroImg:"https://images.unsplash.com/photo-1548407260-da850faa41e3?w=1800&q=90",
   name_es:"Red de Distribución Eléctrica Sur",name_en:"Southern Electrical Distribution Network",name_fr:"Réseau Distribution Électrique",name_pt:"Rede de Distribuição Elétrica",
   desc_es:"Subestaciones y redes de media tensión para 3 parques industriales. Tarifa regulada con ajuste por inflación energética. Activo estratégico de alta demanda, baja competencia y 15 años de contrato.",
   desc_en:"Substations and medium voltage networks for 3 industrial parks. Regulated tariff with energy inflation adjustment. Strategic asset with high demand, low competition and 15-year contract.",
   desc_fr:"Sous-stations et réseaux moyenne tension pour 3 parcs industriels. Tarif réglementé.",
   desc_pt:"Subestações e redes de média tensão para 3 parques industriais. Tarifa regulada.",
   tir:14,plazo_es:"Largo",plazo_en:"Long",plazo_fr:"Long",plazo_pt:"Longo",
   riskLabel_es:"Bajo",riskLabel_en:"Low",riskLabel_fr:"Faible",riskLabel_pt:"Baixo",
   riskChip:"chip-green",minInv:2000,captacion:41,tokens:"41.000 / 100.000",fechaCierre:"30 Jun 2027",
   docs:["Regulación aplicable","Contratos de red","Certificación técnica","Plan estratégico 15 años"],monthly:true},
];

const TESTIMONIALS=[
  {stars:"★★★★★",name:"Martín Rodríguez",role_es:"Empresario PyME",role_en:"SME Entrepreneur",role_fr:"Chef d'entreprise",role_pt:"Empresário PME",location:"Buenos Aires 🇦🇷",avatar:"MR",fund:"Flota Ejecutiva Corporativa",amount:"USD 15.000",
   text_es:"Llevo 8 meses en el fideicomiso de autos y los pagos son exactamente lo que estimó el simulador. La transparencia blockchain me convenció: cada centavo verificable.",
   text_en:"I've been in the vehicle fleet trust for 8 months and payments are exactly what the simulator estimated. Blockchain transparency convinced me: every cent verifiable.",
   text_fr:"8 mois dans le fonds de véhicules, les paiements sont exactement ce que le simulateur a estimé.",
   text_pt:"8 meses no fundo de veículos e os pagamentos são exatamente o que o simulador estimou."},
  {stars:"★★★★★",name:"Klaus Bauer",role_es:"Gestor de patrimonio",role_en:"Wealth manager",role_fr:"Gestionnaire de patrimoine",role_pt:"Gestor de patrimônio",location:"Múnich 🇩🇪",avatar:"KB",fund:"Portfolio Oficinas Corporativas",amount:"USD 40.000",
   text_es:"Como inversor europeo, lo que me convenció fue poder auditar el contrato inteligente directamente en Polygon. El modelo de fideicomiso es sólido jurídicamente.",
   text_en:"As a European investor, what convinced me was auditing the smart contract directly on Polygon. The trust model is legally solid.",
   text_fr:"Pouvoir auditer le contrat sur Polygon m'a convaincu. Le modèle fiduciaire est juridiquement solide.",
   text_pt:"Poder auditar o contrato no Polygon me convenceu. O modelo fiduciário é juridicamente sólido."},
  {stars:"★★★★★",name:"Valentina Cruz",role_es:"Consultora financiera",role_en:"Financial consultant",role_fr:"Consultante financière",role_pt:"Consultora financeira",location:"Miami 🇺🇸",avatar:"VC",fund:"Parque Solar Atacama I",amount:"USD 22.000",
   text_es:"El simulador muestra TIR reales históricas con auditoría, no promesas vacías. Eso habla de una plataforma que respeta la inteligencia del inversor.",
   text_en:"The simulator shows real historical IRRs with auditing, not empty promises. That speaks to a platform that respects investor intelligence.",
   text_fr:"Le simulateur montre des TRI historiques réels avec audit, pas de promesses vides.",
   text_pt:"O simulador mostra TIRs históricas reais com auditoria, não promessas vazias."},
  {stars:"★★★★★",name:"Ricardo Oliveira",role_es:"Ejecutivo corporativo",role_en:"Corporate executive",role_fr:"Cadre d'entreprise",role_pt:"Executivo corporativo",location:"São Paulo 🇧🇷",avatar:"RO",fund:"Desarrollo Residencial Norte",amount:"USD 30.000",
   text_es:"En 20 minutos entendí exactamente cómo funciona el fideicomiso, qué pasa si la empresa quiebra y cómo verificar mi participación blockchain. Claridad total.",
   text_en:"In 20 minutes I understood exactly how the trust works, what happens if the company fails, and how to verify my blockchain participation. Total clarity.",
   text_fr:"En 20 minutes j'ai tout compris sur le fonds et la vérification blockchain.",
   text_pt:"Em 20 minutos entendi tudo sobre o fundo e a verificação blockchain."},
  {stars:"★★★★★",name:"Sophie Lefebvre",role_es:"Inversora de impacto",role_en:"Impact investor",role_fr:"Investisseuse d'impact",role_pt:"Investidora de impacto",location:"Lyon 🇫🇷",avatar:"SL",fund:"Parque Solar Patagonia II",amount:"USD 18.000",
   text_es:"El fideicomiso solar combina retorno financiero real con impacto ambiental certificado. El dashboard me permite ver la generación y flujos de caja en tiempo real.",
   text_en:"The solar trust combines real financial return with certified environmental impact. The dashboard lets me see generation and cash flows in real time.",
   text_fr:"Rendement financier et impact environnemental certifié. Le tableau de bord en temps réel est parfait.",
   text_pt:"Retorno financeiro e impacto ambiental certificado. O dashboard em tempo real é perfeito."},
  {stars:"★★★★★",name:"Sebastián Morales",role_es:"Ingeniero / Inversor tech",role_en:"Engineer / Tech investor",role_fr:"Ingénieur / Investisseur tech",role_pt:"Engenheiro / Investidor tech",location:"Ciudad de México 🇲🇽",avatar:"SM",fund:"Planta de Cogeneración Industrial",amount:"USD 12.000",
   text_es:"Verifiqué el smart contract en Polygon. Todo coincidía al 100%. Para un perfil técnico, eso es lo máximo. El equipo respondió mis dudas en menos de 2 horas.",
   text_en:"I verified the smart contract on Polygon. Everything matched 100%. For a technical profile, that's the best. Support answered my questions in under 2 hours.",
   text_fr:"J'ai vérifié le contrat sur Polygon. Tout correspondait à 100%.",
   text_pt:"Verifiquei o contrato no Polygon. Tudo coincidia 100%."},
];

const FAQS=[
  {q:"¿Qué es un fideicomiso y cómo protege mi inversión?",a:"Es una estructura legal que separa el patrimonio de Nexxum S.A. de los activos invertidos. Tu capital queda protegido ante cualquier contingencia de la empresa operadora."},
  {q:"¿Desde qué monto puedo comenzar a invertir?",a:"El mínimo varía por fideicomiso: desde USD 500 en flotas y solar distribuida, hasta USD 2.000 en infraestructura. El simulador te permite explorar cada opción antes de decidir."},
  {q:"¿Cómo se acreditan mis rendimientos?",a:"Mensual o al vencimiento según el fideicomiso, directamente en tu cuenta. Podés elegir USD, stablecoins USDT/USDC o reinversión automática."},
  {q:"¿Nexxum S.A. está regulado?",a:"Operamos bajo marcos legales de fideicomisos ordinarios con fiduciario independiente. Cada token tiene un hash verificable en la red Polygon que podés auditar en tiempo real."},
  {q:"¿Qué pasa si quiero salir antes del vencimiento?",a:"Algunos fideicomisos contemplan mercado secundario para transferir tokens. Otros tienen período de lock-up. Revisá la ficha de cada proyecto para conocer las condiciones específicas."},
];

const fmt=(n,d=2)=>n.toLocaleString("es-AR",{minimumFractionDigits:d,maximumFractionDigits:d});

function PageHero({img,tag,title,sub,breadcrumb,setPage,overlay="rgba(10,22,40,.72)"}) {
  return (
    <div style={{position:"relative",height:320,overflow:"hidden"}}>
      <img src={img} alt={title} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 35%"}}/>
      <div style={{position:"absolute",inset:0,background:`linear-gradient(180deg,${overlay} 0%,rgba(10,22,40,.5) 55%,#F7F9FC 100%)`}}/>
      <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"0 52px 36px"}}>
        {breadcrumb&&(
          <div style={{display:"flex",gap:8,alignItems:"center",fontSize:12,color:"rgba(255,255,255,.6)",marginBottom:10}}>
            <span style={{cursor:"pointer"}} onClick={()=>setPage("home")}>Inicio</span>
            {breadcrumb.map((b,i)=>(
              <span key={i} style={{display:"flex",gap:8,alignItems:"center"}}>
                <span style={{opacity:.4}}>›</span>
                <span style={{cursor:b.page?"pointer":"default",color:b.page?"rgba(255,255,255,.65)":"rgba(255,255,255,.9)"}} onClick={()=>b.page&&setPage(b.page)}>{b.label}</span>
              </span>
            ))}
          </div>
        )}
        <div style={{fontSize:11,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"#D4A84B",marginBottom:8}}>{tag}</div>
        <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,3vw,38px)",color:"#fff",fontWeight:800,marginBottom:6,letterSpacing:"-.3px"}}>{title}</h1>
        {sub&&<p style={{fontSize:14,color:"rgba(255,255,255,.75)",maxWidth:520,lineHeight:1.6}}>{sub}</p>}
      </div>
    </div>
  );
}

function Donut({data}) {
  const R=54,cx=70,cy=70,sw=18,circ=2*Math.PI*R;let off=0;
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx={cx} cy={cy} r={R} fill="none" stroke="#EEF0F5" strokeWidth={sw}/>
        {data.map((d,i)=>{const dash=(d.pct/100)*circ;const el=<circle key={i} cx={cx} cy={cy} r={R} fill="none" stroke={d.color} strokeWidth={sw} strokeDasharray={`${dash} ${circ-dash}`} strokeDashoffset={-off} style={{transform:"rotate(-90deg)",transformOrigin:"50% 50%"}}/>;off+=dash;return el;})}
        <text x={cx} y={cy-6} textAnchor="middle" fill="#6B7FA3" fontSize="10" fontFamily="Outfit">Total</text>
        <text x={cx} y={cy+13} textAnchor="middle" fill="#B8862A" fontSize="15" fontWeight="bold" fontFamily="Playfair Display">$42.5K</text>
      </svg>
    </div>
  );
}

function BarChart({bars}) {
  const max=Math.max(...bars.map(b=>b.v));
  return (
    <div style={{display:"flex",alignItems:"flex-end",gap:10,height:140}}>
      {bars.map((b,i)=>(
        <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
          <span style={{fontSize:10,fontWeight:700,color:"var(--gold)"}}>${b.v}</span>
          <div style={{width:"100%",height:`${(b.v/max)*115}px`,borderRadius:"4px 4px 0 0",background:"linear-gradient(180deg,var(--gold),rgba(212,168,75,.3))"}}/>
          <span style={{fontSize:10,color:"var(--muted)"}}>{b.m}</span>
        </div>
      ))}
    </div>
  );
}

function Toast({msg}) {
  return msg?<div style={{position:"fixed",bottom:30,right:30,background:"var(--ink)",color:"#fff",padding:"14px 22px",borderRadius:12,fontSize:14,fontWeight:500,zIndex:999,boxShadow:"var(--shadow-lg)",display:"flex",alignItems:"center",gap:10,animation:"slideup .3s ease"}}>✅ {msg}</div>:null;
}
const CSS=`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
:root{
  --ink:#0A1628;--ink2:#2C3E55;--muted:#6B7FA3;--border:#E2E8F5;--bg:#F7F9FC;--white:#FFFFFF;
  --gold:#B8862A;--gold-lt:#F5E9C8;--gold-md:#D4A84B;
  --green:#16A06B;--green-lt:#E3F7EF;--blue:#2563EB;--blue-lt:#EEF4FF;--red:#D94F4F;--red-lt:#FFF0F0;
  --shadow-sm:0 1px 4px rgba(10,22,40,.06),0 4px 16px rgba(10,22,40,.05);
  --shadow-md:0 4px 24px rgba(10,22,40,.10);--shadow-lg:0 12px 48px rgba(10,22,40,.14);
}
html{scroll-behavior:smooth;}
body{font-family:'Outfit',sans-serif;background:var(--bg);color:var(--ink);line-height:1.6;font-size:15px;}
h1,h2,h3,h4{font-family:'Playfair Display',serif;line-height:1.15;}
input,select,textarea{font-family:'Outfit',sans-serif;}
.tag{display:inline-block;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);margin-bottom:10px;}
.chip{display:inline-flex;align-items:center;gap:4px;font-size:11px;font-weight:700;padding:3px 10px;border-radius:99px;}
.chip-green{background:var(--green-lt);color:var(--green);}
.chip-gold{background:var(--gold-lt);color:var(--gold);}
.chip-blue{background:var(--blue-lt);color:var(--blue);}
.chip-gray{background:#F1F3F8;color:var(--muted);}
.divider{height:1px;background:var(--border);margin:20px 0;}
.btn{font-family:'Outfit',sans-serif;font-weight:600;font-size:14px;border:none;cursor:pointer;border-radius:10px;transition:all .18s;display:inline-flex;align-items:center;gap:7px;}
.btn-gold{background:var(--gold);color:#fff;padding:10px 22px;}
.btn-gold:hover{background:#9C711F;transform:translateY(-1px);box-shadow:0 4px 14px rgba(184,134,42,.35);}
.btn-outline{background:transparent;border:1.5px solid var(--gold);color:var(--gold);padding:9px 21px;}
.btn-outline:hover{background:var(--gold-lt);}
.btn-ghost{background:transparent;border:1.5px solid var(--border);color:var(--muted);padding:9px 21px;}
.btn-ghost:hover{border-color:var(--ink2);color:var(--ink);}
.btn-blue{background:var(--blue);color:#fff;padding:10px 22px;}
.btn-danger{background:var(--red-lt);color:var(--red);border:1px solid rgba(217,79,79,.2);padding:9px 21px;}
.btn-lg{padding:13px 30px;font-size:15px;border-radius:12px;}
.btn-sm{padding:7px 14px;font-size:13px;border-radius:8px;}
.btn-block{width:100%;justify-content:center;}
.nav{position:fixed;top:0;left:0;right:0;z-index:300;display:flex;align-items:center;justify-content:space-between;padding:0 52px;height:66px;background:rgba(247,249,252,.92);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);}
.logo{font-family:'Playfair Display',serif;font-size:21px;font-weight:800;cursor:pointer;color:var(--ink);}
.logo em{font-style:italic;color:var(--gold);}
.nav-links{display:flex;gap:4px;}
.nav-link{font-size:14px;font-weight:500;color:var(--muted);padding:7px 13px;border-radius:8px;cursor:pointer;transition:all .15s;border:none;background:none;font-family:'Outfit',sans-serif;}
.nav-link:hover{color:var(--ink);background:var(--bg);}
.nav-link.active{color:var(--gold);background:var(--gold-lt);font-weight:600;}
.nav-r{display:flex;gap:10px;align-items:center;}
.page{padding-top:66px;min-height:100vh;}
.hero{min-height:calc(100vh - 66px);display:flex;align-items:center;padding:80px 52px;position:relative;overflow:hidden;}
.hero-bg{position:absolute;inset:0;background-image:url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80');background-size:cover;background-position:center;filter:brightness(.18);}
.hero-bg-overlay{position:absolute;inset:0;background:linear-gradient(110deg,rgba(10,22,40,.97) 0%,rgba(10,22,40,.82) 45%,rgba(10,22,40,.35) 100%);}
.hero-deco{position:absolute;top:0;right:0;width:50%;height:100%;background:radial-gradient(ellipse at 70% 40%,rgba(184,134,42,.12),transparent 60%);pointer-events:none;}
.hero-content{position:relative;max-width:640px;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);padding:6px 16px;border-radius:99px;margin-bottom:22px;font-size:12px;font-weight:600;color:rgba(255,255,255,.8);backdrop-filter:blur(8px);}
.live-dot{width:7px;height:7px;background:var(--green);border-radius:50%;animation:blink 2s infinite;}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
.hero h1{font-size:clamp(32px,4.5vw,60px);color:#fff;margin-bottom:16px;letter-spacing:-.5px;}
.hero h1 em{color:var(--gold-md);}
.hero-p{font-size:16px;color:rgba(255,255,255,.7);margin-bottom:34px;max-width:490px;line-height:1.8;}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:48px;}
.hero-stats{display:flex;gap:36px;flex-wrap:wrap;}
.hs-val{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:#fff;}
.hs-lbl{font-size:12px;color:rgba(255,255,255,.5);margin-top:2px;}
.hero-cards-area{position:absolute;right:52px;top:50%;transform:translateY(-50%);width:360px;height:320px;}
.fcard{position:absolute;background:rgba(255,255,255,.97);border:1px solid var(--border);border-radius:16px;padding:20px 22px;box-shadow:var(--shadow-md);}
.fcard.main{width:260px;top:10px;right:20px;}
.fcard.sm1{width:185px;bottom:20px;right:150px;animation:fl 4s ease-in-out infinite;}
.fcard.sm2{width:180px;top:90px;right:0;animation:fl 4s ease-in-out infinite .8s;}
@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.fc-lbl{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.7px;margin-bottom:5px;}
.fc-val{font-family:'Playfair Display',serif;font-size:21px;font-weight:700;}
.fc-val.green{color:var(--green);}
.fc-val.gold{color:var(--gold);}
.trust{padding:20px 52px;background:var(--white);border-top:1px solid var(--border);border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:center;}
.trust-lbl{font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-right:6px;}
.tbadge{display:flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;border:1px solid var(--border);background:var(--bg);font-size:12px;font-weight:500;color:var(--ink2);}
.metrics-band{background:linear-gradient(135deg,#0A1628,#1A3050);padding:56px 52px;display:flex;justify-content:space-around;flex-wrap:wrap;gap:28px;}
.mb-val{font-family:'Playfair Display',serif;font-size:36px;font-weight:700;color:#F5E9C8;}
.mb-lbl{font-size:13px;color:rgba(255,255,255,.45);margin-top:5px;}
.sec{padding:76px 52px;}
.sec-alt{background:var(--white);}
.sec-hdr{margin-bottom:40px;}
.sec-hdr-row{display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;}
.steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:40px;position:relative;}
.steps-line{position:absolute;top:40px;left:calc(16.6% + 20px);right:calc(16.6% + 20px);height:1px;background:linear-gradient(90deg,transparent,var(--gold-md),transparent);opacity:.35;}
.step-box{display:flex;flex-direction:column;align-items:center;text-align:center;padding:30px 22px;background:var(--white);border:1px solid var(--border);border-radius:16px;margin:0 8px;box-shadow:var(--shadow-sm);}
.step-num{width:60px;height:60px;border-radius:50%;background:var(--gold-lt);border:2px solid var(--gold-md);display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:20px;font-weight:800;color:var(--gold);margin-bottom:16px;position:relative;z-index:1;}
.cards-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:20px;}
.pcard{background:var(--white);border:1px solid var(--border);border-radius:18px;overflow:hidden;cursor:pointer;transition:all .25s;box-shadow:var(--shadow-sm);}
.pcard:hover{box-shadow:var(--shadow-lg);transform:translateY(-4px);}
.pcard-img-wrap{overflow:hidden;position:relative;}
.pcard-img{width:100%;height:165px;object-fit:cover;transition:transform .4s ease;display:block;}
.pcard:hover .pcard-img{transform:scale(1.05);}
.pcard-img-badge{position:absolute;top:12px;right:12px;}
.pcard-img-model{position:absolute;bottom:0;left:0;right:0;padding:7px 14px;background:linear-gradient(transparent,rgba(10,22,40,.75));font-size:11px;font-weight:600;color:rgba(255,255,255,.9);letter-spacing:.4px;}
.pcard-body{padding:18px 20px;}
.pcard h3{font-size:16px;margin-bottom:4px;}
.pcard-metrics{display:flex;gap:18px;margin-bottom:14px;}
.pm-val{font-family:'Playfair Display',serif;font-size:19px;font-weight:700;}
.pm-val.green{color:var(--green);}
.pm-val.gold{color:var(--gold);}
.pm-key{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;margin-top:1px;}
.pcard-bar{height:5px;background:var(--border);border-radius:99px;overflow:hidden;margin-bottom:4px;}
.pcard-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,var(--gold),var(--gold-md));transition:width 1.2s ease;}
.pcard-barlbl{display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-bottom:4px;}
.pcard-foot{display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid var(--border);margin-top:6px;}
.showcase-wrap{margin-top:40px;}
.showcase-hero{position:relative;border-radius:20px 20px 0 0;overflow:hidden;height:420px;cursor:pointer;}
.showcase-hero img{width:100%;height:100%;object-fit:cover;object-position:center 30%;transition:transform .6s ease;}
.showcase-hero:hover img{transform:scale(1.03);}
.showcase-overlay{position:absolute;inset:0;background:linear-gradient(to right,rgba(10,22,40,.88) 0%,rgba(10,22,40,.35) 55%,rgba(10,22,40,.55) 100%);}
.showcase-content{position:absolute;top:50%;transform:translateY(-50%);left:52px;max-width:460px;}
.showcase-sub-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
.showcase-sub-panel{position:relative;height:210px;cursor:pointer;overflow:hidden;}
.showcase-sub-panel:first-child{border-radius:0 0 0 20px;}
.showcase-sub-panel:last-child{border-radius:0 0 20px 0;}
.showcase-sub-panel img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease;}
.showcase-sub-panel:hover img{transform:scale(1.07);}
.showcase-sub-overlay{position:absolute;inset:0;background:linear-gradient(180deg,transparent 25%,rgba(10,22,40,.9) 100%);}
.showcase-sub-content{position:absolute;bottom:0;left:0;right:0;padding:14px 16px;}
.showcase-sub-title{font-family:'Playfair Display',serif;font-size:15px;font-weight:700;color:#fff;margin-bottom:2px;}
.showcase-sub-desc{font-size:11px;color:rgba(255,255,255,.65);margin-bottom:6px;}
.showcase-sub-row{display:flex;align-items:center;justify-content:space-between;}
.showcase-sub-tir{font-size:13px;font-weight:800;color:var(--gold-md);}
.showcase-sub-arrow{width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff;transition:all .2s;}
.showcase-sub-panel:hover .showcase-sub-arrow{background:var(--gold);}
.sim-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:start;margin-top:40px;}
.sim-box{background:var(--white);border:1px solid var(--border);border-radius:18px;padding:28px;box-shadow:var(--shadow-sm);}
.sim-lbl{font-size:13px;font-weight:600;color:var(--ink2);margin-bottom:8px;}
.sim-big{font-family:'Playfair Display',serif;font-size:34px;font-weight:700;color:var(--gold);margin-bottom:10px;}
input[type=range]{width:100%;-webkit-appearance:none;height:5px;background:var(--border);border-radius:99px;outline:none;margin-bottom:24px;}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;background:var(--gold);border-radius:50%;cursor:pointer;border:3px solid #fff;box-shadow:0 2px 8px rgba(184,134,42,.4);}
.sim-opts{display:flex;flex-direction:column;gap:7px;max-height:420px;overflow-y:auto;}
.sim-opt{display:flex;align-items:center;justify-content:space-between;padding:10px 13px;border-radius:11px;border:1.5px solid var(--border);cursor:pointer;transition:all .15s;background:var(--bg);}
.sim-opt:hover,.sim-opt.on{border-color:var(--gold);background:var(--gold-lt);}
.result-box{background:linear-gradient(135deg,#FFFBF3,#FFF5E0);border:1.5px solid rgba(184,134,42,.2);border-radius:18px;padding:28px;box-shadow:var(--shadow-sm);}
.res-lbl{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:5px;}
.res-big{font-family:'Playfair Display',serif;font-size:46px;font-weight:700;color:var(--green);line-height:1;}
.res-period{font-size:14px;color:var(--muted);margin-top:5px;margin-bottom:18px;}
.res-row{display:flex;justify-content:space-between;font-size:14px;margin-bottom:9px;}
.res-row span:first-child{color:var(--muted);}
.res-row span:last-child{font-weight:600;}
.res-note{font-size:11px;color:var(--muted);line-height:1.6;padding:11px;border-radius:8px;background:rgba(0,0,0,.03);border:1px solid var(--border);margin-top:14px;}
.edu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px;}
.edu-card{background:var(--bg);border:1px solid var(--border);border-radius:16px;padding:24px;transition:all .2s;cursor:pointer;}
.edu-card:hover{background:var(--white);box-shadow:var(--shadow-md);transform:translateY(-2px);}
.faq-list{max-width:680px;margin:40px auto 0;display:flex;flex-direction:column;gap:9px;}
.faq-item{background:var(--white);border:1px solid var(--border);border-radius:12px;overflow:hidden;box-shadow:var(--shadow-sm);}
.faq-q{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;cursor:pointer;font-weight:600;font-size:14px;transition:background .15s;}
.faq-q:hover{background:var(--bg);}
.faq-arr{font-size:16px;color:var(--gold);transition:transform .2s;}
.faq-arr.open{transform:rotate(180deg);}
.faq-a{padding:0 20px 16px;font-size:13px;color:var(--muted);line-height:1.7;border-top:1px solid var(--border);}
.test-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:18px;margin-top:40px;}
.tcard{background:var(--white);border:1px solid var(--border);border-radius:16px;padding:24px;box-shadow:var(--shadow-sm);position:relative;}
.tcard-stars{color:var(--gold);font-size:13px;margin-bottom:10px;letter-spacing:2px;}
.cta-band{background:linear-gradient(135deg,#FFFBF3,#FFF0D4);border:1px solid rgba(184,134,42,.2);border-radius:22px;margin:0 52px 72px;padding:52px 60px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px;box-shadow:var(--shadow-md);}
footer{background:var(--ink);padding:52px 52px 26px;}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:32px;margin-bottom:36px;}
.footer-col h5{font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,.3);margin-bottom:14px;font-weight:600;}
.footer-col a{display:block;font-size:13px;color:rgba(255,255,255,.4);margin-bottom:8px;cursor:pointer;transition:color .15s;}
.footer-col a:hover{color:#fff;}
.proj-detail-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:28px;align-items:start;}
.proj-main{background:var(--white);border:1px solid var(--border);border-radius:18px;padding:28px;box-shadow:var(--shadow-sm);}
.proj-sidebar{display:flex;flex-direction:column;gap:16px;}
.proj-invest-box{background:linear-gradient(135deg,#FFFBF3,#FFF5E0);border:1.5px solid rgba(184,134,42,.2);border-radius:18px;padding:24px;box-shadow:var(--shadow-sm);}
.proj-doc-box{background:var(--white);border:1px solid var(--border);border-radius:14px;padding:18px;box-shadow:var(--shadow-sm);}
.doc-item{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border);font-size:13px;cursor:pointer;transition:color .15s;}
.doc-item:last-child{border-bottom:none;}
.doc-item:hover{color:var(--gold);}
.proj-metric-row{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:16px 0;}
.proj-metric{background:var(--bg);border:1px solid var(--border);border-radius:11px;padding:13px;text-align:center;}
.proj-metric-val{font-family:'Playfair Display',serif;font-size:19px;font-weight:700;}
.proj-metric-lbl{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-top:3px;}
.auth-page{min-height:100vh;padding-top:66px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#FFFBF4,#F0F5FF);}
.auth-card{background:var(--white);border:1px solid var(--border);border-radius:22px;padding:40px;width:100%;max-width:440px;box-shadow:var(--shadow-lg);}
.form-group{margin-bottom:14px;}
.form-group label{display:block;font-size:13px;font-weight:600;color:var(--ink2);margin-bottom:5px;}
.form-input{width:100%;padding:10px 13px;border:1.5px solid var(--border);border-radius:10px;font-size:14px;color:var(--ink);background:var(--bg);transition:border .15s;outline:none;}
.form-input:focus{border-color:var(--gold);background:var(--white);}
.form-select{width:100%;padding:10px 13px;border:1.5px solid var(--border);border-radius:10px;font-size:14px;color:var(--ink);background:var(--bg);outline:none;cursor:pointer;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.form-check{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--muted);margin-bottom:10px;}
.form-check input{margin-top:3px;accent-color:var(--gold);}
.auth-divider{text-align:center;font-size:13px;color:var(--muted);margin:14px 0;}
.auth-link{color:var(--gold);font-weight:600;cursor:pointer;}
.step-progress{display:flex;gap:7px;margin-bottom:22px;}
.sp-dot{height:4px;flex:1;border-radius:99px;background:var(--border);}
.sp-dot.done{background:var(--gold);}
.sp-dot.active{background:var(--gold-md);}
.dash-layout{display:flex;min-height:100vh;padding-top:66px;}
.sidebar{width:236px;background:var(--white);border-right:1px solid var(--border);padding:18px 12px;display:flex;flex-direction:column;position:sticky;top:66px;height:calc(100vh - 66px);overflow-y:auto;flex-shrink:0;}
.sb-sec{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);padding:0 8px;margin:12px 0 4px;}
.sb-item{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:9px;cursor:pointer;font-size:13px;font-weight:500;color:var(--muted);transition:all .15s;margin-bottom:2px;border:none;background:none;font-family:'Outfit',sans-serif;width:100%;text-align:left;}
.sb-item:hover{background:var(--bg);color:var(--ink);}
.sb-item.on{background:var(--gold-lt);color:var(--gold);font-weight:600;}
.sb-badge{margin-left:auto;font-size:10px;font-weight:700;background:var(--green);color:#fff;padding:1px 6px;border-radius:99px;}
.sb-user-info{padding:10px 8px 14px;border-bottom:1px solid var(--border);margin-bottom:6px;display:flex;align-items:center;gap:10px;}
.sb-user-avatar{width:36px;height:36px;border-radius:50%;background:var(--gold-lt);border:2px solid var(--gold-md);display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:13px;font-weight:700;color:var(--gold);flex-shrink:0;}
.dash-main{flex:1;padding:28px 34px;overflow-y:auto;background:var(--bg);}
.kpi-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:18px;}
.kcard{background:var(--white);border:1px solid var(--border);border-radius:13px;padding:18px;box-shadow:var(--shadow-sm);}
.charts-row{display:grid;grid-template-columns:1fr 1.6fr;gap:16px;margin-bottom:18px;}
.chart-box{background:var(--white);border:1px solid var(--border);border-radius:13px;padding:20px;box-shadow:var(--shadow-sm);}
.pos-box{background:var(--white);border:1px solid var(--border);border-radius:13px;padding:20px;box-shadow:var(--shadow-sm);margin-bottom:18px;}
table{width:100%;border-collapse:collapse;}
th{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.4px;color:var(--muted);padding:8px 11px;text-align:left;border-bottom:1px solid var(--border);}
td{padding:12px 11px;font-size:13px;border-bottom:1px solid rgba(0,0,0,.03);}
tr:last-child td{border-bottom:none;}
tr:hover td{background:var(--bg);}
.hash-btn{font-size:11px;color:var(--blue);background:var(--blue-lt);border:1px solid rgba(37,99,235,.2);padding:4px 9px;border-radius:6px;cursor:pointer;font-family:'Outfit',sans-serif;transition:all .15s;}
.hash-btn:hover{background:rgba(37,99,235,.2);}
.tx-row{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--border);font-size:13px;}
.tx-row:last-child{border-bottom:none;}
.tx-badge{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;}
.tx-badge.dep{background:var(--green-lt);}
.tx-badge.ret{background:var(--blue-lt);}
.profile-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.profile-card{background:var(--white);border:1px solid var(--border);border-radius:13px;padding:20px;box-shadow:var(--shadow-sm);}
.profile-row{display:flex;justify-content:space-between;font-size:13px;padding:8px 0;border-bottom:1px solid rgba(0,0,0,.04);}
.profile-row:last-child{border-bottom:none;}
.profile-row span:first-child{color:var(--muted);}
.inst-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start;}
.inst-box{background:var(--white);border:1px solid var(--border);border-radius:16px;padding:24px;box-shadow:var(--shadow-sm);}
.team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px;}
.team-card{background:var(--white);border:1px solid var(--border);border-radius:14px;padding:22px;text-align:center;box-shadow:var(--shadow-sm);}
.timeline{display:flex;flex-direction:column;gap:0;margin-top:20px;}
.tl-item{display:flex;gap:16px;padding-bottom:20px;position:relative;}
.tl-item::before{content:'';position:absolute;left:11px;top:22px;bottom:0;width:1px;background:var(--border);}
.tl-item:last-child::before{display:none;}
.tl-dot{width:22px;height:22px;border-radius:50%;background:var(--gold-lt);border:2px solid var(--gold);flex-shrink:0;margin-top:2px;}
.avatar-circle{width:80px;height:80px;border-radius:50%;overflow:hidden;border:3px solid var(--gold);box-shadow:0 0 0 4px var(--gold-lt);cursor:pointer;position:relative;display:flex;align-items:center;justify-content:center;background:var(--gold-lt);margin:0 auto 10px;}
.avatar-overlay{position:absolute;inset:0;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s;}
.avatar-circle:hover .avatar-overlay{opacity:1;}
.lang-select{appearance:none;background:transparent;border:1.5px solid var(--border);border-radius:99px;padding:5px 22px 5px 11px;font-size:12px;font-weight:600;color:var(--muted);cursor:pointer;font-family:'Outfit',sans-serif;outline:none;}
.lang-select:hover{border-color:var(--ink2);color:var(--ink);}
@keyframes slideup{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}
@media(max-width:900px){
  .nav{padding:0 16px;}.nav-links{display:none;}
  .hero,.sec{padding:48px 18px;}
  .hero-cards-area{display:none;}
  .sim-grid,.charts-row,.edu-grid,.proj-detail-grid,.inst-grid,.team-grid,.profile-grid,.footer-grid{grid-template-columns:1fr;}
  .steps-grid{grid-template-columns:1fr;gap:10px;}.steps-line{display:none;}
  .kpi-row{grid-template-columns:repeat(2,1fr);}
  .cta-band{margin:0 16px 60px;padding:32px 22px;}
  .metrics-band,.trust{padding:36px 18px;}
  footer{padding:40px 18px 22px;}
  .sidebar{display:none;}.dash-main{padding:18px;}
  .showcase-sub-grid{grid-template-columns:1fr;}
  .showcase-sub-panel:first-child{border-radius:0;}
  .showcase-sub-panel:last-child{border-radius:0 0 14px 14px;}
  .showcase-hero{height:280px;border-radius:14px 14px 0 0;}
  .showcase-content{left:18px;right:18px;}
  .cards-grid{grid-template-columns:1fr;}
  .form-row{grid-template-columns:1fr;}
}
`;
function Nav({page,setPage,loggedIn,setLoggedIn,lang,setLang,t}) {
  const links=[["home","nav_home"],["projects","nav_projects"],["simulator","nav_simulator"],["education","nav_education"],["institutional","nav_institutional"]];
  return (
    <nav className="nav">
      <div className="logo" onClick={()=>setPage("home")}>Nex<em>xum</em></div>
      <div className="nav-links">
        {links.map(([id,lk])=>(
          <button key={id} className={`nav-link ${page===id||(page.startsWith("project-")&&id==="projects")?"active":""}`} onClick={()=>setPage(id)}>{t(lk)}</button>
        ))}
      </div>
      <div className="nav-r">
        <select className="lang-select" value={lang} onChange={e=>setLang(e.target.value)}>
          <option value="es">🇦🇷 ES</option><option value="en">🇺🇸 EN</option>
          <option value="fr">🇫🇷 FR</option><option value="pt">🇧🇷 PT</option>
        </select>
        {loggedIn
          ?<><button className="btn btn-ghost btn-sm" onClick={()=>setPage("dashboard")}>{t("nav_myaccount")}</button><button className="btn btn-ghost btn-sm" onClick={()=>{setLoggedIn(false);setPage("home");}}>{t("nav_logout")}</button></>
          :<><button className="btn btn-ghost btn-sm" onClick={()=>setPage("login")}>{t("nav_login")}</button><button className="btn btn-gold btn-sm" onClick={()=>setPage("register")}>{t("nav_register")} →</button></>
        }
      </div>
    </nav>
  );
}

function Footer({setPage,t}) {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div style={{color:"#F5E9C8",fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:800,marginBottom:10}}>Nex<span style={{color:"#D4A84B"}}>xum</span></div>
          <p style={{fontSize:13,color:"rgba(255,255,255,.4)",lineHeight:1.7,maxWidth:230}}>{t("footer_desc")}</p>
        </div>
        {[{h:"footer_col1",ls:[["projects","footer_l_projects"],["simulator","footer_l_simulator"],["register","footer_l_register"],["login","footer_l_login"]]},
          {h:"footer_col2",ls:[["institutional","footer_l_about"],["education","footer_l_education"],["institutional","footer_l_whitepaper"],["institutional","footer_l_audits"]]},
          {h:"footer_col3",ls:[["education","footer_l_faqs"],["institutional","footer_l_terms"],["institutional","footer_l_privacy"],["institutional","footer_l_contact"]]},
        ].map((c,i)=>(
          <div key={i} className="footer-col">
            <h5>{t(c.h)}</h5>
            {c.ls.map(([pg,lk],j)=><a key={j} onClick={()=>setPage(pg)}>{t(lk)}</a>)}
          </div>
        ))}
      </div>
      <hr style={{border:"none",borderTop:"1px solid rgba(255,255,255,.08)",marginBottom:20}}/>
      <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
        <p style={{fontSize:11,color:"rgba(255,255,255,.28)",lineHeight:1.7,maxWidth:560}}>{t("footer_legal")}</p>
        <span style={{fontSize:12,color:"rgba(255,255,255,.22)"}}>© 2025 Nexxum S.A.</span>
      </div>
    </footer>
  );
}

function HomePage({setPage,fills,t,lang}) {
  const [faq,setFaq]=useState(null);
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-bg"/><div className="hero-bg-overlay"/><div className="hero-deco"/>
        <div className="hero-content">
          <div className="hero-badge"><span className="live-dot"/>{t("hero_badge")}</div>
          <h1>{t("hero_h1a")} <em>{t("hero_h1b")}</em> {t("hero_h1c")}</h1>
          <p className="hero-p">{t("hero_p")}</p>
          <div className="hero-cta">
            <button className="btn btn-gold btn-lg" onClick={()=>setPage("projects")}>{t("hero_cta1")}</button>
            <button className="btn btn-lg" style={{background:"rgba(255,255,255,.1)",color:"#fff",border:"1.5px solid rgba(255,255,255,.3)"}} onClick={()=>setPage("simulator")}>{t("hero_cta2")}</button>
          </div>
          <div className="hero-stats">
            {[["$12.4M",t("hero_s1")],["847",t("hero_s2")],["15%",t("hero_s3")]].map(([v,l],i)=>(
              <div key={i}><div className="hs-val">{v}</div><div className="hs-lbl">{l}</div></div>
            ))}
          </div>
        </div>
        <div className="hero-cards-area">
          <div className="fcard main"><div className="fc-lbl">Portfolio</div><div className="fc-val gold">$42,500.00</div><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8}}><span style={{fontSize:12,color:"var(--muted)"}}>3 activos activos</span><span className="chip chip-green">+18.3%</span></div></div>
          <div className="fcard sm1"><div className="fc-lbl">Pago mensual</div><div className="fc-val green">+$362.50</div><div style={{fontSize:11,color:"var(--muted)",marginTop:5}}>Acredita 05 Jun</div></div>
          <div className="fcard sm2"><div className="fc-lbl">Tokens activos</div><div className="fc-val" style={{fontSize:20}}>380</div><span className="chip chip-gold" style={{marginTop:7,fontSize:10}}>Polygon ⬡</span></div>
        </div>
      </section>
      <div className="trust">
        <span className="trust-lbl">{t("trust_label")}</span>
        {[["⬡","Polygon"],["🛡️","KYC"],["⚖️","Fideicomiso"],["🔍","Auditoría"],["💱","USDT/USDC"],["🌐","SWIFT/ACH"]].map(([ico,lbl],i)=>(
          <div key={i} className="tbadge"><span>{ico}</span>{lbl}</div>
        ))}
      </div>
      <div className="metrics-band">
        {[["$12.4M+",t("m1")],["847",t("m2")],["10",t("m3")],["100%",t("m4")],["15%",t("m5")]].map(([v,l],i)=>(
          <div key={i} style={{textAlign:"center"}}><div className="mb-val">{v}</div><div className="mb-lbl">{l}</div></div>
        ))}
      </div>
      <section className="sec sec-alt">
        <div className="sec-hdr" style={{textAlign:"center"}}>
          <div className="tag">{t("how_tag")}</div>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,3vw,36px)",marginBottom:8}}>{t("how_title")}</h2>
          <p style={{color:"var(--muted)",maxWidth:460,margin:"0 auto"}}>{t("how_sub")}</p>
        </div>
        <div className="steps-grid"><div className="steps-line"/>
          {[{n:"01",ico:"👤",tk:"how_s1t",dk:"how_s1d"},{n:"02",ico:"🔑",tk:"how_s2t",dk:"how_s2d"},{n:"03",ico:"💸",tk:"how_s3t",dk:"how_s3d"}].map((s,i)=>(
            <div key={i} className="step-box"><div className="step-num">{s.n}</div><div style={{fontSize:22,marginBottom:8}}>{s.ico}</div><h4>{t(s.tk)}</h4><p style={{fontSize:13,color:"var(--muted)",lineHeight:1.6,marginTop:6}}>{t(s.dk)}</p></div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:32}}>
          <button className="btn btn-gold btn-lg" onClick={()=>setPage("register")}>{t("how_cta")}</button>
        </div>
      </section>
      <section className="sec">
        <div className="sec-hdr" style={{textAlign:"center"}}>
          <div className="tag">{t("showcase_tag")}</div>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,3vw,36px)",marginBottom:8}}>{t("showcase_title")}</h2>
          <p style={{color:"var(--muted)",maxWidth:480,margin:"0 auto"}}>{t("showcase_sub")}</p>
        </div>
        <div className="showcase-wrap">
          <div className="showcase-hero" onClick={()=>setPage("project-re-alquiler")}>
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=88" alt="Real Estate"/>
            <div className="showcase-overlay"/>
            <div className="showcase-content">
              <div style={{fontSize:11,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"var(--gold-md)",marginBottom:10}}>🏢 Real Estate · Alquiler</div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,2.8vw,36px)",color:"#fff",fontWeight:800,marginBottom:10}}>Propiedades premium que trabajan para vos</h2>
              <p style={{fontSize:14,color:"rgba(255,255,255,.75)",marginBottom:18,lineHeight:1.6,maxWidth:400}}>Portfolio de inmuebles residenciales y comerciales. Rentas indexadas, trazabilidad blockchain.</p>
              <div style={{display:"inline-flex",alignItems:"center",gap:10,background:"rgba(255,255,255,.12)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,.2)",padding:"7px 16px",borderRadius:99,fontSize:13,fontWeight:600,color:"#fff"}}>
                <span>TIR estimada</span><span style={{color:"var(--gold-md)",fontSize:15,fontWeight:800,fontFamily:"'Playfair Display',serif"}}>16% anual</span>
              </div>
            </div>
            <div style={{position:"absolute",bottom:22,right:22,display:"flex",gap:10}}>
              <button className="btn btn-gold btn-sm" onClick={e=>{e.stopPropagation();setPage("project-re-alquiler");}}>Ver proyecto →</button>
              <button className="btn btn-sm" style={{background:"rgba(255,255,255,.12)",color:"#fff",border:"1px solid rgba(255,255,255,.25)"}} onClick={e=>{e.stopPropagation();setPage("simulator");}}>Simular</button>
            </div>
          </div>
          <div className="showcase-sub-grid">
            {[
              {img:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=85",title:"Flota Ejecutiva",desc:"Leasing corporativo · Retornos mensuales",tir:"15% TIR",id:"autos-corporativo"},
              {img:"https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=85",title:"Parque Solar Atacama",desc:"Fotovoltaico · PPA 15 años",tir:"13% TIR",id:"solar-norte"},
              {img:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=85",title:"Cogeneración Industrial",desc:"Infraestructura · Contrato 20 años",tir:"16% TIR",id:"infra-cogeneracion"},
            ].map((a,i)=>(
              <div key={i} className="showcase-sub-panel" onClick={()=>setPage("project-"+a.id)}>
                <img src={a.img} alt={a.title} loading="lazy"/>
                <div className="showcase-sub-overlay"/>
                <div className="showcase-sub-content">
                  <div className="showcase-sub-title">{a.title}</div>
                  <div className="showcase-sub-desc">{a.desc}</div>
                  <div className="showcase-sub-row"><span className="showcase-sub-tir">{a.tir}</span><div className="showcase-sub-arrow">→</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec sec-alt">
        <div className="sec-hdr sec-hdr-row">
          <div>
            <div className="tag">{t("proj_tag")}</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,2.8vw,34px)",marginBottom:6}}>{t("proj_title")}</h2>
            <p style={{color:"var(--muted)",maxWidth:460}}>{t("proj_sub")}</p>
          </div>
          <button className="btn btn-outline" onClick={()=>setPage("projects")}>{t("proj_seeall")}</button>
        </div>
        <div className="cards-grid">
          {PROJECTS.slice(0,6).map((p,i)=>{
            const name=p[`name_${lang}`]||p.name_es;
            const plazo=p[`plazo_${lang}`]||p.plazo_es;
            const risk=p[`riskLabel_${lang}`]||p.riskLabel_es;
            return (
              <div key={i} className="pcard" onClick={()=>setPage("project-"+p.id)}>
                <div className="pcard-img-wrap">
                  <img className="pcard-img" src={p.img} alt={name} loading="lazy"/>
                  <div className="pcard-img-badge"><span className="chip chip-green" style={{fontSize:10}}>{t("proj_active")}</span></div>
                  <div className="pcard-img-model">{p.model}</div>
                </div>
                <div className="pcard-body">
                  <h3>{name}</h3>
                  <div className="pcard-metrics">
                    <div><div className="pm-val green">{p.tir}%</div><div className="pm-key">{t("proj_tir")}</div></div>
                    <div><div className="pm-val gold">{plazo}</div><div className="pm-key">{t("proj_plazo")}</div></div>
                    <div><div className="pm-val" style={{fontSize:15,color:"var(--blue)"}}>USD {p.minInv.toLocaleString()}</div><div className="pm-key">{t("proj_min")}</div></div>
                  </div>
                  <div className="pcard-barlbl"><span>{t("proj_captacion")}</span><span style={{color:"var(--gold)",fontWeight:700}}>{fills[i]??p.captacion}%</span></div>
                  <div className="pcard-bar"><div className="pcard-fill" style={{width:`${fills[i]??p.captacion}%`}}/></div>
                  <div className="pcard-foot">
                    <span className={`chip ${p.riskChip}`}>{t("proj_riesgo")} {risk}</span>
                    <button className="btn btn-gold btn-sm" onClick={e=>{e.stopPropagation();setPage("project-"+p.id);}}>{t("proj_invest")}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="sec">
        <div className="sec-hdr" style={{textAlign:"center"}}><div className="tag">{t("test_tag")}</div><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,2.8vw,34px)"}}>{t("test_title")}</h2></div>
        <div className="test-grid">
          {TESTIMONIALS.map((ts,i)=>{
            const txt=ts[`text_${lang}`]||ts.text_es;
            const role=ts[`role_${lang}`]||ts.role_es;
            return (
              <div key={i} className="tcard">
                <div style={{position:"absolute",top:16,right:16,fontSize:38,opacity:.07,fontFamily:"Georgia",lineHeight:1}}>"</div>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                  <div style={{width:40,height:40,borderRadius:"50%",background:"var(--gold-lt)",border:"2px solid var(--gold-md)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Playfair Display',serif",fontSize:14,fontWeight:700,color:"var(--gold)",flexShrink:0}}>{ts.avatar}</div>
                  <div><div style={{fontSize:14,fontWeight:600}}>{ts.name}</div><div style={{fontSize:11,color:"var(--muted)"}}>{role} · {ts.location}</div></div>
                </div>
                <div className="tcard-stars">{ts.stars}</div>
                <p style={{fontSize:13,color:"var(--ink2)",lineHeight:1.75,marginBottom:12}}>"{txt}"</p>
                <div style={{paddingTop:10,borderTop:"1px solid var(--border)",display:"flex",justifyContent:"space-between",fontSize:12}}>
                  <span style={{color:"var(--muted)"}}>{ts.fund}</span>
                  <span style={{fontWeight:700,color:"var(--green)"}}>{ts.amount}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="sec sec-alt">
        <div className="sec-hdr" style={{textAlign:"center"}}><div className="tag">{t("faq_tag")}</div><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,2.8vw,34px)"}}>{t("faq_title")}</h2></div>
        <div className="faq-list">
          {FAQS.map((f,i)=>(
            <div key={i} className="faq-item">
              <div className="faq-q" onClick={()=>setFaq(faq===i?null:i)}><span>{f.q}</span><span className={`faq-arr ${faq===i?"open":""}`}>▾</span></div>
              {faq===i&&<div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>
      <div className="cta-band">
        <div>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(20px,2.5vw,30px)",marginBottom:8}}>{t("cta_title")}</h2>
          <p style={{color:"var(--muted)"}}>{t("cta_sub")}</p>
        </div>
        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
          <button className="btn btn-gold btn-lg" onClick={()=>setPage("register")}>{t("cta_btn1")}</button>
          <button className="btn btn-outline btn-lg" onClick={()=>setPage("institutional")}>{t("cta_btn2")}</button>
        </div>
      </div>
      <Footer setPage={setPage} t={t}/>
    </div>
  );
}
function ProjectsPage({setPage,t,lang}) {
  const [filter,setFilter]=useState("all");
  const filtered=filter==="all"?PROJECTS:PROJECTS.filter(p=>p.cat===filter);
  const filters=[["all","proj_filter_all"],["re","proj_filter_re"],["solar","proj_filter_solar"],["autos","proj_filter_autos"],["infra","proj_filter_infra"]];
  return (
    <div className="page">
      <PageHero img="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1800&q=85"
        tag={t("proj_tag")} title={t("proj_title")} sub={t("proj_sub")}
        breadcrumb={[{label:t("nav_projects")}]} setPage={setPage}/>
      <section className="sec">
        <div style={{display:"flex",gap:8,marginBottom:28,flexWrap:"wrap"}}>
          {filters.map(([v,lk])=>(
            <button key={v} className={filter===v?"btn btn-gold btn-sm":"btn btn-ghost btn-sm"} onClick={()=>setFilter(v)}>{t(lk)}</button>
          ))}
        </div>
        <div className="cards-grid">
          {filtered.map((p,i)=>{
            const name=p[`name_${lang}`]||p.name_es;
            const plazo=p[`plazo_${lang}`]||p.plazo_es;
            const risk=p[`riskLabel_${lang}`]||p.riskLabel_es;
            return (
              <div key={i} className="pcard" onClick={()=>setPage("project-"+p.id)}>
                <div className="pcard-img-wrap">
                  <img className="pcard-img" src={p.img} alt={name} loading="lazy"/>
                  <div className="pcard-img-badge"><span className="chip chip-green" style={{fontSize:10}}>{t("proj_active")}</span></div>
                  <div className="pcard-img-model">{p.model}</div>
                </div>
                <div className="pcard-body">
                  <h3>{name}</h3>
                  <div className="pcard-metrics">
                    <div><div className="pm-val green">{p.tir}%</div><div className="pm-key">{t("proj_tir")}</div></div>
                    <div><div className="pm-val gold">{plazo}</div><div className="pm-key">{t("proj_plazo")}</div></div>
                    <div><div className="pm-val" style={{fontSize:15,color:"var(--blue)"}}>USD {p.minInv.toLocaleString()}</div><div className="pm-key">{t("proj_min")}</div></div>
                  </div>
                  <div className="pcard-barlbl"><span>{t("proj_captacion")}</span><span style={{color:"var(--gold)",fontWeight:700}}>{p.captacion}%</span></div>
                  <div className="pcard-bar"><div className="pcard-fill" style={{width:`${p.captacion}%`}}/></div>
                  <div className="pcard-foot">
                    <span className={`chip ${p.riskChip}`}>{t("proj_riesgo")} {risk}</span>
                    <button className="btn btn-gold btn-sm" onClick={e=>{e.stopPropagation();setPage("project-"+p.id);}}>{t("proj_viewdetail")} →</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer setPage={setPage} t={t}/>
    </div>
  );
}

function ProjectDetailPage({projectId,setPage,loggedIn,showToast,t,lang}) {
  const proj=PROJECTS.find(p=>p.id===projectId)||PROJECTS[0];
  const [inv,setInv]=useState(proj.minInv);
  const name=proj[`name_${lang}`]||proj.name_es;
  const desc=proj[`desc_${lang}`]||proj.desc_es;
  const plazo=proj[`plazo_${lang}`]||proj.plazo_es;
  const risk=proj[`riskLabel_${lang}`]||proj.riskLabel_es;
  const annual=inv*proj.tir/100;
  return (
    <div className="page">
      <PageHero img={proj.heroImg} tag={t("detail_tag")} title={name} sub={proj.model}
        breadcrumb={[{label:t("nav_projects"),page:"projects"},{label:name}]}
        setPage={setPage} overlay="rgba(10,22,40,.58)"/>
      <section className="sec">
        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:28}}>
          <span className={`chip ${proj.riskChip}`}>{t("proj_riesgo")} {risk}</span>
          <span className="chip chip-blue">TIR {proj.tir}%</span>
          <span className="chip chip-gray">{plazo}</span>
          <span className="chip chip-green">{t("proj_active")}</span>
        </div>
        <div className="proj-detail-grid">
          <div>
            <div className="proj-main">
              <h3 style={{marginBottom:12}}>{t("detail_desc")}</h3>
              <p style={{color:"var(--muted)",lineHeight:1.8,marginBottom:20}}>{desc}</p>
              <div className="proj-metric-row">
                <div className="proj-metric"><div className="proj-metric-val green">{proj.tir}%</div><div className="proj-metric-lbl">{t("proj_tir")}</div></div>
                <div className="proj-metric"><div className="proj-metric-val gold">{plazo}</div><div className="proj-metric-lbl">{t("proj_plazo")}</div></div>
                <div className="proj-metric"><div className="proj-metric-val" style={{fontSize:15,color:"var(--blue)"}}>USD {proj.minInv.toLocaleString()}</div><div className="proj-metric-lbl">{t("proj_min")}</div></div>
              </div>
              <div className="divider"/>
              <h4 style={{marginBottom:10}}>{t("detail_captacion")}</h4>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:7}}>
                <span style={{color:"var(--muted)"}}>{t("detail_tokens")}</span><span style={{fontWeight:600}}>{proj.tokens}</span>
              </div>
              <div className="pcard-bar" style={{height:7,marginBottom:5}}><div className="pcard-fill" style={{width:`${proj.captacion}%`}}/></div>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--muted)"}}>
                <span>{proj.captacion}% {t("detail_captado")}</span>
                <span>{t("detail_cierre")}: {proj.fechaCierre}</span>
              </div>
            </div>
          </div>
          <div className="proj-sidebar">
            <div className="proj-invest-box">
              <h3 style={{marginBottom:5}}>{t("detail_calc")}</h3>
              <p style={{fontSize:13,color:"var(--muted)",marginBottom:16}}>{t("detail_calc_sub")}</p>
              <div className="sim-lbl">{t("detail_amount")}</div>
              <div className="sim-big">USD {inv.toLocaleString()}</div>
              <input type="range" min={proj.minInv} max={50000} step={100} value={inv} onChange={e=>setInv(+e.target.value)}/>
              <div style={{background:"var(--white)",borderRadius:11,padding:14,marginBottom:14}}>
                <div className="res-row"><span>{t("detail_annual")}</span><span style={{color:"var(--green)",fontWeight:700}}>+USD {fmt(annual)}</span></div>
                <div className="res-row"><span>{t("detail_monthly")}</span><span style={{color:"var(--gold)",fontWeight:600}}>+USD {fmt(annual/12)}</span></div>
                <div className="res-row" style={{marginBottom:0}}><span>{t("detail_total_proj")}</span><span style={{fontWeight:700}}>USD {fmt(inv+annual)}</span></div>
              </div>
              {loggedIn
                ?<button className="btn btn-gold btn-block btn-lg" onClick={()=>showToast("Inversión iniciada correctamente")}>{t("detail_invest_now")}</button>
                :<><button className="btn btn-gold btn-block btn-lg" style={{marginBottom:8}} onClick={()=>setPage("register")}>{t("detail_create_invest")}</button><button className="btn btn-ghost btn-block" onClick={()=>setPage("login")}>{t("detail_have_acc")}</button></>
              }
              <p style={{fontSize:11,color:"var(--muted)",marginTop:10,lineHeight:1.6}}>{t("detail_disclaimer")}</p>
            </div>
            <div className="proj-doc-box">
              <h4 style={{fontSize:14,marginBottom:10}}>📁 {t("detail_docs")}</h4>
              {proj.docs.map((d,i)=>(
                <div key={i} className="doc-item"><span>📄</span><span style={{flex:1}}>{d}</span><span style={{color:"var(--gold)",fontSize:12}}>↓</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer setPage={setPage} t={t}/>
    </div>
  );
}

function SimulatorPage({setPage,loggedIn,t,lang}) {
  const [inv,setInv]=useState(5000);
  const [fund,setFund]=useState(0);
  const sf=PROJECTS[fund];
  const annual=inv*sf.tir/100;
  const sfName=sf[`name_${lang}`]||sf.name_es;
  const sfRisk=sf[`riskLabel_${lang}`]||sf.riskLabel_es;
  const sfPlazo=sf[`plazo_${lang}`]||sf.plazo_es;
  return (
    <div className="page">
      <PageHero img="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1800&q=85"
        tag={t("sim_tag")} title={t("sim_title")} sub={t("sim_sub")}
        breadcrumb={[{label:t("nav_simulator")}]} setPage={setPage}/>
      <section className="sec">
        <div className="sim-grid">
          <div className="sim-box">
            <div className="sim-lbl">{t("sim_howmuch")}</div>
            <div className="sim-big">USD {inv.toLocaleString()}</div>
            <input type="range" min={500} max={100000} step={500} value={inv} onChange={e=>setInv(+e.target.value)}/>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--muted)",marginTop:-18,marginBottom:22}}><span>USD 500</span><span>USD 100.000</span></div>
            <div className="sim-lbl" style={{marginBottom:10}}>{t("sim_select")}</div>
            <div className="sim-opts">
              {PROJECTS.map((p,i)=>(
                <div key={i} className={`sim-opt ${fund===i?"on":""}`} onClick={()=>setFund(i)}>
                  <div><div style={{fontSize:13,fontWeight:600}}>{p.ico} {p[`name_${lang}`]||p.name_es}</div><div style={{fontSize:11,color:"var(--muted)"}}>{p.model} · {t("proj_min")} USD {p.minInv.toLocaleString()}</div></div>
                  <span style={{fontSize:14,fontWeight:700,color:"var(--green)"}}>{p.tir}%</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="result-box" style={{marginBottom:18}}>
              <div className="res-lbl">{t("sim_annual")}</div>
              <div className="res-big">+${fmt(annual)}</div>
              <div className="res-period">≈ USD {fmt(annual/12)} {t("sim_permonth")}</div>
              <div className="divider" style={{margin:"14px 0"}}/>
              <div className="res-row"><span>{t("sim_capital")}</span><span>USD {inv.toLocaleString()}</span></div>
              <div className="res-row"><span>{t("sim_tir")}</span><span style={{color:"var(--green)"}}>{sf.tir}%</span></div>
              <div className="res-row"><span>{t("sim_risk")}</span><span>{sfRisk}</span></div>
              <div className="res-row"><span>{t("sim_term")}</span><span>{sfPlazo}</span></div>
              <div className="res-row"><span style={{fontWeight:700,color:"var(--ink)"}}>{t("sim_total")}</span><span style={{color:"var(--gold)",fontFamily:"'Playfair Display',serif",fontSize:15}}>USD {fmt(inv+annual)}</span></div>
              <div className="divider" style={{margin:"14px 0"}}/>
              {loggedIn
                ?<button className="btn btn-gold btn-block btn-lg" onClick={()=>setPage("project-"+sf.id)}>{t("sim_invest")} {sfName} →</button>
                :<><button className="btn btn-gold btn-block btn-lg" style={{marginBottom:8}} onClick={()=>setPage("register")}>{t("detail_create_invest")}</button><button className="btn btn-outline btn-block" onClick={()=>setPage("project-"+sf.id)}>{t("proj_viewdetail")}</button></>
              }
              <div className="res-note">⚠️ {t("sim_disclaimer")}</div>
            </div>
            <div className="sim-box">
              <h4 style={{marginBottom:12,fontSize:15}}>{t("sim_compare")}</h4>
              <table>
                <thead><tr><th>{t("sim_fund")}</th><th>{t("sim_tir_col")}</th><th>{t("sim_annual_col")}</th><th>{t("sim_risk_col")}</th></tr></thead>
                <tbody>
                  {PROJECTS.map((p,i)=>{
                    const a=inv*p.tir/100;
                    return (
                      <tr key={i} style={{cursor:"pointer"}} onClick={()=>setFund(i)}>
                        <td style={{fontWeight:600,fontSize:12}}>{p.ico} {p[`name_${lang}`]||p.name_es}</td>
                        <td style={{color:"var(--green)",fontWeight:700}}>{p.tir}%</td>
                        <td style={{color:"var(--gold)",fontWeight:600}}>+${fmt(a)}</td>
                        <td><span className={`chip ${p.riskChip}`} style={{fontSize:10}}>{p[`riskLabel_${lang}`]||p.riskLabel_es}</span></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Footer setPage={setPage} t={t}/>
    </div>
  );
}
function EducationPage({setPage,t}) {
  const [open,setOpen]=useState(null);
  const [faq,setFaq]=useState(null);
  const arts=[
    {ico:"🔐",tk:"edu_arts_t1",d:"Es una estructura legal que separa el patrimonio de Nexxum S.A. de los activos. Tu capital queda protegido ante cualquier contingencia. El fiduciario actúa como administrador independiente."},
    {ico:"⛓️",tk:"edu_arts_t2",d:"Convertir un activo real en tokens digitales permite fraccionar la propiedad y hacer accesible la inversión desde cualquier monto y parte del mundo. Cada token es único e irrepetible."},
    {ico:"📊",tk:"edu_arts_t3",d:"La Tasa Interna de Retorno mide la rentabilidad real considerando el flujo de fondos a lo largo del tiempo. Publicamos TIR históricas con auditoría independiente."},
    {ico:"🌍",tk:"edu_arts_t4",d:"Aceptamos SWIFT/ACH desde cualquier país y stablecoins USDT/USDC. Sin conversión forzosa ni exposición cambiaria. Retornos en la misma moneda que invertiste."},
    {ico:"⚖️",tk:"edu_arts_t5",d:"Cada fideicomiso está constituido bajo ley aplicable con escritura notarial y representación fiduciaria independiente. Los contratos son accesibles para inversores registrados."},
    {ico:"🔎",tk:"edu_arts_t6",d:"Cada token tiene un hash único verificable en la red Polygon. Cualquier inversor puede auditar su posición sin depender de Nexxum. El explorador de bloques es público y gratuito."},
  ];
  return (
    <div className="page">
      <PageHero img="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800&q=85"
        tag={t("edu_tag")} title={t("edu_title")} sub={t("edu_sub")}
        breadcrumb={[{label:t("nav_education")}]} setPage={setPage}/>
      <section className="sec">
        <div className="edu-grid">
          {arts.map((a,i)=>(
            <div key={i} className="edu-card" onClick={()=>setOpen(open===i?null:i)}>
              <div style={{fontSize:24,marginBottom:10}}>{a.ico}</div>
              <h4 style={{fontSize:15,marginBottom:6}}>{t(a.tk)}</h4>
              <p style={{fontSize:13,color:"var(--muted)",lineHeight:1.6}}>{a.d}</p>
              <div style={{display:"inline-flex",alignItems:"center",gap:5,marginTop:12,fontSize:13,fontWeight:600,color:"var(--gold)"}}>{open===i?t("edu_close"):t("edu_readmore")}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="sec sec-alt">
        <div className="sec-hdr" style={{textAlign:"center"}}><div className="tag">{t("faq_tag")}</div><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,2.8vw,34px)"}}>{t("faq_title")}</h2></div>
        <div className="faq-list">
          {FAQS.map((f,i)=>(
            <div key={i} className="faq-item">
              <div className="faq-q" onClick={()=>setFaq(faq===i?null:i)}><span>{f.q}</span><span className={`faq-arr ${faq===i?"open":""}`}>▾</span></div>
              {faq===i&&<div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>
      <div className="cta-band">
        <div><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(20px,2.5vw,28px)",marginBottom:8}}>{t("edu_cta_title")}</h2><p style={{color:"var(--muted)"}}>{t("edu_cta_sub")}</p></div>
        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
          <button className="btn btn-gold btn-lg" onClick={()=>setPage("register")}>{t("edu_cta_btn1")}</button>
          <button className="btn btn-outline btn-lg" onClick={()=>setPage("simulator")}>{t("edu_cta_btn2")}</button>
        </div>
      </div>
      <Footer setPage={setPage} t={t}/>
    </div>
  );
}

function InstitutionalPage({setPage,t}) {
  return (
    <div className="page">
      <PageHero img="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=85"
        tag={t("inst_tag")} title={t("inst_title")} sub={t("inst_sub")}
        breadcrumb={[{label:t("nav_institutional")}]} setPage={setPage}/>
      <section className="sec">
        <div className="inst-grid">
          <div>
            <div className="inst-box" style={{marginBottom:18}}>
              <h3 style={{marginBottom:12}}>{t("inst_mission_title")}</h3>
              <p style={{color:"var(--muted)",lineHeight:1.8}}>{t("inst_mission_text")}</p>
            </div>
            <div className="inst-box">
              <h3 style={{marginBottom:16}}>{t("inst_history")}</h3>
              <div className="timeline">
                {[["2022","Fundación de Nexxum S.A. con foco en fideicomisos de inversión."],["2023","Primera emisión de tokens sobre flota vehicular. 150 inversores en el primer mes."],["2024","Expansión a energía solar y real estate. Apertura al mercado internacional."],["2025","$12.4M en activos tokenizados. 847 inversores en 18 países. 10 proyectos activos."]].map(([y,txt],i)=>(
                  <div key={i} className="tl-item">
                    <div className="tl-dot"/>
                    <div><div style={{fontSize:12,fontWeight:700,color:"var(--gold)",marginBottom:3}}>{y}</div><div style={{fontSize:13,color:"var(--muted)"}}>{txt}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="inst-box" style={{marginBottom:18}}>
              <h3 style={{marginBottom:12}}>{t("inst_legal")}</h3>
              {[["Estructura legal","Fideicomisos ordinarios privados/públicos"],["Red blockchain","Polygon (MATIC)"],["Auditor externo","Grant & Torres Auditores S.A."],["Fiduciario","Banco Independencia S.A."],["KYC Provider","Veriff Inc."],["Jurisdicción","Argentina · Uruguay · España"]].map(([k,v],i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",fontSize:13,padding:"9px 0",borderBottom:"1px solid var(--border)"}}>
                  <span style={{color:"var(--muted)"}}>{k}</span><span style={{fontWeight:600,textAlign:"right",maxWidth:180}}>{v}</span>
                </div>
              ))}
            </div>
            <div className="inst-box">
              <h3 style={{marginBottom:12}}>{t("inst_contact_title")}</h3>
              <p style={{fontSize:13,color:"var(--muted)",marginBottom:14,lineHeight:1.7}}>{t("inst_contact_sub")}</p>
              {[["📧","institucional@nexxum.com"],["📞","+54 11 4000-0000"],["📍","Av. Corrientes 1234, CABA, Argentina"]].map(([ico,txt],i)=>(
                <div key={i} style={{display:"flex",gap:10,marginBottom:9,fontSize:13}}><span>{ico}</span><span style={{color:"var(--ink2)"}}>{txt}</span></div>
              ))}
              <div className="divider"/>
              <button className="btn btn-gold btn-block" onClick={()=>alert("Formulario institucional")}>{t("inst_contact_btn")}</button>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-alt">
        <div className="sec-hdr" style={{textAlign:"center"}}><div className="tag">{t("inst_team_tag")}</div><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,2.8vw,34px)"}}>{t("inst_team_title")}</h2></div>
        <div className="team-grid">
          {[["👨‍💼","Alejandro Vega","CEO & Co-Founder","15 años en banca privada y estructuración de fideicomisos en Argentina y Uruguay."],
            ["👩‍💻","Luciana Torres","CTO & Co-Founder","Ex-ingeniera blockchain en Ethereum Foundation. Especialista en smart contracts."],
            ["👨‍⚖️","Dr. Marcos Prieto","Director Legal","Abogado especializado en derecho financiero y regulación de activos digitales en LATAM."]].map(([av,nm,role,desc],i)=>(
            <div key={i} className="team-card">
              <div style={{width:54,height:54,borderRadius:"50%",background:"var(--gold-lt)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,margin:"0 auto 10px"}}>{av}</div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:15,fontWeight:700}}>{nm}</div>
              <div style={{fontSize:12,color:"var(--muted)",margin:"3px 0 8px"}}>{role}</div>
              <p style={{fontSize:12,color:"var(--muted)",lineHeight:1.6}}>{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer setPage={setPage} t={t}/>
    </div>
  );
}

function RegisterPage({setPage,setLoggedIn,showToast,t}) {
  const [step,setStep]=useState(1);
  const [form,setForm]=useState({nombre:"",apellido:"",email:"",pais:"",pass:"",pass2:"",terms:false,photoUrl:null});
  const upd=(k,v)=>setForm(f=>({...f,[k]:v}));
  const next=()=>{
    if(step===1&&(!form.nombre||!form.email)){showToast("Completá nombre y email");return;}
    if(step===2&&form.pass!==form.pass2){showToast("Las contraseñas no coinciden");return;}
    if(step===3&&!form.terms){showToast("Debés aceptar los términos");return;}
    if(step<3)setStep(s=>s+1);
    else{setLoggedIn(true);setPage("kyc");showToast("¡Cuenta creada! Completá tu KYC");}
  };
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div style={{textAlign:"center",marginBottom:18}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:800,cursor:"default"}}>Nex<em style={{fontStyle:"italic",color:"var(--gold)"}}>xum</em></div>
        </div>
        <div className="step-progress">{[1,2,3].map(i=><div key={i} className={`sp-dot ${i<step?"done":i===step?"active":""}`}/>)}</div>
        <h2 style={{marginBottom:5}}>{t("reg_title")}</h2>
        <p style={{fontSize:13,color:"var(--muted)",marginBottom:20}}>{t(`reg_step${step}`)}</p>
        {step===1&&<>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:18}}>
            <div className="avatar-circle" onClick={()=>document.getElementById("av-in").click()}>
              {form.photoUrl?<img src={form.photoUrl} alt="perfil" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:<span style={{fontFamily:"'Playfair Display',serif",fontSize:26,fontWeight:700,color:"var(--gold)"}}>{(form.nombre?.[0]||"?").toUpperCase()}{(form.apellido?.[0]||"").toUpperCase()}</span>}
              <div className="avatar-overlay"><span style={{color:"#fff",fontSize:20}}>📷</span></div>
            </div>
            <input id="av-in" type="file" accept="image/*" style={{display:"none"}} onChange={e=>{const f=e.target.files[0];if(f)upd("photoUrl",URL.createObjectURL(f));}}/>
            <div style={{fontSize:12,color:"var(--muted)"}}>{t("reg_photo")}</div>
          </div>
          <div className="form-row">
            <div className="form-group"><label>{t("reg_name")}</label><input className="form-input" value={form.nombre} onChange={e=>upd("nombre",e.target.value)} placeholder={t("reg_name_ph")}/></div>
            <div className="form-group"><label>{t("reg_lastname")}</label><input className="form-input" value={form.apellido} onChange={e=>upd("apellido",e.target.value)} placeholder={t("reg_lastname_ph")}/></div>
          </div>
          <div className="form-group"><label>{t("reg_email")}</label><input className="form-input" type="email" value={form.email} onChange={e=>upd("email",e.target.value)} placeholder={t("reg_email_ph")}/></div>
          <div className="form-group"><label>{t("reg_country")}</label>
            <select className="form-select" value={form.pais} onChange={e=>upd("pais",e.target.value)}>
              <option value="">—</option>
              {["Argentina","Uruguay","España","México","Colombia","Chile","Brasil","Alemania","Francia","Estados Unidos","Otro"].map(p=><option key={p}>{p}</option>)}
            </select>
          </div>
        </>}
        {step===2&&<>
          <div className="form-group"><label>{t("reg_pass")}</label><input className="form-input" type="password" value={form.pass} onChange={e=>upd("pass",e.target.value)} placeholder="••••••••"/></div>
          <div className="form-group"><label>{t("reg_pass2")}</label><input className="form-input" type="password" value={form.pass2} onChange={e=>upd("pass2",e.target.value)} placeholder="••••••••"/></div>
          <p style={{fontSize:12,color:"var(--muted)",marginTop:4}}>{t("reg_pass_hint")}</p>
        </>}
        {step===3&&<>
          <div style={{background:"var(--bg)",borderRadius:10,padding:14,marginBottom:16}}>
            {[["Nombre",`${form.nombre} ${form.apellido}`],["Email",form.email],["País",form.pais||"—"]].map(([k,v])=>(
              <div key={k} className="res-row" style={{marginBottom:7}}><span>{k}</span><span>{v}</span></div>
            ))}
          </div>
          <div className="form-check"><input type="checkbox" checked={form.terms} onChange={e=>upd("terms",e.target.checked)}/><span>{t("reg_terms")}</span></div>
          <div className="form-check"><input type="checkbox"/><span>{t("reg_news")}</span></div>
        </>}
        <button className="btn btn-gold btn-block btn-lg" style={{marginTop:18}} onClick={next}>{step<3?t("reg_next"):t("reg_create")}</button>
        {step>1&&<button className="btn btn-ghost btn-block" style={{marginTop:8}} onClick={()=>setStep(s=>s-1)}>{t("reg_back")}</button>}
        <div className="auth-divider">{t("reg_already")} <span className="auth-link" onClick={()=>setPage("login")}>{t("reg_signin")}</span></div>
      </div>
    </div>
  );
}

function LoginPage({setPage,setLoggedIn,showToast,t}) {
  const [email,setEmail]=useState("");const [pass,setPass]=useState("");
  const login=()=>{if(!email||!pass){showToast("Completá email y contraseña");return;}setLoggedIn(true);showToast("Bienvenido de vuelta");setPage("dashboard");};
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div style={{textAlign:"center",marginBottom:18}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:800}}>Nex<em style={{fontStyle:"italic",color:"var(--gold)"}}>xum</em></div>
        </div>
        <h2 style={{marginBottom:5}}>{t("log_title")}</h2>
        <p style={{fontSize:13,color:"var(--muted)",marginBottom:20}}>{t("log_sub")}</p>
        <div className="form-group"><label>{t("reg_email")}</label><input className="form-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder={t("reg_email_ph")}/></div>
        <div className="form-group"><label>{t("log_pass")}</label><input className="form-input" type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="••••••••"/></div>
        <div style={{textAlign:"right",marginBottom:18}}><span className="auth-link" style={{fontSize:13}}>{t("log_forgot")}</span></div>
        <button className="btn btn-gold btn-block btn-lg" onClick={login}>{t("log_enter")}</button>
        <div className="auth-divider">{t("log_no_account")} <span className="auth-link" onClick={()=>setPage("register")}>{t("log_signup")}</span></div>
        <div style={{background:"var(--bg)",borderRadius:9,padding:11,fontSize:12,color:"var(--muted)",textAlign:"center",border:"1px solid var(--border)"}}>🔒 SSL · AES-256 · 2FA disponible</div>
      </div>
    </div>
  );
}

function KYCPage({setPage,showToast,t}) {
  const [step,setStep]=useState(1);const [done,setDone]=useState(false);
  const finish=()=>{if(step<3)setStep(s=>s+1);else{setDone(true);showToast(t("kyc_sent_title"));}};
  if(done) return (
    <div className="auth-page">
      <div className="auth-card" style={{textAlign:"center"}}>
        <div style={{fontSize:52,marginBottom:14}}>✅</div>
        <h2 style={{marginBottom:8}}>{t("kyc_sent_title")}</h2>
        <p style={{color:"var(--muted)",marginBottom:22,lineHeight:1.7}}>{t("kyc_sent_sub")}</p>
        <button className="btn btn-gold btn-block btn-lg" onClick={()=>setPage("dashboard")}>{t("kyc_go_dash")}</button>
      </div>
    </div>
  );
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 style={{marginBottom:5}}>{t("kyc_title")}</h2>
        <p style={{fontSize:13,color:"var(--muted)",marginBottom:18}}>{t("kyc_sub")}</p>
        <div className="step-progress">{[1,2,3].map(i=><div key={i} className={`sp-dot ${i<step?"done":i===step?"active":""}`}/>)}</div>
        {step===1&&<>
          <h4 style={{marginBottom:12,fontSize:14}}>📋 {t("kyc_step1")}</h4>
          <div className="form-group"><label>{t("kyc_dob")}</label><input className="form-input" type="date"/></div>
          <div className="form-group"><label>{t("kyc_doc_type")}</label><select className="form-select"><option>DNI / Cédula</option><option>Pasaporte</option><option>Permiso de conducir</option></select></div>
          <div className="form-group"><label>{t("kyc_doc_num")}</label><input className="form-input" placeholder="Ej: 30.123.456"/></div>
          <div className="form-group"><label>{t("kyc_address")}</label><input className="form-input" placeholder="Calle, número, ciudad, país"/></div>
        </>}
        {step===2&&<>
          <h4 style={{marginBottom:12,fontSize:14}}>📸 {t("kyc_step2")}</h4>
          {[t("kyc_doc_front"),t("kyc_doc_back"),t("kyc_selfie")].map((lbl,i)=>(
            <div key={i} style={{border:"2px dashed var(--border)",borderRadius:11,padding:16,textAlign:"center",marginBottom:10,cursor:"pointer",transition:"border-color .15s"}}
              onMouseOver={e=>e.currentTarget.style.borderColor="var(--gold)"} onMouseOut={e=>e.currentTarget.style.borderColor="var(--border)"}>
              <div style={{fontSize:22,marginBottom:5}}>{["📄","📄","🤳"][i]}</div>
              <div style={{fontWeight:600,marginBottom:2,fontSize:13}}>{lbl}</div>
              <div style={{fontSize:11,color:"var(--muted)"}}>{t("kyc_upload_hint")}</div>
            </div>
          ))}
        </>}
        {step===3&&<>
          <h4 style={{marginBottom:12,fontSize:14}}>💰 {t("kyc_step3")}</h4>
          <div className="form-group"><label>{t("kyc_funds_source")}</label><select className="form-select"><option>Salario / Relación de dependencia</option><option>Actividad independiente</option><option>Negocios propios</option><option>Inversiones previas</option><option>Herencia / Donación</option></select></div>
          <div className="form-group"><label>{t("kyc_inv_range")}</label><select className="form-select"><option>500 - 5.000</option><option>5.000 - 25.000</option><option>25.000 - 100.000</option><option>Más de 100.000</option></select></div>
          <div className="form-group"><label>{t("kyc_pep")}</label><select className="form-select"><option>No</option><option>Sí</option></select></div>
          <div className="form-check"><input type="checkbox"/><span style={{fontSize:13,color:"var(--muted)"}}>{t("kyc_declare")}</span></div>
        </>}
        <button className="btn btn-gold btn-block btn-lg" style={{marginTop:18}} onClick={finish}>{step<3?t("kyc_continue"):t("kyc_send")}</button>
        {step>1&&<button className="btn btn-ghost btn-block" style={{marginTop:8}} onClick={()=>setStep(s=>s-1)}>{t("kyc_back")}</button>}
      </div>
    </div>
  );
}
const donutData=[{pct:40,color:"#2563EB",label:"Real Estate"},{pct:35,color:"#D97706",label:"Solar"},{pct:25,color:"#B8862A",label:"Autos"}];
const barData=[{m:"Ene",v:280},{m:"Feb",v:315},{m:"Mar",v:298},{m:"Abr",v:340},{m:"May",v:365},{m:"Jun",v:392}];

function DashLayout({children,dashPage,setDashPage,setPage,setLoggedIn,t}) {
  return (
    <div style={{display:"flex",minHeight:"100vh",paddingTop:66}}>
      <div className="sidebar">
        <div className="sb-user-info">
          <div className="sb-user-avatar">CR</div>
          <div><div style={{fontSize:13,fontWeight:600}}>Carlos Rodríguez</div><div style={{fontSize:11,color:"var(--muted)"}}>carlos@email.com</div></div>
        </div>
        <div className="sb-sec">Principal</div>
        {[["overview","📊","dash_overview"],["portfolio","💼","dash_portfolio"],["transactions","🔄","dash_transactions",3]].map(([id,ico,lk,badge])=>(
          <button key={id} className={`sb-item ${dashPage===id?"on":""}`} onClick={()=>setDashPage(id)}>
            <span style={{fontSize:15,width:18,textAlign:"center"}}>{ico}</span>{t(lk)}{badge&&<span className="sb-badge">{badge}</span>}
          </button>
        ))}
        <div className="sb-sec">Mis fondos</div>
        {PROJECTS.slice(0,5).map(p=>(
          <button key={p.id} className="sb-item" onClick={()=>setPage("project-"+p.id)}>
            <span style={{fontSize:15,width:18,textAlign:"center"}}>{p.ico}</span>
            <span style={{fontSize:12,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.name_es.substring(0,20)}</span>
          </button>
        ))}
        <button className="sb-item" onClick={()=>setPage("projects")}><span style={{fontSize:15,width:18}}>🔍</span>{t("dash_explore")}</button>
        <div className="sb-sec">Cuenta</div>
        {[["profile","👤","dash_profile"],["settings","⚙️","dash_settings"]].map(([id,ico,lk])=>(
          <button key={id} className={`sb-item ${dashPage===id?"on":""}`} onClick={()=>setDashPage(id)}>
            <span style={{fontSize:15,width:18}}>{ico}</span>{t(lk)}
          </button>
        ))}
        <div style={{marginTop:"auto",padding:"14px 8px 0"}}>
          <button className="btn btn-danger btn-sm btn-block" onClick={()=>{setLoggedIn(false);setPage("home");}}>{t("nav_logout")}</button>
        </div>
      </div>
      <div className="dash-main">{children}</div>
    </div>
  );
}

function DashOverview({setPage,setDashPage,showToast,t}) {
  return <>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:12}}>
      <div><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:20}}>{t("dash_hello")}, Carlos 👋</h2><p style={{fontSize:12,color:"var(--muted)",marginTop:2}}>{t("dash_last_update")}: hoy 09:42</p></div>
      <div style={{display:"flex",gap:8}}>
        <button className="btn btn-ghost btn-sm" onClick={()=>showToast("Informe generado")}>{t("dash_btn_report")}</button>
        <button className="btn btn-gold btn-sm" onClick={()=>setPage("projects")}>{t("dash_btn_newinv")}</button>
      </div>
    </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",background:"var(--blue-lt)",border:"1px solid rgba(37,99,235,.2)",borderRadius:11,padding:"12px 18px",marginBottom:14,flexWrap:"wrap",gap:8}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}><span style={{fontSize:20}}>✅</span><div><div style={{fontWeight:600,color:"var(--blue)",fontSize:13}}>{t("dash_kyc_verified")}</div><div style={{fontSize:11,color:"var(--muted)"}}>{t("dash_kyc_sub")}</div></div></div>
      <span className="chip chip-blue">{t("dash_kyc_badge")}</span>
    </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",background:"var(--gold-lt)",border:"1.5px solid rgba(184,134,42,.25)",borderRadius:11,padding:"14px 18px",marginBottom:18,flexWrap:"wrap",gap:8}}>
      <div><div style={{fontWeight:700,color:"var(--gold)",fontFamily:"'Playfair Display',serif",fontSize:14}}>💰 {t("dash_nextpay")}</div><div style={{fontSize:12,color:"var(--muted)",marginTop:2}}>{t("dash_pay_info")}</div></div>
      <div style={{fontFamily:"'Playfair Display',serif",fontSize:26,fontWeight:700,color:"var(--green)"}}>+$362.50</div>
    </div>
    <div className="kpi-row">
      {[["💵","dash_kpi1","$42,500","dash_kpi1_chg"],["📈","dash_kpi2","$7,812","dash_kpi2_chg"],["🗓️","dash_kpi3","$362.50","dash_kpi3_chg"],["🏦","dash_kpi4","3","dash_kpi4_chg"]].map(([ico,lk,val,chg],i)=>(
        <div key={i} className="kcard"><div style={{fontSize:18,marginBottom:8}}>{ico}</div><div style={{fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".5px",color:"var(--muted)",marginBottom:3}}>{t(lk)}</div><div style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:700}}>{val}</div><div style={{fontSize:11,fontWeight:600,color:"var(--green)",marginTop:3}}>↑ {t(chg)}</div></div>
      ))}
    </div>
    <div className="charts-row">
      <div className="chart-box">
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:15,marginBottom:2}}>{t("dash_chart1_title")}</div>
        <div style={{fontSize:12,color:"var(--muted)",marginBottom:14}}>{t("dash_chart1_sub")}</div>
        <Donut data={donutData}/>
        <div style={{marginTop:14,display:"flex",flexDirection:"column",gap:7}}>
          {donutData.map((d,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:7,fontSize:12}}>
              <div style={{width:8,height:8,borderRadius:"50%",background:d.color,flexShrink:0}}/>
              <span style={{flex:1,color:"var(--muted)"}}>{d.label}</span>
              <span style={{fontWeight:700}}>{d.pct}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="chart-box">
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:15,marginBottom:2}}>{t("dash_chart2_title")}</div>
        <div style={{fontSize:12,color:"var(--muted)",marginBottom:14}}>{t("dash_chart2_sub")}</div>
        <BarChart bars={barData}/>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:12,fontSize:12}}>
          <span style={{color:"var(--muted)"}}>{t("dash_chart2_total")}</span>
          <span style={{fontFamily:"'Playfair Display',serif",fontWeight:700,color:"var(--gold)"}}>$1,890.00</span>
        </div>
      </div>
    </div>
    <div className="pos-box">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14,flexWrap:"wrap",gap:8}}>
        <div><div style={{fontFamily:"'Playfair Display',serif",fontSize:15}}>{t("dash_positions_title")}</div><div style={{fontSize:11,color:"var(--muted)"}}>{t("dash_positions_sub")}</div></div>
        <button className="btn btn-ghost btn-sm" onClick={()=>setDashPage("portfolio")}>{t("dash_btn_portfolio")}</button>
      </div>
      <table>
        <thead><tr><th>{t("dash_col_asset")}</th><th>{t("dash_col_capital")}</th><th>{t("dash_col_tir")}</th><th>{t("dash_col_gain")}</th><th>{t("dash_col_nextpay")}</th><th>{t("dash_col_status")}</th><th>{t("dash_col_chain")}</th></tr></thead>
        <tbody>
          {[{ico:"🚗",nm:"Flota Ejecutiva",cap:"$17.000",tir:"15.2%",gain:"+$3.120",pay:"05 Jun"},{ico:"☀️",nm:"Solar Atacama I",cap:"$12.750",tir:"13.1%",gain:"+$2.890",pay:"05 Jun"},{ico:"🏢",nm:"Torre Alquiler",cap:"$12.750",tir:"16.3%",gain:"+$1.802",pay:"01 Jul"}].map((p,i)=>(
            <tr key={i}>
              <td><div style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:16}}>{p.ico}</span><span style={{fontWeight:600}}>{p.nm}</span></div></td>
              <td style={{fontWeight:600}}>{p.cap}</td>
              <td style={{color:"var(--green)",fontWeight:700}}>{p.tir}</td>
              <td style={{color:"var(--gold)",fontWeight:700,fontFamily:"'Playfair Display',serif"}}>{p.gain}</td>
              <td style={{color:"var(--muted)",fontSize:12}}>{p.pay}</td>
              <td><span className="chip chip-green">{t("dash_status_active")}</span></td>
              <td><button className="hash-btn" onClick={()=>alert("Hash: 0x3f4a...91bc\nRed: Polygon")}>🔗 Hash</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>;
}

function DashPortfolio({setPage,t}) {
  return <>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:12}}>
      <div><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:20}}>{t("dash_portfolio")}</h2><p style={{fontSize:12,color:"var(--muted)",marginTop:2}}>3 posiciones activas</p></div>
      <button className="btn btn-gold btn-sm" onClick={()=>setPage("projects")}>+ {t("dash_btn_newinv")}</button>
    </div>
    <div className="kpi-row">
      {[["💵","$42.500","port_kpi1"],["📈","$7.812","port_kpi2"],["📊","18.3%","port_kpi3"],["🔢","3","port_kpi4"]].map(([ico,val,lk],i)=>(
        <div key={i} className="kcard"><div style={{fontSize:18,marginBottom:8}}>{ico}</div><div style={{fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".5px",color:"var(--muted)",marginBottom:3}}>{t(lk)}</div><div style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:700}}>{val}</div></div>
      ))}
    </div>
    {[{ico:"🚗",nm:"Flota Ejecutiva Corporativa",id:"autos-corporativo",cap:17000,tir:15.2,gain:3120,tokens:170,pay:"05 Jun 2025"},
      {ico:"☀️",nm:"Parque Solar Atacama I",id:"solar-norte",cap:12750,tir:13.1,gain:2890,tokens:127,pay:"05 Jun 2025"},
      {ico:"🏢",nm:"Torre Alquiler Premium",id:"re-alquiler",cap:12750,tir:16.3,gain:1802,tokens:127,pay:"01 Jul 2025"}].map((p,i)=>(
      <div key={i} className="pos-box" style={{marginBottom:14}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}><span style={{fontSize:26}}>{p.ico}</span><div style={{fontSize:16,fontFamily:"'Playfair Display',serif",fontWeight:700}}>{p.nm}</div></div>
          <div style={{display:"flex",gap:8}}>
            <button className="hash-btn" onClick={()=>alert("Hash: 0x3f4a...91bc")}>🔗 Blockchain</button>
            <button className="btn btn-outline btn-sm" onClick={()=>setPage("project-"+p.id)}>Ver proyecto</button>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10}}>
          {[["Capital","USD "+p.cap.toLocaleString(),"var(--ink)"],["TIR real",p.tir+"%","var(--green)"],["Ganancia","+USD "+fmt(p.gain),"var(--gold)"],["Tokens",p.tokens+" tkn","var(--blue)"],["Próx. pago",p.pay,"var(--muted)"]].map(([k,v,col],j)=>(
            <div key={j} style={{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10,padding:12,textAlign:"center"}}>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:15,fontWeight:700,color:col}}>{v}</div>
              <div style={{fontSize:10,color:"var(--muted)",textTransform:"uppercase",letterSpacing:".5px",marginTop:3}}>{k}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </>;
}

function DashTransactions({t}) {
  const txs=[
    {type:"dep",ico:"💰",tl:"Pago de rendimiento — Solar Atacama I",d:"01 Jun 2025",a:"+$280.00",pos:true},
    {type:"dep",ico:"💰",tl:"Pago de rendimiento — Flota Ejecutiva",d:"01 Jun 2025",a:"+$210.50",pos:true},
    {type:"ret",ico:"🔵",tl:"Inversión — Torre Alquiler Premium",d:"15 May 2025",a:"-$12.750.00",pos:false},
    {type:"dep",ico:"💰",tl:"Pago de rendimiento — Flota Ejecutiva",d:"01 May 2025",a:"+$265.00",pos:true},
    {type:"dep",ico:"💰",tl:"Pago de rendimiento — Solar Atacama I",d:"01 May 2025",a:"+$198.00",pos:true},
  ];
  return <>
    <div style={{marginBottom:18}}><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:20}}>{t("dash_transactions")}</h2><p style={{fontSize:12,color:"var(--muted)",marginTop:2}}>{txs.length} registros</p></div>
    <div className="pos-box">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:15}}>Movimientos</div>
        <button className="btn btn-ghost btn-sm">Exportar CSV</button>
      </div>
      {txs.map((tx,i)=>(
        <div key={i} className="tx-row">
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div className={`tx-badge ${tx.type}`}>{tx.ico}</div>
            <div><div style={{fontWeight:600,fontSize:13}}>{tx.tl}</div><div style={{fontSize:11,color:"var(--muted)"}}>{tx.d}</div></div>
          </div>
          <span style={{fontFamily:"'Playfair Display',serif",fontSize:14,fontWeight:700,color:tx.pos?"var(--green)":"var(--ink)"}}>{tx.a}</span>
        </div>
      ))}
    </div>
  </>;
}

function DashProfile({showToast,t}) {
  return <>
    <div style={{marginBottom:18}}><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:20}}>{t("dash_profile")}</h2></div>
    <div style={{background:"var(--white)",border:"1px solid var(--border)",borderRadius:13,padding:22,marginBottom:16,boxShadow:"var(--shadow-sm)",display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"}}>
      <div className="avatar-circle" onClick={()=>showToast("Foto actualizada")}>
        <span style={{fontFamily:"'Playfair Display',serif",fontSize:26,fontWeight:700,color:"var(--gold)"}}>CR</span>
        <div className="avatar-overlay"><span style={{color:"#fff",fontSize:18}}>📷</span></div>
      </div>
      <div>
        <h3 style={{marginBottom:3}}>Carlos Rodríguez</h3>
        <p style={{fontSize:12,color:"var(--muted)",marginBottom:8}}>carlos.rodriguez@email.com · Inversor desde Enero 2025</p>
        <div style={{display:"flex",gap:7,flexWrap:"wrap"}}><span className="chip chip-green">KYC Verificado</span><span className="chip chip-gold">Premium</span></div>
      </div>
    </div>
    <div className="profile-grid">
      <div className="profile-card">
        <h4 style={{marginBottom:12,paddingBottom:8,borderBottom:"1px solid var(--border)",fontSize:14}}>Información personal</h4>
        {[["Nombre completo","Carlos Rodríguez"],["Email","carlos@email.com"],["País","Argentina"],["Registro","15 Ene 2025"],["Nivel","Premium"]].map(([k,v])=>(
          <div key={k} className="profile-row"><span>{k}</span><span>{v}</span></div>
        ))}
        <button className="btn btn-ghost btn-sm" style={{marginTop:12,width:"100%"}} onClick={()=>showToast("Próximamente")}>Editar datos</button>
      </div>
      <div className="profile-card">
        <h4 style={{marginBottom:12,paddingBottom:8,borderBottom:"1px solid var(--border)",fontSize:14}}>Estado KYC</h4>
        <div style={{textAlign:"center",padding:"12px 0"}}>
          <div style={{fontSize:42,marginBottom:8}}>✅</div>
          <span className="chip chip-green" style={{fontSize:13,padding:"5px 16px"}}>Verificado · Nivel 2</span>
          <p style={{fontSize:12,color:"var(--muted)",marginTop:10,lineHeight:1.6}}>Verificado el 16 Ene 2025. Acceso completo a todos los fondos.</p>
        </div>
      </div>
      <div className="profile-card">
        <h4 style={{marginBottom:12,paddingBottom:8,borderBottom:"1px solid var(--border)",fontSize:14}}>Métodos de pago</h4>
        {[["🏦","Transferencia","CBU ****4521","Verificada"],["💱","USDC Wallet","0x3f4a...91bc","Activa"]].map(([ico,n,d,s],i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 0",borderBottom:"1px solid var(--border)"}}>
            <span style={{fontSize:18}}>{ico}</span><div style={{flex:1}}><div style={{fontWeight:600,fontSize:13}}>{n}</div><div style={{fontSize:11,color:"var(--muted)"}}>{d}</div></div><span className="chip chip-green" style={{fontSize:10}}>{s}</span>
          </div>
        ))}
        <button className="btn btn-outline btn-sm" style={{marginTop:12,width:"100%"}} onClick={()=>showToast("Agregar método")}>+ Agregar</button>
      </div>
      <div className="profile-card">
        <h4 style={{marginBottom:12,paddingBottom:8,borderBottom:"1px solid var(--border)",fontSize:14}}>Seguridad</h4>
        {[["Contraseña","Actualizada hace 45 días"],["2FA","Activado"],["Sesiones","1 activa"],["Último acceso","Hoy 09:42"]].map(([k,v])=>(
          <div key={k} className="profile-row"><span>{k}</span><span style={{fontSize:12}}>{v}</span></div>
        ))}
        <button className="btn btn-ghost btn-sm" style={{marginTop:12,width:"100%"}} onClick={()=>showToast("Configuración")}>Gestionar seguridad</button>
      </div>
    </div>
  </>;
}

function DashboardPage({setPage,setLoggedIn,showToast,t}) {
  const [dashPage,setDashPage]=useState("overview");
  const content={
    overview:<DashOverview setPage={setPage} setDashPage={setDashPage} showToast={showToast} t={t}/>,
    portfolio:<DashPortfolio setPage={setPage} t={t}/>,
    transactions:<DashTransactions t={t}/>,
    profile:<DashProfile showToast={showToast} t={t}/>,
    settings:<DashProfile showToast={showToast} t={t}/>,
  };
  return (
    <div className="page">
      <DashLayout dashPage={dashPage} setDashPage={setDashPage} setPage={setPage} setLoggedIn={setLoggedIn} t={t}>
        {content[dashPage]||content.overview}
      </DashLayout>
    </div>
  );
}

export default function App() {
  const [page,setPage]=useState("home");
  const [loggedIn,setLoggedIn]=useState(false);
  const [lang,setLang]=useState("es");
  const [fills,setFills]=useState(PROJECTS.map(()=>0));
  const [toast,setToast]=useState(null);
  const toastTimer=useRef(null);
  const t=(k)=>(T[lang]&&T[lang][k])?T[lang][k]:(T.es[k]||k);

  useEffect(()=>{setTimeout(()=>setFills(PROJECTS.map(p=>p.captacion)),600);},[]);

  const showToast=(msg)=>{
    setToast(msg);
    if(toastTimer.current)clearTimeout(toastTimer.current);
    toastTimer.current=setTimeout(()=>setToast(null),3000);
  };
  const navigate=(p)=>{setPage(p);window.scrollTo(0,0);};

  const projectId=page.startsWith("project-")?page.replace("project-",""):null;
  const showNav=!["register","login","kyc"].includes(page);

  const renderPage=()=>{
    if(projectId){
      const proj=PROJECTS.find(p=>p.id===projectId);
      if(!proj)return null;
      return <ProjectDetailPage projectId={projectId} setPage={navigate} loggedIn={loggedIn} showToast={showToast} t={t} lang={lang}/>;
    }
    switch(page){
      case "home": return <HomePage setPage={navigate} fills={fills} t={t} lang={lang}/>;
      case "projects": return <ProjectsPage setPage={navigate} t={t} lang={lang}/>;
      case "simulator": return <SimulatorPage setPage={navigate} loggedIn={loggedIn} t={t} lang={lang}/>;
      case "education": return <EducationPage setPage={navigate} t={t}/>;
      case "institutional": return <InstitutionalPage setPage={navigate} t={t}/>;
      case "register": return <RegisterPage setPage={navigate} setLoggedIn={setLoggedIn} showToast={showToast} t={t}/>;
      case "login": return <LoginPage setPage={navigate} setLoggedIn={setLoggedIn} showToast={showToast} t={t}/>;
      case "kyc": return <KYCPage setPage={navigate} showToast={showToast} t={t}/>;
      case "dashboard": return <DashboardPage setPage={navigate} setLoggedIn={setLoggedIn} showToast={showToast} t={t}/>;
      default: return <HomePage setPage={navigate} fills={fills} t={t} lang={lang}/>;
    }
  };

  return (
    <>
      <style>{CSS}</style>
      {showNav&&<Nav page={page} setPage={navigate} loggedIn={loggedIn} setLoggedIn={setLoggedIn} lang={lang} setLang={setLang} t={t}/>}
      {renderPage()}
      <Toast msg={toast}/>
    </>
  );
}
