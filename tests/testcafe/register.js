import { Selector, RequestMock } from 'testcafe';

const registerUrl = new RegExp('api/v1/user/registration');

const registerMock = new RequestMock()
  .onRequestTo((request) => request.url.match(registerUrl) && JSON.parse(request.body).firstname === 'Ryan')
  .respond({
    token: 'TEST_TOKEN',
  }, 200, { 'Access-Control-Allow-Origin': '*' });

fixture `Register`.page('http://localhost:8080/register')
  .requestHooks(registerMock);

const submitButton = Selector('.btn-primary');
const successMessage = Selector('.success-message');

test('Test registration', async (t) => {
  await t
    .click(submitButton)
    .expect(successMessage.exists).ok();
})
