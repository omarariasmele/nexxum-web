import { useState, useEffect, useRef } from "react";

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
.hero{min-height:calc(100vh - 66px);display:flex;align-items:center;padding:80px 52px;background:linear-gradient(135deg,#FFFBF4 0%,#F0F5FF 55%,#F7F9FC 100%);position:relative;overflow:hidden;}
.hero-deco{position:absolute;top:0;right:0;width:50%;height:100%;background:radial-gradient(ellipse at 70% 40%,rgba(184,134,42,.08),transparent 60%),radial-gradient(ellipse at 90% 80%,rgba(37,99,235,.05),transparent 50%);pointer-events:none;}
.hero-ring{position:absolute;border-radius:50%;border:1px solid rgba(184,134,42,.1);}
.hero-content{position:relative;max-width:640px;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:var(--white);border:1px solid var(--border);padding:6px 16px;border-radius:99px;margin-bottom:22px;font-size:12px;font-weight:600;color:var(--muted);box-shadow:var(--shadow-sm);}
.live-dot{width:7px;height:7px;background:var(--green);border-radius:50%;animation:blink 2s infinite;}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
.hero h1{font-size:clamp(34px,4.5vw,58px);color:var(--ink);margin-bottom:16px;letter-spacing:-.5px;}
.hero h1 em{color:var(--gold);}
.hero-p{font-size:16px;color:var(--muted);margin-bottom:34px;max-width:490px;line-height:1.7;}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:48px;}
.hero-stats{display:flex;gap:36px;flex-wrap:wrap;}
.hs-val{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;}
.hs-lbl{font-size:12px;color:var(--muted);margin-top:2px;}
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
function Nav({ page, setPage, loggedIn, setLoggedIn }) {
  const links = [
    { id: "home", label: "Inicio" },
    { id: "projects", label: "Proyectos" },
    { id: "simulator", label: "Simulador" },
    { id: "education", label: "Educación" },
    { id: "institutional", label: "Institucional" },
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
        <button className="pill-btn">ES / EN</button>
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
function HomePage({ setPage, fills }) {
  const [faq, setFaq] = useState(null);
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-deco" />
        {[500,360,220].map((s,i) => <div key={i} className="hero-ring" style={{width:s,height:s,top:`calc(50% - ${s/2}px)`,right:`calc(52px - ${s/2}px + 180px)`,opacity:.6-i*.15}} />)}
        <div className="hero-content">
          <div className="hero-badge"><span className="live-dot" />Plataforma de activos tokenizados · Est. 2024</div>
          <h1>Invierte en activos <em>reales</em> desde cualquier parte del mundo.</h1>
          <p className="hero-p">Transformamos propiedades, flotas vehiculares y parques solares en tokens accesibles. Rendimientos reales, respaldo legal, trazabilidad blockchain.</p>
          <div className="hero-cta">
            <button className="btn btn-gold btn-lg" onClick={() => setPage("projects")}>Ver Oportunidades →</button>
            <button className="btn btn-outline btn-lg" onClick={() => setPage("simulator")}>Simular mi inversión</button>
          </div>
          <div className="hero-stats">
            {[["$12.4M","Capital gestionado"],["847","Inversores activos"],["15%","TIR promedio anual"]].map(([v,l],i) => (
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
        <span className="trust-lbl">Respaldo institucional</span>
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
          <div className="tag">Proceso simple</div>
          <h2 className="section-title">Tu camino en 3 pasos</h2>
          <p className="section-sub" style={{margin:"0 auto"}}>Sin burocracia ni fronteras. Elegí, invertí, cobrá.</p>
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
          <button className="btn btn-gold btn-lg" onClick={() => setPage("register")}>Comenzar ahora →</button>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="sec">
        <div className="sec-hdr sec-hdr-row">
          <div><div className="tag">Portafolio</div><h2 className="section-title">Diversificá tu capital en activos reales</h2><p className="section-sub">Activos tangibles, rendimientos verificables, contratos en blockchain.</p></div>
          <button className="btn btn-outline" onClick={() => setPage("projects")}>Ver todos →</button>
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
        <div className="sec-hdr" style={{textAlign:"center"}}><div className="tag">Comunidad</div><h2 className="section-title">Lo que dicen nuestros inversores</h2></div>
        <div className="test-grid">
          {[
            {s:"★★★★★",t:"Llevo 8 meses en el fideicomiso de autos y los pagos mensuales son exactamente lo que estimó el simulador. La transparencia es increíble.",n:"Martín R.",l:"Buenos Aires, Argentina",a:"👨‍💼"},
            {s:"★★★★★",t:"Como inversor europeo lo que más me convenció fue poder verificar mi contrato en blockchain. Una diferencia enorme respecto a otras plataformas.",n:"Klaus B.",l:"Múnich, Alemania",a:"👨‍💻"},
            {s:"★★★★☆",t:"El KYC fue muy ágil. En menos de 20 minutos ya tenía la cuenta verificada e hice mi primera inversión con USDC desde Miami.",n:"Valentina C.",l:"Miami, EE.UU.",a:"👩‍💼"},
          ].map((t,i) => (
            <div key={i} className="tcard">
              <div className="tcard-stars">{t.s}</div>
              <p className="tcard-text">"{t.t}"</p>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <div className="tcard-avatar">{t.a}</div>
                <div><div className="tcard-name">{t.n}</div><div className="tcard-loc">{t.l}</div></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="sec">
        <div className="sec-hdr" style={{textAlign:"center"}}><div className="tag">FAQ</div><h2 className="section-title">Todo lo que necesitás saber</h2></div>
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
        <div><h2>¿Listo para hacer trabajar tu capital en activos reales?</h2><p>Creá tu cuenta gratis. Sin mínimos elevados, sin burocracia, con total trazabilidad.</p></div>
        <div className="cta-btns">
          <button className="btn btn-gold btn-lg" onClick={() => setPage("register")}>Crear Cuenta Gratis →</button>
          <button className="btn btn-outline btn-lg" onClick={() => setPage("institutional")}>Hablar con un asesor</button>
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
function SimulatorPage({ setPage, loggedIn }) {
  const [inv, setInv] = useState(5000);
  const [fund, setFund] = useState(0);
  const sf = PROJECTS[fund];
  const annual = inv * sf.tir / 100;

  return (
    <div className="page">
      <div className="inner-hero">
        <div className="breadcrumb"><span onClick={() => setPage("home")}>Inicio</span>›<span>Simulador</span></div>
        <div className="tag">Herramienta interactiva</div>
        <h1>Simulador de inversión</h1>
        <p>Calculá el retorno estimado de tu inversión según el fideicomiso y el monto que elijas. Sin compromiso.</p>
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
              <div className="res-lbl">Retorno proyectado anual</div>
              <div className="res-big">+${fmt(annual)}</div>
              <div className="res-period">≈ USD {fmt(annual/12)} por mes</div>
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
function RegisterPage({ setPage, setLoggedIn, showToast }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ nombre: "", apellido: "", email: "", pais: "", pass: "", pass2: "", terms: false });
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
          <h2>Crear cuenta</h2>
          <p>Paso 1 de 3 · Tus datos personales</p>
          <div className="form-row">
            <div className="form-group"><label>Nombre</label><input className="form-input" value={form.nombre} onChange={e=>upd("nombre",e.target.value)} placeholder="Juan" /></div>
            <div className="form-group"><label>Apellido</label><input className="form-input" value={form.apellido} onChange={e=>upd("apellido",e.target.value)} placeholder="García" /></div>
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
function LoginPage({ setPage, setLoggedIn, showToast }) {
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
        <h2>Iniciá sesión</h2>
        <p>Accedé a tu panel de inversiones</p>
        <div className="form-group"><label>Email</label><input className="form-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="tu@email.com" /></div>
        <div className="form-group"><label>Contraseña</label><input className="form-input" type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Tu contraseña" /></div>
        <div style={{textAlign:"right",marginBottom:20}}><span className="auth-link" style={{fontSize:13}}>¿Olvidaste tu contraseña?</span></div>
        <button className="btn btn-gold btn-block btn-lg" onClick={login}>Ingresar →</button>
        <div className="auth-divider">¿No tenés cuenta? <span className="auth-link" onClick={() => setPage("register")}>Registrate gratis</span></div>
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
      case "home": return <HomePage setPage={navigate} fills={fills} />;
      case "projects": return <ProjectsPage setPage={navigate} fills={fills} />;
      case "simulator": return <SimulatorPage setPage={navigate} loggedIn={loggedIn} />;
      case "education": return <EducationPage setPage={navigate} />;
      case "institutional": return <InstitutionalPage setPage={navigate} />;
      case "register": return <RegisterPage setPage={navigate} setLoggedIn={setLoggedIn} showToast={showToast} />;
      case "login": return <LoginPage setPage={navigate} setLoggedIn={setLoggedIn} showToast={showToast} />;
      case "kyc": return <KYCPage setPage={navigate} showToast={showToast} />;
      case "dashboard": return <DashboardPage setPage={navigate} setLoggedIn={setLoggedIn} showToast={showToast} />;
      default: return <HomePage setPage={navigate} fills={fills} />;
    }
  };

  const showNav = !["register","login","kyc"].includes(page);

  return (
    <>
      <style>{CSS}</style>
      {showNav && <Nav page={page} setPage={navigate} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
      {renderPage()}
      <Toast msg={toast} />
    </>
  );
}
