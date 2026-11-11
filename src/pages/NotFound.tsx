import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="not-found">
      <img
        className="not-found-img"
        src="/images/teatro-esporte/palhaco-404.png"
        alt="Palhaço de teatro com expressão de surpresa"
      />
      <p className="not-found-code">404</p>
      <h1 className="not-found-title">Essa cena não existe.</h1>
      <p className="not-found-text">Você entrou na coxia errada. Volte para o palco principal.</p>
      <a className="btn" href="/">
        Voltar para o início
      </a>
    </main>
  );
};

export default NotFound;
