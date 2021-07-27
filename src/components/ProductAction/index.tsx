import React from 'react';
import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  PriceInstallment,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition> Novo | 34 vendidos </Condition>

    <Row>
      <h1>Refrigerador Samsung Side by Side</h1>
      <HeartIcon />
    </Row>
    <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
            <span className="symbol">R$</span>
            <span className="Fraction">7.499</span>
            <span className="cents">99</span>
        </PriceRow>

          <PriceInstallment>em 12x de R$ 624,99 sem juros</PriceInstallment>

        <StockStatus>Em estoque</StockStatus>

        <MethodCard>
          <CheckIcon />

          <div>
            <span className="title">Frete grátis</span>
            <span className="details">Benefício Mercado Pontos</span>
            <a href="#" className="more">Ver mais opções</a>
          </div>
        </MethodCard>

        <Actions>
          <Button solid>Comprar agora</Button>
          <Button>Adicionar ao carrinho</Button>
        </Actions>

        <Benefits>
          <li>
            <ShieldIcon />
            <p>
              Compra Garantida, receba o produto que está esperando ou devolvemos o dinheiro.
            </p>
          </li>
        </Benefits>
      </PriceCard>
    </Container>

  );
};

export default ProductAction;
