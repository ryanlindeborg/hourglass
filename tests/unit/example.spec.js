// import { expect } from 'chai';
// import { shallowMount } from '@vue/test-utils';
// import HelloWorld from '@/components/HelloWorld.vue';
// import { actions } from '@/store/store';
// import apiClient from '@/services/apiClient';
//
// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message';
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).to.include(msg);
//   });
// });
//
// describe('TestAuth.vue', () => {
//   it('Logs in successfully', () => {
//     const mockLoginCommit = (payload) => {
//       assert payloay == ';';
//       console.log('mock called');
//     };
//     const mockLoginDetails = {};
//     apiClient.post = async (endpoint, loginDetails) => {
//       assert endpoint == '/user/session';
//       console.log(`mocked post${endpoint}${loginDetails}`);
//     };
//     actions.login({ commit: mockLoginCommit }, mockLoginDetails);
//   });
// });
