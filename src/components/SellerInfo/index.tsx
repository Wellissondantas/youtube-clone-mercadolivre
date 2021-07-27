import React from 'react';
import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationInfo,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
 } from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
        <Title>Informações sobre o vendedor</Title>
        <LocationCard>
          <LocationIcon />

              <div>
                <p>Localização</p>
                <strong>Campina Grande, PB</strong>
              </div>

        </LocationCard>
        <ReputationCard>
            <ReputationInfo>   {/* termometro vendedor */}
              <li />
              <li />
              <li />
              <li />
              <li className="active" />
            </ReputationInfo>
              <ReputationRow>

                <div>
                  <strong> 206 </strong>
                  <span>Vendas nos últimos 60 dias</span>
                </div>

                <div>
                  <strong> <SupportIcon />
                  </strong>
                  <span>Presta bom atendimento
                  </span>
                </div>

                <div>
                  <strong> <ClockIcon /> </strong>
                  <span>Entrega os produtos dentro do prazo</span>
                </div>
              </ReputationRow>
        </ReputationCard>
        <More href="#">Ver mais dados deste vendedor</More>
    </Container>
  );
};

export default SellerInfo;
