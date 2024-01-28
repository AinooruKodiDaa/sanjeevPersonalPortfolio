import { createContext, useContext, useReducer } from "react";

type StateType = {
  isModal1Open: boolean;
  isModal2Open: boolean;
  someId: string | number;
};

type ContextType = {
  isModelsOpen: StateType;
  setIsModelOpen: React.Dispatch<ActionInterface>;
};

type TabProviderProps = {
  children: React.ReactNode;
};

const initialValue = {
  isModal1Open: false,
  isModal2Open: false,
  someId: "",
};

type ActionTypes = "OPEN_MODAL_1" | "OPEN_MODAL_2" | "CLOSE";

export interface ActionInterface {
  type: ActionTypes;
  payload: string | number;
}

const ModalContext = createContext<ContextType>({
    isModelsOpen: initialValue,
    setIsModelOpen: () => {},
  });


const reducer = (state: StateType, action: ActionInterface): StateType => {
  switch (action.type) {
    case "CLOSE":
      return { ...state, isModal1Open: false, isModal2Open: false };
    case "OPEN_MODAL_1":
      return {
        isModal1Open: true,
        isModal2Open: false,
        someId: action.payload,
      };
    case "OPEN_MODAL_2":
      return {
        isModal1Open: false,
        isModal2Open: true,
        someId: action.payload,
      };
    default:
      return state;
  }
};


export const ModalProvider: React.FC<TabProviderProps> = (props) => {
    const [isModelsOpen, setIsModelOpen] = useReducer(reducer, initialValue);
    return (
      <ModalContext.Provider value={{ isModelsOpen, setIsModelOpen }}>
        {props.children}
      </ModalContext.Provider>
    );
  };
  
  export const useIsModalsOpen = () => useContext(ModalContext);
  
