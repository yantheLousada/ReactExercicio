import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';

const Contato = () => {
  return (
    <section className={styles.contato}>
      <img src={foto} alt="Máquina de Escrever" />

      <div>
        <h1>Entre em contato</h1>
        <ul className={`${styles.contato} animeLeft`}>
          <li>exemplo@exemplo.com</li>
          <li>99999-9999</li>
          <li>Rua Ali de Baixo,999 </li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
