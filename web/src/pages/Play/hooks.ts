import { useEffect, useReducer } from "react";
import { actions, initialState, reducer } from "reducers/play";

const { setLastWord, setInputWord, verifyJapaneseWord, setError } = actions;

const useHandleAction = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleConnectWordClick = (input: string) => {
    dispatch(setInputWord(input));
  };

  useEffect(() => {
    // TODO: 現状の最後の単語をfetchするfunctionを入れる
  });

  // TODO: kuromoji使ってvalidな単語かどうかの判定するfunction
  // TODO: 入力した単語をsetするfunction

  return {
    ...state,
    handleConnectWordClick: handleConnectWordClick,
  };
};

export default useHandleAction;
