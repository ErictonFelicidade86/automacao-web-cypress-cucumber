import LoginPage from '../pages/Login_Page'

const loginPage = new LoginPage;

Given(/^que eu queira acessar o sistema$/, () => {
    loginPage.accessarHomePage()
});

When(/^eu inserir meu login e senha$/, () => {
	loginPage.preencherDadosNaTela()
});

When(/^clicar no botão entrar$/, () => {
	loginPage.clickEmLogin()
});

Then(/^tenho acesso realizado com sucesso$/, () => {
	return true;
});

When(/^eu inserir meu login "([^"]*)" e senha "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	return true;
});

Then(/^tenho acesso "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});
