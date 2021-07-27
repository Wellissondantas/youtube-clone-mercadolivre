import React from 'react';
import coolerImage from '../../assets/cooler.png';
import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';

import { Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section ,
  Description, } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
            <Gallery>
              <img alt="Cooler" src={coolerImage} />
            </Gallery>

            <Info />
        </Column>

        <Column>
          <ProductAction />

          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida por Wellisson</p>
        <p className="description">Receba seu produto ou o mercado livre devolve seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem Garantia estabelecida</p>
      </span>
    </div>

      <a href="#">Saiba mais sobre garantia</a>

  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
    <br />
    O refrigerador possui capacidade de 415 litros e freezer com 202 litros, totalizando 617L. Isso resulta em mais espaço para você armazenar todos os alimentos de forma organizada e prática. A exclusiva tecnologia SpaceMax permite que as paredes sejam mais finas com quantidade mínima de isolamento de alta eficiência. Assim, ela oferece mais espaço sem aumentar as dimensões externas ou comprometer a eficiência energética.
    <br/>
    <br/>
    <strong> Detalhes do produto </strong>
    <br />
    <br/>
    Dura mais com até 50% de economia de energia <br />
    Elimina odores para manter o sabor natural <br />
    Armazene mais legumes e frutas com facilidade <br />
    Principais características <br />
    Capacidade líquida total: 617L (Refrigerador: 415L / Freezer: 202L). Consumo A (54.7 kWh/mês). Dimensões (L X A X P - mm): 912 x 1780 x 716. <br /><br />

    <strong>   Tecnologia SpaceMax</strong>
    <br />
    <br />
    Armazene mais alimentos com grandiosos 617L de capacidade. A tecnologia exclusiva SpaceMax permite paredes muito mais finas, sem perder a eficiência de isolamento. Ela cria mais espaço interno, sem aumentar as dimensões externas ou comprometer a eficiência energética.
    <br />
    <br />
    <strong>   All-around Cooling</strong>
    <br />
    <br />
    Tenha certeza de que seus alimentos estão mantidos em condições ideais - Não importa onde estejam dentro da geladeira. O sitema All-around Cooling verifica constantemente a temperatura e libera ar gelado quando necessário. Ele resfria a geladeira igualmente em todos os lugares, para que todos os alimentos se mantenham frescos por mais tempo.
    <br />
    <br />
    <strong>   Compressor Digital Inverter</strong>
    <br />
    <br />
    O compressor Samsung Digital Inverter dura mais tempo, faz menos barulho ainda economiza até 50% de energia. Ao contrário de compressores convencionais, ele ajusta automaticamente sua velocidade de acordo com a necessidade de resfriamento, reduzindo o desgaste das peças. Ele também é certificado pela VDE na Alemanha para 21 anos de durabilidade e conta com garantia de 10 anos.
    <br />
    <br />
    <strong>   Power Freeze / Power Cool</strong>
    <br />
    <br />
    Resfriamento e congelamento mais rápidos. Com o toque de um botão, a função Power Cool manda jatos de ar extremamente gelados para a geladeira para resfriar rapidamente suas compras ou bebidas favoritas. Já a função Power Freeze funciona para o Freezer e é perfeita para congelar rapidamente, deixar seus pratos mais firmes e fazer gelo.
    <br />
    <br />

    <strong>Fábrica de Gelo</strong>
    <br />
    <br />
    Garanta que você tem bastante gelo, sem desperdiçar espaço no Freezer. A fábrica de gelo faz e armazena cubos de gelo automaticamente. Seu design compacto é metade do tamanho de uma fábrica de gelo convencional, então ela libera mais espaço para alimentos congelados, sem perder a capacidade de produção.
    <br />
    <br />
    </p>
  </Description>
);


export default Product;
