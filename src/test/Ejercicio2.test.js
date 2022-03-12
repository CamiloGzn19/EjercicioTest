import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { registerStudent } from "../actions/actionStudent";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    login : {
        id: "TESTING"
    }
};

let store = mockStore(initState);

describe("Pruebas con las acciones de task", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test('Crear tareas', async() => { 
      await store.dispatch(registerStudent ({
          nom: "123",
          apell: "123",
          tel: "123"
      }));
      const actions = store.getActions();
   })
});
