{\rtf1\ansi\ansicpg1251\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const plan = document.getElementById('plan');\
const promo = document.getElementById('promo');\
const total = document.getElementById('total');\
const apply = document.getElementById('apply');\
\
function fmt(n) \{\
    return new Intl.NumberFormat('ru-RU').format(Math.round(n)) + ' \uc0\u8381 ';\
\}\
\
function recalc() \{\
    let base = +plan.value;\
    let sum = base;\
\
    if ((promo.value || '').trim().toUpperCase() === 'MASTER5') \{\
        sum = base * 0.95;\
    \}\
\
    total.textContent = '\uc0\u1048 \u1090 \u1086 \u1075 \u1086  \u1082  \u1086 \u1087 \u1083 \u1072 \u1090 \u1077 : ' + fmt(sum);\
\}\
\
plan.addEventListener('change', recalc);\
apply.addEventListener('click', recalc);\
\
promo.addEventListener('input', () => \{\
    if (!promo.value) recalc();\
\});\
\
recalc();}