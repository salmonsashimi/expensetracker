import { login, logout } from '../../actions/auth';

test('expect login to return correct action object', () => {
    const action = login('1234');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '1234'
    })
})

test('expect logout to return correct action object', () => {
    const action = logout('1234');
    expect(action).toEqual({
        type: 'LOGOUT',
    })
})