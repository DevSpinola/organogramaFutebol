import React from "react";
import './Rodape.css'
const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/imagens/fb.png" alt="fb" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/imagens/tw.png" alt="tw" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/imagens/ig.png" alt="ig" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="logo" />
      </section>
      <section>
        <p>Desenvolvido por Spinola</p>
      </section>
    </footer>
  );
};

export default Rodape;
