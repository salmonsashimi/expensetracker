import { login, logout } from '../../actions/auth';

test('expect login to return correct action object', () => {
    const action = login({ uid: '1234' });
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '1234'
    })
})

test('expect logout to return correct action object', () => {
    const action = logout({ uid: '1234' });
    expect(action).toBe({
        type: 'LOGOUT',
    })
})