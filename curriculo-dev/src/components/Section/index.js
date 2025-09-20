import React from 'react';
import './Section.css';
import Title from '../title/index';
import Card from '../Card';
const Section = () => (
  <>
    <section id="about">
      <Title texto="Olá, sou Rafael Felipe" />
      <div className="info">
        Iturama - MG - (34) 99781-3579
        <span>rafaelfelipeoliveiras2@gmail.com</span>
      </div>
      <p>
        Biografia Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sapiente alias, fugiat numquam quia aliquid nobis voluptatem placeat
        quam illo aspernatur. Quis non illo hic voluptatum nihil quo
        perspiciatis natus. Ab?
      </p>
      <div className="contact" id="contact">
        <Title texto="Contatos ACQA" />
      </div>
    </section>
    <section id="experience">
      <Title texto="Experiência" />
      <Card
        subtitle="Comprador Júnior"
        subtitleH3="Usina Coruripe"
        data="Abril 2025 - Atualmente"
        info="Atividades: Negociação com fornecedores, análise de propostas, emissão de pedidos de compra, controle de estoque, acompanhamento de entregas e suporte à equipe de vendas."
      />
    </section>
    <section id="skills">
      <Title texto="Habilidades CQA" />
    </section>
    <section id="projects">
      <Title texto="Projetos CQA" />
    </section>
  </>
);
export default Section;
