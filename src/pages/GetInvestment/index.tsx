import React, {useCallback, useEffect, useMemo, useState} from 'react';

import {goBack} from '../../services/navigation';
import {formatter} from '../../util';

import {useTotalAmount} from '../../hooks/totalAmount';
import {useInputError} from '../../hooks/inputError';

import {Stock} from '../../interfaces';
import {GetInvestimentProps, ModalProps} from './interfaces';

import {Modal} from 'react-native';

import {Header, CustomText, Button} from '../../components';
import {Card, ListItem, Divider} from './components';

import {
    Container,
    TitleContainer,
    InvestmentData,
    ModalContainer,
    ModalContent,
    ModalTextsContainer,
    ModalTitle,
    ModalMessage,
    ActionSection,
    InfosSection,
} from './styles';

const GetInvestment: React.FC<GetInvestimentProps> = ({route}) => {
    const {totalAmount, updateTotalAmount, clearCount} = useTotalAmount();
    const {errors} = useInputError();

    const {investment} = route.params;

    const [modal, setModal] = useState<ModalProps>({
        visible: false,
    } as ModalProps);

    useEffect(() => {
        updateTotalAmount();
        return () => {
            clearCount();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const formattedTotalAmount = useMemo(
        () => formatter.numberToCurrency(totalAmount),
        [totalAmount],
    );

    const formattedMoneyValue = useMemo(
        () => formatter.numberToCurrency(investment.saldoTotal),
        [investment.saldoTotal],
    );

    const handleBack = useCallback(() => goBack(), []);

    const handleCloseModal = useCallback(
        () => setModal({...modal, visible: false}),
        [modal],
    );

    const handleFinish = useCallback(() => {
        if (errors.size === 0) {
            setModal({
                visible: true,
                title: 'RESGATE EFETUADO!',
                message:
                    'O valor solicitado estará em sua conta em até 5 dias úteis!',
                buttonText: 'NOVO RESGATE',
                buttonAction: handleBack,
            });
        } else {
            const defaultMessage =
                'Você preencheu um ou mais campos com valor acima do permitido:';
            let errorValues = '';
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            for (const [_, value] of errors) {
                errorValues += `${value}\n`;
            }

            const message = `${defaultMessage}\n\n${errorValues}`;

            setModal({
                visible: true,
                title: 'DADOS INVÁLIDOS',
                message,
                buttonText: 'CORRIGIR',
                buttonAction: handleCloseModal,
            });

            console.log(message);
        }
    }, [errors, handleBack, handleCloseModal]);

    const renderModal = useCallback(
        () => (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal.visible}>
                <ModalContainer>
                    <ModalContent>
                        <ModalTextsContainer>
                            <ModalTitle testID="modalTitle" type="primaryLarge">
                                {modal.title}
                            </ModalTitle>
                            <ModalMessage
                                testID="modalMessage"
                                type="secondarySmall">
                                {modal.message}
                            </ModalMessage>
                        </ModalTextsContainer>

                        <Button onPress={modal.buttonAction}>
                            {modal.buttonText}
                        </Button>
                    </ModalContent>
                </ModalContainer>
            </Modal>
        ),
        [
            modal.buttonAction,
            modal.buttonText,
            modal.message,
            modal.title,
            modal.visible,
        ],
    );

    const renderItems = (item: Stock) => (
        <ListItem key={item.id} item={item} investment={investment} />
    );

    return (
        <Container>
            <Header>Resgate</Header>

            <InfosSection testID="infosSection">
                <TitleContainer paddingTop>
                    <CustomText type="secondaryLarge">
                        DADOS DO INVESTIMENTO
                    </CustomText>
                </TitleContainer>

                <Card>
                    <InvestmentData>
                        <CustomText type="primarySmall">Nome</CustomText>
                        <CustomText type="secondaryLarge">
                            {investment.nome}
                        </CustomText>
                    </InvestmentData>

                    <Divider />

                    <InvestmentData>
                        <CustomText type="primarySmall">
                            Saldo total disponível
                        </CustomText>
                        <CustomText type="secondaryLarge">
                            {formattedMoneyValue}
                        </CustomText>
                    </InvestmentData>
                </Card>

                <TitleContainer>
                    <CustomText type="secondaryLarge">
                        RESGATE DO SEU JEITO
                    </CustomText>
                </TitleContainer>

                {investment.acoes.map(item => renderItems(item))}
            </InfosSection>

            <ActionSection>
                <Card>
                    <InvestmentData>
                        <CustomText type="primarySmall">
                            Valor total a resgatar
                        </CustomText>
                        <CustomText type="secondaryLarge">
                            {formattedTotalAmount}
                        </CustomText>
                    </InvestmentData>
                </Card>

                <Button testID="confirmButton" onPress={handleFinish}>
                    CONFIRMAR RESGATE
                </Button>
            </ActionSection>

            {renderModal()}
        </Container>
    );
};

export default GetInvestment;
