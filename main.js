document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIÓN UTILITARIA PARA DIBUJAR FLECHAS DE FUERZA (Problemas 1 y 2) ---
    const drawArrow = (ctx, x1, y1, x2, y2, color, label) => {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 2.5;

        // Línea principal
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // Punta de la flecha
        const headlen = 12;
        const angle = Math.atan2(y2 - y1, x2 - x1);
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - headlen * Math.cos(angle - Math.PI / 7), y2 - headlen * Math.sin(angle - Math.PI / 7));
        ctx.lineTo(x2 - headlen * Math.cos(angle + Math.PI / 7), y2 - headlen * Math.sin(angle + Math.PI / 7));
        ctx.closePath();
        ctx.fill();

        // Etiqueta de texto
        ctx.font = 'bold 16px Oswald';
        const labelX = x2 + 10 * Math.cos(angle) + (angle > Math.PI/2 || angle < -Math.PI/2 ? -30 : 10);
        const labelY = y2 + 10 * Math.sin(angle);
        ctx.fillText(label, labelX, labelY);
        
        ctx.restore();
    };

    // --- LÓGICA PARA EL DIAGRAMA DEL PROBLEMA 1: El Granjero y el Trineo ---
    const canvas1 = document.getElementById('dcl-canvas-p1');
    if (canvas1) {
        const ctx = canvas1.getContext('2d');
        const centerX = canvas1.width / 2;
        const centerY = canvas1.height / 1.7;
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(centerX - 50, centerY - 25, 100, 50);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(30, centerY + 25);
        ctx.lineTo(canvas1.width - 30, centerY + 25);
        ctx.stroke();
        const forceLen = 90;
        const angleF = -30 * Math.PI / 180;
        drawArrow(ctx, centerX, centerY, centerX + forceLen * Math.cos(angleF), centerY + forceLen * Math.sin(angleF), '#c62828', 'F');
        drawArrow(ctx, centerX, centerY, centerX - 70, centerY, '#ef6c00', 'fk');
        drawArrow(ctx, centerX, centerY, centerX, centerY + 60, '#0d47a1', 'mg');
        drawArrow(ctx, centerX, centerY, centerX, centerY - 60, '#00838f', 'N');
    }

    // --- LÓGICA PARA EL DIAGRAMA DEL PROBLEMA 2: Una Carrera de Trineos ---
    const canvas2 = document.getElementById('dcl-canvas-p2');
    if (canvas2) {
        const ctx = canvas2.getContext('2d');
        const centerX = canvas2.width / 2;
        const centerY = canvas2.height / 1.7;
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(centerX - 50, centerY - 25, 100, 50);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(30, centerY + 25);
        ctx.lineTo(canvas2.width - 30, centerY + 25);
        ctx.stroke();
        const forceLen = 90;
        const angleF = -40 * Math.PI / 180;
        drawArrow(ctx, centerX, centerY, centerX + forceLen * Math.cos(angleF), centerY + forceLen * Math.sin(angleF), '#c62828', 'F');
        drawArrow(ctx, centerX, centerY, centerX, centerY + 60, '#0d47a1', 'mg');
        drawArrow(ctx, centerX, centerY, centerX, centerY - 60, '#00838f', 'N');
    }

    // --- LÓGICA PARA EL DIAGRAMA DEL PROBLEMA 3: El Esquiador en la Rampa ---
    const canvas3 = document.getElementById('dcl-canvas-p3');
    if (canvas3) {
        const ctx = canvas3.getContext('2d');
        const startX = 50, startY = 50, endX = 350, endY = 200;
        ctx.fillStyle = '#e0e0e0';
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.lineTo(startX, endY);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#9e9e9e';
        ctx.stroke();
        ctx.fillStyle = '#c62828';
        ctx.beginPath();
        ctx.arc(startX + 15, startY, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.font = 'bold 16px Oswald';
        ctx.fillStyle = '#333';
        ctx.fillText("Inicio (vi=0)", startX - 5, startY - 15);
        ctx.strokeStyle = '#1976d2';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX, endY);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#1976d2';
        ctx.textAlign = 'right';
        ctx.fillText("h = 20 m", startX - 10, (startY + endY) / 2);
        ctx.textAlign = 'left';
        ctx.fillStyle = '#333';
        ctx.fillText("Fin (hf=0)", endX - 40, endY + 20);
    }
    
    // --- LÓGICA PARA EL DIAGRAMA DEL PROBLEMA 4: La Montaña Rusa y el Rizo ---
    const canvas4 = document.getElementById('dcl-canvas-p4');
    if (canvas4) {
        const ctx = canvas4.getContext('2d');
        const groundY = 250, loopRadius = 60, loopCenterX = 280, loopCenterY = groundY - loopRadius;
        const startH = 2.5 * loopRadius, startX = 50, startY = groundY - startH;
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(startX + 80, groundY - 30, loopCenterX - loopRadius, groundY);
        ctx.arc(loopCenterX, loopCenterY, loopRadius, Math.PI / 2, (3/2) * Math.PI, true);
        ctx.arc(loopCenterX, loopCenterY, loopRadius, (3/2) * Math.PI, Math.PI / 2, true);
        ctx.lineTo(canvas4.width - 20, groundY);
        ctx.stroke();
        ctx.fillStyle = '#c62828';
        ctx.beginPath();
        ctx.arc(startX, startY, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = '#0d47a1';
        ctx.beginPath();
        ctx.arc(loopCenterX, loopCenterY - loopRadius, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = '#333';
        ctx.font = 'bold 16px Oswald';
        ctx.textAlign = 'center';
        ctx.fillText('Punto A', startX, startY - 20);
        ctx.fillText('Punto B', loopCenterX, loopCenterY - loopRadius - 20);
        ctx.strokeStyle = '#1976d2';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX - 20, startY);
        ctx.moveTo(startX - 15, startY);
        ctx.lineTo(startX - 15, groundY);
        ctx.stroke();
        ctx.textAlign = 'right';
        ctx.fillText('h', startX - 25, startY + startH/2);
        ctx.beginPath();
        ctx.moveTo(loopCenterX, loopCenterY - loopRadius);
        ctx.lineTo(loopCenterX + loopRadius + 10, loopCenterY - loopRadius);
        ctx.moveTo(loopCenterX + loopRadius, loopCenterY - loopRadius);
        ctx.lineTo(loopCenterX + loopRadius, groundY);
        ctx.stroke();
        ctx.textAlign = 'left';
        ctx.fillText('2R', loopCenterX + loopRadius + 15, groundY - loopRadius);
        ctx.setLineDash([]);
    }

    // --- LÓGICA PARA EL DIAGRAMA DEL PROBLEMA 5: Muelle y Plano Inclinado ---
    const canvas5 = document.getElementById('dcl-canvas-p5');
    if (canvas5) {
        const ctx = canvas5.getContext('2d');
        const groundY = 220, inclineStartX = 250, angle = 43 * Math.PI / 180;
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, groundY);
        ctx.lineTo(inclineStartX, groundY);
        ctx.lineTo(inclineStartX + 200, groundY - 200 * Math.tan(angle));
        ctx.stroke();
        const blockWidth = 40, blockHeight = 40, springStartX = 50, springEndX = inclineStartX - 100;
        ctx.strokeStyle = '#616161';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(springStartX, groundY - blockHeight / 2);
        for (let i = 0; i < 10; i++) {
            ctx.lineTo(springStartX + (i + 0.5) * (springEndX-springStartX)/10, groundY - blockHeight / 2 + (i%2 === 0 ? -8:8));
        }
        ctx.lineTo(springEndX, groundY - blockHeight / 2);
        ctx.stroke();
        ctx.fillStyle = '#1e88e5';
        ctx.fillRect(springEndX, groundY - blockHeight, blockWidth, blockHeight);
        ctx.font = 'bold 16px Oswald';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.fillText('Estado A', springStartX + 60, groundY + 20);
        const d = 120, h = d * Math.sin(angle), finalX = inclineStartX + d * Math.cos(angle), finalY = groundY - h;
        ctx.save();
        ctx.translate(finalX, finalY);
        ctx.rotate(-angle);
        ctx.fillStyle = '#f4511e';
        ctx.fillRect(-blockWidth/2, -blockHeight, blockWidth, blockHeight);
        ctx.restore();
        ctx.fillText('Estado B', finalX, groundY + 20);
        ctx.strokeStyle = '#1976d2';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(finalX, finalY);
        ctx.lineTo(finalX, groundY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(inclineStartX, groundY);
        ctx.lineTo(finalX, finalY);
        ctx.stroke();
        ctx.fillStyle = '#1976d2';
        ctx.textAlign = 'right';
        ctx.fillText('h', finalX - 10, finalY + h/2);
        ctx.save();
        ctx.translate(inclineStartX + (finalX - inclineStartX)/2, groundY - h/2);
        ctx.rotate(-angle);
        ctx.textAlign = 'center';
        ctx.fillText('d', 0, -10);
        ctx.restore();
        ctx.setLineDash([]);
    }

    // --- LÓGICA PARA EL DIAGRAMA DEL PROBLEMA 6: Sistema de Bloques y Polea ---
    const canvas6 = document.getElementById('dcl-canvas-p6');
    if (canvas6) {
        const ctx = canvas6.getContext('2d');
        const platformY = 180, platformXstart = 30, platformXend = 300;
        const pulleyRadius = 20, pulleyX = platformXend, pulleyY = platformY - pulleyRadius;
        ctx.fillStyle = '#e0e0e0';
        ctx.fillRect(platformXstart, platformY, platformXend - platformXstart, 50);
        ctx.strokeStyle = '#333';
        ctx.strokeRect(platformXstart, platformY, platformXend - platformXstart, 50);
        ctx.fillStyle = '#616161';
        ctx.beginPath();
        ctx.arc(pulleyX, pulleyY, pulleyRadius, 0, 2 * Math.PI);
        ctx.fill();
        const block1W = 60, block1H = 40, block1X = platformXend - 150, block1Y = platformY - block1H;
        ctx.fillStyle = '#1e88e5';
        ctx.fillRect(block1X, block1Y, block1W, block1H);
        const block2W = 40, block2H = 60, block2X = pulleyX + pulleyRadius + 10, block2Y = pulleyY + 40;
        ctx.fillStyle = '#f4511e';
        ctx.fillRect(block2X, block2Y, block2W, block2H);
        ctx.strokeStyle = '#c62828';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(block1X + block1W, block1Y + block1H / 2);
        ctx.lineTo(pulleyX, block1Y + block1H / 2);
        ctx.arc(pulleyX, pulleyY, pulleyRadius, 0, Math.PI / 2);
        ctx.lineTo(pulleyX + pulleyRadius, block2Y);
        ctx.stroke();
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 16px Oswald';
        ctx.textAlign = 'center';
        ctx.fillText('m₁', block1X + block1W / 2, block1Y + block1H / 2 + 5);
        ctx.fillText('m₂', block2X + block2W / 2, block2Y + block2H / 2 + 5);
        ctx.fillStyle = '#333';
        ctx.font = '14px Oswald';
        ctx.fillText('μₖ = 0.35', block1X + block1W / 2, platformY + 20);
    }
    
    // --- LÓGICA PARA EL DIAGRAMA DEL PROBLEMA 7: Muelle, Montaña y Roce ---
    const canvas7 = document.getElementById('dcl-canvas-p7');
    if (canvas7) {
        const ctx = canvas7.getContext('2d');
        const groundY = 250, blockH = 30;
        ctx.fillStyle = '#bdbdbd';
        ctx.fillRect(0, 0, 20, canvas7.height);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(20, groundY);
        ctx.lineTo(200, groundY);
        ctx.stroke();
        const springEndX = 100;
        ctx.fillStyle = '#1e88e5';
        ctx.fillRect(springEndX, groundY - blockH, blockH, blockH);
        ctx.strokeStyle = '#616161';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(20, groundY - blockH / 2);
        for (let i = 0; i < 8; i++) {
            ctx.lineTo(20 + (i + 0.5) * 10, groundY - blockH/2 + (i%2 === 0 ? -6:6));
        }
        ctx.lineTo(springEndX, groundY - blockH / 2);
        ctx.stroke();
        ctx.fillStyle = '#333';
        ctx.font = 'bold 14px Oswald';
        ctx.textAlign = 'center';
        ctx.fillText('Pos. A', springEndX + blockH/2, groundY + 20);
        const hillX = 200, hillW = 120, hillH = 80;
        ctx.beginPath();
        ctx.moveTo(hillX, groundY);
        ctx.bezierCurveTo(hillX + hillW/3, groundY - hillH*1.2, hillX + 2*hillW/3, groundY - hillH*1.2, hillX + hillW, groundY);
        ctx.stroke();
        ctx.fillStyle = 'rgba(200, 230, 201, 0.5)';
        ctx.fill();
        ctx.fillStyle = '#333';
        ctx.fillText('Montaña (h=2m)', hillX + hillW/2, groundY - hillH - 5);
        const inclineX = hillX + hillW + 20;
        ctx.beginPath();
        ctx.moveTo(inclineX, groundY);
        ctx.lineTo(inclineX + 180, groundY);
        ctx.lineTo(inclineX + 180, groundY - 180 * Math.tan(30 * Math.PI/180));
        ctx.closePath();
        const patternCanvas = document.createElement('canvas');
        const patternCtx = patternCanvas.getContext('2d');
        patternCanvas.width = 10; patternCanvas.height = 10;
        patternCtx.fillStyle = '#9e9e9e'; patternCtx.fillRect(0,0,1,1);
        const pattern = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(inclineX, groundY);
        ctx.lineTo(inclineX + 180, groundY - 180 * Math.tan(30 * Math.PI/180));
        ctx.stroke();
        ctx.fillStyle = '#333';
        ctx.textAlign = 'left';
        ctx.fillText('β=30°', inclineX + 20, groundY - 10);
        ctx.fillText('con roce (μk)', inclineX + 20, groundY - 25);
    }
    
    // --- LÓGICA PARA EL DIAGRAMA DEL PROBLEMA 8: Gráfico Fuerza vs. Posición ---
    const canvas8 = document.getElementById('dcl-canvas-p8');
    if (canvas8) {
        const ctx = canvas8.getContext('2d');
        const margin = { top: 20, right: 20, bottom: 40, left: 50 };
        const graphWidth = canvas8.width - margin.left - margin.right;
        const graphHeight = canvas8.height - margin.top - margin.bottom;
        const data = [{ x: 0, F: 30 }, { x: 6, F: 30 }, { x: 10, F: 20 }, { x: 16, F: 20 }];
        const xMax = 16, FMax = 35;
        const xScale = graphWidth / xMax, FScale = graphHeight / FMax;
        const mapX = (x) => margin.left + x * xScale;
        const mapF = (F) => margin.top + graphHeight - F * FScale;
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(margin.left, margin.top);
        ctx.lineTo(margin.left, margin.top + graphHeight);
        ctx.lineTo(margin.left + graphWidth, margin.top + graphHeight);
        ctx.stroke();
        ctx.fillStyle = '#333';
        ctx.font = 'bold 14px Oswald';
        ctx.textAlign = 'center';
        ctx.fillText('x (m)', margin.left + graphWidth / 2, canvas8.height - 10);
        ctx.save();
        ctx.translate(15, margin.top + graphHeight / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('Fx (N)', 0, 0);
        ctx.restore();
        ctx.font = '12px Oswald';
        for (let x = 0; x <= xMax; x += 2) {
            ctx.fillText(x, mapX(x), margin.top + graphHeight + 15);
            ctx.beginPath(); ctx.moveTo(mapX(x), margin.top + graphHeight);
            ctx.lineTo(mapX(x), margin.top + graphHeight - 5); ctx.stroke();
        }
        ctx.textAlign = 'right';
        for (let F = 0; F <= 30; F += 5) {
            ctx.fillText(F, margin.left - 10, mapF(F) + 4);
        }
        ctx.fillStyle = 'rgba(25, 118, 210, 0.3)';
        ctx.beginPath();
        ctx.moveTo(mapX(data[0].x), margin.top + graphHeight);
        data.forEach(p => { ctx.lineTo(mapX(p.x), mapF(p.F)); });
        ctx.lineTo(mapX(data[data.length - 1].x), margin.top + graphHeight);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#c62828';
        ctx.lineWidth = 3;
        ctx.beginPath();
        data.forEach((p, i) => {
            if (i === 0) ctx.moveTo(mapX(p.x), mapF(p.F));
            else ctx.lineTo(mapX(p.x), mapF(p.F));
        });
        ctx.stroke();
    }
});