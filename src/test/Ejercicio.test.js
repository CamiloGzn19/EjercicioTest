import "@testing-library/jest-dom";
import { loginSincrono, logout } from "../actions/actionLogin";
import { loginReducer } from "../reducers/loginReducer";
import { types } from "../types/types";

describe("Verificar types", () => {
  // Test de types
  test("comparar objetos", () => {
    expect(types).toEqual({
      login: "login",
      register: "register",
      logout: "logout",

      // taskAddNew: '[Task] New taks',
      // taskActive: '[Task] Active taks',
      // taskLoad: '[Task] Load taks',
      // taskUpdate: '[Task] Update taks',
      // taskDelete: '[Task] Delete taks',
      // taskClear: '[Task] Clear taks',
      // taskLogoutClean: '[Task] Logout taks',
    });
  });
  // Test de reducers login
  test("debe realizar el login", () => {
    const initialState = {};
    const action = {
      type: types.login,
      payload: {
        id: "abc",
        displayname: "Fernando",
      },
    };
    const state = loginReducer(initialState, action);
    expect(state).toEqual({
      id: "abc",
      name: "Fernando",
    });
  });
  // Test de reducers logout
  test("Cerrar sesión - logout", () => {
    const initState = []

    const action = {
      type: types.logout,
    };

    const state = loginReducer(initState, action);
    expect(state).toEqual([]);
  });
  // Test de actions, activar action por defecto
  test("State por default", () => {
    const initState = {
      id: "abc",
      name: "Fernando",
    };
    // Este no existe
    const action = {
      type: types.Hola,
    };

    const state = loginReducer(initState, action);
    expect(state).toEqual(initState);
  });
  // Test acciones asíncronas en actionLogin
  test("Validar login sincronico", () => {
    const id = "ABC123";
    const displayname = "Fernando";

    const loginAction = loginSincrono(id, displayname);

    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        id,
        displayname,
      },
    });
  });
});
