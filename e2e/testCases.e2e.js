/* eslint-disable no-undef */
describe('Clicar em confirmar com mais de um campos a resgatar com valor invalido', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    it('Deve aparecer um modal alertando que foi digitado um ou mais valor acima do permitido, e exibir quais ações estão com erro.', async () => {
        await new Promise(p => setTimeout(p, 2000));

        await expect(
            element(
                by
                    .id('investmentList')
                    .withDescendant(by.text('INVESTIMENTO I')),
            ),
        ).toBeVisible();

        await element(
            by.text('INVESTIMENTO I').withAncestor(by.id('investmentList')),
        ).tap();

        await new Promise(p => setTimeout(p, 1000));

        await expect(
            element(
                by.id('infosSection').withDescendant(by.text('R$11.049,28')),
            ),
        ).toBeVisible();

        await element(
            by.text('R$11.049,28').withAncestor(by.id('infosSection')),
        ).replaceText('1200000');

        await element(by.id('infosSection')).scroll(150, 'down');

        await expect(
            element(
                by.id('infosSection').withDescendant(by.text('R$8.143,44')),
            ),
        ).toBeVisible();

        await element(
            by.text('R$8.143,44').withAncestor(by.id('infosSection')),
        ).replaceText('900000');

        await expect(element(by.id('confirmButton'))).toBeVisible();

        await element(by.id('confirmButton')).tap();

        await device.takeScreenshot('ss-case-test-01');

        await expect(element(by.id('modalTitle'))).toHaveText(
            'DADOS INVÁLIDOS',
        );

        await expect(element(by.id('modalMessage'))).toHaveText(
            'Você preencheu um ou mais campos com valor acima do permitido:\n\nBBAS3: Valor máximo de R$ 11.049,28\nVALE3: Valor máximo de R$ 8.143,44\n',
        );
    });
});

describe('Clicar em confirmar com todos os campos com valor validos', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('Deve aparecer um modal com a mensagem que o resgate foi efetuado com sucesso, e quando clicar em novo resgate, voltar para tela inicial.', async () => {
        await new Promise(p => setTimeout(p, 2000));

        await expect(
            element(
                by
                    .id('investmentList')
                    .withDescendant(by.text('INVESTIMENTO I')),
            ),
        ).toBeVisible();

        await element(
            by.text('INVESTIMENTO I').withAncestor(by.id('investmentList')),
        ).tap();

        await new Promise(p => setTimeout(p, 1000));

        await expect(
            element(
                by.id('infosSection').withDescendant(by.text('R$11.049,28')),
            ),
        ).toBeVisible();

        await element(
            by.text('R$11.049,28').withAncestor(by.id('infosSection')),
        ).replaceText('1100000');

        await element(by.id('infosSection')).scroll(150, 'down');

        await expect(
            element(
                by.id('infosSection').withDescendant(by.text('R$8.143,44')),
            ),
        ).toBeVisible();

        await element(
            by.text('R$8.143,44').withAncestor(by.id('infosSection')),
        ).replaceText('200000');

        await expect(element(by.id('confirmButton'))).toBeVisible();

        await element(by.id('confirmButton')).tap();

        await device.takeScreenshot('ss-case-test-02');

        await expect(element(by.text('RESGATE EFETUADO!'))).toBeVisible();

        await expect(
            element(
                by.text(
                    'O valor solicitado estará em sua conta em até 5 dias úteis!',
                ),
            ),
        ).toBeVisible();
    });
});
