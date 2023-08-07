import { useState } from "react";

function useToggle (defState=true) {

  const [visibilityOne , setVisibilityOne] = useState(defState);
  const [visibilityTwo , setVisibilityTwo] = useState(defState);

    function toggleOne () {
      setVisibilityOne(prevVisibilityOne => !prevVisibilityOne)
    }


    function toggleTwo () {
      setVisibilityTwo(prevVisibilityTwo => !prevVisibilityTwo)
    }

    return [visibilityTwo, toggleTwo, visibilityOne, toggleOne]
}

export default useToggle;
