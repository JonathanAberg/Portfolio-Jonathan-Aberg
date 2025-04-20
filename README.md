# React + Vite Portfolio

# Steg för steg: Hur du får igång sidan

## Förberedelser

1. Kontrollera att du har Node.js installerat på din dator
   - Öppna terminalen och skriv `node -v` för att se om det finns installerat
   - Om det inte finns, ladda ner och installera från [nodejs.org](https://nodejs.org/)

## Installation

1. Öppna terminalen
2. Navigera till projektmappen:
   ```
   cd /Users/jonathanaberg/Developer/Portfolio/Portfolio\ 2/my-portfolio
   ```
3. Installera alla beroenden:
   ```
   npm install
   ```
   Detta kommer att installera React, Vite och alla andra paket som behövs.

## Starta utvecklingsservern

1. I samma terminalmapp, kör:
   ```
   npm run dev
   ```
2. Vite kommer att starta en utvecklingsserver, vanligtvis på http://localhost:5173
3. Öppna denna URL i din webbläsare för att se sidan

## Bygga för produktion

1. När du är klar med utvecklingen och vill publicera sidan:
   ```
   npm run build
   ```
2. Detta skapar en optimerad produktionsversion i mappen `dist`
3. Du kan testa produktionsbygget lokalt:
   ```
   npm run preview
   ```

## Anpassa innehållet

- Redigera komponenter i `src/components/` för att ändra sidans innehåll
- Uppdatera bilder i `public/` mappen
- Ändra stilar i respektive CSS-moduler

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
