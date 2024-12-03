import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
// import "./01-srp";
// import "./02-ocp-a";
// import "./02-ocp-b";
import "./03-lsp-a";


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Principios S.O.L.I.D</h1>

    <ul class="principles">
      <li><strong>S</strong> - Single Responsibility Principle (SRP)</li>
      <li><strong>O</strong> - Open / Closed Principle (OCP)</li>
      <li><strong>L</strong> - Liskov Substitution Pinciple (LSP)</li>
      <li><strong>I</strong> - Interface Segregation Pronciple (ISP)</li>
      <li><strong>D</strong> - Dependency Inversion Principle (DIP)</li>
    </ul>
    
  </div>
`

