import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Dot grid background */}
      <div className={styles.grid} />
      {/* Gold glow */}
      <div className={styles.glow} />

      {/* ── Line-based rising cityline SVG ── */}
      <svg
        className={styles.cityline}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax meet"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Ground */}
        <line className={styles.groundLine} x1="0" y1="780" x2="1440" y2="780"/>
        <path className={styles.groundLine} style={{'--len':1440,'--dur':'1.5s','--delay':'0.3s',stroke:'rgba(200,191,176,0.3)',strokeWidth:'0.6'}} d="M0,790 L1440,790"/>

        {/* ── DISTANT HAZE LAYER ── */}
        <path className={styles.building} style={{'--len':3000,'--dur':'3.5s','--delay':'0.05s',stroke:'rgba(200,191,176,0.18)',strokeWidth:'1'}}
          d="M0,720 Q80,680 160,700 Q240,720 320,690 Q400,660 500,680 Q600,700 680,665 Q760,630 860,660 Q960,690 1040,650 Q1120,610 1220,640 Q1320,670 1440,630"/>

        {/* ── FAR BACKGROUND GHOST TOWERS ── */}
        <path className={styles.building} style={{'--len':2000,'--dur':'2.4s','--delay':'0.1s',stroke:'rgba(200,191,176,0.28)',strokeWidth:'0.8'}}
          d="M55,780 L55,260 L45,260 L45,240 L65,240 L65,260 L55,260"/>
        <path className={styles.building} style={{'--len':800,'--dur':'0.8s','--delay':'2s',stroke:'rgba(200,191,176,0.15)',strokeWidth:'0.6'}}
          d="M45,700 L65,700 M45,650 L65,650 M45,600 L65,600 M45,550 L65,550 M45,500 L65,500 M45,450 L65,450 M45,400 L65,400 M45,350 L65,350 M45,300 L65,300"/>
        <path className={styles.building} style={{'--len':1200,'--dur':'2s','--delay':'0.15s',stroke:'rgba(200,191,176,0.22)',strokeWidth:'0.8'}}
          d="M80,780 L80,450 L130,450 L130,780"/>
        <path className={styles.building} style={{'--len':1600,'--dur':'2.2s','--delay':'0.2s',stroke:'rgba(200,191,176,0.25)',strokeWidth:'0.8'}}
          d="M1340,780 L1340,420 L1330,420 L1330,390 L1380,390 L1380,340 L1370,340 L1370,320 L1400,320 L1400,340 L1390,340 L1390,390 L1400,390 L1400,780"/>
        <path className={styles.building} style={{'--len':1400,'--dur':'2s','--delay':'0.25s',stroke:'rgba(200,191,176,0.2)',strokeWidth:'0.7'}}
          d="M1050,780 L1050,400 L1040,400 L1040,380 L1080,380 L1080,400 L1070,400 L1070,780"/>
        <path className={styles.building} style={{'--len':1200,'--dur':'1.9s','--delay':'0.3s',stroke:'rgba(200,191,176,0.2)',strokeWidth:'0.7'}}
          d="M1090,780 L1090,430 L1110,430 L1110,780"/>

        {/* ── MID LAYER ── */}
        {/* Residential block with balconies */}
        <path className={styles.building} style={{'--len':1800,'--dur':'2s','--delay':'0.35s',stroke:'rgba(14,12,10,0.38)',strokeWidth:'1'}}
          d="M140,780 L140,480 L200,480 L200,780"/>
        <path className={styles.building} style={{'--len':600,'--dur':'0.9s','--delay':'2s',stroke:'rgba(14,12,10,0.2)',strokeWidth:'0.8'}}
          d="M140,720 L200,720 M140,680 L200,680 M140,640 L200,640 M140,600 L200,600 M140,560 L200,560 M140,520 L200,520
             M148,720 L148,740 M160,720 L160,740 M172,720 L172,740 M184,720 L184,740 M196,720 L196,740
             M148,680 L148,700 M160,680 L160,700 M172,680 L172,700 M184,680 L184,700 M196,680 L196,700"/>

        {/* Tower with penthouse setback */}
        <path className={styles.building} style={{'--len':2200,'--dur':'2.3s','--delay':'0.5s',stroke:'rgba(14,12,10,0.45)',strokeWidth:'1.1'}}
          d="M230,780 L230,360 L220,360 L220,340 L270,340 L270,290 L260,290 L260,270 L290,270 L290,290 L280,290 L280,340 L290,340 L290,360 L280,360 L280,780"/>
        <path className={styles.building} style={{'--len':800,'--dur':'1s','--delay':'2.1s',stroke:'rgba(14,12,10,0.15)',strokeWidth:'0.7'}}
          d="M230,700 L280,700 M230,660 L280,660 M230,620 L280,620 M230,580 L280,580 M230,540 L280,540 M230,500 L280,500 M230,460 L280,460 M230,420 L280,420 M230,380 L280,380
             M250,360 L250,780 M265,340 L265,780"/>

        {/* Classic apartment block with arched entries */}
        <path className={styles.building} style={{'--len':2000,'--dur':'2s','--delay':'0.6s',stroke:'rgba(14,12,10,0.4)',strokeWidth:'1'}}
          d="M310,780 L310,440 L305,440 L305,420 L360,420 L360,440 L355,440 L355,780"/>
        <path className={styles.accent} style={{'--len':500,'--dur':'0.8s','--delay':'2.2s'}}
          d="M320,760 L320,740 Q327.5,730 335,740 L335,760 M340,760 L340,740 Q347.5,730 355,740 L355,760
             M320,720 L320,700 Q327.5,690 335,700 L335,720 M340,720 L340,700 Q347.5,690 355,700 L355,720
             M320,680 L320,660 Q327.5,650 335,660 L335,680 M340,680 L340,660 Q347.5,650 355,660 L355,680
             M320,640 L320,620 Q327.5,610 335,620 L335,640 M340,640 L340,620 Q347.5,610 355,620 L355,640
             M320,600 L320,580 Q327.5,570 335,580 L335,600 M340,600 L340,580 Q347.5,570 355,580 L355,600"/>
        <path className={styles.building} style={{'--len':300,'--dur':'0.5s','--delay':'2.4s',stroke:'rgba(14,12,10,0.15)',strokeWidth:'0.7'}}
          d="M310,560 L355,560 M310,480 L355,480"/>

        {/* ── HERO FOREGROUND ── */}

        {/* HERO-1: Supertall with tapered crown */}
        <path className={styles.building} style={{'--len':3200,'--dur':'3s','--delay':'0.7s',strokeWidth:'1.4'}}
          d="M390,780 L390,680 L380,680 L380,600 L390,600 L390,120 L388,120 L390,100 L392,100 L394,120 L392,120 L392,600 L402,600 L402,680 L392,680 L392,780"/>
        <path className={styles.accent} style={{'--len':100,'--dur':'0.6s','--delay':'3s'}}
          d="M391,100 L391,60"/>
        <path className={styles.building} style={{'--len':600,'--dur':'0.8s','--delay':'2.6s',stroke:'rgba(14,12,10,0.3)',strokeWidth:'0.8'}}
          d="M375,680 L407,680 M375,600 L407,600 M375,520 L407,520 M375,440 L407,440 M375,360 L407,360 M375,280 L407,280 M375,200 L407,200"/>
        <path className={styles.building} style={{'--len':1000,'--dur':'1s','--delay':'2.8s',stroke:'rgba(14,12,10,0.1)',strokeWidth:'0.6'}}
          d="M391,120 L391,780"/>

        {/* HERO-2: Wide luxury residential tower */}
        <path className={styles.building} style={{'--len':2800,'--dur':'2.6s','--delay':'0.85s',strokeWidth:'1.3'}}
          d="M430,780 L430,220 L424,220 L424,200 L500,200 L500,220 L494,220 L494,780"/>
        <path className={styles.building} style={{'--len':800,'--dur':'0.8s','--delay':'2.4s',stroke:'rgba(14,12,10,0.35)',strokeWidth:'0.8'}}
          d="M440,760 L440,740 L452,740 L452,760 M456,760 L456,740 L468,740 L468,760 M472,760 L472,740 L484,740 L484,760
             M440,720 L440,700 L452,700 L452,720 M456,720 L456,700 L468,700 L468,720 M472,720 L472,700 L484,700 L484,720
             M440,680 L440,660 L452,660 L452,680 M456,680 L456,660 L468,660 L468,680 M472,680 L472,660 L484,660 L484,680
             M440,640 L440,620 L452,620 L452,640 M456,640 L456,620 L468,620 L468,640 M472,640 L472,620 L484,620 L484,640
             M440,600 L440,580 L452,580 L452,600 M456,600 L456,580 L468,580 L468,600 M472,600 L472,580 L484,580 L484,600"/>
        <path className={styles.building} style={{'--len':600,'--dur':'0.7s','--delay':'2.5s',stroke:'rgba(14,12,10,0.12)',strokeWidth:'0.6'}}
          d="M430,560 L494,560 M430,500 L494,500 M430,440 L494,440 M430,380 L494,380 M430,320 L494,320 M430,260 L494,260"/>
        <path className={styles.building} style={{'--len':200,'--dur':'0.4s','--delay':'2.7s',stroke:'rgba(14,12,10,0.5)'}}
          d="M440,200 L440,185 L490,185 L490,200"/>

        {/* HERO-3: Stepped Chrysler-esque skyscraper */}
        <path className={styles.building} style={{'--len':3500,'--dur':'3s','--delay':'1s',strokeWidth:'1.3'}}
          d="M530,780 L530,580 L520,580 L520,520 L530,520 L530,420 L518,420 L518,380 L530,380 L530,280 L524,280 L524,260 L542,260 L542,200 L538,200 L538,180 L548,165 L558,180 L558,200 L554,200 L554,260 L572,260 L572,280 L566,280 L566,380 L578,380 L578,420 L566,420 L566,520 L576,520 L576,580 L566,580 L566,780"/>
        <path className={styles.accent} style={{'--len':300,'--dur':'0.5s','--delay':'3.2s'}}
          d="M520,580 L530,580 M520,520 L530,520 M518,420 L530,420 M518,380 L530,380 M566,580 L576,580 M566,520 L576,520 M566,420 L578,420 M566,380 L578,380"/>
        <path className={styles.building} style={{'--len':400,'--dur':'0.5s','--delay':'2.9s',stroke:'rgba(14,12,10,0.15)',strokeWidth:'0.7'}}
          d="M535,580 L535,780 M540,580 L540,780 M545,580 L545,780 M550,580 L550,780 M555,580 L555,780 M560,580 L560,780"/>

        {/* HERO-4: Modern glass curtain-wall tower */}
        <path className={styles.building} style={{'--len':2600,'--dur':'2.6s','--delay':'1.1s',strokeWidth:'1.2'}}
          d="M600,780 L600,240 L592,240 L592,220 L650,220 L650,240 L642,240 L642,780"/>
        <path className={styles.building} style={{'--len':2000,'--dur':'1.5s','--delay':'2.8s',stroke:'rgba(14,12,10,0.08)',strokeWidth:'0.6'}}
          d="M600,780 L642,240 M600,700 L642,320 M600,620 L642,400 M600,540 L642,480 M600,240 L642,780 M600,320 L642,700 M600,400 L642,620 M600,480 L642,540"/>
        <path className={styles.building} style={{'--len':600,'--dur':'0.6s','--delay':'2.7s',stroke:'rgba(14,12,10,0.15)',strokeWidth:'0.6'}}
          d="M600,700 L642,700 M600,640 L642,640 M600,580 L642,580 M600,520 L642,520 M600,460 L642,460 M600,400 L642,400 M600,340 L642,340 M600,280 L642,280"/>

        {/* HERO-5: Classic brick apartment */}
        <path className={styles.building} style={{'--len':2400,'--dur':'2.4s','--delay':'1.2s',strokeWidth:'1.1'}}
          d="M670,780 L670,360 L662,360 L662,340 L730,340 L730,360 L722,360 L722,300 L714,300 L714,280 L736,280 L736,300 L728,300 L728,360 L738,360 L738,780"/>
        <path className={styles.building} style={{'--len':1200,'--dur':'1s','--delay':'2.6s',stroke:'rgba(14,12,10,0.1)',strokeWidth:'0.5'}}
          d="M670,760 L738,760 M670,740 L738,740 M670,720 L738,720 M670,700 L738,700 M670,680 L738,680 M670,660 L738,660
             M670,640 L738,640 M670,620 L738,620 M670,600 L738,600 M670,580 L738,580 M670,560 L738,560 M670,540 L738,540
             M670,520 L738,520 M670,500 L738,500 M670,480 L738,480 M670,460 L738,460 M670,420 L738,420 M670,400 L738,400 M670,380 L738,380"/>
        <path className={styles.accent} style={{'--len':1000,'--dur':'1s','--delay':'2.7s'}}
          d="M678,750 L678,734 L690,734 L690,750 M698,750 L698,734 L710,734 L710,750 M718,750 L718,734 L730,734 L730,750
             M678,714 L678,698 L690,698 L690,714 M698,714 L698,698 L710,698 L710,714 M718,714 L718,698 L730,698 L730,714
             M678,678 L678,662 L690,662 L690,678 M698,678 L698,662 L710,662 L710,678 M718,678 L718,662 L730,662 L730,678
             M678,642 L678,626 L690,626 L690,642 M698,642 L698,626 L710,626 L710,642 M718,642 L718,626 L730,626 L730,642
             M678,606 L678,590 L690,590 L690,606 M698,606 L698,590 L710,590 L710,606 M718,606 L718,590 L730,590 L730,606
             M678,570 L678,554 L690,554 L690,570 M698,570 L698,554 L710,554 L710,570 M718,570 L718,554 L730,554 L730,570
             M678,534 L678,518 L690,518 L690,534 M698,534 L698,518 L710,518 L710,534 M718,534 L718,518 L730,518 L730,534"/>

        {/* HERO-6: Twisting sculptural tower */}
        <path className={styles.building} style={{'--len':3000,'--dur':'2.8s','--delay':'1.3s',strokeWidth:'1.2'}}
          d="M760,780 L758,680 L748,670 L746,560 L752,540 L748,420 L754,390 L750,280 L756,240 L762,200 L770,180 L778,200 L784,240 L780,280 L786,390 L782,420 L778,540 L784,560 L782,670 L772,680 L770,780"/>
        <path className={styles.building} style={{'--len':800,'--dur':'0.8s','--delay':'3s',stroke:'rgba(14,12,10,0.18)',strokeWidth:'0.8'}}
          d="M758,680 L772,680 M748,560 L784,560 M748,420 L782,420 M750,280 L780,280 M756,200 L784,200"/>
        <path className={styles.building} style={{'--len':1500,'--dur':'1.2s','--delay':'3.1s',stroke:'rgba(14,12,10,0.1)',strokeWidth:'0.6'}}
          d="M756,700 L774,700 M754,660 L776,650 M752,620 L778,608 M750,580 L780,566 M750,540 L780,528
             M750,500 L780,490 M751,460 L779,452 M752,420 L778,414 M753,380 L777,375 M754,340 L776,337
             M755,300 L775,298 M756,260 L774,259 M757,220 L773,220"/>

        {/* HERO-7: Luxury residential with cornice */}
        <path className={styles.building} style={{'--len':2200,'--dur':'2.2s','--delay':'1.4s',strokeWidth:'1.1'}}
          d="M810,780 L810,380 L804,380 L804,365 L804,360 L870,360 L870,365 L870,380 L864,380 L864,780"/>
        <path className={styles.building} style={{'--len':400,'--dur':'0.5s','--delay':'2.9s',stroke:'rgba(14,12,10,0.5)',strokeWidth:'1.2'}}
          d="M800,375 L874,375 M800,370 L874,370 M800,365 L874,365"/>
        <path className={styles.building} style={{'--len':1200,'--dur':'1s','--delay':'2.8s',stroke:'rgba(14,12,10,0.25)',strokeWidth:'0.7'}}
          d="M810,740 L864,740 M804,740 L810,740 M864,740 L870,740 M810,710 L864,710 M804,710 L810,710 M864,710 L870,710
             M810,680 L864,680 M804,680 L810,680 M864,680 L870,680 M810,650 L864,650 M804,650 L810,650 M864,650 L870,650
             M810,620 L864,620 M804,620 L810,620 M864,620 L870,620 M810,590 L864,590 M804,590 L810,590 M864,590 L870,590
             M810,560 L864,560 M804,560 L810,560 M864,560 L870,560 M810,530 L864,530 M804,530 L810,530 M864,530 L870,530
             M810,500 L864,500 M804,500 L810,500 M864,500 L870,500 M810,470 L864,470 M804,470 L810,470 M864,470 L870,470
             M810,440 L864,440 M804,440 L810,440 M864,440 L870,440 M810,410 L864,410 M804,410 L810,410 M864,410 L870,410"/>
        <path className={styles.accent} style={{'--len':600,'--dur':'0.7s','--delay':'3s'}}
          d="M820,755 L820,745 L832,745 L832,755 M838,755 L838,745 L850,745 L850,755 M856,755 L856,745 L864,745 L864,755
             M820,725 L820,715 L832,715 L832,725 M838,725 L838,715 L850,715 L850,725 M856,725 L856,715 L864,715 L864,725
             M820,695 L820,685 L832,685 L832,695 M838,695 L838,685 L850,685 L850,695 M856,695 L856,685 L864,685 L864,695"/>

        {/* HERO-8: Wide mixed-use podium + tower */}
        <path className={styles.building} style={{'--len':2800,'--dur':'2.5s','--delay':'1.5s',strokeWidth:'1.2'}}
          d="M890,780 L890,580 L880,580 L880,560 L960,560 L960,580 L950,580 L950,320 L944,320 L944,300 L972,300 L972,320 L966,320 L966,580 L975,580 L975,780"/>
        <path className={styles.building} style={{'--len':400,'--dur':'0.5s','--delay':'2.7s',stroke:'rgba(14,12,10,0.25)',strokeWidth:'0.7'}}
          d="M892,740 L892,600 M905,740 L905,600 M918,740 L918,600 M931,740 L931,600 M944,740 L944,600 M957,740 L957,600 M970,740 L970,600
             M880,620 L975,620 M880,660 L975,660 M880,700 L975,700 M880,740 L975,740"/>
        <path className={styles.building} style={{'--len':800,'--dur':'0.8s','--delay':'2.9s',stroke:'rgba(14,12,10,0.12)',strokeWidth:'0.6'}}
          d="M950,560 L966,560 M950,520 L966,520 M950,480 L966,480 M950,440 L966,440 M950,400 L966,400 M950,360 L966,360
             M956,300 L956,560 M959,300 L959,560 M962,300 L962,560"/>

        {/* HERO-9: Twin towers with sky bridge */}
        <path className={styles.building} style={{'--len':2000,'--dur':'2.1s','--delay':'1.6s',strokeWidth:'1.1'}}
          d="M1000,780 L1000,300 L993,300 L993,280 L1030,280 L1030,300 L1023,300 L1023,780"/>
        <path className={styles.building} style={{'--len':1900,'--dur':'2s','--delay':'1.65s',strokeWidth:'1.1'}}
          d="M1055,780 L1055,320 L1048,320 L1048,300 L1085,300 L1085,320 L1078,320 L1078,780"/>
        <path className={styles.accent} style={{'--len':180,'--dur':'0.5s','--delay':'3.1s',strokeWidth:'1.2'}}
          d="M1023,500 L1048,500 M1023,505 L1048,505"/>
        <path className={styles.building} style={{'--len':600,'--dur':'0.7s','--delay':'2.8s',stroke:'rgba(14,12,10,0.15)',strokeWidth:'0.6'}}
          d="M1005,300 L1005,780 M1010,300 L1010,780 M1015,300 L1015,780 M1018,300 L1018,780
             M1060,320 L1060,780 M1065,320 L1065,780 M1070,320 L1070,780 M1073,320 L1073,780"/>

        {/* HERO-10: Heritage retail strip */}
        <path className={styles.building} style={{'--len':2000,'--dur':'2s','--delay':'1.7s',strokeWidth:'1'}}
          d="M1110,780 L1110,580 L1100,580 L1100,560 L1150,560 L1150,520 L1140,520 L1140,505 L1175,505 L1175,520 L1165,520 L1165,560 L1215,560 L1215,540 L1205,540 L1205,520 L1250,520 L1250,540 L1240,540 L1240,560 L1270,560 L1270,780"/>
        <path className={styles.building} style={{'--len':400,'--dur':'0.5s','--delay':'2.7s',stroke:'rgba(14,12,10,0.3)',strokeWidth:'0.8'}}
          d="M1110,620 L1150,620 M1150,570 L1215,570 M1215,570 L1270,570
             M1130,560 L1130,780 M1145,560 L1145,780 M1185,505 L1185,780 M1195,505 L1195,780 M1230,520 L1230,780"/>
        <path className={styles.accent} style={{'--len':400,'--dur':'0.6s','--delay':'2.9s'}}
          d="M1115,760 L1115,620 Q1125,608 1135,620 L1135,760 M1155,760 L1155,620 Q1165,608 1175,620 L1175,760 M1220,760 L1220,620 Q1230,608 1240,620 L1240,760"/>

        {/* HERO-11: Residential with horizontal fins */}
        <path className={styles.building} style={{'--len':2600,'--dur':'2.4s','--delay':'1.8s',strokeWidth:'1.2'}}
          d="M1290,780 L1290,300 L1282,300 L1282,280 L1340,280 L1340,300 L1332,300 L1332,780"/>
        <path className={styles.building} style={{'--len':1400,'--dur':'1.1s','--delay':'2.9s',stroke:'rgba(14,12,10,0.2)',strokeWidth:'0.7'}}
          d="M1282,760 L1340,760 M1282,740 L1340,740 M1282,720 L1340,720 M1282,700 L1340,700 M1282,680 L1340,680
             M1282,660 L1340,660 M1282,640 L1340,640 M1282,620 L1340,620 M1282,600 L1340,600 M1282,580 L1340,580
             M1282,560 L1340,560 M1282,540 L1340,540 M1282,520 L1340,520 M1282,500 L1340,500 M1282,480 L1340,480
             M1282,460 L1340,460 M1282,440 L1340,440 M1282,420 L1340,420 M1282,400 L1340,400 M1282,380 L1340,380
             M1282,360 L1340,360 M1282,340 L1340,340 M1282,320 L1340,320"/>
        <path className={styles.accent} style={{'--len':800,'--dur':'0.8s','--delay':'3s'}}
          d="M1296,755 L1296,745 L1308,745 L1308,755 M1314,755 L1314,745 L1326,745 L1326,755
             M1296,735 L1296,725 L1308,725 L1308,735 M1314,735 L1314,725 L1326,725 L1326,735
             M1296,715 L1296,705 L1308,705 L1308,715 M1314,715 L1314,705 L1326,705 L1326,715
             M1296,695 L1296,685 L1308,685 L1308,695 M1314,695 L1314,685 L1326,685 L1326,695
             M1296,675 L1296,665 L1308,665 L1308,675 M1314,675 L1314,665 L1326,665 L1326,675
             M1296,655 L1296,645 L1308,645 L1308,655 M1314,655 L1314,645 L1326,645 L1326,655
             M1296,635 L1296,625 L1308,625 L1308,635 M1314,635 L1314,625 L1326,625 L1326,635"/>

        {/* HERO-12: Far-right slender residential */}
        <path className={styles.building} style={{'--len':2000,'--dur':'2.1s','--delay':'1.9s',strokeWidth:'1.1'}}
          d="M1370,780 L1370,340 L1362,340 L1362,320 L1410,320 L1410,340 L1402,340 L1402,780"/>
        <path className={styles.building} style={{'--len':600,'--dur':'0.6s','--delay':'3s',stroke:'rgba(14,12,10,0.15)',strokeWidth:'0.6'}}
          d="M1370,700 L1410,700 M1370,660 L1410,660 M1370,620 L1410,620 M1370,580 L1410,580 M1370,540 L1410,540
             M1370,500 L1410,500 M1370,460 L1410,460 M1370,420 L1410,420 M1370,380 L1410,380
             M1384,340 L1384,780 M1396,340 L1396,780"/>

        {/* Street podiums */}
        <path className={styles.building} style={{'--len':500,'--dur':'0.7s','--delay':'2.4s',stroke:'rgba(14,12,10,0.5)',strokeWidth:'1'}}
          d="M390,780 L390,760 L494,760 L494,780"/>
        <path className={styles.building} style={{'--len':400,'--dur':'0.6s','--delay':'2.5s',stroke:'rgba(14,12,10,0.45)',strokeWidth:'1'}}
          d="M530,780 L530,760 L642,760 L642,780"/>
        <path className={styles.building} style={{'--len':500,'--dur':'0.7s','--delay':'2.6s',stroke:'rgba(14,12,10,0.4)',strokeWidth:'1'}}
          d="M760,780 L760,760 L890,760 L890,780"/>
        <path className={styles.building} style={{'--len':300,'--dur':'0.5s','--delay':'2.7s',stroke:'rgba(14,12,10,0.4)',strokeWidth:'1'}}
          d="M1000,780 L1000,760 L1090,760 L1090,780"/>

        {/* Crane accent */}
        <path className={styles.accent} style={{'--len':400,'--dur':'0.8s','--delay':'3.2s',strokeWidth:'0.9'}}
          d="M1430,780 L1430,500 L1420,500 L1440,500 M1430,500 L1430,480 L1440,480 L1430,480 L1410,490"/>
      </svg>

      {/* Hero text content */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>Architecture &amp; Interior Design Studio</p>
        <h1 className={styles.title}>
          We design<br /><em>spaces that</em><br />endure.
        </h1>
        <p className={styles.subtitle}>
          FORMA crafts architecture that balances form and humanity — where every
          structure tells a story rooted in place, culture, and light.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#about" className="btn-ghost">Our Philosophy</a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
