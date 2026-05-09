describe('Automation', () => {

Cypress.on('uncaught:exception', () => false);

Cypress.Commands.add('forceClick', (selector) => {
    cy.get(selector).scrollIntoView().click({ force: true });
});

    // TC01: Cadastro do Usuário

    it('TC01: Cadastro do Usuario', () => {

        const randomEmail = `user_${Date.now()}@gmail.com`;

        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.get('input[data-qa="signup-name"]').type('Pedro');
        cy.get('input[data-qa="signup-email"]').type(randomEmail);
        cy.get('button[data-qa="signup-button"]').click();

        cy.get('#id_gender1').check();
        cy.get('input[data-qa="password"]').type('12345');
        cy.get('select[data-qa="days"]').select('1');
        cy.get('select[data-qa="months"]').select('January');
        cy.get('select[data-qa="years"]').select('2000');

        cy.get('#newsletter').check();
        cy.get('#optin').check();

        cy.get('input[data-qa="first_name"]').type('Pedro');
        cy.get('input[data-qa="last_name"]').type('Silva');
        cy.get('input[data-qa="company"]').type('Empresa Teste');
        cy.get('input[data-qa="address"]').type('Rua A, 123');
        cy.get('input[data-qa="address2"]').type('Casa Fundos');

        cy.get('select[data-qa="country"]').select('Canada');

        cy.get('input[data-qa="state"]').type('Estado');
        cy.get('input[data-qa="city"]').type('Cidade');
        cy.get('input[data-qa="zipcode"]').type('55296000');
        cy.get('input[data-qa="mobile_number"]').type('81940028922');

        cy.get('button[data-qa="create-account"]').click();
        cy.contains('Account Created!').should('be.visible');
        cy.get('a[data-qa="continue-button"]').click();
    });

    // TC02: Login do Usuário

    it('TC02: Login do Usuario', () => {

        const emailLogin = `login_${Date.now()}@gmail.com`;

        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.get('input[data-qa="signup-name"]').type('UsuarioLogin');
        cy.get('input[data-qa="signup-email"]').type(emailLogin);
        cy.get('button[data-qa="signup-button"]').click();

        cy.get('#id_gender1').check();
        cy.get('input[data-qa="password"]').type('12345');
        cy.get('select[data-qa="days"]').select('1');
        cy.get('select[data-qa="months"]').select('January');
        cy.get('select[data-qa="years"]').select('2000');

        cy.get('input[data-qa="first_name"]').type('User');
        cy.get('input[data-qa="last_name"]').type('Test');
        cy.get('input[data-qa="company"]').type('Empresa');
        cy.get('input[data-qa="address"]').type('Rua Teste');
        cy.get('select[data-qa="country"]').select('Canada');
        cy.get('input[data-qa="state"]').type('Estado');
        cy.get('input[data-qa="city"]').type('Cidade');
        cy.get('input[data-qa="zipcode"]').type('55123456');
        cy.get('input[data-qa="mobile_number"]').type('81940028922');

        cy.get('button[data-qa="create-account"]').click();
        cy.get('a[data-qa="continue-button"]').click();

        cy.contains('Logout').click();

        cy.get('a[href="/login"]').click();
        cy.get('input[data-qa="login-email"]').type(emailLogin);
        cy.get('input[data-qa="login-password"]').type('12345');
        cy.get('button[data-qa="login-button"]').click();

        cy.contains('Logged in as').should('be.visible');
    });


    // TC03: Login com credenciais inválidas

    it('TC03: Login com Credenciais Invalidas', () => {

        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();

        cy.get('input[data-qa="login-email"]').type('emailinvalido@teste.com');
        cy.get('input[data-qa="login-password"]').type('senhaerrada');
        cy.get('button[data-qa="login-button"]').click();

        cy.contains('Your email or password is incorrect!').should('be.visible');
    });

    // TC04: Logout do Usuário

    it('TC04: Logout do Usuario', () => {

        const emailLogout = `logout_${Date.now()}@gmail.com`;

        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.get('input[data-qa="signup-name"]').type('UsuarioLogout');
        cy.get('input[data-qa="signup-email"]').type(emailLogout);
        cy.get('button[data-qa="signup-button"]').click();

        cy.get('#id_gender1').check();
        cy.get('input[data-qa="password"]').type('12345');
        cy.get('select[data-qa="days"]').select('1');
        cy.get('select[data-qa="months"]').select('January');
        cy.get('select[data-qa="years"]').select('2000');

        cy.get('input[data-qa="first_name"]').type('User');
        cy.get('input[data-qa="last_name"]').type('Logout');
        cy.get('input[data-qa="company"]').type('Empresa');
        cy.get('input[data-qa="address"]').type('Rua Teste');
        cy.get('select[data-qa="country"]').select('Canada');
        cy.get('input[data-qa="state"]').type('Estado');
        cy.get('input[data-qa="city"]').type('Cidade');
        cy.get('input[data-qa="zipcode"]').type('55123456');
        cy.get('input[data-qa="mobile_number"]').type('81940028922');

        cy.get('button[data-qa="create-account"]').click();
        cy.get('a[data-qa="continue-button"]').click();

        cy.contains('Logout').click();

        cy.url().should('include', '/login');
    });

    // TC05: Registro com e-mail existente

    it('TC05: Cadastro com Email Existente', () => {

        const emailExistente = `existente_${Date.now()}@gmail.com`;

        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.get('input[data-qa="signup-name"]').type('Usuario1');
        cy.get('input[data-qa="signup-email"]').type(emailExistente);
        cy.get('button[data-qa="signup-button"]').click();

        cy.get('#id_gender1').check();
        cy.get('input[data-qa="password"]').type('12345');
        cy.get('select[data-qa="days"]').select('1');
        cy.get('select[data-qa="months"]').select('January');
        cy.get('select[data-qa="years"]').select('2000');

        cy.get('input[data-qa="first_name"]').type('User');
        cy.get('input[data-qa="last_name"]').type('Existente');
        cy.get('input[data-qa="company"]').type('Empresa');
        cy.get('input[data-qa="address"]').type('Rua Teste');
        cy.get('select[data-qa="country"]').select('Canada');
        cy.get('input[data-qa="state"]').type('Estado');
        cy.get('input[data-qa="city"]').type('Cidade');
        cy.get('input[data-qa="zipcode"]').type('55123456');
        cy.get('input[data-qa="mobile_number"]').type('81940028922');

        cy.get('button[data-qa="create-account"]').click();
        cy.get('a[data-qa="continue-button"]').click();

        cy.contains('Logout').click();

        cy.get('a[href="/login"]').click();
        cy.get('input[data-qa="signup-name"]').type('Usuario1');
        cy.get('input[data-qa="signup-email"]').type(emailExistente);
        cy.get('button[data-qa="signup-button"]').click();

        cy.contains('Email Address already exist!').should('be.visible');
    });

    // TC06: Deletar Conta do Usuário

    it('TC06: Deletar Conta do Usuario', () => {

        const emailDelete = `delete_${Date.now()}@gmail.com`;

        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.get('input[data-qa="signup-name"]').type('UsuarioDelete');
        cy.get('input[data-qa="signup-email"]').type(emailDelete);
        cy.get('button[data-qa="signup-button"]').click();

        cy.get('#id_gender1').check();
        cy.get('input[data-qa="password"]').type('12345');
        cy.get('select[data-qa="days"]').select('1');
        cy.get('select[data-qa="months"]').select('January');
        cy.get('select[data-qa="years"]').select('2000');

        cy.get('input[data-qa="first_name"]').type('User');
        cy.get('input[data-qa="last_name"]').type('Delete');
        cy.get('input[data-qa="company"]').type('Empresa');
        cy.get('input[data-qa="address"]').type('Rua Teste');
        cy.get('select[data-qa="country"]').select('Canada');
        cy.get('input[data-qa="state"]').type('Estado');
        cy.get('input[data-qa="city"]').type('Cidade');
        cy.get('input[data-qa="zipcode"]').type('55123456');
        cy.get('input[data-qa="mobile_number"]').type('81940028922');

        cy.get('button[data-qa="create-account"]').click();
        cy.get('a[data-qa="continue-button"]').click();

        cy.contains('Delete Account').click();

        cy.contains('Account Deleted!').should('be.visible');
        cy.get('a[data-qa="continue-button"]').click();
    });

    // TC07: Adicionar Produto ao Carrinho

    it('TC07: Adicionar Produto ao Carrinho', () => {

        cy.visit('https://automationexercise.com/');

        cy.contains('Products').click();

        cy.get('.product-image-wrapper').first().trigger('mouseover');
        cy.get('.add-to-cart').first().click({ force: true });

        cy.contains('Continue Shopping').click();

        cy.get('a[href="/view_cart"]').first().click();

        cy.get('.cart_quantity').should('contain', '1');
    });


    // TC08: Checkout Completo com Login Durante o Processo

    it('TC08: Checkout Completo', () => {

    const emailCheckout = `checkout_${Date.now()}@gmail.com`;

    cy.visit('https://automationexercise.com/');
    cy.contains('Products').click();

    cy.get('.product-image-wrapper').first().trigger('mouseover');
    cy.contains('Add to cart').first().click();
    cy.contains('View Cart').click();

    cy.contains('Proceed To Checkout').click();

    cy.contains('Register / Login').click();

    cy.get('#checkoutModal').find('.close-checkout-modal').click();

    cy.get('a[href="/login"]').first().click();
    cy.wait(500);

    cy.get('input[data-qa="signup-name"]').type('UsuarioCheckout');
    cy.get('input[data-qa="signup-email"]').type(emailCheckout);
    cy.get('button[data-qa="signup-button"]').click();

    cy.get('#id_gender1').check();
    cy.get('input[data-qa="password"]').type('12345');
    cy.get('select[data-qa="days"]').select('1');
    cy.get('select[data-qa="months"]').select('January');
    cy.get('select[data-qa="years"]').select('2000');
    cy.get('input[data-qa="first_name"]').type('User');
    cy.get('input[data-qa="last_name"]').type('Checkout');
    cy.get('input[data-qa="address"]').type('Rua Teste');
    cy.get('select[data-qa="country"]').select('Canada');
    cy.get('input[data-qa="state"]').type('Estado');
    cy.get('input[data-qa="city"]').type('Cidade');
    cy.get('input[data-qa="zipcode"]').type('55123456');
    cy.get('input[data-qa="mobile_number"]').type('81940028922');
    cy.get('button[data-qa="create-account"]').click();

    cy.get('a[data-qa="continue-button"]').click();

    cy.get('a[href="/view_cart"]').first().click();
    cy.contains('Proceed To Checkout').click();

    cy.get('textarea[name="message"]').type('Obrigado pelo atendimento!');
    cy.contains('Place Order').click();

    cy.get('input[data-qa="name-on-card"]').type('Pedro Henrique');
    cy.get('input[data-qa="card-number"]').type('4242424242424242');
    cy.get('input[data-qa="cvc"]').type('123');
    cy.get('input[data-qa="expiry-month"]').type('12');
    cy.get('input[data-qa="expiry-year"]').type('2030');
    cy.get('button[data-qa="pay-button"]').click();

    cy.contains('Order Placed!').should('be.visible');
});

    // TC09: Enviar mensagem no Contact Us

    it('TC09: Contact Us Form', () => {

        cy.visit('https://automationexercise.com/');

        cy.contains('Contact us').click();

        cy.get('input[data-qa="name"]').type('Pedro');
        cy.get('input[data-qa="email"]').type(`contato_${Date.now()}@gmail.com`);
        cy.get('input[data-qa="subject"]').type('Problema no sistema');
        cy.get('textarea[data-qa="message"]').type('Esta é uma mensagem de teste enviada pelo Cypress.');

        cy.get('input[name="upload_file"]').selectFile({
            contents: Cypress.Buffer.from("Arquivo de teste automático."),
            fileName: "teste.txt",
            lastModified: Date.now()
        });

        cy.get('input[data-qa="submit-button"]').click();

        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');

        cy.contains('Home').click();
        cy.url().should('include', 'https://automationexercise.com/');
    });


    // TC10: Pesquisa de Produto

    it('TC10: Pesquisa de Produto', () => {

        cy.visit('https://automationexercise.com/');
        cy.contains('Products').click();

        cy.get('input#search_product').type('dress');
        cy.get('button#submit_search').click();

        cy.contains('Searched Products').should('be.visible');

        cy.get('.productinfo.text-center').should('have.length.at.least', 1);
    });


    // TC11: Verificar "Subscription" no rodapé

    it('TC11: Verificar Subscription no rodape', () => {

        cy.visit('https://automationexercise.com/');
        cy.contains('Subscription').scrollIntoView().should('be.visible');

        cy.get('#susbscribe_email').type(`email_${Date.now()}@gmail.com`);
        cy.get('#subscribe').click();

        cy.contains('You have been successfully subscribed!').should('be.visible');
    });

    // TC12: Adicionar produtos no carrinho

    it('TC12: Adicionar Produtos ao Carrinho', () => {

    cy.visit('https://automationexercise.com/');

    cy.contains('Products').click();
    cy.contains('All Products').should('be.visible');

    cy.get('.product-image-wrapper').first().trigger('mouseover');
    cy.contains('Add to cart').first().click();

    cy.contains('Continue Shopping').click();

    cy.get('.product-image-wrapper')
      .eq(1)
      .scrollIntoView()
      .trigger('mouseover')
      .within(() => {
        cy.get('.add-to-cart').first().click({ force: true });
      });

    cy.contains('View Cart').click();

    cy.url().should('include', '/view_cart');
    cy.get('.cart_item').should('have.length.at.least', 2);
});

    // TC13: Verificar produto no carrinho após adicionar

    it('TC13: Verificar Produto no Carrinho', () => {

        cy.visit('https://automationexercise.com/');
        cy.contains('Products').click();

       cy.get('.overlay-content').first().contains('Add to cart').click({ force: true });
        cy.contains('View Cart').click();

        cy.url().should('include', '/view_cart');
        cy.get('.cart_description').should('be.visible');
    });


    // TC14: Remover item do carrinho

    it('TC14: Remover Item do Carrinho', () => {

        cy.visit('https://automationexercise.com/');
        cy.contains('Products').click();

        cy.get('.overlay-content').first().contains('Add to cart').click({ force: true });
        cy.contains('View Cart').click();

        cy.get('.cart_quantity_delete').click();

        cy.contains('Cart is empty!').should('be.visible');
    });


    // TC15: Verificação de Preços e Total no Carrinho

    it('TC15: Verificar Preços no Carrinho', () => {

    cy.visit('https://automationexercise.com/');
    cy.contains('Products').click();

    cy.get('.product-image-wrapper').eq(0).trigger('mouseover');
    cy.contains('Add to cart').eq(0).click();
    cy.contains('Continue Shopping').click();

    cy.get('.product-image-wrapper')
      .eq(1)
      .scrollIntoView()
      .trigger('mouseover')
      .within(() => {
        cy.get('.add-to-cart').first().click({ force: true });
      });

    cy.contains('View Cart').click();

    cy.get('.cart_quantity').each(($qtd) => {
        expect($qtd).to.contain('1');
    });

    cy.get('.cart_price').each(($preco) => {
    expect($preco.text()).to.match(/Rs\.\s*\d+/);
});

    cy.get('.cart_total').each(($total) => {
    expect($total.text()).to.match(/Rs\.\s*\d+/);
});

});

    // TC16: Place Order - Login before Checkout

    it('TC16: Place Order - Login antes do Checkout', () => {

        const emailTC16 = `tc16_${Date.now()}@gmail.com`;


        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.get('input[data-qa="signup-name"]').type('UserTC16');
        cy.get('input[data-qa="signup-email"]').type(emailTC16);
        cy.get('button[data-qa="signup-button"]').click();

        cy.get('#id_gender1').click();
        cy.get('input[data-qa="password"]').type('12345');
        cy.get('select[data-qa="days"]').select('1');
        cy.get('select[data-qa="months"]').select('1', { force: true });
        cy.get('select[data-qa="years"]').select('2000');
        cy.get('button[data-qa="create-account"]').click();

        cy.get('body').then(($body) => {
    if ($body.find('.modal-content').length > 0) {
        cy.get('.modal-content .close').click();
    }
});

    cy.get('a[data-qa="continue-button"]', { timeout: 8000 })
  .should('be.visible')
  .click()
  .then(() => {
      cy.reload();
  });

        cy.contains('Products').click();
        cy.get('.overlay-content').first().contains('Add to cart').click();
        cy.contains('View Cart').click();

        cy.contains('Proceed To Checkout').click();
        cy.contains('Address Details').should('be.visible');

        cy.get('textarea[name="message"]').type('Pedido automatizado TC16');
        cy.contains('Place Order').click();

        cy.get('input[name="name_on_card"]').type('Teste');
        cy.get('input[name="card_number"]').type('1234123412341234');
        cy.get('input[name="cvc"]').type('123');
        cy.get('input[name="expiry_month"]').type('12');
        cy.get('input[name="expiry_year"]').type('2030');

        cy.get('#submit').click();
        cy.contains('Order Placed!').should('be.visible');
    });


    // TC17: Remove Products Before Checkout

    it('TC17: Remover Produtos antes do Checkout', () => {

        cy.visit('https://automationexercise.com/');
        cy.contains('Products').click();

        cy.get('.overlay-content').first().contains('Add to cart').click({ force: true });
        cy.contains('View Cart').click();

        cy.get('.cart_quantity_delete').click();

        cy.contains('Cart is empty!').should('be.visible');
    });


    // TC18: View Category Products

    it('TC18: Ver Categoria de Produtos', () => {

        cy.visit('https://automationexercise.com/');

        cy.contains('Women').click();
        cy.contains('Dress').click();

        cy.get('.title.text-center').should('be.visible');
        cy.get('.product-image-wrapper').should('have.length.at.least', 1);
    });

    // TC19: View & Cart Brand Products

    it('TC19: Add brand product to cart', () => {
    cy.visit('https://automationexercise.com/');
    cy.contains('Products').click();
    cy.contains('Polo').click();

    cy.get('.title.text-center').should('be.visible');

    cy.get('.overlay-content')
  .first()
  .scrollIntoView()
  .invoke('show')
  .contains('Add to cart')
  .click({ force: true });

    cy.contains('View Cart').click();
});

    // TC20: Search Products

    it('TC20: Buscar Produtos', () => {

        cy.visit('https://automationexercise.com/');
        cy.contains('Products').click();

        cy.get('#search_product').type('dress');
        cy.get('#submit_search').click();

        cy.contains('Searched Products', { timeout: 12000 })
  .scrollIntoView()
  .should('be.visible');

        cy.get('.product-image-wrapper')
  .should('have.length.at.least', 1);

        cy.get('.product-image-wrapper').should('have.length.at.least', 1);
    });

});
